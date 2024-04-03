import React from 'react';
import { BarChart } from '@mantine/charts';
import { BsFillPersonFill } from 'react-icons/bs';
import { Container, Divider, Group, Title } from '@mantine/core';
import InfoBox from '@/components/InfoBox/InfoBox';

const NumberIcon = <BsFillPersonFill size={40} color="#fff" />;

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

export default async function Dashboard() {
  const { children } = await getAllRecords();

  console.log('childs: ', children);
  const totalAmount = 3;

  return (
    <>
      <Container>
        <Title>General Stats</Title>
        <Group>
          <InfoBox
            icon={NumberIcon}
            bgColor="purple"
            count={children.length}
            title="Number of children"
          />
          <InfoBox
            icon={NumberIcon}
            bgColor="green"
            count={`${totalAmount} $`}
            title="Total amount"
          />
        </Group>
        <Divider my="md" />
      </Container>
      <Container>
        <Title>Daily Stats</Title>
        <Group>
          <InfoBox
            icon={NumberIcon}
            bgColor="purple"
            count={children.length}
            title="Number of children"
          />
          <InfoBox
            icon={NumberIcon}
            bgColor="green"
            count={`${totalAmount} $`}
            title="Total amount"
          />
        </Group>
        <Divider my="md" />
      </Container>
      <Container>
        {/* <BarChart
          h={300}
          data={children}
          dataKey="month"
          series={[{ name: 'Smartphones', color: 'blue' }]}
        /> */}
      </Container>
    </>
  );
}
