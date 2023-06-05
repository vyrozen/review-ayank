import { Fade } from "react-awesome-reveal";
import Showcase1a from "../images/showcase-1a.jpg";
import Showcase1b from "../images/showcase-1b.jpg";
import Showcase2 from "../images/showcase-2.jpg";
import Showcase3a from "../images/showcase-3a.jpg";
import Showcase3b from "../images/showcase-3b.jpg";
import Showcase4 from "../images/showcase-4.jpg";
import Showcase5 from "../images/showcase-5.jpg";
import Showcase6 from "../images/showcase-6.jpg";

const GalleryList = [
  {
    heading: "Graduation Makeup Artist",
    alt: "Foto Ziane sama Intan after makeup",
    src1: Showcase1b,
    src2: Showcase1a,
    isVideo: false,
    isHoverChange: true,
    hasDescription: true,
    description:
      "Deswin membuka jasa Makeup Artist untuk pertama kalinya dalam rangka Wisuda SMAN 2 KS dan mampu menghasilkan riasan yang memuaskan bagi pelanggannya.",
  },
  {
    heading: "Deswin High School Graduation",
    alt: "Foto studio Deswin wisuda",
    src: Showcase2,
    isVideo: false,
    isHoverChange: false,
    hasDescription: true,
    description:
      "Foto Studio Deswin saat wisuda perpisahan SMAN 1 Kota Serang, Deswin ngelakuin semua Makeup-nya secara mandiri.",
  },
  {
    heading: "Deswin Bromo Self Portrait",
    alt: "Foto Deswin waktu di Bromo",
    src1: Showcase3a,
    src2: Showcase3b,
    isHoverChange: true,
    isVideo: false,
    hasDescription: true,
    description:
      "Foto Deswin waktu lagi study campus, ini waktu lagi di Bromo.",
  },
  {
    heading: "",
    alt: "Foto portrait Zaki Deswin",
    src: Showcase4,
    isVideo: false,
    isHoverChange: false,
    hasDescription: false,
    description: "",
  },
  {
    heading: "",
    alt: "Foto Deswin",
    src: Showcase5,
    isVideo: false,
    isHoverChange: false,
    hasDescription: false,
    description: "",
  },
  {
    heading: "",
    alt: "Foto Deswin",
    src: Showcase6,
    isVideo: false,
    isHoverChange: false,
    hasDescription: false,
    description: "",
  },
];

const ShowcaseGallery = () => {
  return (
    <div className="container sm:flex sm:flex-wrap sm:justify-between">
      <Fade>
        {GalleryList.map((cardOrder, key) => (
          <>
            <div
              key={key}
              className={`group flex flex-col w-full sm:w-[17rem] md:w-[20.5rem] lg:w-72 xl:w-96 ${
                cardOrder.hasDescription ? "h-[30rem]" : "h-[365px]"
              } bg-gradient-to-tr from-rose-300/40 to-rose-300/90 hover:bg-gradient-to-br hover:from-rose-400/30 hover:to-rose-400/80 mt-3 mb-10 pb-1 rounded-xl shadow-xl duration-100 hover:scale-105`}
            >
              <div className="w-10/12 flex-1 min-h-[300px] max-h-[300px] mx-auto mt-6 bg-gradient-to-tr from-rose-300/60 to-rose-300/30 rounded-lg overflow-hidden drop-shadow-xl">
                {cardOrder.isHoverChange ? (
                  <div className="w-full h-full">
                    <img
                      src={cardOrder.src1}
                      className="object-cover w-full h-full duration-300 group-hover:scale-110 group-hover:hidden group-hover:opacity-0"
                      alt={cardOrder.alt}
                    ></img>
                    <img
                      src={cardOrder.src2}
                      className="object-cover w-full h-full duration-300 group-hover:block group-hover:opacity-100 hidden opacity-0"
                      alt={cardOrder.alt}
                    ></img>
                  </div>
                ) : (
                  <img
                    src={cardOrder.src}
                    className="object-cover w-full h-full group-hover:scale-110 duration-300"
                    alt={cardOrder.alt}
                  ></img>
                )}
              </div>
              <div className="w-10/12 mx-auto font-bold pb-1 pt-1">
                <h1>{cardOrder.heading}</h1>
              </div>
              <div
                className={`${
                  cardOrder.hasDescription
                    ? "w-10/12 mx-auto flex-1 overflow-y-auto mb-3 pr-2"
                    : "hidden"
                } `}
              >
                <p className="font-light text-justify">
                  {cardOrder.description}
                </p>
              </div>
            </div>
          </>
        ))}
      </Fade>
    </div>
  );
};

export default ShowcaseGallery;
