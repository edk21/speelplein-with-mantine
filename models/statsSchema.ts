import { Schema, model, models } from 'mongoose';

const statsSchema = new Schema(
  {
    childName: String,
    childFamilieName: String,
    balance: Number,
    social: String,
    totalAmount: Number,
  },
  { timestamps: true }
);

const Stats = models.Stats || model('Stats', statsSchema);
export default Stats;
