from django.db import models


class Organization(models.Model):
    name = models.TextField()
    city = models.TextField()
    state = models.TextField()
    zip = models.TextField()

    def __str__(self):
        return f'{self.name} - {self.city}, {self.state} {self.zip}'

    class Meta:
        ordering = ['name']


class Division(models.Model):
    name = models.TextField()
    organization = models.ForeignKey(Organization, related_name='divisions', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        ordering = ['name']


class Employee(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    division = models.ForeignKey(Division, related_name='employees', on_delete=models.CASCADE)
    email = models.TextField()

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    class Meta:
        ordering = ['last_name', 'first_name']


class Position(models.Model):
    name = models.TextField()
    employee = models.ForeignKey(Employee, related_name='positions', on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'
