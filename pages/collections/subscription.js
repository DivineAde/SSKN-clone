import React from "react";
import Image from "next/image";
import { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

const Subscription = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <>
      <div className="mt-24 md:mt-40">
        <h1 className="pl-8 pb-12 text-sm">
          Home / <span className=" opacity-50">Subscription</span>
        </h1>
        <h1 className=" text-center text-2xl font-semibold tracking-wide pb-12">
          SUBSCRIPTIONS
        </h1>
        <Image src="/sub.webp" width={1500} height={1500} alt="subscription" />

        <div className="flex flex-col gap-y-6 md:flex-row w-full my-12 px-6">
          <h1 className="w-full md:w-1/2 text-2xl uppercase font-semibold">
            Never run out of SKKN BY KIM
          </h1>
          <p className="w-full md:w-1/2 text-2xl leading-8 font-semibold">
            When you enroll in our subscription service, we'll ensure your
            products arrive on your schedule. Simply choose your desired
            products and replenishment frequency, and adjust at any time.
          </p>
        </div>

        <div className="sub-bg py-14">
          <h1 className="pl-6 pb-8 uppercase font-semibold text-2xl ">
            Subscription benefits
          </h1>
          <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-6">
            <div className="bg-white w-full px-4 py-10">
              <span className="opacity-50 text-xl">01</span>
              <h2 className="text-xl">
                Free shipping on all subscription orders.
              </h2>
            </div>

            <div className="bg-white w-full px-4 py-10">
              <span className="opacity-50 text-xl">02</span>
              <h2 className="text-xl">Early access to new products.</h2>
            </div>

            <div className="bg-white w-full px-4 py-10">
              <span className="opacity-50 text-xl">03</span>
              <h2 className="text-xl">10% off all subscription orders.</h2>
            </div>
          </div>
        </div>

        <div className="sub-bg mt-20 py-14">
          <h1 className="pl-6 pb-8 uppercase font-semibold text-2xl ">
            how it works{" "}
            <span className=" float-right flex items-center justify-center text-lg pr-6 gap-x-2 cursor-pointer">
              <HiOutlineArrowNarrowRight
                className={`relative transition-transform duration-300 ${
                  hovered ? "translate-x-2" : "translate-x-0"
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
              SHOP ALL{" "}
            </span>
          </h1>
          <div className="grid place-items-center gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full px-6">
            <div className="bg-white w-full px-4 py-10">
              <span className="opacity-50 text-xl">01</span>
              <h2 className="text-xl">
                Choose your favorite SKKN BY KIM products and select the option
                to subscribe.
              </h2>
            </div>

            <div className="bg-white w-full px-4 py-10">
              <span className="opacity-50 text-xl">02</span>
              <h2 className="text-xl">
                Decide how often you would like your products to be
                automatically replenished.
              </h2>
            </div>

            <div className="bg-white w-full px-4 py-10">
              <span className="opacity-50 text-xl">03</span>
              <h2 className="text-xl">
                Leave the rest to us.
                <span className=" opacity-0">
                  Decide how often you would like your products to be
                  automatically
                </span>
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-x-6 gap-y-6 w-full mt-32 px-6">
          <div className="w-full md:w-1/2">
            <h2 className="uppercase text-2xl font-semibold mb-2">
              SUBSCRIPTIONS FAQs
            </h2>
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
                          HOW DOES THE SSKN BY KIM SUBSCRIPTION WORK?
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
                          SKKN BY KIM's Subscription service offers the most
                          convenient way to get your products delivered to your
                          door, on your schedule. Simply choose your desired
                          products and delivery frequency, and we will ensure
                          your products are automatically replenished according
                          to your preferences — which can be adjusted at any
                          time. Plus, subscribers get 10% off and free shipping
                          on all subscription orders as well as early access to
                          new product launches. At this time, subscriptions are
                          only available for US customers.
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
                          CAN I CANCEL MY SUBSCRIPTION AT ANY TIME?
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
                          Yes, you can cancel at your leisure by going to the
                          'Subscriptions' section of your Account and clicking
                          'Edit.' Then select 'Cancel' from the radio buttons
                          and click 'Save Changes.'
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
                        <h2 className="uppercase ">CAN I SKIP A DELIVERY?</h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">
                          Yes, you can update your subscription preferences by
                          visiting the 'Subscriptions' section of your Account
                          and clicking 'Manage.' You can skip a delivery or
                          select a new timeframe from the radio buttons and then
                          clicking 'Save Changes.'
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
                          CAN I CHANGE THE DELIVERY FREQUENCY OF MY
                          SUBSCRIPTION?
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
                          Yes, you can update your delivery preferences by
                          visiting the 'Subscriptions' section of your Account
                          and clicking 'Manage.' Then select a new timeframe
                          from the radio buttons and click 'Save Changes.'
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
                          ARE ALL SUBSCRIPTION PRODUCTS REFILLS?
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
                          Whether you subscribe to a Single or Refill product
                          with your first order, all subsequent orders will be a
                          Refill product.
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
                          What is react-headless-accordion?
                        </h2>
                        <AiOutlinePlus
                          className={` ${!open ? "block" : "hidden"}`}
                        />
                        <AiOutlineMinus
                          className={`${!open ? "hidden" : "block"}`}
                        />
                      </AccordionHeader>

                      <AccordionBody>
                        <div className="pt-4">Lorem ipsum dolor sit amet.</div>
                      </AccordionBody>
                    </>
                  )}
                </AccordionItem>
              </div>
            </Accordion>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              src={`/sub 02.webp`}
              width={1500}
              height={1000}
              alt="lightskin model/img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
