const Program = require("../model/programModel")
const Cast = require("../model/castModel")

exports.viewPrograms = async (req,res) => {
    try{
        const programs = await Program.find();
        res.status(200).render(`program`, {
            data: programs,
        })
    }catch(err){
        res.status(500).render(`program`,{
            status: `fail`,
            message: err.message
        })
    }
}

exports.viewCasts = async(req, res) => {
    try{
        const casts = await Cast.find();
        res.status(200).render(`cast`, {
            data: casts
        })
    }catch(err){
        res.status(500).render(`cast`,{
            status: `fail`,
            message: err.message
        })
    }
}