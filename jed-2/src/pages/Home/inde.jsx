import React from "react";
import HomeSlide from "../../components/HomeSlide";
import Services from "../../components/Services";
import "../../common/common.css";
import WorkLev from "../../components/Workslev";
import PortfolioSlide from "../../components/PortfolioSlide";
import Online from "../../components/Online";

function Home() {
  return (
    <div className="">
      <HomeSlide />
      <Services />
      <WorkLev />
      <PortfolioSlide/>
      <Online/>
    </div>
  );
}

export default Home;
