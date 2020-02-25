# Generated by Django 3.0.3 on 2020-02-25 12:28

from django.db import migrations, models
import django.db.models.deletion
import main.models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='category',
            name='slug',
            field=models.SlugField(unique=True, verbose_name='Ссылка на категорию'),
        ),
        migrations.AlterField(
            model_name='category',
            name='title',
            field=models.CharField(max_length=50, verbose_name='Название категории'),
        ),
        migrations.AlterField(
            model_name='event',
            name='body',
            field=models.CharField(blank=True, db_index=True, max_length=500, verbose_name='Описание'),
        ),
        migrations.AlterField(
            model_name='event',
            name='category',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='events', to='main.Category', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='event',
            name='city',
            field=models.CharField(blank=True, max_length=50, verbose_name='Город'),
        ),
        migrations.AlterField(
            model_name='event',
            name='country',
            field=models.CharField(blank=True, max_length=50, verbose_name='Страна'),
        ),
        migrations.AlterField(
            model_name='event',
            name='email',
            field=models.EmailField(max_length=150, verbose_name='Email'),
        ),
        migrations.AlterField(
            model_name='event',
            name='events_holding_date',
            field=models.DateField(blank=True, verbose_name='Дата проведения'),
        ),
        migrations.AlterField(
            model_name='event',
            name='events_holding_time',
            field=models.TimeField(blank=True, verbose_name='Время проведения'),
        ),
        migrations.AlterField(
            model_name='event',
            name='events_image',
            field=models.ImageField(default=main.models.random_img, upload_to='img/', verbose_name='Изображение'),
        ),
        migrations.AlterField(
            model_name='event',
            name='place',
            field=models.CharField(blank=True, max_length=50, verbose_name='Место проведения'),
        ),
        migrations.AlterField(
            model_name='event',
            name='slug',
            field=models.SlugField(blank=True, max_length=150, unique=True, verbose_name='Ссылка(не обязательно)'),
        ),
        migrations.AlterField(
            model_name='event',
            name='street_and_premis',
            field=models.CharField(blank=True, max_length=50, verbose_name='Улица, дом/квартира'),
        ),
        migrations.AlterField(
            model_name='event',
            name='title',
            field=models.CharField(db_index=True, max_length=50, verbose_name='Название'),
        ),
    ]
