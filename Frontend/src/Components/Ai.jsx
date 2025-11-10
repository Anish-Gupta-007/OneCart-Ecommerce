import React, { useContext, useState } from "react";
import ai from "../assets/ai.png";
import { ShopDataContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import open from "../assets/close.mp3";
const Ai = () => {
  let { showSearch, setShowSearch } = useContext(ShopDataContext);
  const navigate = useNavigate();
  const [activeAi, setActiveAi] = useState(false);
  let openingSound = new Audio(open);
  function speak(message) {
    let utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
    console.log(window.speechSynthesis);
  }

  const speechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recgonition = new speechRecognition();
  if (!recgonition) {
    console.log("not supported");
  }

  recgonition.onresult = (e) => {
    const transcript = e.results[0][0].transcript.trim();
    console.log(transcript);
    if (
      transcript.toLowerCase().includes("search") &&
      transcript.toLowerCase().includes("open") &&
      !showSearch
    ) {
      speak("opening search");
      setShowSearch(true);
      navigate("/collections");
    } else if (
      transcript.toLowerCase().includes("search") &&
      transcript.toLowerCase().includes("close") &&
      showSearch
    ) {
      speak("closing search");
      setShowSearch(false);
    } else if (
      transcript.toLowerCase().includes("collection") ||
      transcript.toLowerCase().includes("collections") ||
      transcript.toLowerCase().includes("product") ||
      transcript.toLowerCase().includes("products")
    ) {
      speak("opening collection page");
      navigate("/collections");
    } else if (
      transcript.toLowerCase().includes("about") ||
      transcript.toLowerCase().includes("aboutpage")
    ) {
      speak("opening about page");
      navigate("/about");
      setShowSearch(false);
    } else if (
      transcript.toLowerCase().includes("home") ||
      transcript.toLowerCase().includes("homepage")
    ) {
      speak("opening home  page");
      navigate("/");
    } else if (
      transcript.toLowerCase().includes("cart") ||
      transcript.toLowerCase().includes("kaat") ||
      transcript.toLowerCase().includes("caat") ||
      transcript.toLowerCase().includes("card") ||
      transcript.toLowerCase().includes("cartpage")
    ) {
      speak("opening your cart  page");
      navigate("/cart");
      setShowSearch(false);
    } else if (transcript.toLowerCase().includes("contact")) {
      speak("opening conatact  page");
      navigate("/contact");
      setShowSearch(false);
    } else if (
      transcript.toLowerCase().includes("order") ||
      transcript.toLowerCase().includes("myorders") ||
      transcript.toLowerCase().includes("orders") ||
      transcript.toLowerCase().includes("my orders")
    ) {
      speak("opening your order page");
      navigate("/order");
      setShowSearch(false);
    } else {
      toast.error("try again");
    }
  };

  recgonition.onend = () => {
    setActiveAi(false);
  };
  return (
    <div
      className="fixed lg:bottom-[20px] md:bottom-[40px] bottom-[80px] left-[2%]"
      onClick={() => {
        recgonition.start();
        openingSound.play();
        setActiveAi(true);
      }}
    >
      <img
        src={ai}
        alt=""
        className={`w-[100px] cursor-pointer ${
          activeAi
            ? "translate-x-[10%] translate-y-[10%] scale-125"
            : "translate-x-0 translate-y-0 scale-100"
        }`}
        style={{
          filter: activeAi
            ? "drop-shadow(0px 0px 30px #00d2fc)"
            : "drop-shadow(0px 0px 20px black)",
        }}
      />
    </div>
  );
};

export default Ai;
