import { Fade } from "react-awesome-reveal";

const GalleryList = [
  {
    heading: "Lorem Ipsum",
    alt: "Ini adalah deskripsi gambar 1",
    src: "https://picsum.photos/900",
    description:
      "Eiusmod amet tempor aliquip dolore excepteur deserunt magna minim id anim. Voluptate sunt pariatur sunt exercitation aliqua est. Dolore incididunt dolor eu quis esse incididunt qui magna sint esse voluptate. Minim nulla ut sint laborum id officia fugiat pariatur ex duis dolore irure deserunt eiusmod. Deserunt id aliquip cillum minim exercitation id ipsum excepteur enim proident officia proident dolor. Velit est aliqua eu quis tempor elit veniam incididunt. Occaecat sunt labore magna commodo tempor veniam ut consequat officia velit eu eiusmod.",
  },
  {
    heading: "Lorem Ipsum",
    alt: "Ini adalah deskripsi gambar 1",
    src: "https://picsum.photos/400",
    description:
      "Eu ut in et proident cillum. Culpa occaecat exercitation nulla ullamco adipisicing cupidatat in. Anim exercitation dolore id labore dolore Lorem minim esse magna anim Lorem.",
  },
  {
    heading: "Lorem Ipsum",
    alt: "Ini adalah deskripsi gambar 1",
    src: "https://picsum.photos/300",
    description:
      "Tempor esse reprehenderit dolor ullamco sint consequat. Id adipisicing officia ipsum minim incididunt qui nostrud et. Ex eiusmod culpa sunt ipsum ullamco aute exercitation reprehenderit minim ex ad aliqua elit elit. Magna officia non incididunt reprehenderit tempor cillum dolor nisi.",
  },
];

const ShowcaseGallery = () => {
  return (
    <div className="container">
      <Fade>
        {GalleryList.map((cardOrder, key) => (
          <div
            key={key}
            className="flex flex-col w-full h-96 bg-gradient-to-tr from-rose-300/40 to-rose-300/90 my-5 pb-1 rounded-xl shadow-xl"
          >
            <div className="w-10/12 h-[200px] mx-auto mt-6 bg-gradient-to-tr from-rose-300/60 to-rose-300/30 rounded-lg overflow-hidden drop-shadow-xl">
              <img
                src={cardOrder.src}
                className="object-cover w-full h-full "
                alt={cardOrder.alt}
              ></img>
            </div>
            <div className="w-10/12 max-h-44 mx-auto my-3 overflow-y-scroll ">
              <h1 className="text-bold text-lg font-bold ">
                {cardOrder.heading}
              </h1>
              <p className="font-thin ">{cardOrder.description}</p>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};

export default ShowcaseGallery;
