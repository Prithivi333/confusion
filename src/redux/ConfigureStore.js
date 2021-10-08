import {combineReducers, createStore,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders,
            ...createForms({
                feedback:InitialFeedback
            })
        }),
        applyMiddleware(ReduxThunk,ReduxLogger)
    );

    return store;
}