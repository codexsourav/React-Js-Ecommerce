import React from "react";
import Header from "../components/homepage/header/Header";
import Featureds from "../components/homepage/Featured/Featureds";
import Highlightbox from "../components/homepage/Highlight/Highlightbox";
import Newcollection from "../components/homepage/Newcollection/Newcollection";
import Offer from "../components/homepage/offers/Offer";
import Populer from "../components/homepage/Popular/Populer";

function Home() {
  return (
    <div>
      <Header />
      <Featureds />
      <Newcollection />
      <Offer />
      <Populer />
      <Highlightbox />
    </div>
  );
}

export default Home;
