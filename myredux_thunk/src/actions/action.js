
// no changes here
// only specify action creator and give an agrument , since you are recieving parameter while fetching data.
export const setProduct = (product) => {
    if (product) {
        return {
            type: "SET_PRODUCT",
            payload:product
        }
       
   }
     
}