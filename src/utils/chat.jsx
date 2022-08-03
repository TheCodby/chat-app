import "../firebase/config";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
export const getChatBetweenTwo = async (uid, uid2) => {
  const db = getFirestore();
  const q = query(
    collection(db, "chats"),
    where("users", "array-contains", uid)
  );
  const querySnapshot = await getDocs(q);
  if (querySnapshot.docs.length > 0) {
    return querySnapshot.docs[0];
  } else {
    // If chat doesn't exist, create it.
    await addDoc(collection(db, "chats"), {
      messages: [],
      users: [uid, uid2],
    });
    return getChatBetweenTwo(uid, uid2);
  }
};
