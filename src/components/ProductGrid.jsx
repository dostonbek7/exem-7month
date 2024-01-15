import React from "react";
import { NavLink } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div className="mt-12 grid gap-y-8">
      {products && (
        <>
          {products["data"].map((item) => {
            return (
              <NavLink
                key={item.id}
                to={`/product/${item.id}`}
                className="p-8 rounded-lg flex flex-col gap-3 sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group"
              >
                <img
                  className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300"
                  src={item.attributes.image}
                  alt={item.attributes.title}
                />
                <div className="ml-0 sm:ml-16">
                  <h3 className="capitalize font-medium text-lg">
                    {item.attributes.title}
                  </h3>
                  <h4 className="capitalize text-md text-neutral-content">
                    {item.attributes.company}
                  </h4>
                </div>
                <p className="font-medium ml-0 sm:ml-auto text-lg">
                  ${item.attributes.price}
                </p>
              </NavLink>
            );
          })}
        </>
      )}
    </div>
  );
}

export default ProductGrid;
