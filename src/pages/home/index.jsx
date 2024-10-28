import React from "react";
import BlogList from "../../components/blogList";
import Layout from "../../components/Layout";
import Tabbled from "../../components/Tabbed-template";
import KoisAds from "../../components/kois-ads";
import PlanAds from "../../components/plan-ads";
import TestimonialCarousel from "../../components/testimonial-slider";
import "./HomePage.scss";

function HomePage() {
  return (
    <Layout>
      <div className="homepage-main-container">
        <div className="homepage-container">
          <div className="left-home">
            <Tabbled tab1="a" tab2="b"></Tabbled>
            <TestimonialCarousel></TestimonialCarousel>
          </div>
          <div className="right-home">
            <KoisAds></KoisAds>
            <PlanAds></PlanAds>
          </div>
        </div>
        <BlogList></BlogList>
      </div>
    </Layout>
  );
}

export default HomePage;
