import React from 'react';
import Link from 'next/link';
import { Container } from './styled';

const Footer = () => {
  return (
    <Container>
      <Link href="/">
        <a>Feito com carinho por Thalisson Bandeira</a>
      </Link>
    </Container>
  );
};

export default Footer;
