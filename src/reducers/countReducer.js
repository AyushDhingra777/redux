const initialState = {
    count: 0
}
export default function countReducer(count = initialState.count, action) {

    switch (action.type) {
        case "INCREMENT":
            return count + 1
        case "DECREMENT":
            return count - 1
        case "RESET":
            count = undefined

    }
}