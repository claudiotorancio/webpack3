const request = require("supertest");
const app = require('../../../app.js')


describe('GET /api/books', () => {
  
    
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get('/api/books').send();
        expect(response.statusCode).toBe(200)
    });

    test("should respond with an array", async () => {
        const response = await request(app).get('/api/books').send();
        expect(response.body).toBeInstanceOf(Array)
    });
})

const newTask = {
    title: "nada",
    author:"nada",
    sandboxMode: true
}

describe('POST /api/books', () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).post('/api/books').send(newTask);
        expect(response.statusCode).toBe(200)
    });

    test("should have a content-type: application/json in header", async () => {
        const response = await request(app).post('/api/books').send(newTask);
        expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
        )
    });

    

    test("should respod whith an task ID", async () => {
      
        const response = await request(app).post('/api/books').send(newTask);
        expect(response.body).toBeDefined();
        
    });
})



/*it('Can send emails with valid inputs', async () => {
    return await request(app)
      .post('/apibooks')
      .send ({
        to: 'claudiotorancio@gmail.com',
        subject: 'Subject',
        text: 'some random text',
        html: '<strong>Some random html code</strong>',
        sandboxMode: true
      })
      .expect(201);
  });
  
  it('Returns a 400 status code with invalid credentials', async () => {
    return await request(app)
      .post('/api/books')
      .send({
        to: '',
        subject: '',
        text: 'some random text',
        html: '<strong>Some random html code</strong>',
        sandboxMode: true
      })
      .expect(400);
  });*/