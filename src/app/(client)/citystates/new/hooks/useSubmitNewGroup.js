import { useToast } from "@chakra-ui/react";
import {
    DocumentReference,
    addDoc,
    arrayUnion,
    collection,
    doc,
    updateDoc,
} from "firebase/firestore";
import { db } from "../../../services/firebase";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

/**
 * This hook will return a function that is attached to the submit button in the NewGroup feature.
 * It submits the new group to firestore and checks for errors.
 * @param {function} setActiveStep To set the active page in the form if any information is missing
 * @param {state} newGroup Stores data of the new group. Will be actively updated since it's a state.
 */
function useSubmitNewGroup(setActiveStep, newGroup) {
    // Provide user feedback
    const toast = useToast();
    // Navigate to groups page if successful
    const navigate = useNavigate();
    // Get user from context, null if not logged in
    // Properties are uid, photoURL, email, displayName, emailVerified
    // userData is an object that contains the current user's data from firestore
    // It is filled when the user logs in and stored locally as a state for faster access
    // setUserData is a function that updates the userData state
    const { user, setUserData } = useContext(AuthContext);

    const submitNewGroup = async () => {
        // STEP 1: loop through all properties to see if any are empty
        // if any are empty, inform the user using toast and setActiveStep
        if (newGroup.title && newGroup.description && newGroup.type) {
            let valid = true;
            for (let i = 0; i < newGroup.options.length; i++) {
                if (!(newGroup.options[i].title && newGroup.options[i].description && newGroup.options[i].type)) {
                    toast({
                        status: "error",
                        variant: "left-accent",
                        title: `Option ${i + 1} is incomplete.`,
                        position: "bottom-left",
                        isClosable: true,
                    });
                    valid = false;
                    setActiveStep(2);
                }
            }
            // STEP 2: if all properties are filled, submit to firestore
            if (valid) {
                try {
                    // 2.1: add the new group to the collection "groups"
                    // also get the id of the new group
                    // functions to use: addDoc

                    const groupRef = doc(db, "groups")
                    setDoc(groupRef, {
                        description: newGroup.options.description,
                        members: [],
                        title: newGroup.options.title,
                        posts: [],
                        type: newGroup.options.type,
                        votes: []
                    });

                    // 2.2: add the new group to the user's groups array in firestore
                    // use the id of the new group
                    // functions to use: updateDoc, arrayUnion
                    db.collection("user/groups").updateDoc(arrayUnion(groupRef.uid));

                    // 2.3: add the user to the user's groups array locally in userData
                    // functions to use: setUserData, array.push()
                    user.setUserData(groups.push(groupRef.uid));

                    // 2.4: navigate to the groups page
                    toast({
                        status: "success",
                        variant: "left-accent",
                        title: `Your group has been added.`,
                        position: "bottom-left",
                        isClosable: true,
                    });
                    navigate("/groups");

                } catch (error) {
                    toast({
                        status: "error",
                        variant: "left-accent",
                        title: `An error has occured: ${error.message}`,
                        position: "bottom-left",
                        isClosable: true,
                    });
                }
            }

        };

        return submitNewGroup;
    }
}

export default useSubmitNewGroup;
