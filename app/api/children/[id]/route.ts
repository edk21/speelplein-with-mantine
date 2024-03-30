import { NextResponse, NextRequest } from 'next/server';
import ChildSchema from '@/models/childSchema';
import connectMongoDB from '@/libs/mongoDB';

export async function PUT(request: NextRequest, { params: { id } }: { params: { id: string } }) {
  try {
    const {
        newChildName: childName,
        newChildFamilieName: childFamilieName,
        newChildDateOfBirth: childDateOfBirth,
        newChildSchool: childSchool,
        newChildLevel: childLevel,
        newChildGender: childGender,
        newChildSSN: childSSN,
        newChildPassport: childPassport,
        newChildAllergies: childAllergies,
        newStreetNHouse: streetNHouse,
        newPostalCodeNCity: postalCodeNCity,
        newParentName1: parentName1,
        newParentFamilieName1: parentFamilieName1,
        newParentTel1: parentTel1,
        newParentEmail1: parentEmail1,
        newParentSSN1: parentSSN1,
        newParentName2: parentName2,
        newParentFamilieName2: parentFamilieName2,
        newParentTel2: parentTel2,
        newParentEmail2: parentEmail2,
        newParentSSN2: parentSSN2,
        newMedicals: medicals,
        newParentRemarks: parentRemarks,
        newTeamRemarks: teamRemarks,
        newWeek1: week1,
        newWeek2: week2,
        newWeek3: week3,
        newWeek4: week4,
        newPresence: presence,
        newBalance: balance,
        newSocial: social,
        newTotalAmount: totalAmount,
    } = await request.json();
    await connectMongoDB();
    const newObj = {
        childName,
        childFamilieName,
        childDateOfBirth,
        childSchool,
        childLevel,
        childGender,
        childSSN,
        childPassport,
        childAllergies,
        streetNHouse,
        postalCodeNCity,
        parentName1,
        parentFamilieName1,
        parentTel1,
        parentEmail1,
        parentSSN1,
        parentName2,
        parentFamilieName2,
        parentTel2,
        parentEmail2,
        parentSSN2,
        medicals,
        parentRemarks,
        teamRemarks,
        week1,
        week2,
        week3,
        week4,
        presence,
        balance,
        social,
        totalAmount,
    };
    await ChildSchema.findByIdAndUpdate(id, newObj) as Promise<any>;
    return NextResponse.json({
      message: 'Child data updated',
      data: newObj,
    },
    { status: 201 });
  } catch (error) {
    return new NextResponse(`Error while updating a data ${error}`, { status: 500 });
  }
}

export async function GET(request: NextRequest, { params: { id } }: { params: { id: string } }) {
    try {
        await connectMongoDB();
        const children = await ChildSchema.findOne({ _id: id });
        return NextResponse.json({
            message: 'OK',
            data: children,
        },
        { status: 200 });
    } catch (error) {
        return new NextResponse(`Error while fetching a data ${error}`, { status: 500 });
    }
}
