import { Fade } from "react-awesome-reveal";
import CharName from "./CharName";
import SpecializationBar from "./SpecializationBar";
import ShowcaseGallery from "./ShowcaseGallery";
import MainCharHover from "../images/main-char-hover.jpg";
import MainChar from "../images/main-char-img.jpg";

const Mainpage = () => {
  return (
    <div className="container ip678p:my-3 m-auto my-9 h-5/6 rounded-2xl">
      <div className="hidden" id="Preloader">
        <img src={MainChar} />
        <img src={MainCharHover} />
      </div>
      <div className="w-fit mx-auto select-none">
        <h1 className="font-inter text-5xl font-bold py-5 text-center selection:bg-none">
          Review{" "}
          <span className="h-auto bg-gradient-to-r from-[#f52a8c] to-[#1f8adb] bg-clip-text text-transparent">
            {CharName()}
          </span>
          <p className="font-medium text-sm text-slate-500">
            sebuah reviu singkat dari jaki.
          </p>
        </h1>
      </div>

      <div className="w-full h-auto py-5 overflow-hidden px-5">
        <div className="w-11/12 mb-9 h-96 ip678p:h-[30rem] md:h-[54rem] mx-auto rounded-full overflow-hidden drop-shadow-xl bg-cover border bg-[url(images/main-char-img.jpg)] transition-all duration-700 ease-in-out hover:bg-[url(images/main-char-hover.jpg)]"></div>
        {/* <hr></hr> */}
        <Fade>
          <div className="px-6 pb-3 text-black">
            <h1 className="font-semibold text-lg">Kenalin cewek gwe</h1>
            {/* <p className="text-slate-600 text-justify">
              Namanya{" "}
              <span className="font-semibold">
                Deswin Indria Cahya Ramadhani
              </span>
              , biasa dipanggil{" "}
              <span className="text-highlight">
                Deswin, Des, Win, Dedes, etc
              </span>{" "}
              macem-macem pokoknya terserah temennya yang penting ngga yang
              menjurus ke hal yang merendahkan. Kalo gue biasanya manggil{" "}
              <span className="text-highlight">Ayang, Mbak Des, etc.</span>{" "}
              Deswin lahir di Cilegon tanggal 11 November 2004. Nama bapaknya{" "}
              <span className="font-semibold">Agus Cahyadi</span>, Deswin
              manggil bapaknya dengan panggilan{" "}
              <span className="text-highlight">Ayah.</span> Sedangkan ibunya
              bernama <span className="text-highlight">Ade Norma,</span> Deswin
              manggil ibunya pake sebutan{" "}
              <span className="text-highlight">Mama.</span>
              <br></br> Deswin sekolah SD di{" "}
              <a href="https://insantama.sch.id/" className="href-link">
                SIT Insantama Cilegon
              </a>{" "}
              terus lulus tahun 2016, dan lanjut ke jenjang SMP di{" "}
              <a
                href="https://id.wikipedia.org/wiki/SMP_Negeri_1_Cilegon"
                className="href-link"
              >
                SMPN 1 Cilegon
              </a>{" "}
              dan lulus tahun 2020, Deswin abis itu lanjut jenjang pendidikannya
              di{" "}
              <a href="https://smansakotaserang.sch.id/" className="href-link">
                SMAN 1 Kota Serang
              </a>
              , dan baru lulus pada tahun 2023 ini. Angkatan kita dikenal
              sebagai angkatan COVID karena kami sekolah di era pandemi dari
              tahun 2019 sampe akhir tahun 2021. Deswin abis itu mau lanjutin
              karirnya jadi dokter gigi, jadi dia harus kuliah kedokteran gigi
              dulu semoga saja gwe sama Deswin tahun ini keterima di kampus
              pilihan kita masing-masing, Amiin. Deswin juga punya hobi dari
              kecil Makeup gitu wkwkwk, gwe kurang paham tapi keren karena dari
              hobi dia yang ini, dia udah bisa ngehasilin duit sebagai{" "}
              <a
                href="https://id.wikipedia.org/wiki/Perias"
                className="href-link italic font-mono"
              >
                MUA
              </a>
              . Serius keren banget cewek gwe, very proud of you Mbak Deswin!
            </p> */}
            <p>
              Officia culpa voluptate quis laboris ea anim quis enim laboris
              nisi. Pariatur fugiat mollit ad qui commodo non aute nulla sunt ad
              sit ea consectetur nisi. Et officia non ipsum aliquip do excepteur
              reprehenderit deserunt irure laborum. Ad commodo deserunt proident
              do eiusmod. Ut proident veniam cillum id ipsum aliqua incididunt
              Lorem sint. Exercitation commodo eiusmod aute Lorem id occaecat
              consequat veniam irure dolor et eu. Ex aliqua eiusmod laboris
              fugiat labore deserunt pariatur sint. Ex ea velit nulla ad amet
              magna cillum consectetur tempor eiusmod cupidatat proident et.
              Aliquip aliquip irure sunt anim minim veniam qui est. Do consequat
              culpa in nostrud labore enim sit do officia voluptate irure.
              Officia dolor dolor amet do ea ad exercitation excepteur do aute
              occaecat incididunt nulla et. Aliquip nostrud laborum consectetur
              tempor ullamco est sint excepteur et magna est commodo anim ut.
              Cupidatat laborum sunt ipsum exercitation incididunt eiusmod elit
              labore ea fugiat id nulla laboris excepteur. In adipisicing sit
              irure ex mollit enim enim fugiat tempor dolor. Do laborum duis
              ipsum dolore qui qui occaecat irure sit anim. Labore esse
              cupidatat sit reprehenderit commodo do nostrud.
            </p>
            {/* <hr className="my-10 border-t border-rose-200 shadow"></hr> */}
          </div>
        </Fade>

        <Fade>
          <div className="px-6 py-5">
            <h1 className="font-semibold text-lg ">Specialization</h1>
            <SpecializationBar />
          </div>
        </Fade>

        <Fade>
          <div className="container px-6 py-5">
            <h1 className="font-semibold text-lg">Showcase</h1>
            <ShowcaseGallery />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Mainpage;
