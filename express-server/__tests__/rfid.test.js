const rfidModule = require('../src/routes/rfid');
const rfidGetHandler = rfidModule.rfidGetHandler;
const rfidPostHandler = rfidModule.rfidPostHandler;

describe("Test RFID Handlers", function () {
    
        test('responds to GET',() => {
            const req = {query: {challenge: '123'}};
            const res = { end: jest.fn() };
    
            rfidGetHandler(req, res);
    
            expect(res.end).toHaveBeenCalledWith('123');
        });
        

        test('responds to PUT', () => {
            const req = {body: {message: "123"}};
            const res = {
                status: jest.fn()
            };

            rfidPostHandler(req, res);

            expect(res.status).toHaveBeenCalledWith(200);
        });
});
    