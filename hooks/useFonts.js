import * as Font from "expo-font";

export default useFonts = async () =>
    await Font.loadAsync({
        Poppins: require("@expo-google-fonts/poppins/Poppins_400Regular.ttf"),
        PoppinsMedium: require("@expo-google-fonts/poppins/Poppins_500Medium.ttf"),
    });
