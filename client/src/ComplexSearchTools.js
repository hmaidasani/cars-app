import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Form, FormControl, FormGroup, Modal, Button } from 'react-bootstrap';

function ComplexSearchTools() {
    const [showCompanyCreateModal, setShowCompanyCreateModal] = useState(false);
    const [showBrandCreateModal, setShowBrandCreateModal] = useState(false);
    const [showCarCreateModal, setShowCarCreateModal] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [brandName, setBrandName] = useState('');
    const [brandCompanyId, setBrandCompanyId] = useState(null);
    const [carModel, setCarModel] = useState('');
    const [carBrandId, setCarBrandId] = useState('');

    const handleCloseCompanyCreateModal = () => setShowCompanyCreateModal(false);
    const handleShowCompanyCreateModal = () => setShowCompanyCreateModal(true);
    const handleCloseBrandCreateModal = () => setShowBrandCreateModal(false);
    const handleShowBrandCreateModal = () => setShowBrandCreateModal(true);
    const handleCloseCarCreateModal = () => setShowCarCreateModal(false);
    const handleShowCarCreateModal = () => setShowCarCreateModal(true);

    const handleCreateCompany = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/companies_db/', {
                method: 'POST',
                body: JSON.stringify({
                    "name": companyName
                }),
                headers: { 'Content-Type': 'application/json' },
              });
            const data = await response.json();
        //   setResults([car]);
        } catch (error) {
          console.error(error);
        }
    };

    const handleCreateBrand = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/brands_db/', {
                method: 'POST',
                body: JSON.stringify({
                    "name": brandName,
                    "companyId": brandCompanyId
                }),
                headers: { 'Content-Type': 'application/json' },
              });
            const data = await response.json();
        //   setResults([car]);
        } catch (error) {
          console.error(error);
        }
    };

    const handleCreateCar = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/cars_db/', {
                method: 'POST',
                body: JSON.stringify({
                    "model": carModel,
                    "brandId": carBrandId
                }),
                headers: { 'Content-Type': 'application/json' },
              });
            const data = await response.json();
        //   setResults([car]);
        } catch (error) {
          console.error(error);
        }
    };

    return (
        <div>
            <Row className="align-items-center">
                <Col xs="auto">
                <Button variant="primary" onClick={handleShowCompanyCreateModal} className="mb-2">
                    Add Company
                </Button>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={handleShowBrandCreateModal} className="mb-2">
                        Add Brand
                    </Button>
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={handleShowCarCreateModal} className="mb-2">
                        Add Car
                    </Button>
                </Col>
            </Row>
          
            <Modal
                show={showCompanyCreateModal}
                onHide={handleCloseCompanyCreateModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Create Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <FormControl
                                    type="text" 
                                    placeholder="Name" 
                                    className="mb-2"
                                    value={companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseCompanyCreateModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreateCompany}>Create</Button>
                </Modal.Footer>
            </Modal>

            <Modal
                show={showBrandCreateModal}
                onHide={handleCloseBrandCreateModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                <Modal.Title>Create Brand</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className="align-items-center">
                            <Col xs="auto">
                                <FormControl 
                                    type="text" 
                                    placeholder="Name" 
                                    className="mb-2"
                                    value={brandName}
                                    onChange={(e) => setBrandName(e.target.value)}
                                />
                            </Col>
                            <Col xs="auto">
                                <FormControl 
                                    type="number" 
                                    placeholder="Company ID"
                                    className="mb-2"
                                    value={brandCompanyId}
                                    onChange={(e) => setBrandCompanyId(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseBrandCreateModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleCreateBrand}>Create</Button>
                </Modal.Footer>
            </Modal>
    
          <Modal
            show={showCarCreateModal}
            onHide={handleCloseCarCreateModal}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Create Car</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Row className="align-items-center">
                        <Col xs="auto">
                            <FormControl 
                                type="text" 
                                placeholder="Model" 
                                className="mb-2"
                                value={carModel}
                                onChange={(e) => setCarModel(e.target.value)}
                            />
                        </Col>
                        <Col xs="auto">
                            <FormControl 
                                type="number" 
                                placeholder="Brand ID"
                                className="mb-2"
                                value={carBrandId}
                                onChange={(e) => setCarBrandId(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleCloseCarCreateModal}>
                Close
              </Button>
              <Button variant="primary" onClick={handleCreateCar}>Create</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
}

export default ComplexSearchTools;