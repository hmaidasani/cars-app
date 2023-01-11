import React, { useState, useEffect } from 'react';
import { Row, Col, Table, Form, FormControl, FormGroup, Button } from 'react-bootstrap';
import ComplexSearchTools from './ComplexSearchTools';

// const data_local = [
//   {"car_id":1,"car_model":"Car_One","brand_id":1,"brand_name":"Brand_One","company_id":1,"company_name":"Mercedes"},
//   {"car_id":2,"car_model":"Car_Two","brand_id":2,"brand_name":"Brand_Two","company_id":2,"company_name":"Two"},
//   {"car_id":3,"car_model":"Car_Two","brand_id":2,"brand_name":"Brand_Two","company_id":2,"company_name":"Two"},
//   {"car_id":4,"car_model":"Car_One","brand_id":1,"brand_name":"Brand_One","company_id":1,"company_name":"One"},
//   {"car_id":5,"car_model":"Car_Two","brand_id":2,"brand_name":"Brand_Three","company_id":2,"company_name":"Tesla"},
//   {"car_id":6,"car_model":"Car_One","brand_id":1,"brand_name":"Brand_Four","company_id":1,"company_name":"One"},
//   {"car_id":7,"car_model":"Car_Two","brand_id":2,"brand_name":"Brand_Three","company_id":2,"company_name":"Two"},
//   {"car_id":8,"car_model":"Car_One","brand_id":1,"brand_name":"Brand_six","company_id":1,"company_name":"company three"},
//   {"car_id":9,"car_model":"Car_Two","brand_id":2,"brand_name":"brand5","company_id":2,"company_name":"three"},
// ];

function ComplexSearch() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchColumn, setSearchColumn] = useState('car_id');
  const [sortColumn, setSortColumn] = useState('car_id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [dataToShow, setDataToShow] = useState([]);


  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/cars_db');
      const json = await response.json();
      setData(json);
      console.log('fetch');
    }
    fetchData();
    // console.log('setData local');
    // setData(data_local);
  }, []);

  useEffect(() => {
    let filteredData = [...data];

    if (searchTerm) {
      filteredData = filteredData.filter((item) =>
        String(item[searchColumn]).toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortColumn) {
      filteredData = filteredData.sort((a, b) => {
        let sortVal = 0;
        sortVal = String(a[sortColumn]).localeCompare(String(b[sortColumn]));

        if (sortOrder === 'desc') {
          sortVal = sortVal * -1;
        }

        return sortVal;
      });
    }

    setDataToShow(filteredData);
    console.log(filteredData);
  }, [searchTerm, searchColumn, sortColumn, sortOrder, data]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleColumnChange = (event) => {
    setSearchColumn(event.target.value);
  }

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  // const filteredData = data.filter((item) => {
  //   console.log()
  //   return String(item[searchColumn]).toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <div>
        <Form inline>
            <Row className="align-items-center">
                <Col xs="auto">
                    <FormControl type="text" placeholder="Search" className="mb-2" onChange={handleSearch} />
                </Col> 
                <Col xs="auto">
                    <FormGroup>
                        <Form.Select 
                            className="mb-2"
                            onChange={handleColumnChange} 
                            value={searchColumn}>
                                <option disabled>Search By</option>
                                <option value="car_id">Car ID</option>
                                <option value="car_model">Car Model</option>
                                <option value="brand_id">Brand ID</option>
                                <option value="brand_name">Brand Name</option>
                                <option value="company_id">Company ID</option>
                                <option value="company_name">Company Name</option>
                        </Form.Select>
                    </FormGroup>
                </Col>
                <Col xs="auto">
                    <ComplexSearchTools />
                </Col>
            </Row>
        </Form>
        <Table striped bordered hover size="sm">
            <thead>
            <tr>
                <th onClick={() => handleSort('car_id')}>Car ID</th>
                <th onClick={() => handleSort('car_model')}>Car Model</th>
                <th onClick={() => handleSort('brand_id')}>Brand ID</th>
                <th onClick={() => handleSort('brand_name')}>Brand Name</th>
                <th onClick={() => handleSort('company_id')}>Company ID</th>
                <th onClick={() => handleSort('company_name')}>Company Name</th>
            </tr>
            </thead>
            <tbody>
            {dataToShow.map((item) => (
                <tr key={item.car_id}>
                <td>{item.car_id}</td>
                <td>{item.car_model}</td>
                <td>{item.brand_id}</td>
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

export default ComplexSearch;
