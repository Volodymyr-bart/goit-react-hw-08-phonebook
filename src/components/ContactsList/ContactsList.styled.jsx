// import styled from 'styled-components';

// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// export const ListContacts = styled.ul`
//   display: flex;
//   flex-direction: column;
//   gap: 15px;
//   width: fit-content;
//   margin-top: 20px;
//   padding: 20px;
//   border: dotted 1px;
// `;

export const List = styled(Stack)(() => ({
  spacing: 2,
}));
// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
