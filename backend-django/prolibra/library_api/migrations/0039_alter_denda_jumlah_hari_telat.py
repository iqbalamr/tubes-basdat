# Generated by Django 3.2 on 2021-05-10 00:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0038_auto_20210510_0054'),
    ]

    operations = [
        migrations.AlterField(
            model_name='denda',
            name='jumlah_hari_telat',
            field=models.IntegerField(null=True),
        ),
    ]
