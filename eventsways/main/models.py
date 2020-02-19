from django.db import models
from django.shortcuts import reverse
from django.utils.text import slugify
from time import time

def gen_slug(s):
    new_slug = slugify(s, allow_unicode=True)
    return new_slug + '-' + str(int(time()))




class Event(models.Model):
    title = models.CharField(max_length = 50, db_index = True)

    slug = models.SlugField(max_length = 150, blank = True, unique = True)

    body = models.TextField(blank=True, db_index = True)

    events_holding_date = models.DateField(blank=True)

    events_holding_time = models.TimeField(blank=True)

    events_image = models.ImageField(upload_to="img/", height_field=None, width_field=None, max_length=None)

    category = models.ForeignKey("Category", blank = True, related_name='events', on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.title)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = gen_slug(self.title)
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse("event_detail_url", kwargs={"slug": self.slug})

    def get_update_url(self):
        return reverse('event_update_url', kwargs={'slug': self.slug })

    def get_delete_url(self):
        return reverse('event_delete_url', kwargs={'slug': self.slug })

    class Meta:
        verbose_name = 'Событие'
        verbose_name_plural = 'События'

        ordering = ['events_holding_date']



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
        verbose_name_plural = 'Категории'

        ordering = ['title']