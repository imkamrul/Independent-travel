import { useEffect, useState } from "react";

const usePackages = () => {
    const [location, setLocation] = useState();
    useEffect(() => {
        fetch('./tourSpot.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setLocation(data)

            })
    }, [])
    return { location }
}
export default usePackages;