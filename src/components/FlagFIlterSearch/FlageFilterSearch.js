import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
function FlagFilterSearch() {
    const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["capital", "name", "numericCode"]);
    const [filterParam, setFilterParam] = useState(["All"]);

    useEffect(() => {
        fetch(
            "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json",
        )
            .then((res) => res.json())
            .then(
                (result) => {
                    // setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    // setIsLoaded(true);
                    setError(error);
                },
            );
    }, []);

    const data = Object.values(items);
    console.log("data: ", data);
    function search(items) {
        return items.filter((item) => {
            if (item.region == filterParam) {
                return searchParam.some((newItem) => {
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            } else if (filterParam == "All") {
                return searchParam.some((newItem) => {
                    console.log("this item: ", item[newItem]);
                    return (
                        item[newItem]
                            .toString()
                            .toLowerCase()
                            .indexOf(q.toLowerCase()) > -1
                    );
                });
            }
        });
    }

    if (error) {
        return (
            <p>
                {error.message}, if you get this error, the free API I used
                might have stopped working, but I created a simple example that
                demonstrate how this works,{" "}
                <a href="https://codepen.io/Spruce_khalifa/pen/mdXEVKq">
                    {" "}
                    check it out{" "}
                </a>{" "}
            </p>
        );
    }
    return (
        <div className="wrapper">
            <div className="search-wrapper">
                <label htmlFor="search-form">
                    <input
                        type="search"
                        name="search-form"
                        id="search-form"
                        className="search-input"
                        placeholder="Search for capital, name, numericCode..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                    <span className="sr-only">Search countries here</span>
                </label>

                <div className="select">
                    <select
                        onChange={(e) => {
                            setFilterParam(e.target.value);
                        }}
                        className="custom-select"
                        aria-label="Filter Countries By Region"
                    >
                        <option value="All">Filter By Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                    <span className="focus"></span>
                </div>
            </div>
            <ul className="card-grid">
                {search(data).map((item, index) => (
                    <li key={index}>
                        <article className="card" key={item.alpha3Code}>
                            <div className="card-image">
                                <img src={item.flag.large} alt={item.name} />
                            </div>
                            <div className="card-content">
                                <h2 className="card-name">{item.name}</h2>
                                <ol className="card-list">
                                    <li>
                                        population:{" "}
                                        <span>{item.population}</span>
                                    </li>
                                    <li>
                                        Region: <span>{item.region}</span>
                                    </li>
                                    <li>
                                        Capital: <span>{item.capital}</span>
                                    </li>
                                </ol>
                            </div>
                        </article>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FlagFilterSearch;
