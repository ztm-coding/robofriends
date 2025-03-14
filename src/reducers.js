import { CHANGE_SEARCH_FIELD } from "./constant";

const initialState = {
    searchField: "",
};

export const searchRobots = (state = initialState, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
};

const INITIAL_STATE = {
    userID: "",
    name: "",
    courses: [],
};
