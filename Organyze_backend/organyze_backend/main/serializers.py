from django.contrib.auth.models import User, Group
from rest_framework import serializers

from organyze_backend.main.models import Employee, Position, Division, Organization


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']


class OrganizationSerializer(serializers.HyperlinkedModelSerializer):
    divisions = serializers.StringRelatedField(many=True)

    class Meta:
        model = Organization
        fields = ['id', 'name', 'city', 'state', 'zip', 'divisions']


class DivisionSerializer(serializers.HyperlinkedModelSerializer):
    employees = serializers.StringRelatedField(many=True)

    class Meta:
        model = Division
        fields = ['id', 'name', 'organization', 'employees']


class EmployeeSerializer(serializers.HyperlinkedModelSerializer):
    positions = serializers.StringRelatedField(many=True)

    class Meta:
        model = Employee
        fields = ['id', 'first_name', 'last_name', 'email', 'positions']


class PositionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Position
        fields = ['id', 'name']
