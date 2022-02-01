import {
    Box,
    Text,
    Heading,
    Input,
    Icon,
    IconButton,
    Button,
    KeyboardAvoidingView
} from "native-base";
import { Dimensions, Platform } from "react-native";
import { useState } from 'react'
import { useNavigation } from "@react-navigation/native"
import { MaterialIcons } from "@expo/vector-icons"


const Register = () => {
    const height = Dimensions.get('window').height;
    const [show, setShow] = useState(false)
    const handleShow = () => setShow(!show);
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <Box pt={height * 0.08} bg={"white"} px={"6"} w={'full'} h={'full'}>
                <Heading textAlign={"center"} mb={height * 0.02}>Create an Account!</Heading>
                <Box mt={height * 0.06} >
                    <Input placeholder={"Your name"} variant={"outline"} mb={height * 0.04} w={'100%'} type={'text'} />
                    <Input placeholder={"Your email"} variant={"outline"} mb={height * 0.04} w={'100%'} type={'email'} />
                    <Input
                        placeholder={"Password"}
                        variant={"outline"}
                        type={show ? "text" : "password"}
                        mb={height * 0.04}
                        InputRightElement={
                            <IconButton
                                icon={
                                    <Icon
                                        as={
                                            <MaterialIcons
                                                name={show ? "visibility" : "visibility-off"}
                                            />
                                        }
                                        size={5}
                                        mr={"2"}
                                        color={"muted.400"}
                                    />
                                }
                                onPress={handleShow}
                            />
                        }
                    />
                    <Input
                        placeholder={"Confirm Password"}
                        variant={"outline"}
                        type={show ? "text" : "password"}
                        mb={height * 0.04}
                        InputRightElement={
                            <IconButton
                                icon={
                                    <Icon
                                        as={
                                            <MaterialIcons
                                                name={show ? "visibility" : "visibility-off"}
                                            />
                                        }
                                        size={5}
                                        mr={"2"}
                                        color={"muted.400"}
                                    />
                                }
                                onPress={handleShow}
                            />
                        }
                    />
                    <Button w={'100%'} variant={'solid'} mb={"8"} >
                        Get Started
                    </Button>
                    <Text textAlign={"center"} mb={4}>Already have an account</Text>
                    <Button variant={"ghost"} colorScheme={'primary'} onPress={() => navigation.navigate('Login')} >Sign in</Button>
                </Box>
            </Box>
        </KeyboardAvoidingView>
    );
};

export default Register;
