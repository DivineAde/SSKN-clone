import React from "react";
import { Grid, Input } from "@nextui-org/react";
import { SendButton } from "./SendButton";
import { SendIcon } from "./SendIcon";
import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  const toggleListTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const toggleListThree = () => {
    setIsOpenThree(!isOpenThree);
  };
  return (
    <div className="mt-[5%] bg-slate-50 px-[25px]">
      <div className="w-full flex flex-col gap-x-24 gap-y-4 pt-4 md:flex-row-reverse">
        <div className="w-full md:w-1/2">
          <h3>JOIN</h3>
          <Grid.Container className="mt-8">
            <Grid>
              <Input
                className="w-full md:w-[500px]"
                contentRightStyling={false}
                labelPlaceholder="EMAIL ADDRESS"
                underlined
                contentRight={
                  <SendButton>
                    <SendIcon />
                  </SendButton>
                }
              />
            </Grid>
          </Grid.Container>
          <p className="text-sm mt-6">
            By submitting your email you agree that SKKN BY KIM may send you
            promotional e-mail messages with offers, updates and other marketing
            messages. You understand that SKKN BY KIM may use your information
            according with its{" "}
            <span className="font-bold underline cursor-pointer">
              Privacy Policy.
            </span>
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-y-4 md:flex-row justify-between">
          <div className="">
            <h2 className="font-bold" onClick={toggleList}>
              SUPPORT
            </h2>
            <ul className="hidden md:block">
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                FAQS
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                TRACK ORDER
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                SHIPPING
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                ACCESSIBILITY
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                CONTACT US
              </li>
            </ul>
            {isOpen && (
              <ul
                className={`block md:hidden transition duration-300 ease-in-out`}
              >
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  FAQS
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  TRACK ORDER
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  SHIPPING
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  ACCESSIBILITY
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  CONTACT US
                </li>
              </ul>
            )}
          </div>

          <div className="">
            <h2 className="font-bold" onClick={toggleListTwo}>
              SSKN BY KIM
            </h2>
            <ul className="hidden md:block">
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                ABOUT US
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                SUBSCRIPTIONS
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                DIGITAL GIFT CARD
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                TUTORIALS
              </li>
            </ul>
            {isOpenTwo && (
              <ul className="block md:hidden">
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  ABOUT US
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  SUBSCRIPTIONS
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  DIGITAL GIFT CARD
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  TUTORIALS
                </li>
              </ul>
            )}
          </div>

          <div className="">
            <h2 className="font-bold" onClick={toggleListThree}>
              CONNECT
            </h2>
            <ul className="hidden md:block">
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                INSTAGRAM
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                FACEBOOK
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                TWITTER
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                YOUTUBE
              </li>
              <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                TIKTOK
              </li>
            </ul>
            {isOpenThree && (
              <ul className="block md:hidden">
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  INSTAGRAM
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  FACEBOOK
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  TWITTER
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  YOUTUBE
                </li>
                <li className="my-[1px] opacity-50 cursor-pointer text-sm">
                  TIKTOK
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-16">
        <div>
          <ul className="flex gap-x-6">
            <li className="text-[10px]">PRIVACY POLICY</li>
            <li className="text-[10px]">TERMS OF USE</li>
            <li className="text-[10px]">TERMS OF SALE</li>
            <li className="text-[10px]">COOKIE POLICY</li>
            <li className="text-[10px]">COOKIES SETTINGS</li>
          </ul>
        </div>
        <p className="text-[12px] uppercase">
          &copy;SKKN BY KIM 2023 All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
