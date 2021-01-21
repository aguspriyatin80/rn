const mongoose = require('mongoose');
const { Schema } = mongoose;

const penerimaSchema = new Schema({
    nama: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    umur: {
        type:Number,
        required: true,
    },
    alamat: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },
    keterangan: {
        type: String,
        lowercase: true,
        trim: true
    },
    referensi: {
        type: String,
        lowercase: true,
        trim: true
    },
    donatur: [{ type: Schema.Types.ObjectId, ref: "Donatur", default: null }],

}, { timestamps: true, versionKey: false });

const penerima = mongoose.model("Penerima", penerimaSchema);
exports.Penerima = penerima;