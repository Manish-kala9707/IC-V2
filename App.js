import "bootstrap/dist/css/bootstrap.min.css";
import { React, useEffect, useState, useRef } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/HomeScreen/TopNavbar/TopNavbar";
import Menubar from "./components/HomeScreen/MenuBar/Menubar";

// footer content
import AccessibilityStatement from "./components/HomeScreen/FooterContent/AccessibilityStatement";
import CopyRight from "./components/HomeScreen/FooterContent/CopyRightPolicy";
import HyperLinkPolicy from "./components/HomeScreen/FooterContent/HyperLinkPolicy";
import TermsConditions from "./components/HomeScreen/FooterContent/TermsConditions";
import Disclaimer from "./components/HomeScreen/FooterContent/Disclaimer";
import PrivacyPolicy from "./components/HomeScreen/FooterContent/PrivacyPolicy";

import FooterSection from "./components/HomeScreen/Footer/Footer";
import Stories from "./pages/Stories";
import MocOrganisations from "./pages/MocOrganisations";
import HomeGalleryList from "./pages/HomeGalleryList";
import Home from "./pages/Home";
import { ArrowUp } from "react-feather";
import UnderConst from "./components/UnderConst";
import FortsOfIndia from "./pages/forts/FortsOfIndia";
import { useContext } from "react";
import TextileTypesChild from "./pages/Textiles&Fabric/TextileTypes/TextileTypesChild";
import { ThemeContext } from "./ThemeContext";

import FreedomArchive from "./pages/FreedomArchive";
import LtwoDidYouKnow from "./components/LtwoDidYouKnow";
import LtwoTodayinHistory from "./components/HomeScreen/TodayInHistory/LtwoTodayinHistory";

import Snippets from "./pages/Snippets";
import BreadcrumbExample from "./components/Card/BreadCrumb";

// JewelleryOfNizams sections
import JewelleryOfNizams from "./pages/Jewellery of Nizams/JewelleryOfNizams";

//intangible-cultural-heritage section
import IntangibleCulturalHeritage from "./pages/IntangibleCulturalHeritage/IntangibleCulturalHeritage";
import KnowledgePractice from "./pages/IntangibleCulturalHeritage/KnowledgePractice";
import TraditionalCreaftManShip from "./pages/IntangibleCulturalHeritage/TraditionalCreaftManShip";
import SocialPractice from "./pages/IntangibleCulturalHeritage/SocialPractice";
import OralTraditionAndExpression from "./pages/IntangibleCulturalHeritage/OralTraditionAndExpression";
import PerformingArts from "./pages/IntangibleCulturalHeritage/PerformingArts";

// forts section
import DiscoveringForts from "./pages/forts/DiscoveringForts";
import FeatureForts from "./pages/forts/FeatureForts";
import FortsFreedom from "./pages/forts/FortsFreedom";
import FortsHistory from "./pages/forts/History";
import FortsRarebook from "./pages/forts/Rarebooks";
import Understandingforts from "./pages/forts/Understandingforts";
import Whatisforts from "./pages/forts/WhatisForts";

// Fodd and Culture
import FoodCulture from "./pages/food-culture/FoodCulture";
import FoodandFestivals from "./pages/food-culture/FoodandFestivals";
import CuisinesofIndia from "./pages/food-culture/cuisineOfIndia/CuisinesofIndia";
import TimelessRecipes from "./pages/food-culture/TimelessRecipes";
import EvolutionofIndianGastronomy from "./pages/food-culture/EvolutionofIndianGastronomy";
import RarebooksCuisine from "./pages/food-culture/RarebooksCuisine";
import SpicesHerbs from "./pages/food-culture/SpicesHerbs";
import ImagesofDiversity from "./pages/food-culture/ImagesofDiversity";
import CuisineEast from "./pages/food-culture/cuisineOfIndia/CuisineEast";
import CuisineCentral from "./pages/food-culture/cuisineOfIndia/CuisineCentral";
import CuisineNorthEast from "./pages/food-culture/cuisineOfIndia/CuisineNorthEast";
import CuisineStreetFood from "./pages/food-culture/cuisineOfIndia/CuisineStreetFood";
import CuisineNorth from "./pages/food-culture/cuisineOfIndia/CuisineNorth";
import CuisineSouth from "./pages/food-culture/cuisineOfIndia/CuisineSouth";
import CuisineDistintive from "./pages/food-culture/cuisineOfIndia/CuisineDistintive";
import CuisineWest from "./pages/food-culture/cuisineOfIndia/CuisineWest";
import MainCourse from "./pages/food-culture/TimelessRecipes/MainCourse";
import Snacks from "./pages/food-culture/TimelessRecipes/Snacks";
import Accompaniments from "./pages/food-culture/TimelessRecipes/Accompaniments";
import Desserts from "./pages/food-culture/TimelessRecipes/Desserts";
// unesco section
import Unesco from "./pages/UnescoNew";
import Atlasworldlanguagesdanger from "./pages/unesco/Atlasworldlanguagesdanger";
import MusicalInstruments from "./pages/Musical-Instruments/MusicalInstruments";
import IncreadibleText from "./pages/Musical-Instruments/IncreadibleText";
import DdrAdvanceRepository from "./pages/Ddr/DdrAdvanceRepository";
import VirtualWalkThrough from "./pages/3D-Exploration/VirtualWalkThrough";
import ThreeSixtyView from "./pages/3D-Exploration/ThreeSixtyView";
import FlagshipEvents from "./pages/FlagshipEvents/FlagshipEvents";
import InternationalMuseumExpo from "./pages/FlagshipEvents/InternationalMuseumExpo";
//Ddr section
import DigitalDistrictRepository from "./pages/Ddr/DigitalDistrictRepository";
import DDRstories from "./pages/Ddr/DDRstories";
import DDRhiddentreasures from "./pages/Ddr/DDRhiddentreasures";
import DDRpersonalities from "./pages/Ddr/DDRpersonalities";
import DDRtraditionsartforms from "./pages/Ddr/DDRtraditionsartforms";
import DDREvents from "./pages/Ddr/DDREvents";
// photo_essay
import PhotoEssay from "./pages/PhotoEssay/PhotoEssay";

import FreedomRarebooks from "./pages/FreedomArchives/FreedomRarebooks";
import FreedomImages from "./pages/FreedomArchives/FreedomImages";
import FreedomMuseum from "./pages/FreedomArchives/FreedomMuseum";
import FreedomNewspaperClippings from "./pages/FreedomArchives/FreedomNewspaperClippings";
import FreedomUnsungheroes from "./pages/FreedomArchives/FreedomUnsungheroes";
import FreedomTextile from "./pages/FreedomArchives/FreedomTextile";
import FreedomHistoricCities from "./pages/FreedomArchives/FreedomHistoricCities";
import FreedomForts from "./pages/FreedomArchives/FreedomForts";
import Ltwodidyouknow from "./components/LtwoDidYouKnow";
import HistoricCities from "./pages/HistoricCitiesOfIndia/HistoricCities";
import FetchApiData from "./pages/Store/FetchApiData";
import StatesMap from "./pages/HistoricCitiesOfIndia/StatesMap";
import HistoricCitiesMain from "./pages/HistoricCitiesOfIndia/HistoricCitiesMain";
import Ajanta from "./pages/AjantaCaves/Ajanta";
import Caves from "./pages/AjantaCaves/Caves";
import AjantaPaintings from "./pages/AjantaCaves/Paintings";
import EarlyCaves from "./pages/AjantaCaves/EarlyCaves";
import LaterCaves from "./pages/AjantaCaves/LaterCaves";
import PaintingCollections from "./pages/VisualRepository/Paintings/PaintingCollections";
import TalesOfForts from "./pages/forts/TalesOfForts";
import UnescoChild from "./pages/unesco/UnescoChild";
import JewellleryOfNizamsChild from "./pages/Jewellery of Nizams/JewellleryOfNizamsChild";
import MusicalInstrumentsChild from "./pages/Musical-Instruments/MusicalInstrumentsChild";
import TimelessTrends from "./pages/TimelessTrends/TimelessTrends";
import TimelessFirstChild from "./pages/TimelessTrends/TimelessFirstChild";
import TextilesFabric from "./pages/Textiles&Fabric/Textiles&Fabric";
import RetrievedArtifact from "./pages/RetrievedArtifact/RetrievedArtifact";
import ReclaimedRecies from "./pages/RetrievedArtifact/ReclaimedRecies";
import BookIndianArt from "./pages/RetrievedArtifact/BookIndianArt";
import ArtifactChronicle from "./pages/RetrievedArtifact/ArtifactChronicle";
import TextilesTales from "./pages/Textiles&Fabric/TextilesTales";
import HistoryTimeline from "./pages/Textiles&Fabric/TextilesHistory";
import Trade from "./pages/Textiles&Fabric/Trade";
import Artisans from "./pages/Textiles&Fabric/Artisans";
import CityCapsules from "./pages/HistoricCitiesOfIndia/CityCapsules";
import Timeline from "./pages/HistoricCitiesOfIndia/FreedomMovement";
import ErrorPage from "./components/Card/ErrorPage";
import FestivalsOfIndia from "./pages/FestivalOfIndia/FestivalOfIndia";
import PanIndia from "./pages/FestivalOfIndia/PanIndia/PanIndia";
import FreedomArchivalRecords from "./pages/FreedomArchives/FreedomArchivalRecords";
import DelhiHome from "./pages/HistoricCitiesOfIndia/DelhiHome";
import ForkFestival from "./pages/FestivalOfIndia/ForkFestival/ForkFestival";
import CelebratingNature from "../src/pages/FestivalOfIndia/ForkFestival/ForkFestivalChild";
import TribalFest from "./pages/FestivalOfIndia/TribalFest/TribalFest";
import TribalFestChild from "./pages/FestivalOfIndia/TribalFest/TribalFestChild";
import TextilesState from "./pages/Textiles&Fabric/TextilesState/TextilesState";
import ForkFestivalChild from "../src/pages/FestivalOfIndia/ForkFestival/ForkFestivalChild";
import FairsPiligrimChild from "./pages/FestivalOfIndia/FairsPiligrim/FairsPilgrimChild";
import FairsPilgrim from "./pages/FestivalOfIndia/FairsPiligrim/FairsPilgrim";
import TextilesManufacture from "./pages/Textiles&Fabric/ManufacturingProcess/TextilesManufacture";
import TextileManufactureChild from "./pages/Textiles&Fabric/ManufacturingProcess/TextileManufactureChild";
import TextilesArtifact from "./pages/Textiles&Fabric/TextileArtifact/TextilesArtifact";
import TextilesFreedomMovment from "./pages/Textiles&Fabric/TextilesFreedomMovment";
import Glossary from "./pages/Textiles&Fabric/Glossary";
import TextileTypes from "./pages/Textiles&Fabric/TextileTypes/TextileTypes";
import CapitalCities from "./pages/NorthEast/NorthEastArchiveChild/CapitalCities";
import BooksOnNorth from "./pages/NorthEast/NorthEastArchiveChild/BooksOnNorth";
import TalesNorth from "./pages/NorthEast/NorthEastArchiveChild/TalesNorth";
import NorthEastArchive from "./pages/NorthEast/NorthEastArchive";
import UnsungHeroes from "./pages/NorthEast/NorthEastArchiveChild/UnsungHeroes";
import Chatbot from "./components/HomeScreen/ChatBot/ChatBoat";
import TextualRepository from "./pages/TextualRepository/TextualRepository";
import VideosRepository from "./pages/VisualRepository/VideosRepository";
import ImagesRepository from "./pages/VisualRepository/ImagesRepository";
import GlobalPage from "./pages/GlobalPage/GlobalPage";
import SiteMap from "./components/HomeScreen/FooterContent/SiteMap";
import MocDetails from "./components/Card/MocDetails";
import JoinUs from "./components/HomeScreen/MenuBar/JoinUs";
import TextilesHistory from "./pages/Textiles&Fabric/TextilesHistory";
import ThreeDExplorationsLandingPage from "./pages/3D-Exploration/ThreeDExplorationsLandingPage";
function App() {
  const toggleref = useRef();
  const [theme, setTheme] = useState("light");
  const [fontScale, setFontScale] = useState(1);
  const [contrast, setContrast] = useState("default");
  const [highlightLinks, setHighlightLinks] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const MAX_STEP = 2;
const MIN_STEP = 0;
const STEP_SIZE = 0.05;

const fontInterval = useRef(null);
const fontStep = useRef(0); // from 0 (normal) to 2 (max increased)

const startIncreasingFont = () => {
  if (fontStep.current >= MAX_STEP) return;

  fontStep.current += 1;
  setFontScale((prev) => prev + STEP_SIZE);
};

const startDecreasingFont = () => {
  if (fontStep.current <= MIN_STEP) return;

  fontStep.current -= 1;
  setFontScale((prev) => prev - STEP_SIZE);
};


const stopFontAdjustment = () => {
  if (fontInterval.current) {
    clearInterval(fontInterval.current);
    fontInterval.current = null;
  }
};

  

  
  

  useEffect(() => {
    document.documentElement.style.setProperty("--font-scale", fontScale);
  }, [fontScale]);
  const toggleContrast = () => {
    setContrast((prev) => (prev === "default" ? "high" : "default"));
  };
  const toggleLinkHighlight = () => {
    setHighlightLinks((prev) => !prev);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      toggleTheme(savedTheme);
    }
  }, []);

  // back to top btn
  const [isVisible, setIsVisible] = useState(false);
  const [showChatBot, setShowChatBot] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  console.log("contrast", contrast);

  return (
    <div
      className={`theme-${theme} contrast-${contrast} ${
        highlightLinks ? "highlight-links" : ""
      }`}
    >
      {isVisible && (
        <button onClick={scrollToTop} className="back-to-top-button">
          <ArrowUp />
        </button>
      )}

      <Chatbot />
      <Router future={{ v7_relativeSplatPath: true }}>
        <FetchApiData>
          <Navbar />
          <Menubar
            theme={theme}
            contrast={contrast}
            toggleTheme={toggleTheme}
            highlightLinks={highlightLinks}
            toggleContrast={toggleContrast}
            startDecreasingFont={startDecreasingFont}
            startIncreasingFont={startIncreasingFont}
            stopFontAdjustment={stopFontAdjustment}
            toggleLinkHighlight={toggleLinkHighlight}
          />
          <BreadcrumbExample />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lang=hi?" element={<Home />} />
            {/* Textual Repository */}
            <Route
              path="/lang=hi?/archives/*"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/e-books/:ebooksPage?/:ebooksDetail?/:ebooksPagenid?"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/gazettes-and-gazetteers/:gazettesPage?/:gazettesDetail?/:gazettesPagenid?"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/manuscripts/*"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/other-collections/:OtherCollectionsPage?/:OtherCollectionsDetail?/:OtherCollectionsPagenid?"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/rare-books/*"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/reports-and-proceedings/:ResearchPapersPage?/:ResearchPapersDetail?/:ResearchPapersPagenid?"
              element={<TextualRepository />}
            />
            <Route
              path="/lang=hi?/research-papers/:ResearchPapersPage?/:ResearchPapersDetail?/:ResearchPapersPagenid?"
              element={<TextualRepository />}
            />
            {/* Visual Repository */}
            <Route path="/lang=hi?/videos/*" element={<VideosRepository />} />
            <Route path="/lang=hi?/audios/*" element={<VideosRepository />} />
            <Route
              path="/lang=hi?/photo-archives/*"
              element={<ImagesRepository />}
            />
            <Route
              path="/lang=hi?/museum-collections/:museumcollectionsPage?/:museumcollectionsDetail?/:museumcollectionsPagenid?"
              element={<ImagesRepository />}
            />
            <Route
              path="/lang=hi?/images/:imagesPage?/:imagesDetail?/:imagesPagenid?"
              element={<ImagesRepository />}
            />
            <Route path="/lang=hi?/jobs-opportunities/*" element={<JoinUs />} />
            <Route path="/lang=hi?/about-us/*" element={<UnderConst />} />
            about-us
            <Route
              path="/lang=hi?/intangible-cultural-heritage"
              element={<IntangibleCulturalHeritage />}
            />
            <Route
              path="/lang=hi?/paintings/portfoliopaintings/*"
              element={<ImagesRepository />}
            />
            <Route
              path="/lang=hi?/paintings"
              element={<PaintingCollections />}
            />
            <Route
              path="/lang=hi?/paintings/museum-paintings/*"
              element={<ImagesRepository />}
            />
            {/* global */}
            <Route path="/lang=hi?/globalsearch/*" element={<GlobalPage />} />
            {/* Food and Culture*/}
            <Route
              path="/lang=hi?/food-and-culture"
              element={<FoodCulture />}
            />
            <Route
              path="/lang=hi?/food-and-culture/food-and-festivals/:foodandFestivalPage?/:foodandFestivalDetail?/:foodandFestivalnid?"
              element={<FoodandFestivals />}
            />
            <Route
              path="/lang=hi?/food-and-culture/food-images-of-diversity/:ImagesDiversityPage?/:ImagesDiversityDetail?/:ImagesDiversitynid?"
              element={<ImagesofDiversity />}
            />
            <Route
              path="/lang=hi?/food-and-culture/spices-and-herbs/:spiceherbsPage?/:spiceherbsDetail?/:spiceherbsPagenid?"
              element={<SpicesHerbs />}
            />
            <Route
              path="/lang=hi?/food-and-culture/timeless-recipes/:timelessrecipesPage?/:timelessrecipesDetail?/:timelessrecipesPagenid?"
              element={<TimelessRecipes />}
            />
            <Route
              path="/lang=hi?/food-and-culture/evolution-of-indian-gastronomy/:EvolutionofIndianGastronomyPage?/:EvolutionofIndianGastronomyDetails?/:EvolutionofIndianGastronomyPagenid?"
              element={<EvolutionofIndianGastronomy />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/type-of-textiles/Painting/*"
              element={<TextileTypesChild />}
            />
            <Route
              path="/lang=hi?/food-and-culture/timeless-recipes/main-course/:MainCoursePage?/:MainCourseDetail?/:MainCoursePagenid?"
              element={<MainCourse />}
            />
            <Route
              path="/lang=hi?/food-and-culture/timeless-recipes/snacks/:SnacksPage?/:SnacksDetail?/:SnacksPagenid?"
              element={<Snacks />}
            />
            <Route
              path="/lang=hi?/food-and-culture"
              element={<FoodCulture />}
            />
            <Route
              path="/lang=hi?/food-and-culture/timeless-recipes/accompaniments/:AccompanimentsPage?/:AccompanimentsDetail?/:AccompanimentsPagenid?"
              element={<Accompaniments />}
            />
            <Route
              path="/lang=hi?/food-and-culture/timeless-recipes/desserts/:dessertsPage?/:DessertsDetail?/:DessertsPagenid?"
              element={<Desserts />}
            />
            {/* Cuisines Of  india under Food and Culture */}
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india"
              element={<CuisinesofIndia />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/north/:northPage?/:northDetail?/:northPagenid?"
              element={<CuisineNorth />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/south/:southPage?/:southDetail?/:southPagenid?"
              element={<CuisineSouth />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/west/:westPage?/:westDetail?/:westPagenid?"
              element={<CuisineWest />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/east/:eastPage?/:eastDetail?/:eastPagenid?"
              element={<CuisineEast />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/north-east/:northeastPage?/:northeastDetail?/:northeastPagenid?"
              element={<CuisineNorthEast />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/central/:centralPage?/:centralDetail?/:centralPagenid?"
              element={<CuisineCentral />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/distinctive-cuisine/:distinctivePage?/:distinctiveDetail?/:distinctivePagenid?"
              element={<CuisineDistintive />}
            />
            <Route
              path="/lang=hi?/food-and-culture/cuisines-of-india/street-food-of-india/:streetfoodPage?/:streetfoodDetail?/:streetfoodPagenid?"
              element={<CuisineStreetFood />}
            />
            {/* /Ddr section */}
            <Route
              path="/lang=hi?/districts-of-defiance"
              element={<DigitalDistrictRepository />}
            />
            <Route
              path="/lang=hi?/districts-of-defiance/stories/:storiesPage?/:storiesDetail?/:storiesPagenid?"
              element={<DDRstories />}
            />
            <Route
              path="/lang=hi?/districts-of-defiance/hidden-treasures/:hiddentreasuresPage?/:hiddentreasuresDetail?/:hiddentreasuresPagenid?"
              element={<DDRhiddentreasures />}
            />
            <Route
              path="/lang=hi?/districts-of-defiance/events/:eventsPage?/:eventsDetail?/:eventsPagenid?"
              element={<DDREvents />}
            />
            <Route
              path="/lang=hi?/districts-of-defiance/personalities/:personalitiesPage?/:personalitiesDetail?/:personalitiesPagenid?"
              element={<DDRpersonalities />}
            />
            <Route
              path="/lang=hi?/districts-of-defiance/traditions-and-art-forms/:traditionsandartformsPage?/:traditionsandartformsDetail?/:traditionsandartformsPagenid?"
              element={<DDRtraditionsartforms />}
            />
            <Route
              path="/lang=hi?/districts-of-defiance/district-repository/:a?/:b?/:c?/:d?/:e?/:f?"
              element={<DdrAdvanceRepository />}
            />
            {/* JewelleryOfNizams */}
            <Route
              path="/lang=hi?/jewellery-of-the-nizams"
              element={<JewelleryOfNizams />}
            />
            <Route
              path="/lang=hi?/jewelleryOfTheNizams/*"
              element={<JewellleryOfNizamsChild />}
            />
            {/* textiles and fabrics of india */}
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india"
              element={<TextilesFabric />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/textilestales/*"
              element={<TextilesTales />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/Textiles-and-fabrics-of-indian-state/*"
              element={<TextilesState />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/history"
              element={<TextilesHistory/>}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/manufacturing-process"
              element={<TextilesManufacture />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/artifact/*"
              element={<TextilesArtifact />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/freedom-movement-and-textiles/*"
              element={<TextilesFreedomMovment />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/glossary/*"
              element={<Glossary />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/trade/*"
              element={<Trade />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/Artisans/*"
              element={<Artisans />}
            />
            {/* types of textiles */}
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/type-of-textiles/*"
              element={<TextileTypes />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/manufacturing-process/Weaving/*"
              element={<TextileManufactureChild />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/manufacturing-process/Embroidery/*"
              element={<TextileManufactureChild />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/manufacturing-process/Dyeing/*"
              element={<TextileManufactureChild />}
            />
            <Route
              path="/lang=hi?/textiles-and-fabrics-of-india/manufacturing-process/Printing/*"
              element={<TextileManufactureChild />}
            />
            {/* coming soon */}
            <Route
              path="/lang=hi?/classical-dances-of-india/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/dying-languages-of-india/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/iconic-battles-of-india/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/healing-through-the-ages/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/folktales-of-india/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/historical-personalities-and-legends/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/states-of-india/*"
              element={<UnderConst />}
            />
            <Route path="/lang=hi?/play-icp/*" element={<UnderConst />} />
            <Route path="/lang=hi?/before-after/*" element={<UnderConst />} />
            <Route
              path="/lang=hi?/explore-in-360-degree/*"
              element={<UnderConst />}
            />
            <Route
              path="/lang=hi?/campus-ambassador-programme/*"
              element={<UnderConst />}
            />
            <Route path="/lang=hi?/kartavya-path/*" element={<UnderConst />} />
            {/* intangibleculturalheritage */}
            <Route
              path="/lang=hi?/intangible-cultural-heritage/oral-traditions-and-expressions/:OralTraditionAndExpressionPage?/:OralTraditionAndExpressionDetail?/OralTraditionAndExpressionPagenid?"
              element={<OralTraditionAndExpression />}
            />
            <Route
              path="/lang=hi?/intangible-cultural-heritage/knowledge-and-practices-concerning-nature-and-the-universe/:KnowledgePracticePage?/:KnowledgePracticeDetail?/:KnowledgePracticePagenid?"
              element={<KnowledgePractice />}
            />
            <Route
              path="/lang=hi?/intangible-cultural-heritage/traditional-craftsmanship/:traditionalCraftPage?/:traditionalCraftDetail?/:traditionalCraftPagenid?"
              element={<TraditionalCreaftManShip />}
            />
            <Route
              path="/lang=hi?/intangible-cultural-heritage/social-practices-rituals-and-festive-events/:SocialPracticePage?/:SocialPracticeDetail?/:SocialPracticePagenid?"
              element={<SocialPractice />}
            />
            <Route
              path="/lang=hi?/intangible-cultural-heritage/performing-arts/:PerformingArtsPage?/:PerformingArtsDetail?/:PerformingArtsPagenid?"
              element={<PerformingArts />}
            />
            {/* Dspace data list end */}
            {/* Painting */}
            {/*photo Eassay */}
            <Route
              path="/lang=hi?/photo-essays/:PhotoEssayPage?/:PhotoEssayDetail?/:PhotoEssayPagenid?"
              element={<PhotoEssay />}
            />
            {/*MOC*/}
            <Route
              path="/lang=hi?/MoCorganization/:a?/:b?/:c?"
              element={<MocDetails/>}
            />
            {/* MOC end */}
            <Route path="/lang=hi?/underconstructor" element={<UnderConst />} />
            {/* North east archive */}
            <Route
              path="/lang=hi?/north-east-archive"
              element={<NorthEastArchive />}
            />
            <Route
              path="/lang=hi?/north-east-archive/culture-heritage/*"
              element={<NorthEastArchive />}
            />
            <Route
              path="/lang=hi?/north-east-archive/capital-cities-north-east-india/*"
              element={<CapitalCities />}
            />
            <Route
              path="/lang=hi?/north-east-archive/books-north-east-india/*"
              element={<BooksOnNorth />}
            />
            <Route
              path="/lang=hi?/north-east-archive/tales-from-the-hinterland/*"
              element={<TalesNorth />}
            />
            <Route
              path="/lang=hi?/north-east-archive/unsung-heroes/*"
              element={<UnsungHeroes />}
            />
            f
            <Route
              path="/lang=hi?/freedom-archive"
              element={<FreedomArchive />}
            />
            <Route
              path="/lang=hi?/ltwotodayinhistory"
              element={<LtwoTodayinHistory />}
            />
            <Route
              path="/lang=hi?/stories/:storiesPage?/:storiesDetail?/:storiesPagenid?"
              element={<Stories />}
            />
            <Route
              path="/lang=hi?/snippets/:snippetsPage?/:snippetsDetail?/:snippetsPagenid?"
              element={<Snippets />}
            />
            <Route path="/lang=hi?/page/:pagenumber"></Route>
            {/* Forts Seaction*/}
            <Route path="/lang=hi?/forts-of-india" element={<FortsOfIndia />} />
            <Route
              path="/lang=hi?/forts-of-india/history/:fortsHistoryPage?/:fortHistoryDetail?/:fortsHistoryPagenid?"
              element={<FortsHistory />}
            />
            <Route
              path="/lang=hi?/forts-of-india/rarebooks/:fortsRarebooksPage?/:fortsRarebookDetail?/:fortsRarebooksPagenid?"
              element={<FortsRarebook />}
            />
            <Route
              path="/lang=hi?/forts-of-india/discovering-the-forts-of-india/:discoveringfortsPage?/:discoveringfortsDetail?/:discoveringfortsPagenid?"
              element={<DiscoveringForts />}
            />
            <Route
              path="/lang=hi?/forts-of-india/featureforts"
              element={<FeatureForts />}
            />
            <Route
              path="/lang=hi?/forts-of-india/tales-of-forts/*"
              element={<TalesOfForts />}
            />
            <Route
              path="/lang=hi?/forts-of-india/understanding-forts/*"
              element={<Understandingforts />}
            />
            <Route
              path="/lang=hi?/forts-of-india/whatisforts"
              element={<Whatisforts />}
            />
            <Route
              path="/lang=hi?/forts-of-india/fortsandthefreedomstruggle/:fortsandthefreedomsPage?/:fortsandthefreedomsDetail?/:fortsandthefreedomsPagenid?"
              element={<FortsFreedom />}
            />
            {/* unesco Seaction*/}
            <Route path="/lang=hi?/unesco" element={<Unesco />} />
            <Route
              path="/lang=hi?/unesco/atlas-of-the-world-languages-in-danger/:AtlasworldlanguagesdangerPage?/:AtlasworldlanguagesdangerDetail?/:AtlasworldlanguagesdangerPagenid?"
              element={<Atlasworldlanguagesdanger />}
            />
            <Route path="/lang=hi?/unesco/*" element={<UnescoChild />} />
            {/* Timeless trends*/}
            <Route
              path="/lang=hi?/timeless-trends"
              element={<TimelessTrends />}
            />
            <Route
              path="/lang=hi?/timeless-trends/*"
              element={<TimelessFirstChild />}
            />
            <Route
              path="/lang=hi?/freedom-archives"
              element={<FreedomArchive />}
            />
            {/* Freedom Archives */}
            <Route
              path="/lang=hi?/freedom-archives/rare-books/:FreedomRarebooksPage?/:FreedomRarebooksDetail?/:FreedomRarebooksPagenid?"
              element={<FreedomRarebooks />}
            />
            <Route
              path="/lang=hi?/freedom-archives/archival-records/:FreedomRarebooksPage?/:FreedomRarebooksDetail?/:FreedomRarebooksPagenid?"
              element={<FreedomArchivalRecords />}
            />
            <Route
              path="/lang=hi?/freedom-archives/images/:FreedomImagesPage?/:FreedomImagesDetail?/:FreedomImagesPagenid?"
              element={<FreedomImages />}
            />
            <Route
              path="/lang=hi?/freedom-archives/museum/:FreedomMuseumPage?/:FreedomMuseumDetail?/:FreedomMuseumPagenid?"
              element={<FreedomMuseum />}
            />
            <Route
              path="/lang=hi?/freedom-archives/newspaper-clippings/:FreedomNewspaperClippingsPage?/:FreedomNewspaperClippingsDetail?/:FreedomNewspaperClippingsPagenid?"
              element={<FreedomNewspaperClippings />}
            />
            <Route
              path="/lang=hi?/freedom-archives/unsung-heroes/:FreedomUnsungheroesPage?/:FreedomUnsungheroesDetail?/:FreedomUnsungheroesPagenid?"
              element={<FreedomUnsungheroes />}
            />
            <Route
              path="/lang=hi?/freedom-struggle/textile/:FreedomTextilePage?/:FreedomTextileDetail?/:FreedomTextilePagenid?"
              element={<FreedomTextile />}
            />
            <Route
              path="/lang=hi?/freedom-struggle/forts/:FreedomFortsPage?/:FreedomFortsDetail?/:FreedomFortsPagenid?"
              element={<FreedomForts />}
            />
            <Route
              path="/lang=hi?/freedom-struggle/historic-cities/:FreedomHistoricCitiesPage?/:FreedomHistoricCitiesDetail?/:FreedomHistoricCitiesPagenid?"
              element={<FreedomHistoricCities />}
            />
            {/*virtual-walkthrough  */}
            <Route
              path="/lang=hi?/flagship-events/:FlagshipEventsPage?/:FlagshipEventsDetail?/:FlagshipEventsPagenid?"
              element={<FlagshipEvents />}
            />
            <Route
              path="/lang=hi?/flagship-events/international-museum-expo/:InternationalMuseumExpoPage?/:InternationalMuseumExpoDetail?/:InternationalMuseumExponid?"
              element={<InternationalMuseumExpo />}
            />
            <Route
              path="/lang=hi?/flagship-events/festival-of-libraries/*"
              element={<InternationalMuseumExpo />}
            />
            <Route
              path="/lang=hi?/flagship-events/Indian-Art-Architecture-and-Design-Biennale/*"
              element={<InternationalMuseumExpo />}
            />
           <Route
              path="/lang=hi?/3D-Explorations/virtual-walkthrough/:VirtualWalkThroughPage?/:VirtualWalkThroughDetail?/:VirtualWalkThroughPagenid?"
              element={<VirtualWalkThrough />}
            />
            <Route
              path="/lang=hi?/3D-Explorations/:VirtualWalkThroughPage?/:VirtualWalkThroughDetail?/:VirtualWalkThroughPagenid?"
              element={<ThreeDExplorationsLandingPage/>}
            />
             <Route
              path="/lang=hi?/3D-Explorations/360-Virtual-Tour/:VirtualWalkThroughPage?/:VirtualWalkThroughDetail?/:VirtualWalkThroughPagenid?"
              element={<ThreeSixtyView/>}
            />
            <Route
              path="/lang=hi?/galleryview/:HomeGalleryListPage?/:HomeGalleryListDetail?/:HomeGalleryListPagenid?"
              element={<HomeGalleryList />}
            />
            {/* History section */}
            <Route
              path="/lang=hi?/historic-cities-of-india/*"
              element={<HistoricCitiesMain />}
            ></Route>
            <Route
              path="/lang=hi?/historic-cities-of-india/delhi/*"
              element={<DelhiHome />}
            ></Route>
            <Route
              path="/lang=hi?/historic-cities-of-india/city/*"
              element={<CityCapsules />}
            ></Route>
            <Route
              path="/lang=hi?/statemap/:a?/:b?"
              element={<StatesMap />}
            ></Route>
            <Route
              path="/lang=hi?/fetchedata/:a?/:d?/:c?"
              element={<FetchApiData />}
            ></Route>
            <Route
              path="/lang=hi?/dyk-date-wise/:a?/:b?"
              element={<Ltwodidyouknow />}
            ></Route>
            <Route path="/lang=hi?/ajanta/:a?/:b?" element={<Ajanta />}>
              {" "}
            </Route>
            <Route path="/lang=hi?/ajanta-caves/:a?/:b?" element={<Caves />}>
              {" "}
            </Route>
            <Route
              path="/lang=hi?/ajanta-caves/early/:a?/:b?"
              element={<EarlyCaves />}
            >
              {" "}
            </Route>
            <Route
              path="/lang=hi?/ajanta-caves/later/:a?/:b?"
              element={<LaterCaves />}
            >
              {" "}
            </Route>
            <Route
              path="/lang=hi?/ajanta-paintings/*"
              element={<AjantaPaintings />}
            >
              {" "}
            </Route>
          </Routes>
          <Routes>
            {/* Musical-instruments Section */}
            <Route
              path="/lang=hi?/musical-instruments-of-india"
              element={<MusicalInstruments />}
            />
            <Route
              path="/lang=hi?/musical-instruments-of-india/*"
              element={<MusicalInstrumentsChild />}
            />
            <Route
              path="/lang=hi?/musical-instruments-of-india/incredible-texts/:IncreadibleTextPage?/:IncreadibleTextDetail?/:IncreadibleTextPagenid?"
              element={<IncreadibleText />}
            />
            <Route
              path="/lang=hi?/retrieved-artefacts-of-india/:IncreadibleTextPage?/:IncreadibleTextDetail?/:IncreadibleTextPagenid?"
              element={<RetrievedArtifact />}
            />
            <Route
              path="/lang=hi?/retrieved-artefacts-of-india/reclaimed-relics/:IncreadibleTextDetail?/:IncreadibleTextPagenid?"
              element={<ReclaimedRecies />}
            />
            <Route
              path="/lang=hi?/retrieved-artefacts-of-india/books-indian-art-and-iconography/:IncreadibleTextDetail?/:IncreadibleTextPagenid?"
              element={<BookIndianArt />}
            />
            <Route
              path="/lang=hi?/retrieved-artefacts-of-india/artefact-chronicles/:IncreadibleTextDetail?/:IncreadibleTextPagenid?"
              element={<ArtifactChronicle />}
            />
            <Route path="/lang=hi?/freedomss" element={<Timeline />} />
            <Route
              path="/lang=hi?/festivals-of-india"
              element={<FestivalsOfIndia />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/pan-india-festivals/*"
              element={<PanIndia />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/folk-festivals"
              element={<ForkFestival />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/folk-festivals/celebrating-nature/*"
              element={<ForkFestivalChild />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/folk-festivals/social-traditions/*"
              element={<ForkFestivalChild />}
            />

            <Route
              path="/lang=hi?/festivals-of-india/folk-festivals/honoring-deities/*"
              element={<ForkFestivalChild />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/pan-india-festivals/*"
              element={<TribalFest />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/tribal-fest/*"
              element={<TribalFest />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/tribal-fest/worshiping-nature*"
              element={<TribalFestChild />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/tribal-fest/venerating-ancestors-deities*"
              element={<TribalFestChild />}
            />

            <Route
              path="/lang=hi?/festivals-of-india/fairs-piligrimages*"
              element={<FairsPilgrim />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/fairs-piligrimages/fairs*"
              element={<FairsPiligrimChild />}
            />
            <Route
              path="/lang=hi?/festivals-of-india/fairs-piligrimages/pilgrims*"
              element={<FairsPiligrimChild />}
            />

            <Route
              path="/lang=hi?/festivals-of-india/fairs-pilgrim"
              element={<FairsPilgrim />}
            />

            <Route
              path="/lang=hi?/accessibility-statement/*"
              element={<AccessibilityStatement />}
            />

            <Route path="/lang=hi?/disclaimer/*" element={<Disclaimer />} />

            <Route
              path="/lang=hi?/privacy-policy/*"
              element={<PrivacyPolicy />}
            />

            <Route
              path="/lang=hi?/copyright-policy/*"
              element={<CopyRight />}
            />

            <Route
              path="/lang=hi?/hyper-linking-policy/*"
              element={<HyperLinkPolicy />}
            />
            <Route path="/lang=hi?/sitemap/*" element={<SiteMap />} />

            <Route
              path="/lang=hi?/terms-and-conditions/*"
              element={<TermsConditions />}
            />
          </Routes>
          <FooterSection />
        </FetchApiData>
      </Router>
    </div>
  );
}

export default App;
