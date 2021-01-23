from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .apps import SentimentConfig
import pandas as pd

class Sentiment_View(APIView):
    def post(self,request,format=None):
        data = request.data
        
        return Response(data,status=200)