from create_sentiment_featuresets import *
from training_testing import *
import tensorflow as tf
import pickle
import numpy as np
import nltk
from Recommender import *
import os

saver = tf.train.Saver()
with tf.Session() as session:
    
    saver.restore(session, "C:\\Users\\Mahmoud Elbasuony\\Desktop\\TextClassifier\\trained\\trained_variables.ckpt")
    
    os.system('cls')
    print("\nStarted Recommendation System Demo :\n**********************************\n")

    prediction = neural_network_model(x)
    input_data = "";
    while str != "end":

        
        
        print("\nItems Available : ",[(item.ID,item.Name ,"likes : "+str(len(item.PositiveComments))+" , dislikes : "+str(len(item.NegativeComments))) for item in Items],"\n***************")
        
        print("\nChoose One Item ID To Comment On  , IDs : ",[item.ID for item in Items])
        
        choosed_id = input("\nID : ")
        
        choosed_item = GetByID(choosed_id)
        
        input_data = input("\nEnter Comment :\n***************\n")
        
        print("\nProcessing Comment ......\n")
        
        features = get_features_for_input(input_data.lower())
        
        result = (session.run(tf.argmax(prediction.eval(feed_dict={x:features}),1)))
        
        if result[0] == 0:
                    choosed_item.AddComment(input_data,"-")
                    print(input_data," :  IS NEGATIVE")
        elif result[0] == 1:
                    choosed_item.AddComment(input_data,"+")
                    print(input_data," :  IS POSITIVE")
                    

        print("\nOur Top 2 Items are : ",Recommend(Items,2),"\n++++++++++++++++++++++++++\n")

    # Close tensorflow session
    session.close()
    
     
        





















