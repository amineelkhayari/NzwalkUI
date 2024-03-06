export const registrationForms = {
    formTitle: "Add And Upadate Region",
    saveBtnTitle:"Save Region",
    id:"addEmployeeModal",
    class:"",
    formControls:[{
        "name":"Code",
        "label":"Code Region",
        "value":"",
        "placerHolder":"Enter Code Region",
        "class": "form-control",

        "type":"text",
        "validators":[{
            "validatorName":"Required",
            "required":true
        }]

    },
    {
        "name":"Name",
        "label":"Name Region",
        "value":"",
        "placerHolder":"Eneter Name Region",
        "class": "form-control",

        "type":"text",
        "validators":[{
            "validatorName":"Required",
            "required":true
        }]

    },
    {
        "name":"ImageUrl",
        "label":"Image Url",
        "value":"",
        "placerHolder":"Enter Image Url",
        "class": "form-control",

        "type":"text",
        "validators":[{
            "validatorName":"Required",
            "required":true
        }]

    },
    {
        "name":"filePath",
        "label":"Image Url",
        "value":"",
        "placerHolder":"Enter Image Url",
        "class": "form-control",
        "passValue" : "ImageUrl",
        "type":"file",
        "validators":[{
            "validatorName":"Required",
            "required":true
        }]

    }
]

}

export const editForm = {
    formTitle: "Edit Form",
    saveBtnTitle:"Update",
    id:"editRegion",
    class:"show",
    formControls:[{
        "name":"firstName",
        "label":"FistName",
        "value":"",
        "placerHolder":"yuuuu",
        "class":"",
        "type":"email",
        "validators":[{
            "validatorName":"Required",
            "required":true
        }]

    },
    {
        "name":"Last",
        "label":"last",
        "value":"",
        "placerHolder":"local",
        "class":"",
        "type":"email",
        "validators":[{
            "validatorName":"Required",
            "required":true
        }]

    }
]

}