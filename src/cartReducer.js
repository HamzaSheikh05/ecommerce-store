export default function cartReducer(cart, action){
    switch (action.type){
        case "empty":
            return [];
        default:
            throw new Error("Unhandled action " + action.type);
    }
}