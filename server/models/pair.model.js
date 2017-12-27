import mongoose from 'mongoose';
import uuid from 'uuid';
const Schema = mongoose.Schema;

const PairSchema = new Schema({
  _id: { type: String, default: uuid.v4 },
  pair: String,
  createdAt: { type: Number, default: Date.now },
});

export default mongoose.model('Pair', PairSchema);
