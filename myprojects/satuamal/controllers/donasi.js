const { Donasi } = require("../models/donasi");
const { Donatur } = require("../models/donatur");

exports.Create = async(req, res, next) => {
    try {
        let data = await Donasi.create(req.body);
        res.status(201).json({
            success: true,
            message: "Successfully created data!",
            data,
        });
    } catch (err) {
        next(err);
    }
};

exports.Read = async(req, res, next) => {
    try {
        // let donasis = await Donasi.find().populate(
        //     {
        //         path: "donatur",
        //         populate: "donasis"
        //     });
        let donasis = await Donasi.find().populate("penerima");
        res.status(200).json({
            success: true,
            message: "Successfully retrieve the data",
            data: donasis
        })
    } catch (err) {
        next(err);
    }
}