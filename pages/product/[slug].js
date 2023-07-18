import React, { useState } from "react";
import { urlFor, client } from "@/lib/client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Rituals from "@/components/Rituals";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";



// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { AiFillStar, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useStateContext } from "@/context/StateContext";


const TopRatedProduct = ({ products, product, discoverData }) => {

  const  { decQty, incQty, qty, onAdd } = useStateContext();
  const [index, setIndex] = useState(0);
  const [num, setNum] = useState(0);

  const {
    image,
    name,
    details,
    price,
    size,
    slug,
    components,
    ingredients,
    application,
    results,
  } = product;
  return (
    <>
      <div className="mt-32">
        <h1 className="px-[25px] text-lg uppercase"><span className="opacity-50">Home</span>  /  {`${slug.current}`}</h1>
        <div className="mt-24 px-[25px] flex flex-col lg:flex-row gap-x-4 w-full">
          <div className="flex gap-x-4 w-full lg:w-3/5">
           <div className="hidden lg:block">
            {image?.map((item, i) => (
              <div className="cursor-pointer" key={item._id} >
                <img src={urlFor(item)} key={item._id} className={i === index ? "border border-black max-w-[6rem] mb-4" : "max-w-[6rem] mb-4"} onClick={() => setIndex(i)} />
              </div>
            ))}
           </div>
           <div className="w-full">
            <img src={urlFor(image && image[index])} className="hidden w-full  lg:block" alt="" />
           </div>
          </div>
          <div className="w-full lg:w-2/5">
            <h1 className="text-2xl lg:text-3xl font-medium uppercase">{name}</h1>
            <h1 className="text-2xl lg:text-3xl font-medium uppercase">{size}</h1>
            <p className="text-2xl font-bold">&#36;{price}</p>
            <div className="flex flex-row items-center gap-x-4">
              <span className="flex">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <p>4.5 (200)</p>
            </div>
            <div className="flex items-center lg:hidden">
                <Swiper
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  scrollbar={{ draggable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  {image?.map((item, i) => (
                    <SwiperSlide key={item._id}>
                      <img
                        src={urlFor(item)}
                        className="cursor-pointer w-full"
                        onClick={() => setIndex(i)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>

            <div>
              <span className="text-sm">Type</span>
              <div className=" flex gap-x-4 mt-6">
                <button
                  type="button"
                  className="py-2 px-4 rounded-full border border-black bg-black text-white uppercase text-sm"
                >
                  Single
                </button>
                <button
                  type="button"
                  className="py-2 px-4 border border-black rounded-full bg-white text-black uppercase text-sm"
                >
                  Refill
                </button>
              </div>
              <form className="flex flex-col mt-6">
                <label className="font-medium flex items-center">
                  <input type="radio" name="radio" className="mr-2" />
                  One-time purchase
                </label>
                <label className="font-medium flex items-center">
                  <input type="radio" name="radio" className="mr-2" />
                  Subscribe & save 10%
                </label>
              </form>
              <div className="pt-6">
                <span>QUANTITY</span>
                <div className="flex gap-x-2">
                  <div className="flex flex-row items-center border border-black">
                    <button
                      type="button"
                      className="p-2 hover:bg-slate-200 hover:rounded-full"
                      onClick={decQty}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="p-2">{qty}</span>
                    <button
                      type="button"
                      className="p-2 hover:bg-slate-200 hover:rounded-full"
                      onClick={incQty}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="py-2 w-full border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out" onClick={() => onAdd(product, qty)}>
                    ADD TO BAG - {`${price}`}
                  </button>
                </div>
                <p className="text-sm pt-2">
                  or 4 interest-free payments of $18.75 with{" "}
                  <span className="font-bold text-lg">afterpay</span>
                </p>
                <p className="text-sm pt-4">
                  A gentle yet efficient peptide eye cream that helps support
                  skin's natural elasticity and acts to reduce puffiness and the
                  appearance of fine lines around the eye's most delicate areas.
                  <br />
                  Recommended replenishment frequency: 1 month{" "}
                </p>
              </div>
            </div>

            {/*}
            <div className="pt-16">
            <div className="border border-gray-400 border-x-0 py-4 mb-4">
              <div
                className="flex items-center justify-between"
                onClick={toggleAccordionOne}
              >
                <h2 className="text-[.9rem]">Product detials</h2>
                {isExpandedOne ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {isExpandedOne && (
                <div className="">
                  <p className="text-[.8rem]">{details}</p>
                </div>
              )}
            </div>

            <div className="border border-gray-400 border-x-0 mb-4 py-4">
              <div
                className="flex items-center justify-between"
                onClick={toggleAccordionTwo}
              >
                <h2 className="text-[.9rem]">All ingredients</h2>
                {isExpandedTwo ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {isExpandedTwo && (
                <div className="">
                  <p className="text-[.8rem]">{ingredients}</p>
                </div>
              )}
            </div>

            <div className="border border-gray-400 border-x-0 mb-4 py-4">
              <div
                className="flex items-center justify-between"
                onClick={toggleAccordionThree}
              >
                <h2 className="text-[.9rem]">Application</h2>
                {isExpandedThree ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {isExpandedThree && (
                <div className="">
                  <p className="text-[.8rem]">{application}</p>
                </div>
              )}
            </div>

            <div className="border border-gray-400 border-x-0  mb-4 py-4">
              <div
                className="flex items-center justify-between"
                onClick={toggleAccordionFour}
              >
                <h2 className="text-[.9rem]">Key Ingredients</h2>
                {isExpandedFour ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {isExpandedFour && (
                <div className="">
                  <p className="text-[.8rem]">{components}</p>
                </div>
              )}
            </div>

            <div className="border border-gray-400 border-x-0  mb-4 py-4">
              <div
                className="flex items-center justify-between"
                onClick={toggleAccordionFive}
              >
                <h2 className="text-[.9rem]">Results</h2>
                {isExpandedFive ? <AiOutlineMinus /> : <AiOutlinePlus />}
              </div>
              {isExpandedFive && (
                <div className="">
                  <p className="text-[.8rem]">{results}</p>
                </div>
              )}
            </div>
              </div>*/}
            
            <div className="mt-6">
            <Accordion
              transition={{
                duration: "300ms",
                timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
              }}
            >
              <div className="border-t border-gray-400 py-2">
                <AccordionItem className="">
                  {({ open }) => (
                    <>
                      <AccordionHeader className="w-full flex justify-between items-center">
                        <h2 className="uppercase ">
                          PRODUCT DETAILS
                        </h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">
                          {details}
                        </div>
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              </div>

              <div className="border-t border-gray-400 py-2">
                <AccordionItem className="">
                  {({ open }) => (
                    <>
                      <AccordionHeader className="w-full flex justify-between items-center">
                        <h2 className="uppercase ">
                          ALL INGREDIENTS
                        </h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">
                          {ingredients}
                        </div>
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              </div>

              <div className="border-t border-gray-400 py-2">
                <AccordionItem className="">
                  {({ open }) => (
                    <>
                      <AccordionHeader className="w-full flex justify-between items-center">
                        <h2 className="uppercase ">APPLICATION</h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">
                          {application}
                        </div>
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              </div>

              <div className="border-t border-gray-400 py-2">
                <AccordionItem className="">
                  {({ open }) => (
                    <>
                      <AccordionHeader className="w-full flex justify-between items-center">
                        <h2 className="uppercase ">
                          KEY INGREDIENTS
                        </h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">
                          {components}
                        </div>
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              </div>

              <div className="border-y border-gray-400 py-2">
                <AccordionItem className="">
                  {({ open }) => (
                    <>
                      <AccordionHeader className="w-full flex justify-between items-center">
                        <h2 className="uppercase ">
                         RESULTS
                        </h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">
                          {results}
                        </div>
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              </div>
            </Accordion>
            </div>
          </div>

          {/*<div className="w-full">
           <img src={urlFor(image && image[index])} className="w-full" alt="" />
            </div>*/}
        </div>

        {/* RITUAL COMPONENTS */}
        <div className="px-[25px] w-full flex flex-col gap-x-8 lg:flex-row mt-24 mb-12">
          <div className="w-full lg:w-3/5">
            <img src="/watch now.webp" alt="watch_now/img" />
          </div>

          <div className="w-full lg:w-2/5">
            <h1 className="text-2xl uppercase font-bold">Discover your rituals</h1>
            <div className="mt-8 overflow-auto lg:max-h-[40vh]">
              {discoverData.map((item) => (
                <Rituals key={item._id} item={item} />
              ))}
            </div>
            <button className="w-full py-4 border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out mt-[10%]">SHOP ALL</button>
          </div>
        </div>

        {/*  CONSUMER RESULT */}
        <div className="relative">
          <img src="/CONSUMER RESULT.webp" className="hidden md:block" />
          <img src="/CONSUMER RESULT SMALL.webp" className="block md:hidden" />
          <div className="absolute top-[40%] md:top-[60%] left-[5%]">
            <h2 className="text-[2em] text-white font-bold">CONSUMER RESULTS</h2>
            <p className="text-white md:text-[1.1em] pb-2">100% agree this product helps restore the elasticity of the skin around the eyes</p>
            <p className="text-white md:text-[1.1em] pb-2">100% agree this product visibly firmed and smoothed their eye area</p>
            <p className="text-white md:text-[1.1em]">100% agree this product minimized undereye puffiness over time</p>
            <p></p>
          </div>
        </div>

        {/* SUBSCRIBTION */}
        <div className="w-full px-[25px] flex flex-col-reverse md:flex-row pt-16 gap-x-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl pt-2 md:pt-0 pb-4 uppercase">Subscription</h2>
            <p>Indulge in the convenience and exclusive benefits offered with our subscription service. Simply select how frequently you'd like to recieve your products, and we'll ensure you never run on empty. You may adjust your delivery preferences at any time.</p>
            <button type="button" className="py-2 px-4 uppercase border border-black bg-black text-white hover:bg-white hover:text-black transition duration-300 ease-in-out mt-4">Learn more</button>
          </div>

          <div className="w-full md:w-1/2">
            <img src="/subscribtion.webp" alt="subscription_img" className="" />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';
  const discoverData = await client.fetch(`*[_type == "rituals"]`);

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: { products, product, discoverData },
  };
};

export default TopRatedProduct;
