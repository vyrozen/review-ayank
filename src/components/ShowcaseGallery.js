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
    <div className="container sm:flex sm:flex-wrap sm:justify-between">
      <Fade>
        {GalleryList.map((cardOrder, key) => (
          <>
            <div
              key={key}
              className="flex flex-col w-full sm:w-[20.5rem] lg:w-96 h-[28rem] bg-gradient-to-tr from-rose-300/40 to-rose-300/90 mt-3 mb-10 pb-1 rounded-xl shadow-xl duration-100 hover:scale-105 "
            >
              <div className="w-10/12 flex-1 min-h-[200px] max-h-[200px] mx-auto mt-6 bg-gradient-to-tr from-rose-300/60 to-rose-300/30 rounded-lg overflow-hidden drop-shadow-xl">
                <img
                  src={cardOrder.src}
                  className="object-cover w-full h-full"
                  alt={cardOrder.alt}
                ></img>
              </div>
              <div className="w-10/12 mx-auto font-bold pb-2 pt-1">
                <h1>{cardOrder.heading}</h1>
              </div>
              <div className="w-10/12 mx-auto flex-1 overflow-y-auto mb-3">
                <p className="">{cardOrder.description}</p>
              </div>
            </div>
          </>
        ))}
      </Fade>
    </div>
  );
};

export default ShowcaseGallery;
