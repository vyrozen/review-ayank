import InstagramLogo from "../svg/instagram.svg";
import GithubLogo from "../svg/github.svg";
import SpotifyLogo from "../svg/spotify.svg";
import PixelHeart from "../webp/pixelated-heart.webp";

const Footer = () => {
  const FooterIcons = [
    {
      logo: InstagramLogo,
      href: "https://instagram.com/deswindr",
    },
    {
      logo: GithubLogo,
      href: "https://github.com/vyrozen",
    },
    {
      logo: SpotifyLogo,
      href: "https://open.spotify.com/playlist/5ehun5JdpJQoh0MwsfEcnb?si=8b0bbfba163f44f7",
    },
  ];
  return (
    <>
      <div className=" w-full mt-3">
        <div className="flex max-w-sm w-2/4 mx-auto justify-evenly items-center ">
          {FooterIcons.map((IconsValue, key) => (
            <div className="w-[18px] h-[18px]" key={key}>
              <a href={IconsValue.href}>
                <img src={IconsValue.logo}></img>
              </a>
            </div>
          ))}
        </div>
        <div className="w-full text-center mt-3">
          <p className="">
            Made with{" "}
            <span className="inline-flex">
              <img
                src={PixelHeart}
                className="self-center items-center w-4 h-4"
              ></img>
            </span>{" "}
            by vyrozen
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
