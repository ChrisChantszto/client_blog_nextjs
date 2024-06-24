import { createTheme, virtualColor } from '@mantine/core';

export const theme = createTheme({
  /* Put your mantine theme override here */
  colors: {
    primary: virtualColor({
      name: 'primary',
      light: '#F5F5F5',
    }),
  },
});
