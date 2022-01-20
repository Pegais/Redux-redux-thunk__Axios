// intital state 
const initialProductState = [];

const prodcutReducer = (state = initialProductState, actions) => {
    console.log(state);
    // checking state here -- which is the array coming from action creator,
    // intially it was empty but will fill up according to data coming.


    console.log(actions.payload);
    // checking payload here .
    // this is the actual data coming as we have defined payload as product in action creator.

    switch (actions.type) {
        
        case "SET_PRODUCT": return [...state, actions.payload]  // returning through spread operator the prev value of state i.e array 
           /// and adding the new payload to it.
        default: return state;
    }
}

export default prodcutReducer;