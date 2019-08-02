const express = require("express");
const router = express.Router();
const patient = require("../models/patientSchema")();


router.post("/insertPatients", async (req, res) => {
    try {
        
        const patient_doc = new patient(req.body);
        await patient_doc.save();

    } 
    catch (ex) {
        res.status(400).send(ex);
    }
});

router.get("/listOfPatients", async (req, res) => {
    try{
        
        const result = await patient.find({},{'_id':0});
        res.status(200).send(result);

    }
    catch(ex){
            res.status(400).send(ex.message);
    }
});


module.exports = router;