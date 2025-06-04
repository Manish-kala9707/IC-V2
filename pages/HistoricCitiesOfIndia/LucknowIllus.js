import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './LucknowIllus.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HCLIicon from '../image/Textiles 2.png';
import HCLIQR from '../image/QR 1.png';
import HCLIShare from '../image/share-2.png';
import LucknowIllusbnr from '../image/bathtowelbig 1.png';

function LucknowIllus() {
    return (
        <>
            <div >
                <div className='parent-container'>
                    <img src={LucknowIllusbnr} className='luckillusbanner' alt='Moc Banner' />

                </div>

                <Container >

                    <Row style={{ marginTop: '20px' }}>
                        <Col className='luckilluicon '>
                            <img src={HCLIicon} alt='Archive Icon' />

                        </Col>
                        <Col xs={9} className='luckillutitle' >

                            Traditional and Historical account of the Kohinoor by Sir T. Metcalfe No 21
                        </Col>
                        <Col className='luckilluqrcode'>

                           {/*  <img src={HCLIQR} alt='Archive Icon' /> */}
                            {/* <img src={ArcShare} alt='Archive Icon' /> */}
                        </Col>
                        <Col >
                            {/* <img src={HCLIShare} alt='Archive Icon' /> */}

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>

                        <Col>
                            <p className='luckillupara'>
                                Situated close to Malihabad, summers in Lucknow mean an influx of freshly plucked mangoes. Interestingly, the most famous mango of Malihabad, the Dussehri, has its roots in Kakori-quite literally!
                                It is said that in a small village named Dussehri, there stands a mango tree that was once owned by the Nawabs. From here began the sweet journey of this mango!
                                Other popular varieties of mango- chausa and langda also flood Lucknow during the hot summers.
                                In and around Lucknow, these mangoes are known by their poetic names- Shams-ul-asmar, husnara, mehr-ul-asmar, and samar bahisht.
                            </p>
                        </Col>

                    </Row>
                </Container>

            </div>
        </>
    )
}

export default LucknowIllus
