const request = require ('supertest');
const app= require ('../../server')

describe('server' ,() =>{
    describe('Endpoints',() =>{
        describe('Post',()=>{
            it('creates a new post',async()=>{
                const response =await  request(app)
                    .post('/')
                    .send({userId:5})
                    .set('user_id',1)
                    .set('Content-Type','application/json')
              expect(response.statusCode).toEqual(201)  
              expect(response.body).toEqual({
                userId:5,
                id:101
              })  
            })
        })
    }) 
})