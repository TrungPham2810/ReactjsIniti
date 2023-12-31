import {SET_JOB, ADD_JOB, DELETE_JOB} from  "./constants";
export const initTodo = {
    job: '',
    jobs: [],
};


const reducerTodo = (state, action) => {
    // console.log(state);

    let newState;

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload,
            };
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload],
            };
            break;
        case DELETE_JOB:
            const newJobs = state.jobs;
            newJobs.splice(action.payload, 1);
            newState = {
                ...state,
                jobs: newJobs,
            };
            break;
        default: {
            throw new Error('Invalid action Todo');
        }
    }
    console.log(newState);
    return newState;
};


export default reducerTodo;