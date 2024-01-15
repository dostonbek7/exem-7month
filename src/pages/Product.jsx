import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Product() {
  const { id } = useParams();
  const url = `https://strapi-store-server.onrender.com/api/products/${id}`;
  const { data: product, isPending } = useFetch(url);
  console.log(product);
  return (
    <section className="align-element py-20">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </div>
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {product && (
          <>
            <img
              className="w-96 h-96 object-cover rounded-lg lg:w-full"
              src={product["data"].attributes.image}
              alt=""
            />
            <div>
              <h1 className="capitalize text-3xl font-bold">
                {product["data"].attributes.title}
              </h1>
              <h4 className="text-xl text-neutral-content font-bold mt-2">
                {product["data"].attributes.company}
              </h4>
              <p className="mt-3 text-xl">
                ${product["data"].attributes.price}
              </p>
              <p className="mt-6 leading-8">
                {product["data"].attributes.description}
              </p>
              <div className="mt-6">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Colors
                </h4>
                <div>
                  {product["data"].attributes.colors.map((color) => {
                    return (
                      <button
                        key={color}
                        className="badge w-6 h-6 mr-2 border-2 border-primary"
                      ></button>
                    );
                  })}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label" htmlFor="amount">
                    <h4 className="text-md font-medium -tracking-wider capitalize">
                      Amount
                    </h4>
                  </label>
                  <select
                    className="select select-primary select-bordered select-md"
                    id="amount"
                  ></select>
                </div>
                <div className="mt-10">
                  <button className="btn btn-primary btn-md">Add to bag</button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Product;
