// import React from 'react';
// import '../css/FortsFreedomResultpage.css';
// import { Col, Container, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

// import 'bootstrap/dist/css/bootstrap.min.css';

// // npm install --save video-react react react-dom
// // Controls ://video-react.js.org/components/big-play-button/
// import { Player, BigPlayButton, LoadingSpinner, ControlBar } from 'video-react';
// import '../../node_modules/video-react/dist/video-react.css';

// import Listimg from '../image/ArchivesGolden.png';


// function FortsFreedomResultpage() {
//     return (
//         <>
//             <div>
//                 <section className='ffrimage1'></section>
//                 <section className='text'>
//                     <h2 className='fhresulth2'>The Jhansi Fort: A Siege to Remeber </h2>
//                     <p className='resultp'>The fort of Jhansi immediately reminds us of Rani Lakshmibai, the warrior queen who stood up to the British. She was the focal point around which resistance gathered in the region during the Revolt of 1857, described as the First War of Independence in India. The Jhansi fort was her battleground and a magnet for people who were eager to reclaim their freedom from the notorious British.</p>
//                     <p className='resultp'>
//                         In 1842 CE, Rani Lakshmibai married Gangadhar Rao, who became the ruler of Jhansi in 1843 CE and the couple adopted a child of royal lineage called Anand Rao (renamed Damodar Rao). After the Raja's death in 1853 CE, the British cleverly refused to accept Damodar Rao as a legal heir to the throne and annexed the throne citing the Doctrine of Lapse policy.</p>

//                 </section>

//                 <section className='ffrimage2'></section>
//                 <section className='text'>
//                     <p className='resultp'>
//                         According to this policy, a princely state would be annexed by the British if the ruler was either "manifestly incompetent or died without a male heir”. The invalidation of her son’s right to rule and the arbitrary annexation was sufficient to cause a deep hatred for the British in Rani Lakshmibai as well as the people of her region.</p>

//                     <p className='resultp'>As the revolt broke out in 1857 CE, in Meerut, Lakshmi Bai was proclaimed the regent of Jhansi by the revolutionaries. People from the neighbouring areas headed toward Jhansi to offer their support to the Rani. She proudly proclaimed “mein apni Jhansi nahi dungi” (I will not give my Jhansi) and, along with her supporters, took control of the fort. The siege to recapture the fort from the hands of the rebels went on for several weeks as the Company’s men surrounded it</p>
//                 </section>

//                 <section className='ffrimage3'></section>
//                 <section className='text'>
//                     <p className='resultp'>The writings of Vishnubhat Godse (1827-1904 CE), a poor Brahmin priest who was in Jhansi when the revolt of 1857 broke out, offer a first-hand account of the happenings at Jhansi. The source also claims that the Rani issued a proclamation “We fight for independence. In the words of Lord Krishna, we will, if we are victorious, enjoy the fruits of victory, if defeated and killed on the field of battle, we shall surely earn eternal glory and salvation”.</p>
//                     <p className='resultp'>As the British soldiers arrived to secure their rule in March 1857, they found both the city and the fort well-guarded with heavy guns. Godse tells us, regarding the fort’s defenses, that “…from the seventh day, the fort itself came under heavy bombardment. The Company people had powerful telescopes through which the entire fort and the people working in it could be seen. They discovered that there was only one water source and bombarded it with cannons”.</p>
//                     <p className='resultp'>Rani Lakshmibai demonstrated masterful leadership in defending the fort and kept the British soldiers, led by Sir Hugh Rose, at bay for quite some time. She ensured a good supply of food, water and essential goods in the fort to sustain her defense. However, despite her determination, the British soldiers broke down the south wall of the fort and captured it. As the fort was being taken over, she managed to escape. Legend has it that she jumped from a high wall straight on her horse Badal’s back.</p>
//                 </section>

//                 <section className='ffrimage4'></section>
//                 <section className='text'>
//                     <p className='resultp'>She first reached Kalpi and then Gwalior. At both places, she joined the rebels and fought against the British. However, the British forces were able to overpower them. It is believed that the badly wounded Rani died while still in battle. Even after her death, her bravery was noted in British circles. Sir Hugh Rose wrote later- “She was a man among mutineers”. "She used to dress like a man (with a turban) and rode like one” noted Lord Canning, India's first Viceroy, in his private papers.</p>
//                     <p className='resultp'>The fort at Jhansi embodies her courage and is symbolic of India’s resistance against the rule and unfair policies of the British. Her palace, Rani Mahal, near the fort has been converted into a museum to showcase the weapons used in the siege of the Jhansi fort. This fort preserves our historical legacy, embodies India’s sovereignty and inspires its citizens even today.</p>
//                 </section>

//             </div>

//             <Container className='fortindi-header'>
//                 <Row >
//                     <Col >
//                         <h1>Watch</h1>

//                         {/* <SwrilDivider /> */}
//                     </Col>
//                 </Row>
//             </Container>

//             <Container >
//                 <Player playsInline src="https://videoserver.nvli.in/nvli/ich/CategoryVideos/forts/JhansiVideo.mp4" >

//                     <BigPlayButton position="center" />
//                     <LoadingSpinner />
//                     <ControlBar autoHide={false} className="my-class" />
//                 </Player>
//             </Container>

//             <Container className='fortindi-header'>
//                 <Row >
//                     <Col >
//                         <h1>Explore Archive</h1>

//                         {/* <SwrilDivider /> */}
//                     </Col>
//                 </Row>
//             </Container>

//             <Container>
//                 <Row xs={1} md={3} className="">

//                     <Col >
//                         <Card className='arclistcard'>
//                             <Card.Img src={Listimg} className='listimg' />
//                             <Card.Body>
//                                 <Card.Title >Rani of Jhansi</Card.Title>
//                                 {/* <Card.Text className='arctext'>
//                                 This is a longer card with supporting text below as a natural
//                                 lead-in to additional content. This content is a little bit
//                                 longer.
//                             </Card.Text> */}
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col >
//                         <Card className='arclistcard'>
//                             <Card.Img src={Listimg} className='listimg' />
//                             <Card.Body>
//                                 <Card.Title>The Rani of Jhansi: The Widowed Queen</Card.Title>
//                                 {/*  <Card.Text>
//                                 This is a longer card with supporting text below as a natural
//                                 lead-in to additional content. This content is a little bit
//                                 longer.
//                             </Card.Text> */}
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col >
//                         <Card className='arclistcard'>
//                             <Card.Img src={Listimg} className='listimg' />
//                             <Card.Body>
//                                 <Card.Title>Misc: Mahrani Laxmibai of Jhansi</Card.Title>
//                                 {/*  <Card.Text>
//                                 This is a longer card with supporting text below as a natural
//                                 lead-in to additional content. This content is a little bit
//                                 longer.
//                             </Card.Text> */}
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col >
//                         <Card className='arclistcard'>
//                             <Card.Img src={Listimg} className='listimg' />
//                             <Card.Body>
//                                 <Card.Title className='arctitle'>Samadhi of Rani Laxshmi bai of Jhansi: a View</Card.Title>
//                                 {/*  <Card.Text>
//                                 This is a longer card with supporting text below as a natural
//                                 lead-in to additional content. This content is a little bit
//                                 longer.
//                             </Card.Text> */}
//                             </Card.Body>
//                         </Card>
//                     </Col>

//                     <Col >
//                         <Card className='arclistcard'>
//                             <Card.Img src={Listimg} className='listimg' />
//                             <Card.Body>
//                                 <Card.Title>Uttar Pradesh District Gazetteers: Jhansi</Card.Title>
//                                 {/*  <Card.Text>
//                                 This is a longer card with supporting text below as a natural
//                                 lead-in to additional content. This content is a little bit
//                                 longer.
//                             </Card.Text> */}
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 </Row>

//             </Container>

//         </>
//     )
// }

// export default FortsFreedomResultpage



import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import {  Col, Container, Row } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
// import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import CardDetails from "../components/Card/CardDetails";

import { Filter, Search } from 'react-feather';
import Divider from "../image/SwirlDivider.png";
// import Filter from "../components/Card/Filter";
const FortsFreedomResultpage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [pageNumber, updatePageNumber] = useState([0]);
  const [fetchedData, updateFetchedData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [total_items, setTotalRecord] = useState(0);
  const [detailData, setDetailData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dcTypevalue, setDctypevalue] = useState("");
  const [filterSearchdata, setFilterSearchdData] = useState([]);
  const [cond, setCond] = useState(false);
  let { info, search_results } = fetchedData;
//   let api = `https://indianculture.nvli.in/rest/manuscripts?search_api_fulltext=${searchQuery}&page=${pageNumber}&field_parent_library_name=${dcTypevalue}`;
let api=''
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api);
        const jsonData = await response.json();
        setTotalPages(jsonData.pager.total_pages);
        setTotalRecord(jsonData.pager.total_items);
        if (!cond) {
          setFilterSearchdData(jsonData.rows.facets[0]);
          setCond(true);
        }
        updateFetchedData(jsonData.rows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [pageNumber, searchQuery, dcTypevalue]);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleDctypevalue = (value) => {
    if (dcTypevalue === value) {
      setDctypevalue("");
    } else {
      // Otherwise, set it to the new value
      setDctypevalue(value);
    }
  };
  console.log(detailData,"DD");

  return (
    <div className="App">
      {detailData !== null ? (
        " "
      ) : (
        <Container className="archive-header">
          <Row>
            <Col>
              <h1>Manuscripts</h1>
              <img src={Divider} alt="Caption Divider" style={{ marginTop: "-17px", width: "90px", height: "15px", backgroundColor: "transparent" }} />
            </Col>
          </Row>
        </Container>
      )}
      {detailData !== null ? (
        " "
      ) : (
        <Container style={{ marginTop: "20px" }}>
          <Row>
            <Col className="equal">
              {/* Filter icon */}
              <div onClick={handleShow}>
               <Filter size={40} className="icon-stroke" strokeWidth={1} />
              </div>
              {/* Search bar start */}
              <div className="search-box">
                <button className="btn-search">
                 <Search size={30} className="icon-stroke" strokeWidth={1} />
                </button>
                <input type="text" className="input-search" value={searchQuery} onChange={handleInputChange} placeholder="Type to Search..." />
              </div>
              {/* Search bar end */}
            </Col>

            <Col className="leftplace">
              <p className="showing-result">Showing 1 -16 results of {total_items}</p>
            </Col>
          </Row>
          <Row>
            <Col className="centerplace">
              {/* Filter Catagory btns  */}
              <p className="centerplace">
                <a href="/#" className="underline">
                  All
                </a>
              </p>
              <p className="centerplace">
                <a href="/#" className="underline">
                  A - Z
                </a>
              </p>
              <p className="centerplace">
                <a href="/#" className="underline">
                  Time
                </a>
              </p>
            </Col>
          </Row>

          {/* Filter Side panel start */}
          <Offcanvas show={show} onHide={handleClose} backdrop="static" className="sidepanel">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title style={{ textAlign: "center" }}>Manuscripts Filter</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <div style={{ margin: "0px 0px 10px 30px", backgroundColor: "whitesmoke", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center" }} onClick={() => setDctypevalue("")}>
                Reset
              </div>
              <div>
                {filterSearchdata.length > 0 && (
                <div style={{ boxSizing: "border-box", height: "35vh", display: "flex", overflowY: "scroll" }}>
                {filterSearchdata.map((facet, index) => (
                      <ul key={index}>
                        {facet?.field_parent_library_name?.map((option, index) => (
                          <div key={index}>
                            <label>
                              <input type="checkbox" id={option.values.value} value={option.values.value} checked={dcTypevalue.includes(option.values.value)} onChange={() => handleDctypevalue(option.values.value)} />
                              {option.values.value}
                              <b>({option.values.count})</b>


                              
                            </label>
                          </div>
                        ))}
                      </ul>
                    ))}
                  </div>
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>
          {/* FIlter Side panel end */}
        </Container>
      )}

      {detailData !== null ? (
        <CardDetails detailData={detailData} setDetailData={setDetailData} />
      ) : (
        <Container>
          <div className="row">
            <Card page="/" search_results={search_results} setDetailData={setDetailData} />
          </div>
        </Container>
      )}

      {detailData == null ? <Pagination info={info} pageNumber={pageNumber} totalPages={totalPages} updatePageNumber={updatePageNumber} /> : null}
    </div>
  );
};
export default FortsFreedomResultpage;
