from django.urls import path, include
from rest_framework.routers import DefaultRouter
from blog.api.viewsets import PostViewSet, CommentViewSet

# Create a router and register our viewsets with it.
router = DefaultRouter()
router.register(r'posts', PostViewSet)
router.register(r'comments', CommentViewSet)