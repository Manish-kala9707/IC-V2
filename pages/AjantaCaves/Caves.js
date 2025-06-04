import React from "react";
import CavesBan from "../../image/CavesBan.png";
import { Container, Row, Col } from "react-bootstrap";
import CavesImg1 from "../../image/cavesimg1.png";
import CavesImg2 from "../../image/cavesimg2.png";
import { useNavigate } from "react-router-dom";
import "./Caves.css";
import { useTranslation } from "react-i18next";

function Caves() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="ajanta-caves-parent-container">
        <img src={CavesBan} className="img-responsive" alt="Free Banner" />
      </div>

      <Container className="ajanta-caves-header">
        <Row>
          <Col>
            <h4>{t("Ajanta Caves")}</h4>
            {/* <SwrilDivider /> */}
          </Col>
        </Row>
      </Container>
      <Container className="ajanta-caves-cover">
        <Row className="justify-content-md-center">
          <Col>
            {location.pathname.includes("lang=hi") ? (
              <p>
                अजंता में यू-आकार की घाटी वाघोरा नदी द्वारा कई शताब्दियों में
                बनाई गई थी। हर वर्षावास या बरसात के मौसम में जब नदी घाटी में
                बहती थी, तो वह परतदार ज्वालामुखीय बेसाल्ट चट्टान को नष्ट कर देती
                थी। यह सोपारा तक फैले प्राचीन व्यापार मार्ग से केवल एक दिन की
                पैदल दूरी पर था। चट्टान हरे-भरे जंगलों के बीच स्थित है, जिसके
                बगल में एक झरना बहता है। यह संघाराम या मठवासी आवास इकाइयाँ बनाने
                के लिए एक आदर्श स्थान था जहाँ भिक्षु एकांतवास कर सकते थे और
                एकत्र हो सकते थे।
              </p>
            ) : (
              <p>
                The U-shaped valley at Ajanta was carved by the Waghora river
                over many centuries. As the river thundered down the valley
                every varṣāvāsa or rainy season, it eroded away the layered
                volcanic basalt rock. It was only a day’s walk from the ancient
                trade route extending to Sopārā. The cliff is set amidst lush
                green forests next to a cascading waterfall. It was an ideal
                spot to create saṅghārāmas or monastic dwelling units where the
                monks could retreat and congregate.
              </p>
            )}

            {location.pathname.includes("lang=hi") ? (
              <p>
                अजंता की गुफाएँ निर्माण के विभिन्न चरणों में हैं। इनका निर्माण
                दो चरणों में हुआ था। प्रारंभिक चरण सातवाहन काल (दूसरी शताब्दी
                ईसा पूर्व से पहली शताब्दी ईसवी तक) के दौरान था। अजंता में पाँच
                प्रारंभिक गुफाएँ हैं, जिनमें दो चैत्यगृह (बौद्धों द्वारा सामूहिक
                पूजा के लिए इस्तेमाल किए जाने वाले स्तूप का स्थान) गुफा 9 और 10,
                और तीन विहार (गुफाएँ जिनमें भिक्षुओं के लिए रहने की जगहें हैं)
                गुफा 12, 13 और 15A शामिल हैं। इन प्रारंभिक गुफाओं का निर्माण
                सामूहिक संरक्षण के माध्यम से किया गया था - भिक्षुओं, व्यापारियों
                और आम लोगों द्वारा किए गए दान से। गुफाओं के कुछ हिस्सों में
                व्यक्तिगत दाताओं के शिलालेख हैं। बाद की गुफाओं की तिथि के बारे
                में काफी बहस हुई है। आम सहमति यह है कि ये गुफाएँ 5वीं शताब्दी
                ईसवी में बनाई गई थीं। अजंता में व्यापक गतिविधि के इस काल की लगभग
                पच्चीस गुफाएँ हैं। इनमें दो चैत्यगृह (गुफा 19 और 26) और अजंता
                में एक नई तरह की गुफा शामिल है - एक प्रकार का विहार जिसमें एक
                बुद्ध मंदिर भी शामिल है। गुफा 1, 2, 16 और 17 में इस अवधि की सबसे
                अच्छी तरह से संरक्षित पेंटिंग हैं। बाद का चरण अपने बड़े पैमाने
                और महत्वाकांक्षा के लिए जाना जाता है और यह अभिजात वर्ग के
                प्रत्यक्ष संरक्षण के बिना संभव नहीं होता। गुफा 16, 17 और 26 के
                बाहर शिलालेख वाकाटक शासक वर्ग और अजंता गुफाओं के बीच एक सीधा
                संबंध दर्शाते हैं।
              </p>
            ) : (
              <p>
                The caves at Ajantā are at different stages of completion. They
                were created in two phases. The Early phase was during the
                Satavahana period (2nd century BCE to 1st century CE). There are
                five Early caves at Ajantā which include two Chaityagṛhas (space
                housing the stūpa used for congregational worship by Buddhists)
                Cave 9 and 10, and three vihāras (caves that have dwelling cells
                for monks) Cave 12, 13 and 15A. These Early caves were built
                through collective patronage - from donations made by monks,
                merchants and common people . Parts of the caves have
                inscriptions from individual donors. There has been considerable
                debate surrounding the dating of the Later caves. The general
                consensus is that these caves were made in the 5th century CE.
                There are about twenty-five caves from this period of extensive
                activity at Ajantā. These include two chaityagṛhas (Cave 19 and
                26) and a new kind of cave type at Ajanta - a type of vihāra
                that also includes a Buddha shrine. Caves 1, 2, 16 and 17 have
                the best preserved paintings from this period. The Later phase
                is known for its bigger scale and ambition and this would not
                have been possible without the direct patronage of the
                aristocrats. Inscriptions outside cave 16, 17 and 26 indicate a
                direct relationship between the Vakataka ruling class and the
                Ajanta caves.
              </p>
            )}
          </Col>
        </Row>
      </Container>

      <div className="ajanta-caves-image-container">
        <div
          onClick={() =>navigate(`${location.pathname}/early`)}
          className="ajanta-caves-image-item"
        >
          <img src={CavesImg1} alt="Image 1" />
          <div className="ajanta-caves-caption">{t("Early caves")}</div>
        </div>

        <div
          onClick={() => navigate(`${location.pathname}/later`)}
          className="ajanta-caves-image-item"
        >
          <img src={CavesImg2} alt="Image 2" />
          <div className="ajanta-caves-caption">{t("Later caves")}</div>
        </div>
      </div>
    </>
  );
}

export default Caves;
