import {
    DocumentReference,
    addDoc,
    getDoc,
    collection,
    doc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";
// precondition: user is logged in
function useMyGroups() {
    const { user, setUserData } = useContext(AuthContext);
    // create a state to store an array of groups that the current user is in

    // use useEffect to get the data at first render
    // collection: groups
    // function to use: getDocs, where, array-contains
    const userGroupsRef = getDoc(db, 'user/groups');
    // IMPORTANT: please reference the firestore documentation
    // https://firebase.google.com/docs/firestore/query-data/queries

    // return the data
}

export default useMyGroups;