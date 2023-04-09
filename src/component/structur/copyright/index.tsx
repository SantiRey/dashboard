import { Link, Typography } from '@mui/material';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Copyright(props:any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        J&P
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
