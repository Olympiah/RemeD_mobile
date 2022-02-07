import { extendTheme } from 'native-base';

const theme = extendTheme({
    fontConfig: {
        Poppins: {
            100: {
                normal: require('@expo-google-fonts/poppins/Poppins_100Thin.ttf'),
                italic: require('@expo-google-fonts/poppins/Poppins_100Thin_Italic.ttf'),
            },
            200: {
                normal: require('@expo-google-fonts/poppins/Poppins_200ExtraLight.ttf'),
                italic: require('@expo-google-fonts/poppins/Poppins_200ExtraLight_Italic.ttf'),
            },
            300: {
                normal: require('@expo-google-fonts/poppins/Poppins_300Light.ttf'),
                italic: require('@expo-google-fonts/poppins/Poppins_300Light_Italic.ttf'),
            },
            400: {
                normal: require('@expo-google-fonts/poppins/Poppins_400Regular.ttf'),
                italic: require('@expo-google-fonts/poppins/Poppins_400Regular_Italic.ttf'),
            },
            500: {
                normal: require('@expo-google-fonts/poppins/Poppins_500Medium.ttf'),
                italic: require('@expo-google-fonts/poppins/Poppins_500Medium_Italic.ttf'),
            },
            600: {
                normal: require('@expo-google-fonts/poppins/Poppins_600SemiBold.ttf'),
                italic: require('@expo-google-fonts/poppins/Poppins_600SemiBold_Italic.ttf'),
            },
        },
    },

    // Make sure values below matches any of the keys in `fontConfig`
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
        mono: 'Poppins',
    },
});

export default theme;

