const Program = require("../model/programModel")

exports.createProgram = async(req, res) => {
    try{
        const program = await Program.create(req.body);
        res.status(201).json({
            status: `Successfully created program`,
            data: program,
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}

exports.getAllPrograms = async(req, res) => {
    try{
        const programs = await Program.find();
        res.status(200).json({
            status: `Success`,
            data: programs,
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}

exports.updateProgram = async(req, res) => {
    try{
        const program = await Program.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })
        res.status(200).json({
            status: `Successfully updated`,
            data: program
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}

exports.deleteProgram = async (req, res) => {
    try{
        const program = await Program.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: `Successfully deleted program ${program}`,
            data: program
        })
    }catch(err){
        res.status(500).json({
            status: `fail`,
            message: err.message
        })
    }
}

