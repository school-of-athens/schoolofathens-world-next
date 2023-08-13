import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "@/services/firebase";


const useUserData = (userId) => {

    const [userData, setUserData] = useState(null);

    const getUserData = async () => {
        try {
            const userDetailsSnapshot = await getDoc(doc(db, "userDetails", userId));
            const userDetailsFiltered = userDetailsSnapshot.data();
            const userInfoSnapshot = await getDoc(doc(db, "userInfo", userId));
            const userInfoFiltered = userInfoSnapshot.data();
            setUserData({...userDetailsFiltered, ...userInfoFiltered});
        }
        catch(error)  {
            console.error(error);
        }
    };

    useEffect(() => {
        getUserData();
    }, []);

    return userData;
};

export default useUserData;