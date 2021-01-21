const mongoose = require('mongoose');
const { Schema } = mongoose;

const donasiSchema = new Schema({
    tanggal_donasi: {
        type: Date,
        default: Date(),
    },
    jenis_donasi: {
        type: String,
        trim: true,
        required: true,        
    },
    deskripsi: {
        type: String,
        trim: true,
    },
    donatur: { type: Schema.Types.ObjectId, ref: "Donatur", default: null },
    penerima: { type: Schema.Types.ObjectId, ref: "Penerima", default: null },

}, { timestamps: true, versionKey: false });

const donasi = mongoose.model("Donasi", donasiSchema);

exports.Donasi = donasi;