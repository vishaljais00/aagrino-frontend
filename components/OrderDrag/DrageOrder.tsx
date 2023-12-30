"use client";
import { OrderList } from "primereact/orderlist";
import { useState } from "react";

export default function BasicDemo() {
  const [products, setProducts] = useState([
    {
      id: "1026",
      code: "zx23zc42c",
      name: "Teal T-Shirt",
      description: "Product Description",
      image: "teal-t-shirt.jpg",
      price: 49,
      category: "Clothing",
      quantity: 3,
      inventoryStatus: "LOWSTOCK",
      rating: 3,
    },
    {
      id: "1027",
      code: "acvx872gc",
      name: "Yellow Earbuds",
      description: "Product Description",
      image: "yellow-earbuds.jpg",
      price: 89,
      category: "Electronics",
      quantity: 35,
      inventoryStatus: "INSTOCK",
      rating: 3,
    },
    {
      id: "1028",
      code: "tx125ck42",
      name: "Yoga Mat",
      description: "Product Description",
      image: "yoga-mat.jpg",
      price: 20,
      category: "Fitness",
      quantity: 15,
      inventoryStatus: "INSTOCK",
      rating: 5,
    },
    {
      id: "1029",
      code: "gwuby345v",
      name: "Yoga Set",
      description: "Product Description",
      image: "yoga-set.jpg",
      price: 20,
      category: "Fitness",
      quantity: 25,
      inventoryStatus: "INSTOCK",
      rating: 8,
    },
  ]);

  const itemTemplate = (item: any) => {
    return (
      <div className="flex flex-wrap p-2 align-items-center gap-3">
        <div className="flex-1 flex flex-column gap-2 xl:mr-8">
          <span className="font-bold">{item.name}</span>
          <div className="flex align-items-center gap-2">
            <i className="pi pi-tag text-sm"></i>
            <span>{item.category}</span>
          </div>
        </div>
        <span className="font-bold text-900">${item.price}</span>
      </div>
    );
  };

  return (
    <div className="card xl:flex xl:justify-content-center">
      <OrderList
        value={products}
        onChange={(e) => {
          setProducts(e.value), console.log("JSS log :", e.value);
        }}
        itemTemplate={itemTemplate}
        header="Home Page"
        dragdrop
      ></OrderList>
    </div>
  );
}
