'use client';

import React from 'react';
import { Table } from '@mantine/core';
import { THEAD } from '@/utils/Thead';

async function getAllRecords() {
    const res = await fetch('https://speelplein-mongoose.onrender.com/api/getRecords');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

const Kinderlist = async () => {
    const { children } = await getAllRecords();
    return (
        <div>
            <Table stickyHeader stickyHeaderOffset={60}>
                <Table.Thead>
                    <Table.Tr>
                        {THEAD.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </Table.Tr>
                </Table.Thead>
            </Table>
        </div>
    );
};

export default Kinderlist;
