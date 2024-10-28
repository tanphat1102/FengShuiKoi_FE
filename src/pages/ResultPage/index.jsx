import React from "react";
import "./ResultPage.scss";
import KoisAds from "../../components/kois-ads";
import ElementResult from "../../components/element-result";
import Layout from "../../components/Layout";
import KoisRecommend from "../../components/KoisRecommend";
import Tabbled from "../../components/Tabbed-template";
import PlanAds from "../../components/plan-ads";

function ResultPage() {
  return (
    <div>
      <Layout>
        <div className="element-result-page-main-container">
          <div className="element-result-page-upper-container">
            <div className="left-container">
              <Tabbled></Tabbled>
              <ElementResult></ElementResult>
            </div>
            <div className="right-container">
              <KoisAds></KoisAds>
              <PlanAds></PlanAds>
            </div>
          </div>
          <div>
            <KoisRecommend></KoisRecommend>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default ResultPage;
