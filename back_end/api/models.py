from django.db import models

class Terminal(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name

class Driver(models.Model):
    name = models.CharField(max_length=100)
    license = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Schedule(models.Model):
    route = models.CharField(max_length=255)
    time = models.TimeField()

    def __str__(self):
        return self.route