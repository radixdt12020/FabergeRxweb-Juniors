//const date = "16/04/1997";
export const SERVER_JSON = [
    {
        "type":"text",
        "name":"customerId",
        "ui":{
        //    "description":"You must enter a proper date format.",
           "label":"Customer Id"
        },
        "validators":{
           "startsWith":{
               "value":"C_"
           },
           "required":true
        }
     },
     {
        "type": "text",
        "name": "customerName",
        "ui":{
            "label":"Customer Name"
        },
        "validators":{
            "required":true,
            "minLength": {
                "value": 16
            }
        }
     },
     {
        "type": "text",
        "name": "countryName",
        "ui":{
            "label":"Country Name"
        },
        "validators":{
            "required":true,
        }
     },
     {
        "type": "text",
        "name": "customerEmail",
        "ui":{
            "label":"Customer Email"
        },
        "validators":{
            "required":true,
            "email":true,
            "lowerCase":true
        }
     },
     {
        "type": "text",
        "name": "customerCurrentBalance",
        "ui":{
            "label":"Customer Current Balance"
        },
        "validators":{
            "required":true,
        }
     },
     {
        "type": "text",
        "name": "customerMinBalance",
        "ui":{
            "label":"Customer Minimum Balance"
        },
        "validators":{
            "required":true,
        }
     },
     {
        "type": "text",
        "name": "customerPincode",
        "ui":{
            "label":"Customer Pincode"
        },
        "validators":{
            "required":true,
            "minLength":{
                "value": 6,
                "message":"Pincode atleast contains 6 character"
            },
            "maxLength":{
                "value":6
            }
        }
     },
     {
        "type": "text",
        "name": "companyWebsiteURL",
        "ui":{
            "label":"Company Website URL"
        },
        "validators":{
            "required":true,
            "url":true
        }
     }, 
     {
        "type": "text",
        "name": "dateOfBirth",
        "ui":{
            "label":"Date Of Birth"
        },
        "validators":{
            "required":true,
            "date":{
                //"conditionalExpression":"x => x.dateOfBirth == " + "16/04/1997"
                // "conditionalExpression":"x => x.dateOfBirth ==\"" + date + "\"",
                // "message":"Please enter past date.",
                "allowISODate":true
            }
        }
     }
]