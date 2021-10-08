import {combineReducers, createStore,applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { Promotions } from './promotions';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

export const ConfigureStore=()=>{
    const store=createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        }),
        applyMiddleware(ReduxThunk,ReduxLogger)
    );

    return store;
}