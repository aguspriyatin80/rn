const mongoose = require('mongoose');
const { Schema } = mongoose;

const donaturSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    nama: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    alias: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    hp: {
        type: String,
        required: true,
    },
    penerima: [{ type: Schema.Types.ObjectId, ref: "Penerima", default: null }],

}, { timestamps: true, versionKey: false });

const donatur = mongoose.model("Donatur", donaturSchema);

exports.Donatur = donatur;