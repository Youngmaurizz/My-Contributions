# Generated by Django 4.0.6 on 2022-08-01 10:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('conficon_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='result',
            name='sizes',
            field=models.CharField(default='16', max_length=200),
            preserve_default=False,
        ),
    ]
