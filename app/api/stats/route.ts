import { NextResponse, NextRequest } from 'next/server';
import connectMongoDB from '@/libs/mongoDB';
import Stats from '@/models/statsSchema';

export async function POST(req: NextRequest) {
    try {
        const {
            childName,
            childFamilieName,
            balance,
            social,
            totalAmount,
        } = await req.json();
        const newStat = {
            childName,
            childFamilieName,
            balance,
            social,
            totalAmount,
        };

        await connectMongoDB();
        await Stats.create(newStat);

        return NextResponse.json({ message: 'Child Stat Added', data: newStat }, { status: 200 });
    } catch (error) {
        return new NextResponse(`Error while adding stats data ${error}`, { status: 500 });
    }
}

export async function GET() {
    try {
        await connectMongoDB();

        const children = await Stats.find();

        return new NextResponse(JSON.stringify({ children }), { status: 200 });
    } catch (error) {
        return new NextResponse(`Error while fetching ${error}`, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');

        await connectMongoDB();
        await Stats.findByIdAndDelete(id);

        return NextResponse.json({ message: 'Child Stats deleted' }, { status: 200 });
    } catch (error) {
        return new NextResponse(`Error while deleting a stat data ${error}`, { status: 500 });
    }
}
