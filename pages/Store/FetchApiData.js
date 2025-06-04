import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const ContextData = createContext();

const FetchApiData = ({ children }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [totalPages, setTotalPages] = useState(0);
  const [total_items, setTotalRecord] = useState(0);
  const [current_page, setCurrentPage] = useState(0);
  const [items_per_page, setItemsPerPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [keySearchQuery, setKeySearchQuery] = useState("");
  const [dcTypevalue, setDctypevalue] = useState("");
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [title, setTitle] = useState("");
  const [nid, setNid] = useState("");
  const [nid1, setNid1] = useState("");
  const [nid2, setNid2] = useState("");
   const [api, setApi] = useState([]);
  const [apiQueue, setApiQueue] = useState([]);
  const [error, setError] = useState(false);
  const [pageName, setPageName] = useState();
  const [fetchedData, updateFetchedData] = useState([]);
  const [response, setResponse] = useState({ ok: true });
  const [filterSearchdata, setFilterSearchdData] = useState([]);
  const [filterSearchdata2, setFilterSearchdData2] = useState([]);
  const [filterSearchdata3, setFilterSearchdData3] = useState([]);
  const [filterSearchdata4, setFilterSearchdData4] = useState([]);
  const [filterSearchdata5, setFilterSearchdData5] = useState([]);
  const [filterSearchdata6, setFilterSearchdData6] = useState([]);
  const [filterSearchdata7, setFilterSearchdData7] = useState([]);
  const [categoryname, setCategoryName] = useState();
  const [statename, setStateName] = useState();
  const [districtname, setDistrictName] = useState();
  const location = useLocation();


 useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },[location.key])
  
const ApiList = {
 stories:"https://icvtesting.nvli.in/rest-v1/stories-filter",
 snippets:"https://icvtesting.nvli.in/rest-v1/snippets",
"3DExplorationsvirtualwalkthrough":"https://icvtesting.nvli.in/rest-v1/virtual-walkthrough",
 allcategories:"https://icvtesting.nvli.in/rest/all-categories",

 //footer content

 accessibilitystatement:"https://icvtesting.nvli.in/rest-v1/footer-data/accessibilty-statement",
 hyperlinkingpolicy:"https://icvtesting.nvli.in/rest-v1/footer-data/hyperlinking-policy",
 disclaimer:"https://icvtesting.nvli.in/rest-v1/footer-data/disclaimer",
 privacypolicy:"https://icvtesting.nvli.in/rest-v1/footer-data/privacy-policy",
 sitemap:"https://icvtesting.nvli.in/rest-v1/footer-data/site-map",
 termsandconditions:"https://icvtesting.nvli.in/rest-v1/footer-data/terms-and-conditions",
 copyrightpolicy:"https://icvtesting.nvli.in/rest-v1/footer-data/copyright-policy",
 // historic cities
 historiccitiesofindia:"https://icvtesting.nvli.in/rest-v1/historic-cities",
 historiccitiesofindiadelhi:"https://icvtesting.nvli.in/rest-v1/historic-cities",

 // Ahmedabad
 historiccitiesofindiaahmedabadread: "https://icvtesting.nvli.in/rest-v1/historic-cities/ahmedabad-read",
 historiccitiesofindiaahmedabadsee: "https://icvtesting.nvli.in/rest-v1/photo-archive?search_api_fulltext=Mahatma%20Gandhi",
 historiccitiesofindiaahmedabadwatch: "https://icvtesting.nvli.in/rest-v1/historic-cities/Ahmedabad-watch",
// Lucknow
historiccitiesofindialucknowread: "https://icvtesting.nvli.in/rest-v1/historic-cities/lucknow-read",
historiccitiesofindialucknowsee: "https://icvtesting.nvli.in/rest-v1/photo-archive?search_api_fulltext=LUCKNOW&f%5B0%5D=photo_archive_organisation%3AArchaeological%20Survey%20of%20India",
historiccitiesofindialucknowwatch: "https://icvtesting.nvli.in/rest-v1/historic-cities/lucknow-watch",
// Patna
historiccitiesofindiapatnaread: "https://icvtesting.nvli.in/rest-v1/historic-cities/patna/patna-read",
historiccitiesofindiapatnasee: "https://icvtesting.nvli.in/rest-v1/historic-cities/patna/patna-see",
historiccitiesofindiapatnaglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/patna/glimpses-of-patna",
//north delhi
historiccitiesofindianorthdelhiread: "https://icvtesting.nvli.in/rest-v1/historic-cities/north-delhi/north-delhi-read",
historiccitiesofindianorthdelhisee: "https://icvtesting.nvli.in/rest-v1/historic-cities/north-delhi/north-delhi-see",
historiccitiesofindianorthdelhiglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/north-delhi/glimpses-of-north-delhi",
// central delhi
historiccitiesofindiacentraldelhiread: "https://icvtesting.nvli.in/rest-v1/historic-cities/central-delhi/central-delhi-read",
historiccitiesofindiacentraldelhisee: "https://icvtesting.nvli.in/rest-v1/historic-cities/central-delhi/central-delhi-see",
historiccitiesofindiacentraldelhiglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/central-delhi/glimpses-of-central-delhi",
// mehrauli
historiccitiesofindianmehrauliread: "https://icvtesting.nvli.in/rest-v1/historic-cities/mehrauli/mehrauli-read",
historiccitiesofindianmehraulisee: "https://icvtesting.nvli.in/rest-v1/historic-cities/mehrauli/mehrauli-see",
historiccitiesofindianmehrauliglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/mehrauli/glimpses-of-mehrauli",
// sahjahanabad
historiccitiesofindiashahjahanabadread: "https://icvtesting.nvli.in/rest-v1/historic-cities/shahjahanabad/shahjahanabad-read",
historiccitiesofindiashahjahanabadsee: "https://icvtesting.nvli.in/rest-v1/historic-cities/shahjahanabad/shahjahanabad-see",
historiccitiesofindiashahjahanabadglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/shahjahanabad/glimpses-of-shahjahanabad",
 // Kolkata
 historiccitiesofindiakolkataread: "https://icvtesting.nvli.in/rest-v1/historic-cities/kolkata-read",
 historiccitiesofindiakolkotasee: "https://icvtesting.nvli.in/rest-v1/historic-cities/kolkata-see",
 historiccitiesofindiakolkatawatch: "https://icvtesting.nvli.in/rest-v1/historic-cities/kolkata-watch",
// Varanasi
historiccitiesofindiavaranasiread: "https://icvtesting.nvli.in/rest-v1/historic-cities/varanasi/varanasi-read",
historiccitiesofindiavaranasisee: "https://icvtesting.nvli.in/rest-v1/photo-archive/?search_api_fulltext=Sarnath",
historiccitiesofindiavaranasiwatch: "https://icvtesting.nvli.in/rest-v1/historic-cities/watch",
MoCorganization:"https://icvtesting.nvli.in/rest-v1/moc-organisations",
//nizzamudin
historiccitiesofindianizamuddinread: "https://icvtesting.nvli.in/rest-v1/historic-cities/nizamuddin/nizamuddin-read",
historiccitiesofindianizamuddinsee: "https://icvtesting.nvli.in/rest-v1/historic-cities/nizamuddin/nizamuddin-see",
historiccitiesofindianizamuddinglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/nizamuddin/glimpses-of-nizamuddin",
// Bhopal
historiccitiesofindiabhopalread: "https://icvtesting.nvli.in/rest-v1/historic-cities/bhopal/bhopal-read",
historiccitiesofindiabhopalsee: "https://icvtesting.nvli.in/rest-v1/historic-cities/bhopal/bhopal-see",
historiccitiesofindiabhopalglimpse: "https://icvtesting.nvli.in/rest-v1/historic-cities/bhopal/glimpses-of-bhopal",
// Madurai
historiccitiesofindiamadurairead: "https://icvtesting.nvli.in/rest-v1/historic-cities/madurai/madurai-read",
historiccitiesofindiamaduraisee: "https://icvtesting.nvli.in/rest-v1/historic-cities/madurai/madurai-see",
historiccitiesofindiamaduraiewatch: "https://icvtesting.nvli.in/rest-v1/historic-cities/madurai/madurai-watch",
// Thanjavur
historiccitiesofindiathanjavurread: "https://icvtesting.nvli.in/rest-v1/historic-cities/thanjavur-read",
historiccitiesofindiathanjavurseese: "https://icvtesting.nvli.in/rest-v1/historic-cities/thanjavur-see",
historiccitiesofindiathanjavurwatch: "https://icvtesting.nvli.in/rest-v1/historic-cities/thanjavur-watch",
 

    // freedom archives api
 freedomarchive:"https://icvtesting.nvli.in/rest-v1/freedom-archive",
 freedomarchiverarebooks:"https://icvtesting.nvli.in/rest-v1/freedom-archive/rare-books",
 freedomarchiveimages:"https://icvtesting.nvli.in/rest-v1/freedom-archive/images",
 freedomarchivearchivalrecords:"https://icvtesting.nvli.in/rest-v1/freedom-archive/archival-records",
 freedomarchivemuseum:"https://icvtesting.nvli.in/rest-v1/freedom-archive/museum",
 freedomarchiveunsungheroes:"https://icvtesting.nvli.in/rest-v1/unsung-heroes",
 freedomarchivenewspaperclippings:"https://icvtesting.nvli.in/rest-v1/freedom-archive/newspaper-clippings",
  // timeless trends
  timelesstrends:"http://icvtesting.nvli.in/rest-v1/timeless-trends-homepage",
  timelesstrendsclothing:!location.pathname.includes("history") || !location.pathname.includes("title=")?"http://icvtesting.nvli.in/rest-v1/timeless-trends/clothing":"https://icvtesting.nvli.in/rest-v1/history-clothing-ancient-india",
  timelesstrendsclothingall:"http://icvtesting.nvli.in/rest-v1/timeless-trends/clothing",
  timelesstrendsaccessories:!location.pathname.includes("history") || !location.pathname.includes("title=")?"https://icvtesting.nvli.in/rest-v1/timeless-trends/accessories":"https://icvtesting.nvli.in/rest-v1/history-accessories-ancient-india",
  timelesstrendsaccessoriesall:"https://icvtesting.nvli.in/rest-v1/timeless-trends/accessories",
  timelesstrendsboardgames:"http://icvtesting.nvli.in/rest-v1/timeless-trends/boardgames",
  timelesstrendsboardgamesall:"http://icvtesting.nvli.in/rest-v1/timeless-trends/boardgames",
  timelesstrendshairstyles:!location.pathname.includes("history") || !location.pathname.includes("title=")?"http://icvtesting.nvli.in/rest-v1/timeless-trends/hairstyles":"https://icvtesting.nvli.in/rest-v1/history-hairstyle-ancient-india",
  timelesstrendshairstylesall:"http://icvtesting.nvli.in/rest-v1/timeless-trends/hairstyles",
  timelesstrendsbooks:"http://icvtesting.nvli.in/rest-v1/timeless-trends/books",
  timelesstrendsvideostories:"http://icvtesting.nvli.in/rest-v1/timeless-trends/video-stories",
  timelesstrendsphotoessay:"http://icvtesting.nvli.in/rest-v1/timeless-trends/photo-essays",
  timelesstrendssnippets:"http://icvtesting.nvli.in/rest-v1/timeless-trends/snippets-stories",
  jobsopportunities:"https://icvtesting.nvli.in/rest-v1/join-us-rest-api",
  // ajanta caves

   ajantacavesearly:"https://icvtesting.nvli.in/rest-v1/ajanta-caves",
   ajantacaveslater:"https://icvtesting.nvli.in/rest-v1/ajanta-caves",
    //jewels of nizams
    jewelleryofthenizams:
    "https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams",
    jewelleryOfTheNizamshistory:"https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams/history",
    jewelleryOfTheNizamsanecdotes:"https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams/anecdotes",
    jewelleryOfTheNizamsprincesses:"https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams/Princess",
    jewelleryOfTheNizamseconomy:"https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams/economy",
    jewelleryOfTheNizamssociety:"https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams/society",
    jewelleryOfTheNizamsjewels:"https://icvtesting.nvli.in/rest-v1/jewellery-of-the-nizams/jewels",
    othercollections: "https://icvtesting.nvli.in/rest-v1/other-collections-filter",
    archives: "https://icvtesting.nvli.in/rest-v1/archive",
    audios: "https://icvtesting.nvli.in/rest-v1/audios",
    videos: "https://icvtesting.nvli.in/rest-v1/videos-filter",
    manuscripts: "https://icvtesting.nvli.in/rest-v1/manuscripts",
    rarebooks: "https://icvtesting.nvli.in/rest-v1/rarebooks",
    images: "https://icvtesting.nvli.in/rest-v1/images-filter",
    ebooks: "https://icvtesting.nvli.in/rest-v1/ebooks",
    photoarchives: "https://icvtesting.nvli.in/rest-v1/photo-archive",
    photoessays:"https://icvtesting.nvli.in/rest-v1/photo-essays",
    gazettesandgazetteers:"https://icvtesting.nvli.in/rest-v1/gazetteers-filter",
    museumcollections:"https://icvtesting.nvli.in/rest-v1/museums-collection",
    researchpapers: "https://icvtesting.nvli.in/rest-v1/research-papers-filter",
    reportsandproceedings:"https://icvtesting.nvli.in/rest-v1/reports-and-proceedings",
    paintingsportfoliopaintings:"https://icvtesting.nvli.in/rest-v1/painting-collection-filter",
    paintingsmuseumpaintings:"https://icvtesting.nvli.in/rest-v1/painting-collections/museum-paintings",
    fortsofindiatalesofforts:"https://icvtesting.nvli.in/rest-v1/forts-of-india/tales-of-forts",
    fortsofindiadiscoveringthefortsofindia:"https://icvtesting.nvli.in/rest-v1/forts-of-india/discovering-the-forts-of-india",
    fortsofindiahistory:"https://icvtesting.nvli.in/rest-v1/forts-of-india/history",
    fortsofindiararebooks:"https://icvtesting.nvli.in/rest-v1/forts-of-india/rarebooks",
    fortsofindiaunderstandingforts:!location.pathname.includes("title=FEATURES")?("https://icvtesting.nvli.in/rest-v1/forts-of-india/understanding-forts"):("https://icvtesting.nvli.in/rest-v1/forts-of-india/understanding-forts/features"),
    
    fortsofindiafortsandthefreedomstruggle:"https://icvtesting.nvli.in//rest-v1/forts-of-india/forts-and-freedom-struggle",
    districtsofdefiance:"https://icvtesting.nvli.in/rest-v1/digital-district-repository",
    districtsofdefiancedistrictrepository:"https://icvtesting.nvli.in/rest-v1/district-repository",
   
  //  foodandculture
  foodandculture:"https://icvtesting.nvli.in/rest-v1/food-and-culture",
  foodandcultureevolutionofindiangastronomy:"https://icvtesting.nvli.in/rest-v1/food-and-culture/evolution-of-indian-gastronomy",
  foodandculturecuisinesofindia:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india",
  foodandculturecuisinesofindianorth:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india/north",
  foodandculturecuisinesofindiaeast:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india/east",
   foodandculturecuisinesofindiawest:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india/west",
   foodandculturecuisinesofindiasouth:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india/south",
   foodandculturecuisinesofindianortheast:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-India/north-east",
   foodandculturecuisinesofindiacentral:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india/central",
   foodandculturecuisinesofindiadistinctivecuisine:"https://icvtesting.nvli.in/rest-v1/food-and-culture/cuisines-of-india/distinctive-cuisine",
   foodandculturecuisinesofindiastreetfoodofindia:"https://icvtesting.nvli.in/rest/food-and-culture/cuisines-of-india/street-food-of-india",
   foodandculturetimelessrecipes:"https://icvtesting.nvli.in/rest-v1/food-and-culture/timeless-recipes",
   foodandculturetimelessrecipesmaincourse:"https://icvtesting.nvli.in/rest-v1/food-and-culture/timeless-recipes/main-course",
   foodandculturetimelessrecipessnacks:"https://icvtesting.nvli.in/rest-v1/food-and-culture/timeless-recipes/snacks",
   foodandculturetimelessrecipesdesserts:"https://icvtesting.nvli.in/rest-v1/food-and-culture/timeless-recipes/desserts",
   foodandculturetimelessrecipesaccompaniments:"https://icvtesting.nvli.in/rest-v1/food-and-culture/timeless-recipes/accompaniments",
   foodandculturespicesandherbs:"https://icvtesting.nvli.in/rest-v1/food-and-culture/spices-and-herbs",
   foodandcultureraretextsoncuisine:"https://icvtesting.nvli.in/rest-v1/food-and-culture/rare-texts-on-cuisine",
   foodandculturefoodandfestivals:"https://icvtesting.nvli.in/rest-v1/food-and-culture/food-and-festivals",
   foodandculturefoodimagesofdiversity:"https://icvtesting.nvli.in/rest-v1/food-and-culture/images-of-diversity",

   // festivals of india

   festivalsofindiapanindiafestivals:"https://icvtesting.nvli.in/rest-v1/festivals-of-India/pan-indian-festivals",
   festivalsofindiafolkfestivalscelebratingnature:"https://icvtesting.nvli.in/rest-v1/festivals-of-India/folk-festivals/Celebrating-Nature",
   festivalsofindiatribalfestworshipingnature:"https://icvtesting.nvli.in/rest-v1/festivals-of-India/tribal-festivals/worshipping-nature",
  
    festivalsofindiafolkfestivalssocialtraditions:
      "https://icvtesting.nvli.in/rest-v1/festivals-of-India/folk-festivals/Social-Traditions",
    festivalsofindiafolkfestivalshonoringdeities:
      "https://icvtesting.nvli.in/rest-v1/festivals-of-India/folk-festivals/Honouring-Deities",
   
    festivalsofindiatribalfestveneratingancestorsdeities:
      "https://icvtesting.nvli.in/rest-v1/festivals-of-India/tribal-festivals/venerating-ancestors-deities",
    festivalsofindiafairspiligrimagesfairs:
      "https://icvtesting.nvli.in/rest-v1/festivals-of-India/fairs-pilgrimages/fairs",
    festivalsofindiafairspiligrimagespilgrims:
      "https://icvtesting.nvli.in/rest-v1/festivals-of-India/fairs-pilgrimages/pilgrimage",
  // Intangible cultural heritage

  intangibleculturalheritage: "https://icvtesting.nvli.in/rest-v1/intangible-cultural-heritage",
  intangibleculturalheritageoraltraditionsandexpressions:"https://icvtesting.nvli.in/rest-v1/intangible-cultural-heritage/oral-traditions-and-expressions",
  intangibleculturalheritageperformingarts:"https://icvtesting.nvli.in/rest-v1/intangible-cultural-heritage/performing-arts",
  intangibleculturalheritageknowledgeandpracticesconcerningnatureandtheuniverse:"https://icvtesting.nvli.in/rest-v1/intangible-cultural-heritage/knowledge-and-practices-concerning-nature-and-the-universe",
  intangibleculturalheritagetraditionalcraftsmanship:"https://icvtesting.nvli.in/rest-v1/intangible-cultural-heritage/traditional-craftsmanship",
  intangibleculturalheritagesocialpracticesritualsandfestiveevents:"https://icvtesting.nvli.in/rest-v1/intangible-cultural-heritage/social-practices-rituals-and-festive-events",

// flagship events
flagshipevents: "https://icvtesting.nvli.in/rest-v1/flagship-events",
flagshipeventsinternationalmuseumexpo:
  "https://icvtesting.nvli.in/rest-v1/flagship-events/international-museum-expo",
flagshipeventsfestivaloflibraries:
  "https://icvtesting.nvli.in/rest-v1/flagship-events/festival-of-libraries",
flagshipeventsIndianArtArchitectureandDesignBiennale:
  "https://icvtesting.nvli.in/rest-v1/flagship-events/Indian-Art-Architecture-and-Design-Biennale",


  // musical instruments of india Api
  musicalinstrumentsofindia:"https://icvtesting.nvli.in/rest-v1/musical-instruments-of-india",
  musicalinstrumentsofindiaavanaddhavadya:"https://icvtesting.nvli.in/rest-v1/musical-instruments/avanaddha-vadya",
  musicalinstrumentsofindiatatvadya:"https://icvtesting.nvli.in/rest-v1/musical-instruments/tat-vadya",
  musicalinstrumentsofindiaghanvadya:"https://icvtesting.nvli.in/rest-v1/musical-instruments/ghan-vadya",
  musicalinstrumentsofindiasushirvadya:"https://icvtesting.nvli.in/rest-v1/musical-instruments/sushir-vadya",
  musicalinstrumentsofindiaincredibletexts:"https://icvtesting.nvli.in/rest-v1/musical-instruments-of-india/incredible-texts",
//unesco categories Api
unescoxbharat:"https://icvtesting.nvli.in/rest-v1/unesco",
  unescoglobalnetworkoflearningcities:"https://icvtesting.nvli.in/rest-v1/unesco/global-network-of-learning-cities",
  unescoglobalgeoparks:"https://icvtesting.nvli.in/rest-v1/unesco/global-geoparks",
  unescointangibleculturalheritage:"https://icvtesting.nvli.in/rest-v1/unesco/intangible-cultural-heritage",
  unescobiospherereserves:"https://icvtesting.nvli.in/rest-v1/unesco/biosphere-reserves",
  unescomemoryoftheworld:"https://icvtesting.nvli.in/rest-v1/unesco/memory-of-the-world",
  unescocreativecitiesnetwork:"https://icvtesting.nvli.in/rest-v1/unesco/creative-cities-network",
  unescomemoryoftheworld:"https://icvtesting.nvli.in/rest-v1/unesco/memory-of-the-world",
  unescoworldheritagesites:"https://icvtesting.nvli.in/rest-v1/unesco/world-heritage-sites",

//globalsearch

globalsearch:"https://icvtesting.nvli.in/api/custom-global-search",
  //Retrieved artifact
  retrievedartefactsofindia:"https://icvtesting.nvli.in/rest-v1/retrieved-artefacts-of-india",
  retrievedartefactsofindiareclaimedrelics:"https://icvtesting.nvli.in/rest-v1/retrieved-artefacts-of-india/reclaimed-relics",
  retrievedartefactsofindiaartefactchronicles:"https://icvtesting.nvli.in/rest-v1/retrieved-artefacts-of-india/artefact-chronicles",
  retrievedartefactsofindiabooksindianartandiconography:"https://icvtesting.nvli.in/rest-v1/retrieved-artefacts-of-india/books-indian-art-and-iconography",

  // textiles
    textilesandfabricsofindiatextilestales:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/textiletales",
    textilesandfabricsofindiaTrade:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/trade",
    textilesandfabricsofindiaArtisans:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/artisan-new",
    textilesandfabricsofindiaTextilesandfabricsofindianstate:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/textilestate",
    textilesandfabricsofindiahistory:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/historys",
    textilesandfabricsofindiamanufacturingprocess:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/manufacturing-technique",
    textilesandfabricsofindiaartifact:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/artifacts",
    textilesandfabricsofindiafreedommovementandtextiles:"https://icvtesting.nvli.in/rest-v1/INDIGO-DYE-AND-REVOLT",
    textilesandfabricsofindiatypeoftextiles:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/type-of-textile",
    textilesandfabricsofindiamanufacturingprocessWeaving:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/type-of-textile/weaving",
    textilesandfabricsofindiamanufacturingprocessEmbroidery:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/type-of-textile/embroidery",
    textilesandfabricsofindiamanufacturingprocessDyeing:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/type-of-textile/dyeing",
    textilesandfabricsofindiamanufacturingprocessPainting:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/type-of-textile/painting",
    textilesandfabricsofindiamanufacturingprocessPrinting:"https://icvtesting.nvli.in/rest-v1/textiles-and-fabrics-of-india/type-of-textile/printing",

    // north east 

    northeastarchive:"https://icvtesting.nvli.in/rest-v1/north-east-archive" ,
    northeastarchivecultureheritage:"https://icvtesting.nvli.in/rest-v1/north-east-archive/culture-heritage",
    northeastarchivecapitalcitiesnortheastindia:"https://icvtesting.nvli.in/rest-v1/north-east-archive/capital-cities-north-east-india",
    northeastarchivetalesfromthehinterland:"https://icvtesting.nvli.in/rest-v1/tales-from-the-hinterland",
    northeastarchiveunsungheroes:"https://icvtesting.nvli.in/rest-v1/north-east-archive/unsung-heroes",
    northeastarchivebooksnortheastindia:"https://icvtesting.nvli.in/rest-v1/books-north-east-india",
  }
  const ApiListHindi = {
    stories: "https://icvtesting.nvli.in/hi/rest-v1/stories-filter",
    snippets: "https://icvtesting.nvli.in/hi/rest-v1/snippets",
  "3DExplorationsvirtualwalkthrough":"https://icvtesting.nvli.in/hi/rest-v1/virtual-walkthrough",
    allcategories: "https://icvtesting.nvli.in/hi/rest/all-categories",
    // historic cities
    historiccitiesofindia:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities",
    historiccitiesofindiadelhi:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities",
    // Ahmedabad

    MoCorganization:"https://icvtesting.nvli.in/hi/rest-v1/moc-organisations",
  historiccitiesofindiaahmedabadread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/ahmedabad/ahmedabad-read",
  historiccitiesofindiaahmedabadsee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/ahmedabad/ahmedabad-see",
  historiccitiesofindiaahmedabadwatch: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/ahmedabad/glimpses-of-ahmedabad",
    // Lucknow
  historiccitiesofindialucknowread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/lucknow/lucknow-read",
  historiccitiesofindialucknowsee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/lucknow/lucknow-see",
  historiccitiesofindialucknowwatch: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/lucknow/glimpses-of-lucknow",
     // Patna
  historiccitiesofindiapatnaread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/patna/patna-read",
  historiccitiesofindiapatnasee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/patna/patna-see",
  historiccitiesofindiapatnaglimpse: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/patna/glimpses-of-patna",
    //north delhi
    historiccitiesofindianorthdelhiread:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/north-delhi/north-delhi-read",
    historiccitiesofindianorthdelhisee:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/north-delhi/north-delhi-see",
    historiccitiesofindianorthdelhiglimpse:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/north-delhi/glimpses-of-north-delhi",
    // central delhi
    historiccitiesofindiacentraldelhiread:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/central-delhi/central-delhi-read",
    historiccitiesofindiacentraldelhisee:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/central-delhi/central-delhi-see",
    historiccitiesofindiacentraldelhiglimpse:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/central-delhi/glimpses-of-central-delhi",
    // mehrauli
    historiccitiesofindianmehrauliread:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/mehrauli/mehrauli-read",
    historiccitiesofindianmehraulisee:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/mehrauli/mehrauli-see",
    historiccitiesofindianmehrauliwatch:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/mehrauli/glimpses-of-mehrauli",
    // sahjahanabad
    historiccitiesofindiashahjahanabadread:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/shahjahanabad/shahjahanabad-read",
    historiccitiesofindiashahjahanabadsee:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/shahjahanabad/shahjahanabad-see",
    historiccitiesofindiashahjahanabadglimpse:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/shahjahanabad/glimpses-of-shahjahanabad",
    // Kolkata
  historiccitiesofindiakolkataread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/kolkata/kolkata-read",
  historiccitiesofindiakolkotasee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/kolkata/kolkata-see",
  historiccitiesofindiakolkatawatch: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/kolkata/glimpses-of-kolkata",
    // Varanasi
  historiccitiesofindiavaranasiread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/varanasi/varanasi-read",
  historiccitiesofindiavaranasisee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/varanasi/varanasi-see",
  historiccitiesofindiavaranasiwatch: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/varanasi/glimpses-of-varanasi",
    //nizzamudin
    historiccitiesofindianizamuddinread:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/nizamuddin/nizamuddin-read",
    historiccitiesofindianizamuddinsee:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/nizamuddin/nizamuddin-see",
    historiccitiesofindianizamuddinglimpse:
      "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/nizamuddin/glimpses-of-nizamuddin",
    // Bhopal
  historiccitiesofindiabhopalread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/bhopal/bhopal-read",
  historiccitiesofindiabhopalsee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/bhopal/bhopal-see",
  historiccitiesofindiabhopalglimpse: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/bhopal/glimpses-of-bhopal",
    // Madurai
  historiccitiesofindiamadurairead: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/madurai/madurai-read",
  historiccitiesofindiamaduraisee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/madurai/madurai-see",
  historiccitiesofindiamaduraiwatch: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/madurai/glimpses-of-madurai",
    // Thanjavur
  historiccitiesofindiathanjavurread: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/thanjavur/thanjavur-read",
  historiccitiesofindiathanjavursee: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/thanjavur/thanjavur-see",
  historiccitiesofindiathanjavurwatch: "https://icvtesting.nvli.in/hi/rest-v1/historic-cities/thanjavur/glimpses-of-thanjavur",
    // freedom archives api
    freedomarchive: "https://icvtesting.nvli.in/hi/rest-v1/freedom-archive",
    freedomarchiverarebooks:
      "https://icvtesting.nvli.in/hi/rest-v1/freedom-archive/rare-books",
    freedomarchiveimages:
      "https://icvtesting.nvli.in/hi/rest-v1/freedom-archive/images",
    freedomarchivearchivalrecords:
      "https://icvtesting.nvli.in/hi/rest-v1/freedom-archive/archival-records",
    freedomarchivemuseum:
      "https://icvtesting.nvli.in/hi/rest-v1/freedom-archive/museum",
    freedomarchiveunsungheroes:
      "https://icvtesting.nvli.in/hi/rest-v1/unsung-heroes",
    freedomarchivenewspaperclippings:
      "https://icvtesting.nvli.in/hi/rest-v1/freedom-archive/newspaper-clippings",
    // timeless trends
    timelesstrends:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends-homepage",
    timelesstrendsclothing:
      !location.pathname.includes("history") ||
      !location.pathname.includes("title=")
        ? "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/clothing"
        : "https://icvtesting.nvli.in/hi/rest-v1/history-clothing-ancient-india",
    timelesstrendsclothingall:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/clothing",
    timelesstrendsaccessories:
      !location.pathname.includes("history") ||
      !location.pathname.includes("title=")
        ? "https://icvtesting.nvli.in/hi/rest-v1/timeless-trends/accessories"
        : "https://icvtesting.nvli.in/hi/rest-v1/history-accessories-ancient-india",
    timelesstrendsaccessoriesall:
      "https://icvtesting.nvli.in/hi/rest-v1/timeless-trends/accessories",
    timelesstrendsboardgames:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/boardgames",
    timelesstrendsboardgamesall:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/boardgames",
    timelesstrendshairstyles:
      !location.pathname.includes("history") ||
      !location.pathname.includes("title=")
        ? "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/hairstyles"
        : "https://icvtesting.nvli.in/hi/rest-v1/history-hairstyle-ancient-india",
    timelesstrendshairstylesall:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/hairstyles",
    timelesstrendsbooks:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/books",
    timelesstrendsvideostories:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/video-stories",
    timelesstrendsphotoessay:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/photo-essays",
    timelesstrendssnippets:
      "http://icvtesting.nvli.in/hi/rest-v1/timeless-trends/snippets-stories",
 
    // ajanta caves
 
    ajantacavesearly: "https://icvtesting.nvli.in/hi/rest-v1/ajanta-caves",
    ajantacaveslater: "https://icvtesting.nvli.in/hi/rest-v1/ajanta-caves",
    //jewels of nizams
    jewelleryOfTheNizams:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams",
    jewelleryOfTheNizamshistory:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams/history",
    jewelleryOfTheNizamsanecdotes:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams/anecdotes",
    jewelleryOfTheNizamsprincesses:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams/Princess",
    jewelleryOfTheNizamseconomy:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams/economy",
    jewelleryOfTheNizamssociety:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams/society",
    jewelleryOfTheNizamsjewels:
      "https://icvtesting.nvli.in/hi/rest-v1/jewellery-of-the-nizams/jewels",
    othercollections:
      "https://icvtesting.nvli.in/hi/rest-v1/other-collections-filter",
    archives: "https://icvtesting.nvli.in/hi/rest-v1/archive",
    audios: "https://icvtesting.nvli.in/hi/rest/audios",
    videos: "https://icvtesting.nvli.in/hi/rest-v1/videos-filter",
    manuscripts: "https://icvtesting.nvli.in/hi/rest-v1/manuscripts",
    rarebooks: "https://icvtesting.nvli.in/hi/rest-v1/rarebooks",
    images: "https://icvtesting.nvli.in/hi/rest-v1/images-filter",
    ebooks: "https://icvtesting.nvli.in/hi/rest-v1/ebooks",
    photoarchives: "https://icvtesting.nvli.in/hi/rest-v1/photo-archive",
    photoessays: "https://icvtesting.nvli.in/hi/rest-v1/photo-essays",
    gazettesandgazetteers:
      "https://icvtesting.nvli.in/hi/rest-v1/gazetteers-filter",
    museumcollections:
      "https://icvtesting.nvli.in/hi/rest-v1/museums-collection",
    researchpapers:
      "https://icvtesting.nvli.in/hi/rest-v1/research-papers-filter",
    reportsandproceedings:
      "https://icvtesting.nvli.in/hi/rest-v1/reports-and-proceedings",
    paintingsportfoliopaintings:
      "http://icvtesting.nvli.in/hi/rest-v1/paintings",
    paintingsmuseumpaintings:
      "https://icvtesting.nvli.in/hi/rest-v1/painting-collections/museum-paintings",
    fortsofindiatalesofforts:
      "https://icvtesting.nvli.in/hi/rest-v1/forts-of-india/tales-of-forts",
    fortsofindiadiscoveringthefortsofindia:
      "https://icvtesting.nvli.in/hi/rest-v1/forts-of-india/discovering-the-forts-of-india",
    fortsofindiahistory:
      "https://icvtesting.nvli.in/hi/rest-v1/forts-of-india/history",
    fortsofindiararebooks:
      "https://icvtesting.nvli.in/hi/rest-v1/forts-of-india/rarebooks",
    fortsofindiaunderstandingforts: !location.pathname.includes(
      "title=FEATURES"
    )
      ? "https://icvtesting.nvli.in/hi/rest-v1/forts-of-india/understanding-forts"
      : "https://icvtesting.nvli.in/hi/rest-v1/forts-of-india/understanding-forts/features",
 
    fortsofindiafortsandthefreedomstruggle:
      "https://icvtesting.nvli.in//hi/rest-v1/forts-of-india/forts-and-freedom-struggle",
    districtsofdefiance:
      "https://icvtesting.nvli.in/hi/rest-v1/digital-district-repository",
    diistrictsofdefiancedistrictrepository:
      "https://icvtesting.nvli.in/hi/rest-v1/district-repository",
 
    //  foodandculture
    foodandculture: "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture",
    foodandcultureevolutionofindiangastronomy:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/evolution-of-indian-gastronomy",
    foodandculturecuisinesofindia:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india",
    foodandculturecuisinesofindianorth:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india/north",
    foodandculturecuisinesofindiaeast:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india/east",
    foodandculturecuisinesofindiawest:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india/west",
    foodandculturecuisinesofindiasouth:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india/south",
    foodandculturecuisinesofindianortheast:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-India/north-east",
    foodandculturecuisinesofindiacentral:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india/central",
    foodandculturecuisinesofindiadistinctivecuisine:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/cuisines-of-india/distinctive-cuisine",
    foodandculturecuisinesofindiastreetfoodofindia:
      "https://icvtesting.nvli.in/hi/rest/food-and-culture/cuisines-of-india/street-food-of-india",
    foodandculturetimelessrecipes:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/timeless-recipes",
    foodandculturetimelessrecipesmaincourse:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/timeless-recipes/main-course",
    foodandculturetimelessrecipessnacks:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/timeless-recipes/snacks",
    foodandculturetimelessrecipesdesserts:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/timeless-recipes/desserts",
    foodandculturetimelessrecipesaccompaniments:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/timeless-recipes/accompaniments",
    foodandculturespicesandherbs:
      "https://icvtesting.nvli.in//hi/rest-v1/food-and-culture/spices-and-herbs",
    foodandcultureraretextsoncuisine:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/rare-texts-on-cuisine",
    foodandculturefoodandfestivals:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/food-and-festivals",
    foodandculturefoodimagesofdiversity:
      "https://icvtesting.nvli.in/hi/rest-v1/food-and-culture/images-of-diversity",
 
    // festivals of india
 
    festivalsofindiapanindiafestivals:
      "https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/pan-indian-festivals",
      festivalsofindiafolkfestivalscelebratingnature:"https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/folk-festivals/Celebrating-Nature",
   festivalsofindiatribalfestworshipingnature:"https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/tribal-festivals/worshipping-nature",
 
    festivalsofindiafolkfestivalssocialtraditions:
      "https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/folk-festivals/Social-Traditions",
    festivalsofindiafolkfestivalshonoringdeities:
      "https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/folk-festivals/Honouring-Deities",
   
    festivalsofindiatribalfestveneratingancestorsdeities:
      "https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/tribal-festivals/venerating-ancestors-deities",
    festivalsofindiafairspiligrimagesfairs:
      "https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/fairs-pilgrimages/fairs",
    festivalsofindiafairspiligrimagespilgrims:
      "https://icvtesting.nvli.in/hi/rest-v1/festivals-of-India/fairs-pilgrimages/pilgrimage",
 
    // Intangible cultural heritage
 
    intangibleculturalheritage:
      "https://icvtesting.nvli.in/hi/rest-v1/intangible-cultural-heritage",
    intangibleculturalheritageoraltraditionsandexpressions:
      "https://icvtesting.nvli.in/hi/rest-v1/intangible-cultural-heritage/oral-traditions-and-expressions",
    intangibleculturalheritageperformingarts:
      "https://icvtesting.nvli.in/hi/rest-v1/intangible-cultural-heritage/performing-arts",
    intangibleculturalheritageknowledgeandpracticesconcerningnatureandtheuniverse:
      "https://icvtesting.nvli.in/hi/rest-v1/intangible-cultural-heritage/knowledge-and-practices-concerning-nature-and-the-universe",
    intangibleculturalheritagetraditionalcraftsmanship:
      "https://icvtesting.nvli.in/hi/rest-v1/intangible-cultural-heritage/traditional-craftsmanship",
    intangibleculturalheritagesocialpracticesritualsandfestiveevents:
      "https://icvtesting.nvli.in/hi/rest-v1/intangible-cultural-heritage/social-practices-rituals-and-festive-events",
 
    // flagship events
     flagshipevents: "https://icvtesting.nvli.in/hi/rest-v1/flagship-events",
     flagshipeventsinternationalmuseumexpo:
     "https://icvtesting.nvli.in/hi/rest-v1/flagship-events/international-museum-expo",
     flagshipeventsfestivaloflibraries:
     "https://icvtesting.nvli.in/hi/rest-v1/flagship-events/festival-of-libraries",
      flagshipeventsIndianArtArchitectureandDesignBiennale:
      "https://icvtesting.nvli.in/hi/rest-v1/flagship-events/Indian-Art-Architecture-and-Design-Biennale",
   
   
   
      // musical instruments of india Api
    musicalinstrumentsofindia:
      "https://icvtesting.nvli.in/hi/rest-v1/musical-instruments-of-india",
    musicalinstrumentsofindiaavanaddhavadya:
      "https://icvtesting.nvli.in/hi/rest-v1/musical-instruments/avanaddha-vadya",
    musicalinstrumentsofindiatatvadya:
      "https://icvtesting.nvli.in/hi/rest-v1/musical-instruments/tat-vadya",
    musicalinstrumentsofindiaghanvadya:
      "https://icvtesting.nvli.in/hi/rest-v1/musical-instruments/ghan-vadya",
    musicalinstrumentsofindiasushirvadya:
      "https://icvtesting.nvli.in/hi/rest-v1/musical-instruments/sushir-vadya",
    musicalinstrumentsofindiaincredibletexts:
      "https://icvtesting.nvli.in/hi/rest-v1/musical-instruments-of-india/incredible-texts",
    //unesco categories Api
    unesco: "https://icvtesting.nvli.in/hi/rest-v1/unesco",
    unescoglobalnetworkoflearningcities:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/global-network-of-learning-cities",
    unescoglobalgeoparks:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/global-geoparks",
    unescointangibleculturalheritage:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/intangible-cultural-heritage",
    unescobiospherereserves:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/biosphere-reserves",
    unescomemoryoftheworld:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/memory-of-the-world",
    unescocreativecitiesnetwork:
      "https://icvtesting.nvli.in/hi/prest-v1/unesco/creative-cities-network",
    unescomemoryoftheworld:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/memory-of-the-world",
    unescoworldheritagesites:
      "https://icvtesting.nvli.in/hi/rest-v1/unesco/world-heritage-sites",
 
    //Retrieved artifact
    retrievedartefactsofindia:
      "https://icvtesting.nvli.in/hi/rest-v1/retrieved-artefacts-of-india",
    retrievedartefactsofindiareclaimedrelics:
      "https://icvtesting.nvli.in/hi/rest-v1/retrieved-artefacts-of-india/reclaimed-relics",
    retrievedartefactsofindiaartefactchronicles:
      "https://icvtesting.nvli.in/hi/rest-v1/retrieved-artefacts-of-india/artefact-chronicles",
    retrievedartefactsofindiabooksindianartandiconography:
      "https://icvtesting.nvli.in/hi/rest-v1/retrieved-artefacts-of-india/books-indian-art-and-iconography",
 
    // textiles
    textilesandfabricsofindiatextilestales:
      "https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/textiletales",
      textilesandfabricsofindiatrade:
      "https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/trade",
    textilesandfabricsofindiaArtisans:
      "https://icvtesting.nvli.in/hi/rest-v1/textiles/artisan",
 
     textilesandfabricsofindiaTextilesandfabricsofindianstate:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/textilestate",
    textilesandfabricsofindiahistory:"https://icvtesting.nvli.in/hi/rest-v1/textile-and-febrics-of-india/history",
    textilesandfabricsofindiamanufacturingprocess:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/manufacturing-technique",
    textilesandfabricsofindiaartifact:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/artifacts",
    textilesandfabricsofindiafreedommovementandtextiles:"https://icvtesting.nvli.in/hi/rest-v1/INDIGO-DYE-AND-REVOLT",
    textilesandfabricsofindiatypeoftextiles:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/type-of-textile",
    textilesandfabricsofindiatypeoftextilesWeaving:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/type-of-textile/weaving",
    textilesandfabricsofindiatypeoftextilesEmbroidery:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/type-of-textile/embroidery",
    textilesandfabricsofindiatypeoftextilesDyeing:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/type-of-textile/dyeing",
    textilesandfabricsofindiatypeoftextilesPainting:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/type-of-textile/painting",
    textilesandfabricsofindiatypeoftextilesPrinting:"https://icvtesting.nvli.in/hi/rest-v1/textiles-and-fabrics-of-india/type-of-textile/printing",
   
 
     // north east
 
    northeastarchive:"https://icvtesting.nvli.in/hi/rest-v1/north-east-archive" ,
    northeastarchivecultureheritage:"https://icvtesting.nvli.in/hi/rest-v1/north-east-archive/culture-heritage",
    northeastarchivecapitalcitiesnortheastindia:"https://icvtesting.nvli.in/hi/rest-v1/north-east-archive/capital-cities-north-east-india",
    northeastarchivetalesfromthehinterland:"https://icvtesting.nvli.in/hi/rest-v1/tales-from-the-hinterland",
    northeastarchiveunsungheroes:"https://icvtesting.nvli.in/hi/rest-v1/north-east-archive/unsung-heroes",
    northeastarchivebooksnortheastindia:"https://icvtesting.nvli.in/hi/rest-v1/books-north-east-india",
  };
  


  // Extract and format pageName from URL
  const filteredArr = location.pathname
    .split("/")
    .filter(
      (element) =>
        !element.includes("page=") &&
        !element.includes("nid=") &&
        !element.includes("title=") &&
        !element.includes("type=") &&
        !element.includes("lang=hi") &&
        !element.includes("searchtext=")&&
        !element.includes("searchkeyword=")&&
        !element.includes("category=")&&
        !element.includes("state=")&&
        !element.includes("district=")
    );
  const pagename = filteredArr.join("").replace(/-/g, "");


  useEffect(() => {
    setData(location?.pathname?.split('/'));
}, [location.pathname,dcTypevalue]);

useEffect(()=>{
  setResponse({"ok":true})
  updateFetchedData([])
  setTotalPages(0)
  setTotalRecord(0)
  
  },[location.pathname])
useEffect(() => {
    data.forEach((x) => {
        if (x.includes("page")) {
            setPageNumber(+x.split("=")[1]);
        } else if (x.includes("title")) {
            const title = x.split("=")[1];
            
            const encodedTitle = decodeURIComponent(title).split('').join("");
            setTitle(title);
        } else if (x.includes("nid")) {
            setNid(+x.split("=")[1]);
        }
        else if (x.includes("searchtext")) {
          setSearchQuery(x.split("=")[1]);
      }
      else if (x.includes("searchkeyword")) {
        setKeySearchQuery(x.split("=")[1]);
    }
      else if (x.includes("category=")) {
        setCategoryName(x.split("=")[1]);
    }
    else if (x.includes("state=")) {
      setStateName(x.split("=")[1]);
  }
  else if (x.includes("district=")) {
    setDistrictName(x.split("=")[1]);
}
        else{
            setPageNumber(null)
            setTitle(null)
            setNid(null)
            setSearchQuery("")
            setDistrictName("")
            setCategoryName("")
            setDistrictName("")
            setKeySearchQuery("")
            
        }
    });
}, [data, pageNumber]);

useEffect(()=>{
  const url=location.pathname.split("/").filter((data)=>{
    return data.includes("type=")
  }).join("").replaceAll("_new_line","%0A").replace("type=","")
  
  
  const apiUrl = `${!location.pathname.includes("lang=hi") 
  ? ApiList[pagename] 
  : ApiListHindi[pagename]}?page=${(pageNumber == null || pageNumber == 0) 
  ? 0 
  : (pageNumber - 1)}&${searchQuery.trim() !== "" 
  ? `search_api_fulltext=${encodeURIComponent(searchQuery)}&` 
  : ""}${keySearchQuery.trim() !== "" 
  ? `keyword=${encodeURIComponent(keySearchQuery)}&` 
  : ""}${url}`;

    const timer = setTimeout(() => {
      setApi((prevQueue) => [...prevQueue, apiUrl])
    }, 1000); 
  
    return () => clearTimeout(timer)
},[location.pathname,pageNumber,searchQuery,keySearchQuery])

useEffect(() => {
  let isCancelled = false;

  const fetchSequentialData = async () => {
    while (api.length > 0) {
      const currentApi = api.shift(); // Get the first API from the queue

      try {
        const response = await fetch(currentApi);
        setResponse(response)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        if (isCancelled) return;
        updateFetchedData(jsonData?.results || []);
        setTotalPages(jsonData?.pager?.total_pages|| 0);
        setTotalRecord(jsonData?.pager?.total_results || 0);
        setItemsPerPage(jsonData?.pager?.items_per_page || 0);
        setCurrentPage(jsonData?.pager?.current_page || 0);
        if(location.pathname.includes("district-repository")){
          setFilterSearchdData(jsonData.facets[0][0].field_ddr_category|| [])
          setFilterSearchdData2(jsonData.facets[2][0].field_states_uts_|| [])
          setFilterSearchdData3(jsonData.facets[1][0].field_district|| [])

        }
        if(location.pathname.includes("archives")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_type_1|| [])
        }
        if(location.pathname.includes("audios") ){
          setFilterSearchdData(jsonData.facets[1][0].field_dc_language_iso|| [])
          setFilterSearchdData2(jsonData.facets[2][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("videos") ){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_format_duration|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_language_iso|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("globalsearch") ){
          setFilterSearchdData(jsonData.facets.field_parent_library_name
            || [])
            setFilterSearchdData2(jsonData.facets.field_dc_type)
        }
        if(location.pathname.includes("e-books")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_date_copyright|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_date_issued|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_language_iso|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_publisher_1|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("images")){
          setFilterSearchdData(jsonData.facets[1][0].field_parent_library_name|| [])
          setFilterSearchdData2(jsonData.facets[0][0].field_dc_type|| [])
        }
        if(location.pathname.includes("manuscripts")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_contributor_author_1|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_coverage_temporal|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_language_iso|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_subject_1|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("museum-collections")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_coverage_spatial|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_coverage_temporal|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_format_material_1|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_publisher_1|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_dc_subject_1|| [])
          setFilterSearchdData6(jsonData.facets[5][0].field_dc_type_1|| [])
          setFilterSearchdData7(jsonData.facets[6][0].field_parent_library_name|| [])       
        }
        if(location.pathname.includes("other-collections")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_date_copyright|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_language_iso|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_subject_1|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_type_1|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("portfolio")){
          setFilterSearchdData2(jsonData.facets[0][0].field_choose_portfolio|| [])
         
        }
        if(location.pathname.includes("museum-paintings")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_coverage_spatial|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_coverage_temporal|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_format_material_1|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_publisher_1|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_dc_subject_1|| [])
          setFilterSearchdData6(jsonData.facets[5][0].field_dc_type_1|| [])
          setFilterSearchdData7(jsonData.facets[7][0].field_parent_library_name|| [])
         
        }
        if(location.pathname.includes("portfoliopaintings")){
          setFilterSearchdData(jsonData.facets[0][0].field_choose_portfolio|| [])
        }
        if(location.pathname.includes("photo-archives")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_date_issued|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_subject_1|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("rare-books")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_contributor_author_1|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_date_copyright|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_language_iso|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_publisher_1|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_dc_subject_1|| [])
          setFilterSearchdData6(jsonData.facets[5][0].field_parent_library_name|| [])
        }
        if(location.pathname.includes("reports-and-proceedings")){
          setFilterSearchdData(jsonData.facets[0][0].field_dc_contributor_author_1|| [])
          setFilterSearchdData2(jsonData.facets[1][0]. field_dc_publisher_1|| [])
          setFilterSearchdData3(jsonData.facets[2][0]. field_dc_type|| [])
          setFilterSearchdData4(jsonData.facets[3][0]. field_parent_library_name|| [])
        }
        if(location.pathname.includes("research")){
          setFilterSearchdData(jsonData.facets[0][0].field_parent_library_name|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_dc_type_1|| [])
        }
        if(location.pathname.includes("gazettes-and-gazetteers")){
          setFilterSearchdData(jsonData.facets[0][0].field_cdwa_location|| [])
          setFilterSearchdData2(jsonData.facets[1][0]. field_dc_contributor_editor_1|| [])
          setFilterSearchdData3(jsonData.facets[2][0].field_dc_coverage_spatial|| [])
          setFilterSearchdData4(jsonData.facets[3][0].field_dc_date_copyright|| [])
          setFilterSearchdData5(jsonData.facets[4][0].field_dc_date_issued|| [])
          setFilterSearchdData6(jsonData.facets[5][0].field_dc_publisher_1|| [])
          setFilterSearchdData7(jsonData.facets[6][0].field_dc_type|| [])
        }
        if(location.pathname.includes("reclaimed-relics")){
          setFilterSearchdData(jsonData.facets[0][0].field_origin|| [])
          setFilterSearchdData2(jsonData.facets[1][0].field_retrieved_material|| [])
        }
        if(location.pathname.includes("stories")){
          setFilterSearchdData(jsonData.facets[0][0].title_1|| [])
         
        }
   
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };

  fetchSequentialData();

  return () => {
    isCancelled = true;
  };
}, [api]);

  return (
    <ContextData.Provider
      value={{
        fetchedData,
        title,
        nid,
        totalPages,
        total_items,
        items_per_page,
        current_page,
        location,
        pageName,
        pageNumber,
        filterSearchdata,
        filterSearchdata2,
        filterSearchdata3,
        filterSearchdata4,
        filterSearchdata5,
        filterSearchdata6,
        filterSearchdata7,
        searchQuery,
        error,
        response,
        statename,
        categoryname,
        districtname
      }}
    >
      {children}
    </ContextData.Provider>
  );
};

export default FetchApiData;
