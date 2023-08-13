
import { doc } from "firebase/firestore";
import { db } from "../../../services/firebase";
function useGroups() {

    // create a state to store the data
    // the state should be an array
    const groupsRef = doc(db, 'groups');

    // use useEffect to get the data at first render
    // collection: groups
    // function to use: getDocs

    // return the data

}

export default useGroups;