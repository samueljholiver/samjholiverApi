import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://samjholiver:nmttpocos@cluster0.2qlhbtt.mongodb.net/samjholiverApi");

let db = mongoose.connection;

export default db;