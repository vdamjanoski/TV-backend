const Cast = require("../model/castModel");

exports.createCast = async(req, res) => {
    try{
        const cast = await Cast.create(req.body);
        res.status(201).json({
            status: `success`,
            data: cast,
        });
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}

exports.getCasts = async (req, res) => {
    try{
        const casts = await Cast.find();
        res.status(200).json({
            status: `success`,
            data: casts
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}

exports.deleteCast = async (req,res) => {
    try{
    const cast = await Cast.findByIdAndDelete(req.params.id)
    res.status(200).json({
        status: `Successfully deleted cast ${cast}`,
        data: cast
    })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}