import { NextResponse, NextRequest } from 'next/server';
import ChildSchema from '@/models/childSchema';
import connectMongoDB from '@/libs/mongoDB';

export async function POST(request: NextRequest) {
  try {
    const {
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
    } = await request.json();
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
    await connectMongoDB();
    await ChildSchema.create(newObj);
    return NextResponse.json({
      message: 'Child data Created',
      data: newObj,
    },
    { status: 201 });
  } catch (error) {
    return new NextResponse(`Error while adding data ${error}`, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectMongoDB();
    const children = await ChildSchema.find();
    return new NextResponse(JSON.stringify({ children }), { status: 200 });
  } catch (error) {
    return new NextResponse(`Error while fetching ${error}`, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await ChildSchema.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Child data deleted' }, { status: 200 });
  } catch (error) {
    return new NextResponse(`Error while deleting a data ${error}`, { status: 500 });
  }
}
