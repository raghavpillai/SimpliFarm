import numpy as np
import sklearn
from sklearn.linear_model import LinearRegression

sklearn.linear_model.LinearRegression()
sklearn.linear_model.LinearRegression(fit_intercept=True, normalize=False, copy_X=True)

def create_linear_regression(x_arr, y_arr):
    x = np.array(x_arr).reshape((-1, 1))
    y = np.array(y_arr)

    model = LinearRegression().fit(x, y) 
    
    # Confidence
    conf = 1 - model.score(x, y)

    # Final prediction
    y_pred = model.predict(x)
    return [y_pred[-1], conf]