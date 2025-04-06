import { HiOutlineArrowUpCircle } from "react-icons/hi2";

const BackToTop = () => {
  const scrollToSection = () => {
    const section = document.getElementById("navbar");
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // hide this button if already on info page

  return (
    <div className="">
      <HiOutlineArrowUpCircle
        size={30}
        onClick={scrollToSection}
        className="fixed bottom-4 right-4 cursor-pointer hover:scale-120 hover:text-[#00FF7F]"
      />
    </div>
  );
};

export default BackToTop;
