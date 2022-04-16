// import Hello from "../components/Hello";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Global from "../components/Global/Global";
import { useState } from "react";
import Province from "../components/Province/Province";
import CovidForm from "../components/CovidForm/CovidForm";
import indonesia from "../utils/constants/indonesia";
import provinces from "../utils/constants/provinces";


function Main() {
const [dataGlobal] = useState(indonesia.indonesia);
const [dataProvince, setDataProvince] = useState(provinces.provinces);
console.log(dataProvince);


  return (
    <main>
      <Hero />
      <Global dataGlobal={dataGlobal} />
      <Province dataProvince={dataProvince} setDataProvince={setDataProvince} />
      <CovidForm dataProvince={dataProvince} setDataProvince={setDataProvince} />
      {/* <Hello /> */}
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
