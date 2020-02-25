# Generated by Django 3.0.3 on 2020-02-25 08:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0011_merge_20200224_2130'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='address',
        ),
        migrations.AddField(
            model_name='event',
            name='city',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='country',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='place',
            field=models.CharField(db_index=True, default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='street_and_premis',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Address',
        ),
    ]
