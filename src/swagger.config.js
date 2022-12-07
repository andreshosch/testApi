 const SwaggerOptions={
    definition:{
        openapi:"3.0.3",
        info:{
            title:"Prueba",
            description:"Prueba Productos",
            version:"1.0.1",
            contact:{
                name:"Andrés",
                email:"andreshosch@gmail.com",
                url:"github.com"
            }
        }
    },
    apis:['src/docs/**/*.yaml']
}

module.exports=SwaggerOptions