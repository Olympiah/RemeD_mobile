import {
    Box,
    Text,
    Heading,
    Input,
    Icon,
    IconButton,
    Center,
    Button
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native"

const Login = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    const height = Dimensions.get('window').height;
    // const width = Dimensions.get('window').width;
    const navigation = useNavigation();
    return (
        <Box pt={height * 0.08} bg={"white"} px={"6"} w={'full'} h={'full'} >
            <Center width={'100%'} height={'100%'}>
                <Heading style={{fontFamily:'Poppins'}} textAlign={"center"} mb={height * 0.02}>Welcome Back!</Heading>
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
                <Button  w={'100%'} variant={'solid'} mb={"8"} >
                    Sign in
                </Button>
                <Text style={{fontFamily:'Poppins'}} mb={4}>Don't have an account</Text>
                <Button variant={"ghost"} colorScheme={'primary'} onPress={() => navigation.navigate('Register')} >Sign up</Button>
            </Center>
        </Box>
    );
};

export default Login;
