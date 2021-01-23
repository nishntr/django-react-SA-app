from django.urls import path
from .views import Sentiment_View
urlpatterns = [
    path('sentiment/',Sentiment_View.as_view(),name='sentiment')
]