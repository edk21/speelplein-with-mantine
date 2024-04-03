'use client';

import { useState } from 'react';
import { Container, Burger, Title, Drawer, Flex, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import classes from './Header.module.css';

const links = [
  { link: '/', label: 'Dashboard' },
  { link: '/kinderlist', label: 'Kinderlist' },
  { link: '/create', label: 'kind toevoegen' },
  { link: '/daily', label: 'Dagelijkse Registraties' },
  { link: '/stats', label: 'Statistieken Bekijken' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  return (
    <header className={classes.header}>
      <Container size="lg" className={classes.inner}>
        <Title ta="center">
          Speelplein{' '}
          <Text inherit variant="gradient" component="span" gradient={{ from: 'pink', to: 'yellow' }}>
            Raccoon
          </Text>
        </Title>
        <Flex
          bg="rgba(255, 255, 255, .3)"
          gap="md"
          justify="flex-end"
          align="center"
          direction="row"
          fz={16}
          fw={400}
          visibleFrom="md"
        >
        {links.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className={classes.link}
              data-active={active === link.link || undefined}
              onClick={() => {
                setActive(link.link);
              }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
      </Container>
      <Drawer
        opened={opened}
        onClose={toggle}
        title="Speelplein Raccoon"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        closeButtonProps={{ 'aria-label': 'Close modal' }}
      >
        <Flex
          bg="rgba(255, 255, 255, .3)"
          gap="md"
          justify="center"
          align="center"
          direction="column"
          fz={10}
          fw={900}
        >
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.link}
              className={classes.link}
              data-active={active === link.link || undefined}
              onClick={() => {
                toggle();
                setActive(link.link);
              }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>
      </Drawer>
    </header>
  );
}
