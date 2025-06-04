import React, { useEffect, useState, useContext } from "react";
import EarlyBan from "../../image/EarlyBan.png";
import { Container, Row, Col } from "react-bootstrap";
import CavesImg1 from "../../image/cavesimg1.png";
import CavesImg2 from "../../image/cavesimg2.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Divider from "../../image/SwirlDivider.png";
import EarlyImg1 from "../../image/earlyimg1.png";
import EarlyImg2 from "../../image/earlyimg2.png";
import { ContextData } from "../Store/FetchApiData";
import EarlyImg3 from "../../image/earlyimg3.png";
import EarlyImg4 from "../../image/earlyimg4.png";
import "./EarlyCaves.css";
import Card from "../../components/Card/Card";
import CardDetails from "../../components/Card/CardDetails";
import ShimmerCardDetails from "../../components/Card/ShimmerCardDetails";
import AjantaCardDetails from "./AjantaCardDetails";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
function EarlyCaves() {
  const { t } = useTranslation();
  const location = useLocation();
  const [earlyChaityagrah, setEarlyChaityagrah] = useState([]);
  const [earlyViharas, setEarlyViharas] = useState([]);
  const [laterChaityagrah, setLaterChaityagrah] = useState([]);
  const [laterViharas, setLaterViharas] = useState([]);
  const { fetchedData, nid } = useContext(ContextData);
  useEffect(() => {
    const fetchData = async () => {
      const response1 = await fetch(
        "https://icvtesting.nvli.in/rest-v1/ajanta-caves?field_ajanta_cave_type_value=Early Cave&field_type_of_early_cave_later_c_value_1=Early Vihāras"
      );
      const data1 = await response1.json();
      setEarlyViharas(data1.results.reverse());
      const response2 = await fetch(
        "https://icvtesting.nvli.in/rest-v1/ajanta-caves?field_ajanta_cave_type_value=Early Cave&field_type_of_early_cave_later_c_value_1=Early Chaityagṛhas"
      );
      const data2 = await response2.json();
      setEarlyChaityagrah(data2.results.reverse());
    };
    fetchData();
  }, []);

  return (
    <>
      {location && location?.pathname?.includes("title") ? (
        fetchedData && fetchedData.length > 0 ? (
          [...earlyChaityagrah, ...earlyViharas]
            .filter((x) => x.nid == nid)
            .map((x) => {
              return <AjantaCardDetails key={x.nid} detailData={x} />;
            })
        ) : (
          <ShimmerCardDetails />
        )
      ) : (
        <>
          <div className="ajanta-earlycaves-parent-container">
            <img
              src={EarlyBan}
              className="ajanta-earlycaves-banner"
              alt="Free Banner"
            />
          </div>

          <Container className="archive-header">
            <Row>
              <Col>
                <h4>{t("Early Caves")}</h4>
              </Col>
            </Row>
          </Container>
          <Container className="ajanta-earlycaves-cover">
            <Row className="justify-content-md-center">
              <Col>
                {location.pathname.includes("lang=hi") ? (
                  <p>
                    अजंता की पहली गुफाएँ ईसा पूर्व दूसरी शताब्दी और ईसा की पहली
                    शताब्दी के बीच बनाई गई थीं। ये गुफाएँ चट्टानों को काटकर बनाए
                    गए बौद्ध मंदिरों के समूह का हिस्सा हैं जो इस क्षेत्र में
                    सहयाद्रि या पश्चिमी घाट की ढलानों पर स्थित हैं। अजंता की
                    आरंभिक गुफाएँ उपासकों या आम लोगों, भिक्षुओं, व्यापारियों और
                    आम लोगों द्वारा किए गए दान से बनाई गई थीं। गुफा 12 में एक
                    वणिज या व्यापारी द्वारा बनाया गया एक नक्काशीदार शिलालेख है।
                    इसी तरह, गुफा 10 के लिए लकड़ी के अग्रभाग (जो बच नहीं पाया)
                    सहित गुफाओं के कुछ हिस्सों को व्यक्तिगत दान के माध्यम से
                    बनाया गया था। इस आरंभिक काल में, हमें दो चैत्यगृह या सभा हॉल
                    मिलते हैं जहाँ उपासक एकत्रित होते थे। इस अवधि के दौरान,
                    उपास्य या आवासों के साथ अवरक या कक्ष भी बनाए गए थे। आमतौर पर
                    विहार के नाम से जाने जाने वाले भिक्षु ऐसी तीन गुफाओं (12, 13
                    और 15ए) में रहते थे।
                  </p>
                ) : (
                  <p>
                    The first caves at Ajanta were made sometime between the 2nd
                    century BCE and 1st century CE. These caves are part of a
                    constellation of rock-cut Buddhist temples that dot the
                    slopes of the Sahayādri or western ghats in the region. The
                    Early caves at Ajanta were made through donations made by
                    upāsakas or laity, monks, traders and ordinary people. There
                    is a chiselled inscription in Cave 12 made by a vaṇija or
                    merchant. Similarly, parts of the caves including a wooden
                    facade (that didn't survive) for Cave 10 were made through
                    individual donations. In this Early period, we find two
                    chaityagṛha’s or congregation halls where worshippers
                    assembled. During this period, upāsaya or dwellings with
                    avarakas or cells were also created. Commonly known as
                    vihāras, the monks resided in three such caves (12, 13 and
                    15A).
                  </p>
                )}

                {location.pathname.includes("lang=hi") ? (
                  <p>
                    अजंता में बने ये चट्टान-काटे हुए मंदिर अपने लकड़ी के
                    पूर्ववर्तियों की तरह ही डिजाइन और सौंदर्यबोध में बने हैं। हम
                    अभी भी लकड़ी के राफ्टर्स द्वारा छोड़े गए निशान पा सकते हैं
                    जो कभी छत को सुशोभित करते थे। बौद्ध धर्म में यह काल
                    अनिकोनिज्म के लिए भी जाना जाता था। बुद्ध को आम तौर पर उनके
                    मानव रूप में नहीं दर्शाया गया था, इसके बजाय उन्हें स्तूप, एक
                    पेड़, छत्र आदि जैसे विभिन्न प्रतीकों के माध्यम से दर्शाया
                    गया था। तो हम गुफा के अंदर चित्रित और बाहर गढ़ी गई कई बुद्ध
                    छवियों के बारे में क्या सोचते हैं? ये 5वीं शताब्दी ई. में
                    साइट पर किए गए जीर्णोद्धार का हिस्सा हैं। बाहर की कई बुद्ध
                    मूर्तियों को भक्तों के दान का श्रेय दिया जाता है। गुफा 10 और
                    9 के अंदर के एप्स में हमें एक स्तूप भी मिलता है। गुफा का
                    डिज़ाइन, जो स्तूप के चारों ओर चलने वाले खंभों के साथ एक
                    यू-आकार का हॉल है, पवित्र स्तूप के चारों ओर परिक्रमा करने के
                    लिए आदर्श लगता है।
                  </p>
                ) : (
                  <p>
                    These rock-cut temples made at Ajanta mimicked their wooden
                    predecessors in design and aesthetic. We can still find
                    markings left behind by wooden rafters that once adorned the
                    ceiling. This period in Buddhism was also known for
                    aniconism. The Buddha was generally not represented in his
                    human form, instead he was represented through various
                    symbols like the stūpa, a tree, parasol etc. So what do we
                    make of the many Buddha images both painted inside the cave
                    and sculpted outside it? These are part of 5th century CE
                    renovations performed at the site. The many Buddha
                    sculptures outside have been attributed to votary donations.
                    At the apse inside Cave 10 and 9 we also find a stūpa. The
                    design of the cave, which is a U-shaped hall with pillars
                    running round the stūpa, seems to be ideal for the
                    performance of circumambulation around the sacred stūpa.
                  </p>
                )}
              </Col>
            </Row>
          </Container>
          <Container className="archive-header">
            <Row>
              <Col lg={6} md={6} sm={12}>
                <Row>
                  <h1>{t("Early Chaitygrah")}</h1>
                </Row>
                <Row>
                  <Card page="/" search_results={earlyChaityagrah} />
                </Row>
              </Col>
              <Col lg={6} md={6} sm={12}>
                <Row>
                  <h1>{t("Early Viharas")}</h1>
                </Row>
                <Row>
                  <Card
                    page="/"
                    search_results={earlyViharas}
                    className="page-content"
                  />
                </Row>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
}

export default EarlyCaves;
