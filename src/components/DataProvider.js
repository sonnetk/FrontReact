import React, {useEffect, useState} from "react";
import '/home/user/my-app/src/styles/style.css'


function DataProvider({url, renderContent}) {
    const [data, setData] = useState([])
    console.log(data);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => {
                setData(json)
            })
    }, [url])

    return <div> {renderContent(data)} </div>;
}
export default DataProvider;