# Generated by Django 3.0.3 on 2020-02-17 19:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_auto_20200217_2222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='events_image',
            field=models.ImageField(upload_to='img/'),
        ),
    ]
