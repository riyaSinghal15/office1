let chai = require('chai');
let chaihttp = require('chai-http');
let server = require("../routes/auth")
chai.should();
chai.use(chaihttp);

// app.use(express.json());
describe('User API', () => {
    it('Status', (done) => {
        const payload = {
            name: "",
            email: "johndoe@recraftrelic.com",
            password: "johndoe",
            phone: "21555555553",
            designation:"dskjckxv",
            college: "ebhdjsdbmc"
        }
        chai.request(server).post("/api/user/register").send(payload).end((err, response) =>{
            response.should.have.status(201);
            response.body.should.be.a('object');
            response.body.should.have.property('name').equal();
            response.body.should.have.property('email').eq("johndoe@recraftrelic.com");
            response.body.should.have.property('password').equal("johndoe");
            response.body.should.have.property('phone').equal("21555555553");
            response.body.should.have.property('designation').equal("dskjckxv");
            response.body.should.have.property('college').equal("ebhdjsdbmc");

        })
       
        })

//       describe('Create user invalid email field', () => {
//         const payload = {
//           firstName: "firstname",
//           lastName: "Doe",
//           email: "johndoe",
//           password: "johndoe",
//           phone: "21555555553",
//           designation:"dskjckxv",
//           college: "ebhdjsdbmc"
//         }
  
//         it('Status', (done) => {
//           request.post(`${TESTING_URL}/user`, {
//             json: payload
//           }, (_, response) => {
//             assert((response.statusCode).to.equal(400));
//             done();
//           })
//         })
  
//         it('Message', (done) => {
//           request.post(`${TESTING_URL}/user`, {
//             json: payload
//           }, (_, response) => {
//             assert((response.body.errors.email[0]).to.equal('Email is invalid'));
//             done();
//           })
//         })
//       })

//       describe('Create user duplicate', () => {
//         const payload = {
//           firstName: "John",
//           lastName: "Doe",
//           email: "johndoe@recraftrelic.com",
//           password: "johndoe",
//           phone: "21555555553",
//           designation:"dskjckxv",
//           college: "ebhdjsdbmc"
//         }
  
//         it('Status', (done) => {
//           request.post(`${TESTING_URL}/user`, {
//             json: payload
//           }, (_, response) => {
//             assert((response.statusCode).to.equal(400));
//             done();
//           })
//         })
  
//         it('Message', (done) => {
//           request.post(`${TESTING_URL}/user`, {
//             json: payload
//           }, (_, response) => {
//             assert((response.body.errors.duplicate[0]).to.equal('User with this email id already exist'));
//             done();
//           })
//         })
//       })
//     })

//     it('Create user SUCCESS', (done) => {
//       request.post(`${TESTING_URL}/user`, {
//         json: {
//           firstName: "John",
//           lastName: "Doe",
//           email: "johndoe@recraftrelic.com",
//           password: "johndoe",
//           phone: "21555555553",
//           designation:"dskjckxv",
//           college: "ebhdjsdbmc"
//         }
//       }, (_, response) => {
//         assert((response.statusCode).to.equal(200));
//         done();
//       })
//     })
//   })
})