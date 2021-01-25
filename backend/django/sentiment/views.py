from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .apps import SentimentConfig

class Sentiment_View(APIView):
    def post(self,request,format=None):
        data = request.data
        model = SentimentConfig.loaded_model
        features = SentimentConfig.features
        text = data['0']
        y = model.predict(features.preprocess([text]))
        if y[0][0] > y[0][1]:
            res = {"res":"Negative"}
        else:
            res = {"res":"Positive"}
        return Response(res,status=200)