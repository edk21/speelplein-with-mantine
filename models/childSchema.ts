import mongoose, { Schema } from 'mongoose';

const childSchema = new Schema(
  {
    childName: String,
    childFamilieName: String,
    childDateOfBirth: String,
    childSchool: String,
    childLevel: String,
    childGender: String,
    childSSN: String,
    childPassport: String,
    childAllergies: String,
    streetNHouse: String,
    postalCodeNCity: String,
    parentName1: String,
    parentFamilieName1: String,
    parentTel1: String,
    parentEmail1: String,
    parentSSN1: String,
    parentName2: String,
    parentFamilieName2: String,
    parentTel2: String,
    parentEmail2: String,
    parentSSN2: String,
    medicals: String,
    parentRemarks: String,
    teamRemarks: String,
    week1: String,
    week2: String,
    week3: String,
    week4: String,
    presence: String,
    balance: Number,
    social: String,
    totalAmount: Number,
  },
  {
    timestamps: true,
  }
);

const ChildSchema = mongoose.models.Topic || mongoose.model('ChildSchema', childSchema);

export default ChildSchema;
