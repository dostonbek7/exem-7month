import React, { useRef, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import ProductGrid from "../components/ProductGrid";
import { NavLink } from "react-router-dom";

function Products() {
  const [range, setRange] = useState("");

  const { data: products, isPending } = useFetch(
    `https://strapi-store-server.onrender.com/api/products`
  );

  return (
    <section className="align-element py-20">
      <form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
        <div className="form-control">
          <label className="label" htmlFor="search">
            <span className="label-text capitalize">search product</span>
          </label>
          <input
            className="input input-bordered input-sm"
            type="search"
            id="search"
            name="search"
          />
        </div>
        <div className="form-control">
          <label className="label" htmlFor="category">
            <span className="label-text capitalize">Category</span>
          </label>
          <select
            className="select select-bordered select-sm"
            id="category"
            name="category"
          >
            <option value="all">all</option>
            <option value="tables">Tables</option>
            <option value="chairs">Chairs</option>
            <option value="kids">Kids</option>
            <option value="sofas">Sofas</option>
            <option value="beds">Beds</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label" htmlFor="category">
            <span className="label-text capitalize">Select company</span>
          </label>
          <select
            className="select select-bordered select-sm"
            id="category"
            name="category"
          >
            <option value="all">all</option>
            <option value="modenza">Modenza</option>
            <option value="luxora">Luxora</option>
            <option value="artifex">Artifex</option>
            <option value="comfora">Comfora</option>
            <option value="homestead">Homestead</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="order" className="label">
            <span className="label-text capitalize">Sort by</span>
          </label>
          <select
            className="select select-bordered select-sm"
            name="order"
            id="order"
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="high">high</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="price" className="label cursor-pointer">
            <span>select price</span>
            <span>${range}</span>
          </label>
          <input
            type="range"
            name="price"
            id="price"
            min={0}
            max={100000}
            className="range range-primary range-sm"
            step={1000}
            value={range}
            onChange={(e) => setRange(e.target.value)}
          />
          <div className="w-full flex justify-between text-xs px-2 mt-2">
            <span className="font-bold text-md">0</span>
            <span className="font-bold text-md">Max: 1,000.00</span>
          </div>
        </div>
        <div className="form-control items-center">
          <label htmlFor="shipping" className="label cursor-pointer">
            <span className="label-text capitalize">Free shipping</span>
          </label>
          <input
            className="checkbox checkbox-primary checkbox-sm"
            type="checkbox"
            name="shipping"
            id="shipping"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Search
        </button>
        <NavLink className="btn btn-accent btn-sm" to="/products ">
          Reset
        </NavLink>
      </form>

      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">22 products</h4>
        <div className="flex gap-x-2">
          <button className="text-xl btn btn-circle btn-sm btn-primary text-primary-content">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 240H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM444 480H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z" />
            </svg>
          </button>
          <button className="text-xl btn btn-circle btn-sm btn-ghost text-based-content">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1em"
              width="1em"
            >
              <path d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z" />
            </svg>
          </button>
        </div>
      </div>
      <ProductList products={products} />
      {/* <ProductGrid products={products} /> */}
    </section>
  );
}

export default Products;
