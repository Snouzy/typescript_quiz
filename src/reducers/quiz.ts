import { TYPES } from "../actions/actions-types";
import { IQuizListItem, Action } from "../models";
import { AnyAction } from "redux";

export interface IQuizInitialState {
    quizListItem: IQuizListItem[]
}

const quizInitialState: IQuizInitialState = {
    quizListItem: []
}
export const QuizReducer = (state = quizInitialState, action: AnyAction) : IQuizInitialState => {
    switch(action.type) {
        case TYPES.getQuizListItems:
            return {
                ...state,
                quizListItem: (action as Action<IQuizListItem[]>).payload
            }
        default: return state;
    }
}