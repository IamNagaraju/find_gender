var axios=require("axios")

const { key } = require('./key.js/key');
var name='siva';
var url= `https://www.gender-api.com/get`;
axios.get(url,{
    //ES6 feature -concise properties (when property name an the value name is same then inside the obj just mention the property name
     
    params:{
        name,
        key   
    }
    /* 
    params:{
        
        name:name,
        key:key
    }*/
})
.then((response)=>{
    var user=response.data;
    console.log(user.name);
})
.catch((err)=>{
    console.log(err);
})