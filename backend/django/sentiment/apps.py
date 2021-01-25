from django.apps import AppConfig
from tensorflow.keras import models
from tensorflow.keras.models import model_from_json
from keras_bert import get_custom_objects
import pandas as pd
import pickle
import ktrain

class SentimentConfig(AppConfig):
    name = 'sentiment'
    json_file = open("sentiment/model/model.json",'r')
    features = pickle.load(open('sentiment/model/tf_model.preproc', 'rb'))
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json,custom_objects=get_custom_objects())
    loaded_model.load_weights("sentiment/model/model.h5")
    