"use client";
import React from "react";
import PageWrapper from "../components/PageWrapper";
import { Instagram } from "lucide-react";
import { WhatsappIcon, FacebookIcon } from "./(components)/ContactIcons";

const ContactUs = () => {
  // mb-40 sm:mb-80 md:mb-[1300px]
  return (
    <PageWrapper>
      <section className="mt-8 px-6 xl:px-0 flex flex-col gap-8 ">
        <aside className="flex flex-col gap-4">
          <h1 className=" text-black text-2xl font-bold font-['Judson'] leading-7">
            Do you have a question or complaint. We would love to hear from you!
          </h1>
          <div className=" text-zinc-950 text-sm font-normal gilroy leading-tight">
            Use any of the medium to send us a message, and our dedicated
            support team will get back to you as soon as possible.
          </div>
        </aside>
        <aside className="flex flex-col gap-8 items-center">
          <div className="w-full p-4 rounded-full border border-neutral-200 flex justify-start items-center gap-3">
            <div className="p-1.5 bg-green-500 bg-opacity-20 rounded-full border border-green-500 justify-start items-start flex">
              <WhatsappIcon />
            </div>
            <p className="text-orange-600 text-sm font-medium font-['Gilroy'] leading-tight">
              Contact us on Whatsapp
            </p>
          </div>
          <div className="w-full p-4 rounded-full border border-neutral-200 flex justify-start items-center gap-3">
            <div className="p-1.5  bg-opacity-20 rounded-full border border-yellow-500 justify-start items-start flex insta-gradient">
              <Instagram
                style={{
                  color: "#fd5949",
                }}
              />
            </div>
            <p className="text-orange-600 text-sm font-medium font-['Gilroy'] leading-tight">
              Contact us on Instagram
            </p>
          </div>
          <div className="w-full p-4 rounded-full border border-neutral-200 flex justify-start items-center gap-3">
            <div className="p-1.5 bg-green-500 bg-opacity-20 rounded-full border border-green-500 justify-start items-start flex">
              <FacebookIcon />
            </div>
            <p className="text-orange-600 text-sm font-medium font-['Gilroy'] leading-tight">
              Contact us on Facebook
            </p>
          </div>
        </aside>
      </section>
    </PageWrapper>
  );
};
export default ContactUs;
