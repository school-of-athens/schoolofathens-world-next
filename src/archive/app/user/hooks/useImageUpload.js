import { useState } from "react";
import { storage, auth } from "../../../services/firebase";
import {
  uploadBytes,
  ref,
  getDownloadURL,
} from "firebase/storage";
import { useToast } from "@chakra-ui/react";
import { updateProfile } from "firebase/auth";

const useImageUpload = () => {
  const [imageURL, setImageURL] = useState(auth?.currentUser?.photoURL);
  const toast = useToast();

  const imageUpload = async (img) => {
    try {
      // upload new image
      const imgSnapshot = await uploadBytes(
        ref(
          storage,
          `userFiles/${auth.currentUser.uid}/profilePic.${img.name
            .split(".")
            .pop()}`
        ),
        img
      );
      toast({
        status: "success",
        variant: "left-accent",
        title: `Image uploaded successfully!`,
        position: "bottom-left",
        isClosable: true,
      });
      // get image URL
      const imgURL = await getDownloadURL(imgSnapshot.ref);

      // update state
      setImageURL(imgURL);
      await updateProfile(auth.currentUser, {
        photoURL: imgURL,
      });
    } catch (error) {
      toast({
        status: "success",
        variant: "left-accent",
        title: `Your email has been verified!`,
        position: "bottom-left",
        isClosable: true,
      });
    }
  };

  return [imageURL, imageUpload];
};

export default useImageUpload;
