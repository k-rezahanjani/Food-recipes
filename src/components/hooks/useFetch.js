import { useState, useEffect } from "react";

export const useFetch = (url, method = "GET") => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const postJsonData = async (dataToSend) => {
        setIsLoading(true);

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSend),
            });

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const json = await response.json();

            setIsLoading(false);
            setData(json);
            setError(null);
        } catch (err) {
            setIsLoading(false);
            setError("Data is not available");
        }
    };

    useEffect(() => {
        const fetchData = async () => {

            setIsLoading(true)

            try {
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                const json = await response.json()
                
                setIsLoading(false)

                setData(json)
                setError(null)
            } catch (err) {
                setIsLoading(false)
                setError("Data is not available")
            }
        }

        fetchData()

    }, [url, method])

    return {data, isLoading, error, postJsonData}
}