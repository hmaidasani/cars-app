import React, { useState } from "react";
import { Row, Col, Table, Form, FormControl, FormGroup, Button } from 'react-bootstrap';

function BasicSearch() {
  const [searchId, setSearchId] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response1 = await fetch(`http://localhost:8000/cars/${searchId}`);
      const car = await response1.json();
      const response2 = await fetch(`http://localhost:8000/brands/${car.brandId}`);
      const brand = await response2.json();
      const response3 = await fetch(`http://localhost:8000/companies/${brand.companyId}`);
      const company = await response3.json();
      car["brand_name"] = brand.name;
      car["company_id"] = brand.companyId;
      car["company_name"] = company.name;
      setResults([car]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Row className="align-items-center">
          <Col xs="auto">
            <FormControl 
              type="text" 
              placeholder="Search" 
              className="mb-2"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">
              Submit
            </Button>
          </Col>
        </Row>
      </form>
      
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Car ID</th>
            <th>Car Model</th>
            <th>Brand ID</th>
            <th>Brand Name</th>
            <th>Company ID</th>
            <th>Company Name</th>
          </tr>
        </thead>
        <tbody>
          {results.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.model}</td>
              <td>{item.brandId}</td>
              <td>{item.brand_name}</td>
              <td>{item.company_id}</td>
              <td>{item.company_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default BasicSearch;