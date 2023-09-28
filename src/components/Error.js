import React from 'react';
import useJsonFetch from "../hooks/JsonFetch";

function Error({url}) {
    const {data, loading, error} = useJsonFetch(url);

    if (loading) return "Loading...";
    if (error) {
        console.log(error.code)
        return (<>{error.status.code}</>);
    }

    return (
        <>
            {JSON.stringify(data)}
        </>
    )
}

export default Error;