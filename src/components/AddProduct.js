import React, { useState } from "react";

const AddProduct = () => {
  const [pname, setpname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const addproduct= async()=>{
    if(pname && price && category && company){
        let result = await fetch("http://localhost:5000/add-product",{
            method: "post",
        body: JSON.stringify({ pname,price,category,company}),
        headers: {
          "Content-Type": "application/json",
        },
        });
        const data = await result.json();
        if (data.success) {
        console.log('Product added successfully!');
      } else {
        console.log('Product insertion failed. Please try again.');
      }
    }else{
        console.warn("Please fill the data");
    }
  }

  return (
    <div className="product">
      <input
        type="text"
        value={pname}
        onChange={(e) => setpname(e.target.value)}
        placeholder="Enter Product Name"
        className="inputBox"
      ></input>
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter the price"
        className="inputBox"
      ></input>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter the category"
        className="inputBox"
      ></input>
      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Enter the name of company"
        className="inputBox"
      ></input>
      <button className="btn" onClick={addproduct}>Add Product</button>
    </div>
  );
};
export default AddProduct;
