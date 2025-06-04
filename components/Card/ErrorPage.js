import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Erroricon from '../../image/opt1_small.png';

function ErrorPage({ response }) {
    const navigate = useNavigate();

    // Default message
    let errorMessage = "An unexpected error occurred. Please try again later.";

    // Handling different status codes
    if (response) {
        switch (response.status) {
            case 400:
                errorMessage = "Bad Request: The server could not understand your request.";
                break;
            case 401:
                errorMessage = "Unauthorized: You need to log in to access this resource.";
                break;
            case 403:
                errorMessage = "Forbidden: You don't have permission to access this page.";
                break;
            case 404:
                errorMessage = "Page Not Found: The requested page does not exist.";
                break;
            case 408:
                errorMessage = "Request Timeout: The server took too long to respond.";
                break;
            case 500:
                errorMessage = "Internal Server Error: Something went wrong on our end.";
                break;
            case 502:
                errorMessage = "Bad Gateway: Received an invalid response from the upstream server.";
                break;
            case 503:
                errorMessage = "Service Unavailable: The server is currently unavailable.";
                break;
            case 504:
                errorMessage = "Gateway Timeout: The server took too long to respond.";
                break;
            default:
                errorMessage = `Error ${response.status}: Something went wrong.`;
        }
    }

    return (
        <>
            <Container fluid>
                <Row></Row>
            </Container>
            <Container className="wrapper">
                <Row>
                    <Col>
                        <img src={Erroricon} alt="Error Icon" />
                        <div className="underhead">{errorMessage}</div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <button onClick={() => navigate("/")} className="p-1 catabtn">
                            <span>Go to Home</span>
                        </button>
                    </Col>
                    <Col>
                        <button onClick={() => navigate(0)} className="p-1 catabtn">
                            <span>Refresh</span>
                        </button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ErrorPage;
