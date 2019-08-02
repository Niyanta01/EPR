const mongoose = require("mongoose");

    const patientSchema = mongoose.Schema({
        "date": {
            type: String,
            required: true
        },
        "patientName": {
            type: String,
            required: true
        },
        "doctorName": {
            type: String,
            required: true
        },
        "illness": {
            type: String, 
            required: true
        }
        
    });

module.exports= function (){
    
    const patientData = mongoose.model("patientData", patientSchema);  
    return patientData;
}

