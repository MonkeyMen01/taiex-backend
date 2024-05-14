import  swaggerJSDoc from 'swagger-jsdoc'

const option = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Taiex for ExpressJS',
            version:'0.0.1',
            description:'資料來源於https://data.gov.tw，僅用於學術用途，如有侵權請Email:d0981843347@gmail.com'
        },
    },
    apis:['./router/*.js']
}

export const swaggerSpec = swaggerJSDoc(option)
