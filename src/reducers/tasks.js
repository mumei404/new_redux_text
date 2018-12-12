const initialState = {
    task: '',
    tasks: []
};

export default function tasksReducer(state = initialState, action) {
    switch (action.type) {
        case 'INPUT_TASK':
            console.log(action.payload.task);
            return {
                ...state,
                task: action.payload.task
            };
        case 'ADD_TASK':
            console.log(action.payload.task);
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}