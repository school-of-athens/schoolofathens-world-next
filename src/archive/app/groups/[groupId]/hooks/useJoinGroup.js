

function useJoinGroups(groupId) {

    // use toast to give user feedback

    const joinGroup = async () => {

        // STEP 1: add the user to the group's members array in firestore
        // collection: groups, document: groupId, field: members
        // functions to use: updateDoc, arrayUnion

        // STEP 2: add the group to the user's groups array in firestore
        // collection: userDetails, document: user.uid, field: groups
        // functions to use: updateDoc, arrayUnion

        // STEP 3: add the group to the user's groups array locally in userData
        // functions to use: setUserData, array.push()
    };

    return joinGroup;
}

export default useJoinGroups;