import { useEffect, useState } from "react";

const apiURL = "https://ironbnb-m3.herokuapp.com/apartments";

const Fetching = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {
                setApartments(data);
            })
            .catch((error) => console.log(error));

    }, []);

    return (
        <>
            {
                apartments.length > 0 ?
                    <>
                        <h1>Fetching data with useEffect</h1>
                        {
                            apartments.map((eachApartment) => {
                                return (
                                    <div key={eachApartment._id}>
                                        <h2>{eachApartment.title}</h2>
                                        <img src={eachApartment.img} alt={eachApartment.title} />
                                        <h3>{eachApartment.pricePerDay}€/day (not including taxes)</h3>
                                    </div>
                                )
                            })
                        }

                    </>
                    :
                    <>
                        <h1>Loading...</h1>
                        <p>Be patient please</p>
                    </>
            }
        </>
    )
}

export default Fetching;