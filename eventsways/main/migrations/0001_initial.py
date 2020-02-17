# Generated by Django 3.0.3 on 2020-02-17 19:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField(unique=True)),
            ],
            options={
                'verbose_name': 'Тег',
                'verbose_name_plural': 'Теги',
            },
        ),
        migrations.CreateModel(
            name='Event',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(db_index=True, max_length=50)),
                ('slug', models.SlugField(blank=True, max_length=150, unique=True)),
                ('body', models.TextField(blank=True, db_index=True)),
                ('events_holding_date', models.DateField(blank=True)),
                ('events_holding_time', models.TimeField(blank=True)),
                ('events_image', models.ImageField(upload_to=None)),
                ('tags', models.ManyToManyField(blank=True, related_name='events', to='main.Tag')),
            ],
            options={
                'verbose_name': 'Событие',
                'verbose_name_plural': 'События',
            },
        ),
    ]
