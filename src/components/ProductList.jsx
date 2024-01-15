import React from "react";
import { NavLink } from "react-router-dom";

function ProductList({ products }) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products && (
        <>
          {products["data"].map((item) => {
            return (
              <NavLink to={`/product/${item.id}`} key={item.id}>
                <figure className="px-4 pt-4">
                  <img
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                    src={item.attributes.image}
                    alt={item.attributes.title}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title capitalize tracking-wider">
                    {item.attributes.title}
                  </h2>
                  <span className="text-primary">${item.attributes.price}</span>
                </div>
              </NavLink>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProductList;
