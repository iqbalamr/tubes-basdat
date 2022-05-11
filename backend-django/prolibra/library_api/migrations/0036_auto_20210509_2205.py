# Generated by Django 3.2 on 2021-05-09 22:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('library_api', '0035_auto_20210509_2154'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='meminjam',
            name='id_peminjam',
        ),
        migrations.AddField(
            model_name='meminjam',
            name='id_peminjam',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='library_api.peminjam'),
        ),
    ]
