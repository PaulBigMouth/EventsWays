# Generated by Django 3.0.3 on 2020-02-24 18:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_auto_20200224_2059'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='check',
            new_name='checked',
        ),
    ]