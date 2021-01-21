const { Penerima } = require("../models/penerima");
exports.Create = async(req, res, next) => {
    try {
        let data = await Penerima.create(req.body);

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
        let penerimas = await Penerima.find();
        res.status(200).json({
            success: true,
            message: "Successfully retrieve the data",
            data: penerimas
        })
    } catch (err) {
        next(err);
    }
}

exports.Update = async(req, res, next) => {
    try {
        const { id } = req.params;
        if (!id) return next({ message: "Missing ID parameters" });
        const updateData = await Penerima.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        res.status(200).json({
            success: true,
            message: "Successfully updated data",
            updateData
        })
    } catch (err) {
        next(err);
    }
}

exports.Delete = async(req, res, next) => {
    try {
        const { id } = req.params;

        if (!id) return next({ message: "Missing ID Params" });

        await Penerima.findByIdAndRemove(id, (error, doc, result) => {
            if (error) throw "Failed to delete";
            if (!doc)
                return res.status(400).json({ success: false, err: "Data not found!" });

            res.status(200).json({
                success: true,
                message: "Successfully deleted data!",
                data: doc,
            });
        });
    } catch (err) {
        next(err);
    }
};