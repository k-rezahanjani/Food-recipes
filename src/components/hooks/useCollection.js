import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase/config";

export const useCollection = (c) => {
    const [collectionData, setCollectionData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(() => {
        setIsLoading(true)

        let ref = collection(db, c)

        const unSub = onSnapshot(ref, (snapshot) => {
            if(snapshot.empty) {
                setError("NO recipes...")
                setIsLoading(false)
            } else {
                let result = []
                snapshot.docs.forEach(doc => {
                    result.push({id: doc.id, ...doc.data()})
                })
                setCollectionData(result)
                setIsLoading(false)
            }
        })
        return () => unSub()
    }, [c])

    return {collectionData, isLoading, error}
}