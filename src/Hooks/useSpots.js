import { useEffect, useState } from "react";

const useSpots = () => {

    // data load and set sada 
    const [places, setPlaces] = useState({});
    const [kamrul, setKamrul] = useState({});
    const obj = {}
    let selected = {}

    useEffect(() => {
        fetch('./tourSpot.json')
            .then(res => res.json())
            .then(data => {

                setPlaces(data);
            })
    }, [])



    const handleCardCLick = (id) => {
        selected = places.find(place => place.id === id)
        console.log(selected)
        setKamrul(selected)
        console.log(kamrul)
        obj.Name = selected.placeName
        obj.details = selected.details
        obj.img = selected.img
        console.log(obj)



    }




    return { places, handleCardCLick, obj }
}
export default useSpots;