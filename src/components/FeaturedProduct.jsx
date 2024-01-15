import { NavLink } from "react-router-dom";

function FeaturedProduct({product}) {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {product && (
            <>
              {product["data"].map((item) => {
                return (
                  <NavLink
                    to={`product/${item.id}`}
                    key={item.id}
                    className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
                  >
                    <figure className="px-4 pt-4">
                      <img
                        className="rounded-xl h-64 md:h-48 w-full object-cover"
                        src={item.attributes.image}
                        alt=""
                      />
                    </figure>
                    <div className="card-body items-center text-center">
                      <h2 className="card-title capitalize tracking-wider">
                        {item.attributes.title}
                      </h2>
                      <span className="text-[#463AA1]">
                        ${item.attributes.price.toLocaleString("en-Us")}
                      </span>
                    </div>
                  </NavLink>
                );
              })}
            </>
          )}
        </div>
  )
}

export default FeaturedProduct