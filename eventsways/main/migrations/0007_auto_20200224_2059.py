# Generated by Django 3.0.3 on 2020-02-24 17:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_event_check'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='check',
            field=models.BooleanField(default=False, verbose_name='Проверк'),
        ),
    ]
