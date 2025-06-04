import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import SwrilDivider from './SwrilDivider';
import "glider-js/glider.min.css";
import Glider from "glider-js/glider.min.js";

const Moc = () => {
    const [IcMoclist, setIcMoclist] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://wzcc.nvli.in/rest/moc-organisations');
            const data = await response.json();
            const sortedData = data.rows.search_results.sort((a, b) => a.title.localeCompare(b.title));
            setIcMoclist(sortedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const glider = new Glider(document.querySelector('.glider'), {
            slidesToShow: 3.3,
            slidesToScroll: 1,
            draggable: true,
            dots: '.dots',
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next',
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2.1,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4.1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });

        return () => {
            if (glider) {
                glider.destroy();
            }
        };
    }, [IcMoclist]);

    return (
        <>
            <Container className='moc-header'>
                <Row>
                    <Col>
                        <h1>MoC Organisations</h1>
                        <SwrilDivider />
                    </Col>
                </Row>
            </Container>
            <main className="main">
                <div className="container">
                    <div className="glider-contain">
                        <div className="glider hide-scrollbar">
                            {IcMoclist.map((item, index) => (
                                <div className="card-image" key={index} >
                                    <img src={`https://wzcc.nvli.in${item.field_moc_organization_image}`} alt={item.title} />
                                </div>
                            ))}
                        </div>
                        <button className="glider-prev"><FontAwesomeIcon icon={faChevronLeft} /></button>
                        <button className="glider-next"><FontAwesomeIcon icon={faChevronRight} /></button>
                        <div className="dots"></div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Moc;
