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
getQuizListItem(1, Difficulty.easy);