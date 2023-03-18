import { useEffect, useState } from "react";
import ProductList from "./Components/ProductList";
import ItemList from "./Datas/ItemList";
import ChoosenList from "./Datas/ChoosenList";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    // Empty Search Result if input is empty
    if (search && search !== "") {
      // Search through Item List
      // TODO: MODIFY FILTER SO THAT IT'S NOT SHOWING ADDED ITEM
      let res = ItemList.filter((i) =>
        i.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchRes(res);
    } else {
      setSearchRes([]);
    }
  }, [search]);

  const onAddItem = (item) => {
    // TODO: ADD Item to Product List
    console.log("Adding item", item.name);
    let data = item;
    data.total = 0;
    // data.map((e) => {
    //   e.total = 0;
    // });
    ChoosenList.push(data);

    console.log(ChoosenList);
  };

  return (
    <div className="App pt-4 d-flex flex-column">
      <h1>
        <strong>Cashier App</strong>
      </h1>
      <h5>
        <strong>Search an Item:</strong>
      </h5>
      <div className="form-group px-5">
        <input
          type="text"
          value={search}
          className="form-control"
          onChange={(e) => setSearch(e.target.value)}
        />
        {searchRes.length > 0 && (
          <div className="search-results mt-4">
            <h5 className="mb-4">
              <strong>Search Result:</strong>
            </h5>
            {searchRes.map((i) => (
              <div className="search-result">
                <div className="flex-grow-1 text-start">{i.name}</div>
                <button
                  className="btn btn-primary"
                  onClick={() => onAddItem(i)}
                >
                  Add Product
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* 
        TODO: Pass data, and necessary functions to 
        add and remove currently selected items 
      */}
      <ProductList />
    </div>
  );
}
