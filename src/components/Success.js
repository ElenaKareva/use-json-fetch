import React from 'react';
import useJsonFetch from "../hooks/JsonFetch";

function Success({url}) {
    const {data, loading, error} = useJsonFetch(url);

    if (loading) return "Loading...";
    if (error) {
        console.log('error', error);
        return null;
    }

    return (
        <>
            {data || "Success"}
        </>
    )
}

export default Success;