import "../styles.css";
import ProductList from "./ProductList";
import { useState } from "react";

import ChoosenList from "../Datas/ChoosenList";

// TODO: Populate data dynamically
// Add onClick on every button
const Product = () => {
  // const [total, settotal] = useState(1);
  const [dataList, setDataList] = useState(ChoosenList);
  // useEffect(() => {
  //   const data = ChoosenList;
  //   data.map((e) => {
  //     e.total = 0;
  //   });
  //   console.log(data);
  // });
  const minus = (i) => {
    setDataList(
      dataList.map((res) => {
        if (res.id === i.id)
          return {
            ...res,
            total: res.total - 1
          };
        return res;
      })
    );
    // setDataList(choose);
    // dataList((data) => (data.total = data.total - 1));
    // settotal(total - 1);
  };
  const plus = (i) => {
    setDataList(
      dataList.map((res) => {
        if (res.id === i.id)
          return {
            ...res,
            total: res.total + 1
          };
        return res;
      })
    );
    console.log("data");
    // dataList((data) => (data.total = data.total - 1));
    // settotal(total - 1);
  };
  const del = (i) => {
    console.log("index", i);
    // setDataList((res) => {
    //   return res.filter((del) => del[i]);
    // });
    setDataList((initial) => {
      return initial.filter((res) => res !== i);
      // return console.log("old", oldValues);
    });
    console.log("delet", dataList);
    // dataList((data) => (data.total = data.total - 1));
    // settotal(total - 1);
  };
  const hi = 12;
  return (
    <div>
      {dataList.map((s, index) => (
        <div className="product">
          <img src={s.image} className="prod-img" alt="bimoli" />
          {/* <div>{s.name}</div> */}
          <div className="prod-info text-start">
            {/* The name of the product of the product */}
            <h5 className="prod-title">
              <strong>{s.name}</strong>
            </h5>
            {/* Individual Prices of the product */}
            <div className="prod-price">{s.price}</div>
          </div>
          <div className="prod-stock">
            {/* This will increase the stock */}
            <div className="d-flex align-items-center justify-content-center">
              <button
                className="btn btn-primary btn-stock"
                onClick={() => minus(s)}
              >
                -
              </button>
              <span className="mx-3">
                <strong>{s.total}</strong>
              </span>
              <button
                className="btn btn-primary btn-stock"
                onClick={() => {
                  plus(s);
                }}
              >
                +
              </button>
            </div>
            {/* This is total prices (stock x individual prices) */}
            <span className="d-flex w-100 justify-content-center mt-3 mb-0">
              <strong>{s.price * s.total}</strong>
            </span>
          </div>
          <div className="prod-del ms-4">
            {/* This will remove an item from the list */}
            <button
              className="btn btn-del"
              onClick={() => {
                del(s);
              }}
            >
              <h3 className="mb-0 text-danger">
                <strong>X</strong>
              </h3>
            </button>
          </div>
        </div>
      ))}
      {/* <ProductList text={hi} /> */}
    </div>
  );
};

export default Product;
