import CharName from "./CharName";

const Mainpage = () => {
  return (
    <div className="ip678p:w-11/12 ip678p:my-3 m-auto my-9 w-10/12 h-5/6 rounded-2xl ">
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

      <div className="w-full h-auto py-5">
        <div className="w-3/4 mb-9 ip678p:h-[30rem] md:h-[54rem] mx-auto rounded-full overflow-hidden shadow-xl bg-cover shadow-gray-100 border bg-[url(images/main-char-img.jpg)] transition-all duration-700 ease-in-out hover:bg-[url(images/main-char-hover.jpg)]">
          {/* <img
            src={CharImgHover}
            alt="Mbak Deswin lagi poto studio"
            className="hidden"
          ></img>
          <img
            src={CharImg}
            alt="Mbak Deswin lagi poto studio"
            className="hidden "
          ></img> */}
        </div>
        {/* <hr></hr> */}
        <div className="px-6 text-black">
          <h1 className="font-semibold text-lg">Kenalin cewek gwe</h1>
          <p className="text-slate-600 text-justify">
            Namanya{" "}
            <span className="font-semibold">Deswin Indria Cahya Ramadhani</span>
            , biasa dipanggil{" "}
            <span className="text-highlight">Deswin, Des, Win, Dedes, etc</span>{" "}
            macem-macem pokoknya terserah temennya yang penting ngga yang
            menjurus ke hal yang merendahkan. Kalo gue biasanya manggil{" "}
            <span className="text-highlight">Ayang, Mbak Des, etc.</span> Deswin
            lahir di Cilegon tanggal 11 November 2004. Nama bapaknya{" "}
            <span className="font-semibold">Agus Cahyadi</span>, Deswin manggil
            bapaknya dengan panggilan{" "}
            <span className="text-highlight">Ayah.</span> Sedangkan ibunya
            bernama <span className="text-highlight">Ade Norma,</span> Deswin
            manggil ibunya pake sebutan{" "}
            <span className="text-highlight">Mama.</span> Deswin sekolah SD di
            SIT Insantama Cilegon terus lulus tahun 2016, dan lanjut ke jenjang
            SMP di SMPN 1 Cilegon dan lulus tahun 2020, Deswin abis itu lanjut
            jenjang pendidikannya di SMAN 1 Kota Serang, dan baru lulus pada
            tahun ini 2023. Angkatan kita dikenal sebagai angkatan COVID karena
            kami sekolah di era pandemi dari tahun 2019 sampe akhir tahun 2021.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
