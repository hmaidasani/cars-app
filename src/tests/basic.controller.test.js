const request = require("supertest");
const app = require("../index");

describe("Basic Get Car", () => {
    test("GET /cars/{id}", async () => {
        const expectedRes = {
            "id": 1,
            "model": "One",
            "brandId": 1
        };
        const res = await request(app)
        .get(`/cars/${expectedRes.id}`)
        expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(expectedRes);
    });

    test("GET /brands/{id}", async () => {
        const expectedRes = {
            "id": 1,
            "name": "One",
            "companyId": 1
        };
        const res = await request(app)
        .get(`/brands/${expectedRes.id}`)
        expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(expectedRes);
    });

    test("GET /companies/{id}", async () => {
        const expectedRes = {
            "id": 1,
            "name": "One"
        };
        const res = await request(app)
        .get(`/companies/${expectedRes.id}`)
        expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(expectedRes);
    });

    test("GET /cars/{id} 404", async () => {
        const id = 100;
        const res = await request(app)
        .get(`/cars/${id}`)
        expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
        expect(res.statusCode).toBe(404);
    });

    test("GET /brands/{id} 404", async () => {
        const id = 100;
        const res = await request(app)
        .get(`/cars/${id}`)
        expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
        expect(res.statusCode).toBe(404);
    });

    test("GET /companies/{id} 404", async () => {
        const id = 100;
        const res = await request(app)
        .get(`/cars/${id}`)
        expect(res.header["content-type"]).toBe("application/json; charset=utf-8");
        expect(res.statusCode).toBe(404);
    });
});