import { TYPES } from "../actions/actions-types";

export const QuizReducer = (state = {}, action: any) : any => {
    switch(action.type) {
        case TYPES.getQuizListItems:
            return {
                ...state,
                quizListItem: action.payload
            }
            break;
        default: return state;
    }
}