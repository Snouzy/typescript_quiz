import axios from "axios"
import { IQuizList } from "../models";
import { TYPES } from "./actions-types";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

export enum Difficulty {
    easy,
    medium,
    hard
}
export const getQuizListItem = (questionAmount: number, difficulty: Difficulty) => {
    return async(dispatch: ThunkDispatch<{},{},AnyAction>) => {
        const r = await axios.get<IQuizList>(`https://opentdb.com/api.php?amount=${questionAmount}&difficulty=${difficulty}`);
        dispatch({type: TYPES.getQuizListItems, payload: r.data.results});
    }
}

export const giveAnswer = (isCorrectAnswer: boolean, isLastQuestion: boolean) => {
    return async(dispatch: ThunkDispatch<{},{},AnyAction>) => {
        if(isCorrectAnswer) {
            dispatch({type: TYPES.incrementScore})
        }
        if(!isLastQuestion) {
            dispatch({type: TYPES.setNextQuestion})
        }
    }
}

export const restart = () => {
    return async(dispatch: ThunkDispatch<{},{},AnyAction>) => {
        dispatch({type: TYPES.restart});
        dispatch(getQuizListItem(10, Difficulty.easy))
    }
}