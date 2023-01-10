const data = {
    "cars":[
        {
            "id": 1,
            "model": "One",
            "brandId": 1
        },
        {
            "id": 2,
            "model": "Two",
            "brandId": 2
        },
        {
            "id": 3,
            "model": "Three",
            "brandId": 2
        },
        {
            "id": 4,
            "model": "Four",
            "brandId": 3
        },
    ],
    "brands":[
        {
            "id": 1,
            "name": "One",
            "companyId": 1
        },
        {
            "id": 2,
            "name": "Two",
            "companyId": 2
        },
        {
            "id": 3,
            "name": "Three",
            "companyId": 1
        },
    ],
    "companies":[
        {
            "id": 1,
            "name": "One"
        },
        {
            "id": 2,
            "name": "Two"
        }
    ]
};

function basicGetCar(req, res, next) {
    const { id } = req.params;
    const filteredData = data.cars.filter((item) =>
        item.id == id
    );
    if (filteredData.length === 0)
        return res.status(404).json({ message: "Car not found" });
    if(filteredData.length > 1)
    return res.status(500).json({ message: "Multiple Cars with that id" });
    res.json(filteredData[0]);
}

function basicGetBrand(req, res, next) {
    const { id } = req.params;
    const filteredData = data.brands.filter((item) =>
        item.id == id
    );
    if (filteredData.length === 0)
        return res.status(404).json({ message: "Brand not found" });
    if(filteredData.length > 1)
        return res.status(500).json({ message: "Multiple Brands with that id" });
    res.json(filteredData[0]);
}

function basicGetCompany(req, res, next) {
    const { id } = req.params;
    const filteredData = data.companies.filter((item) =>
        item.id == id
    );
    if (filteredData.length === 0)
        return res.status(404).json({ message: "Company not found" });
    if(filteredData.length > 1)
        return res.status(500).json({ message: "Multiple Company with that id" });
    res.json(filteredData[0]);
}

module.exports = {
    basicGetCar,
    basicGetBrand,
    basicGetCompany
};