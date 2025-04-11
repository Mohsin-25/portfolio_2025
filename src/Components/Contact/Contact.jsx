import React, { useState } from "react";
import RevealAnimation from "../Utils/Animation/RevealAnimation";
import { motion } from "motion/react";
import TextField from "../Utils/Inputs/TextField";
import Button from "../Utils/Inputs/Button";
import { HiEnvelope, HiMiniMapPin, HiMiniPhone } from "react-icons/hi2";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
import { toast } from "react-toastify";

const Contact = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fullName, mobile, email, message } = userData;

    try {
      await addDoc(collection(db, "Portfolio-New"), {
        fullName,
        mobile,
        email,
        message,
      });

      toast.success("Message Sent Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });

      setUserData({
        fullName: "",
        mobile: "",
        email: "",
        message: "",
      });
    } catch (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
      });
    }
  };

  return (
    <section className="page flex flex-col" id="contact">
      <RevealAnimation>
        <motion.h1>Contact</motion.h1>
      </RevealAnimation>
      <div className="flex flex-col-reverse lg:flex-row text-center gap-6">
        <div className="flex flex-[45%] flex-col md:flex-row lg:flex-col pr-6 gap-10">
          <ContactData
            icon={<HiMiniMapPin />}
            title="Address"
            data="Nerul, Navi Mumbai"
          />
          <ContactData
            icon={<HiMiniPhone />}
            title="Mobile Number"
            data="8446668262"
          />
          <ContactData
            icon={<HiEnvelope />}
            title="Email ID"
            data="mohsinmohammad122@gmail.com"
          />
          <ContactData
            icon={<AiFillLinkedin />}
            title="Linkedin"
            data="https://www.linkedin.com/in/mohammad-mohsin-b8b817208/"
          />
          <ContactData
            icon={<AiFillInstagram />}
            title="Instagram"
            data="https://www.instagram.com/amigo_v3.0/?igshid=YmMyMTA2M2Y%3D"
          />
        </div>
        <div className="flex flex-col flex-[55%] bg-white/10 shadow-sm/70 rounded-xl p-6 gap-6 shadow-[#39dcc5]">
          {/* <p>
            I'm interested in job offers and freelance opportunities. However,
            if you have other requests or questions, feel free to use the form
          </p> */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid w-full  gap-4">
              <TextField
                label="Full Name"
                slug="fullName"
                setDataFn={setUserData}
                data={userData}
              />
              <TextField
                label="Mobile Number"
                slug="mobile"
                setDataFn={setUserData}
                data={userData}
              />
              <TextField
                label="Email ID"
                slug="email"
                setDataFn={setUserData}
                data={userData}
              />
              <TextField
                label="Message"
                slug="message"
                setDataFn={setUserData}
                data={userData}
              />
            </div>
            <div className="grid w-full gap-4">
              <Button />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactData = ({ icon, title, data }) => {
  return (
    <div
      className={`flex flex-row text-left items-center gap-4 ${
        !(
          title?.toLowerCase()?.includes("mobile") ||
          title?.toLowerCase()?.includes("email")
        ) && "hidden lg:flex"
      }`}
    >
      {/* <div className="min-h-10 min-w-10 bg-[#39dcc5] flex items-center justify-center text-black text-2xl rounded-full"> */}
      <div className="min-h-10 min-w-10 bg-white/10 flex items-center justify-center primary-text text-2xl rounded-full">
        {icon}
      </div>
      <div className="flex flex-col">
        <div>{title}</div>
        <div>{data}</div>
      </div>
    </div>
  );
};
