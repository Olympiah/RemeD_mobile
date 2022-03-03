import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Image,
    ScrollView,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import {
    MaterialIcons,
    MaterialCommunityIcons,
    FontAwesome,
} from "@expo/vector-icons";
import Header from "./Header"

const Doc = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={{
                    uri: "https://variety.com/wp-content/uploads/2013/06/adam-levine.jpg?w=681&h=383&crop=1",
                }}
                style={styles.imageBackground}
                resizeMode={"cover"}
            />
            {/* Basic Details of the User */}
            <View style={styles.content} >
                <ScrollView showsVerticalScrollIndicator={false} style={[tw`px-4`]}>
                    <Card>
                        <View style={tw`flex-row`}>
                            <Image
                                source={{
                                    uri: "https://variety.com/wp-content/uploads/2013/06/adam-levine.jpg?w=681&h=383&crop=1",
                                }}
                                style={styles.card1Image}
                            />
                            <View style={tw`ml-2`}>
                                {/* Name */}
                                <Text style={styles.text1} >Dr. John Doe</Text>
                                {/* Date of Acc Creation */}
                                <Text style={styles.text2} >Joined on 12 Feb, 2022</Text>
                            </View>
                        </View>
                    </Card>
                    <Header title={"Biography"} showIconBtn={false} ml={2} />
                    <Card>
                        <Text style={{ fontFamily: "Poppins" }} >
                        Facing issues when the contents of the stomach move back up into the throat. It can cause a burning feeling in the chest and a sour taste in the mouth.
                        </Text>
                    </Card>
                    <Header title={"Details"} showIconBtn={false} ml={2} />
                    <Card>
                        <IconText
                            Icon={MaterialIcons}
                            iconName={"email"}
                            text={"johndoe@outlook.com"}
                            iconBackgroundColor={"#2d6a4f"}
                        />
                        <IconText
                            Icon={FontAwesome}
                            iconName={"h-square"}
                            text={"Jolie Hospital"}
                            iconBackgroundColor={"#023e8a"}
                        />
                        <IconText
                            Icon={FontAwesome}
                            iconName={"user-md"}
                            text={"Cardiologist"}
                            iconBackgroundColor={"#e07a5f"}
                        />
                        <IconText
                            Icon={MaterialCommunityIcons}
                            iconName={"city-variant-outline"}
                            text={"Naks Vegas"}
                            iconBackgroundColor={"#6d597a"}
                        />
                    </Card>
                    
                </ScrollView>
            </View>
        </View>
    );
};

const Card = ({ children }) => {
    return <View style={styles.card1}>{children}</View>;
};

const IconText = ({
    Icon,
    text,
    textFontSize = 12,
    textColor = "#333d29",
    iconBackgroundColor,
    iconName,
}) => {
    return (
        <View style={tw`flex-row my-2 items-center`}>
            <View
                style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}
            >
                <Icon name={iconName} size={22} color={"white"} />
            </View>
            <Text style={[tw`ml-5`, { color: textColor, fontSize: textFontSize, fontFamily:"Poppins" }]}>
                {text}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    imageBackground: {
        width: "100%",
        flex: 1,
    },
    card1: {
        width: "100%",
        height: "auto",
        borderRadius: 18,
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: "white",
        marginVertical: 8,
    },
    card1Image: {
        width: 50,
        height: 50,
        borderRadius: 999,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        flex: 2,
        borderTopRightRadius: 25,
        backgroundColor: "#f8f9fa",
        borderTopLeftRadius: 25,
        marginTop: -15,
    },
    text1: {
        fontSize: 16,
        color: "#023047",
        marginBottom: 5,
        marginTop: 3,
        fontWeight: "bold",
        fontFamily:"Poppins"
    },
    text2: {
        fontSize: 12,
        fontWeight: "200",
        color: "#8e9aaf",
        fontFamily:"Poppins"
    }
});

export default Doc;
