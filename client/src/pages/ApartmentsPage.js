import React from "react";
import Header from "../components/Header";
import OurAdvantages from "../components/OurAdvantages";
import Apartments from "../components/Apartments";
import Contacts from "../components/Contacts";

const ApartmentsPage = () => {
  return (
    <>
      <Header bgHeader="header-bg-2" smallTitle="от 2 800 руб." mainTitle="ARTSTUDIO Nevsky" address="ул. 2-ая Советская, 4Б, стр.1"/>
      <OurAdvantages />
      <Apartments />
      <Contacts />
    </>
  );
};

export default ApartmentsPage;
