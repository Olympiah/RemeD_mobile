import {
    Platform,
    StyleSheet,
    StatusBar,
    Text,
    View,
    TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { Input, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native"

const Signin = () => {
    const navigation = useNavigation();
    const [data, setData] = useState({
        email: "",
        password: "",
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const login = () => {
        console.log("Success1 in sign in message ");
        signInWithEmailAndPassword(auth, data.email, data.password)
            // Add async function

            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log("Success in sign in message " + user);
                await navigation.push("Home");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(
                    "Error in sign in message " + errorMessage + "error code " + errorCode
                );
            });
    };

    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false,
            });
        }
    };

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={"white"}
                barStyle="light-content"
                hidden={true}
            />
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome Back!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}> Email</Text>
                <View style={styles.action} styles={{ flexDirection: "row" }}>
                    <Input
                        style={styles.text_input}
                        autoCapitalize="none"
                        color="#14213d"
                        placeholder="honey@you.com"
                        textContentType="emailAddress"
                        onChangeText={(val) => textInputChange(val)}
                        leftIcon={
                            <Icon type="font-awesome" name="user" size={20} color="#14213d" />
                        }
                    />
                    {data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="#14213d"
                                size={20}
                            // style={{ marginTop:Platform.OS === 'ios' ? 0 : -12,}}
                            />
                        </Animatable.View>
                    ) : null}
                </View>
                <Text
                    // style={styles.text_footer}
                    style={{ marginTop: 30, fontSize: 18, color: "#14213d" }}
                >
                    Password
                </Text>
                <View style={styles.action}>
                    <Input
                        style={styles.text_input}
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        color="#14213d"
                        placeholder="Your Password"
                        onChangeText={(val) => handlePasswordChange(val)}
                        leftIcon={
                            <Icon type="font-awesome" name="lock" size={20} color="#14213d" />
                        }
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name="eye-off" color="#6b705c" size={20} />
                        ) : (
                            <Feather name="eye" color="#6b705c" size={20} />
                        )}
                    </TouchableOpacity>
                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={login}>
                        <LinearGradient
                            style={styles.signIn}
                            colors={["#2c7da0", "#98c1d9"]}
                        >
                            <Text style={styles.textSign}>SignIn</Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.push("Signup")}
                        style={[
                            styles.signIn,
                            {
                                borderColor: "#2c7da0",
                                borderWidth: 1,
                                marginTop: 15,
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: "#023047",
                                fontWeight: "bold",
                            }}
                        >
                            SignUp
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default Signin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#98c1d9",
    },

    button: {
        marginTop: 50,
        width: 300,
    },
    signIn: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        color: "white",
        fontWeight: "bold",
    },

    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 30,
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    text_header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#14213d",
        fontSize: 18,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
    },
    text_input: {
        flex: 1,
        marginTop: Platform.OS === "ios" ? 0 : -12,
        paddingLeft: 10,
        color: "#14213d",
    },
});
