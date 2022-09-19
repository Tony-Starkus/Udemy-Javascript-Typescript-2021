import React from 'react';
import { formatDate } from '../../utils/format-date';
import { Container } from './styled';

export type DateProps = {
  date: string;
};

const Date: React.FC<DateProps> = ({ date }) => {
  return <Container>{formatDate(date)}</Container>;
};

export default Date;
