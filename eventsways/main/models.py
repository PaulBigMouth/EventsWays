from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify
from time import time

from random import choice
from os.path import join as path_join
from os import listdir
from os.path import isfile

def gen_slug(s):
    new_slug = slugify(s, allow_unicode=True)
    return new_slug + '-' + str(int(time()))

def random_img():
    dir_path = 'media/img/'
    files = [content for content in listdir(dir_path) if isfile(path_join(dir_path, content))]
    return path_join(dir_path, choice(files))



class Event(models.Model):
    title = models.CharField(max_length = 50, db_index = True, verbose_name=('Название'))

    slug = models.SlugField(max_length = 150, blank = True, unique = True, verbose_name=('Ссылка'))

    body = models.CharField(blank=True, db_index = True, verbose_name='Описание', max_length=500)

    events_holding_date = models.DateField(blank=True, verbose_name=('Дата проведения'))

    events_holding_time = models.TimeField(blank=True, verbose_name=('Время проведения'))

    events_image = models.ImageField(upload_to="img/", height_field=None, width_field=None, max_length=None, default=random_img, verbose_name=('Изображение'))

    category = models.ForeignKey("Category", blank = True, related_name='events', on_delete=models.CASCADE, verbose_name=('Категория'))

    lng = models.CharField(max_length=50, blank=True)

    lat = models.CharField(max_length=50, blank=True)

    place = models.CharField(max_length=50, blank=True, verbose_name=('Место проведения'))

    street_and_premis = models.CharField(max_length=50, blank=True, verbose_name=('Улица, дом/квартира'))
    
    city = models.CharField(max_length=50, blank=True, verbose_name=('Город'))
    
    country = models.CharField(max_length=50, blank=True, verbose_name=('Страна'))

    checked = models.BooleanField("Проверено", default=False)

    email = models.EmailField(max_length=150, verbose_name=('Почта'))

    def __str__(self):
        return '{}'.format(self.title)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = gen_slug(self.title)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("event_detail_url", kwargs={"slug": self.slug})

    def getImage(self):
        if not self.image:
            # depending on your template
            return default_path or default_image_object

    class Meta:
        verbose_name = 'Событие'
        verbose_name_plural = 'События'

        ordering = ['-events_holding_date']


class Category(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length = 50, unique = True)


    def __str__(self):
        return f'{self.title}'
    
    def get_absolute_url(self):
        return reverse("category_detail_url", kwargs={"slug": self.slug})
    
    def get_update_url(self):
        return reverse('category_update_url', kwargs={'slug': self.slug })

    def get_delete_url(self):
        return reverse('category_delete_url', kwargs={'slug': self.slug })

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категори'

        ordering = ['title']