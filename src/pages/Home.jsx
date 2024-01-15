import React from "react";
import { useFetch } from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { Puff } from "react-loader-spinner";
import FeaturedProduct from "../components/FeaturedProduct";

function Home() {
  const {
    data: product,
    isPending,
  } = useFetch(
    "https://strapi-store-server.onrender.com/api/products?featured=true"
  );
  return (
    <section className="align-element py-20">
      {/* {isPending && (
        <div className="z-20 center-loader backdrop-blur-md">
          <Puff
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      )} */}
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
            We are changing the way people shop
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
            repellat explicabo enim soluta temporibus asperiores aut obcaecati
            perferendis porro nobis.
          </p>
          <div className="mt-10">
            <NavLink className="btn btn-primary" to="/products">
              Our products
            </NavLink>
          </div>
        </div>
        <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
          <div className="carousel-item">
            <img
              className="rounded-box h-full w-80 object-cover"
              src="./assets/sofa.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded-box h-full w-80 object-cover"
              src="./assets/large-sofa.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded-box h-full w-80 object-cover"
              src="./assets/comfort-sofa.jpg"
              alt=""
            />
          </div>
          <div className="carousel-item">
            <img
              className="rounded-box h-full w-80 object-cover"
              src="./assets/color-sofa.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      {/*Datadan malumot keladi */}
      <div className="pt-24">
        <div className="border-b border-base-300 pb-5">
          <h2 className="text-3xl font-medium tracking-wider capitalize">
            featured products
          </h2>
        </div>
        <FeaturedProduct product={product}/>
      </div>
    </section>
  );
}

export default Home;
