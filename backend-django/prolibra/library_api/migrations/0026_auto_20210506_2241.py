# Generated by Django 3.2 on 2021-05-06 22:41

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('library_api', '0025_alter_meminjam_tanggal_pengembalian'),
    ]

    operations = [
        migrations.AlterField(
            model_name='meminjam',
            name='tanggal_peminjaman',
            field=models.DateField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='meminjam',
            name='tanggal_pengembalian',
            field=models.DateField(null=True),
        ),
        migrations.AlterField(
            model_name='mengurusi',
            name='id_petugas',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
        ),
        migrations.AlterField(
            model_name='pendataan',
            name='id_petugas',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='auth.user'),
        ),
    ]
