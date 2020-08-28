import { TYPES } from "../actions/actions-types";
import { IQuizListItem, Action } from "../models";
import { AnyAction } from "redux";

export interface IQuizInitialState {
    quizListItem: IQuizListItem[],
    currentQuizItemIndex: number;
    countCorrectAnswer: number;
}

const quizInitialState: IQuizInitialState = {
    quizListItem: [],
    currentQuizItemIndex: 0,
    countCorrectAnswer: 0
}
export const QuizReducer = (state = quizInitialState, action: AnyAction) : IQuizInitialState => {
    switch(action.type) {
        case TYPES.getQuizListItems:
            return {
                ...state,
                quizListItem: (action as Action<IQuizListItem[]>).payload
            }
            
        case TYPES.gaveCorrectAnswer:
        return {
            ...state,
            countCorrectAnswer: state.countCorrectAnswer + 1
        }

        case TYPES.setNextQuestion:
        return {
            ...state,
            currentQuizItemIndex: state.currentQuizItemIndex + 1
        }

        case TYPES.restart:
        return {
            ...state,
            currentQuizItemIndex: 0,
            countCorrectAnswer: 0
        }
        default: return state;
    }
}