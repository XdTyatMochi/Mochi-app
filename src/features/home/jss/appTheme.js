import { createTheme } from '@material-ui/core/styles';

const createThemeMode = isNightMode =>
  createTheme({
    palette: {
      type: isNightMode ? 'dark' : 'light',
      background: {
        default: isNightMode ? '#272A3D' : '#FCDFD4',
        paper: isNightMode ? '#606077' : '#fff',
        primary: isNightMode ? '#50567D' : '#FCF8E8',
        secondary: isNightMode ? '#50567D' : '#FCF8E8',
        extra: isNightMode ? '#272A3D' : '#FCF8E8',
        dark: isNightMode ? '#2B2A3D' : '#999',
        paused: isNightMode ? '#2B2A5A' : '#FCE57E',
        retired: isNightMode ? '#d32f2f' : '#e57373',
        hover: isNightMode ? '#2B2A3D' : '#EFE6DC',
        border: isNightMode ? '#2B2A3D' : '#DED9D5',
        overlay: isNightMode ? 'rgba(0, 0, 0, 0.75)' : 'rgba(255, 255, 255, 0.75)',
      },
      primary: {
        main: isNightMode ? '#fff' : '#1d2959',
      },
      secondary: {
        main: isNightMode ? '#fff' : '#FCF8E8',
      },
      text: {
        primary: isNightMode ? '#fff' : '#1d2959',
        secondary: isNightMode ? '#B0B0DD' : '#293A7D',
      },
    },
    overrides: {
      MuiButton: {
        label: {
          color: isNightMode ? '#fff' : '#1d2959',
        },
      },
      // for dropdown menu items
      MuiButtonBase: {
        root: {
          color: isNightMode ? '#fff' : '#1d2959',
        },
      },
      MuiCheckbox: {
        colorPrimary: {
          color: isNightMode ? '#fff' : '#1d2959',
        },
        colorSecondary: {
          color: isNightMode ? '#fff' : '#1d2959',
        },
      },
    },
  });

export default createThemeMode;
