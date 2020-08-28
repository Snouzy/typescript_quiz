import { combineReducers } from 'redux';
import { QuizReducer } from './quiz';

const rootReducer = combineReducers({
    quiz: QuizReducer
});

export default rootReducer;

