import Header from "../../components/Header";
import { Box, TextArea, Button, Icon, Input } from "native-base";
import { useState } from "react"
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native"

const AddNote = () => {
    const height = Dimensions.get("window").height;
    const navigation = useNavigation();
    const { notes, setNotes } = useAuth();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const clickSubmit = () => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const noteItem = {
            id: id,
            title: title,
            description: description,
        }

        setNotes([...notes, noteItem]);
        setTitle("");
        setDescription("");
        navigation.navigate("Notes");
    }



    return (
        <Box pt={height * 0.06} bg={"white"} px={"6"} w={"full"} h={"full"}>
            {/* Heading and back Button */}
            <Header title={"Add Note"} mb={height * 0.06} />
            {/* Note Title */}
            <Input my="3" placeholder="Add Note Title" w="100%" onChangeText={setTitle} />
            {/* Description */}
            <TextArea
                h={0.3 * height}
                placeholder={"Add Note Description"}
                w={"100%"}
                style={{ fontFamily: "Poppins" }}
                onChangeText={setDescription}
            />
            <Button 
                borderRadius={'40'} 
                mt={height * 0.08} 
                w={'100%'} 
                bgColor={'#006466'} 
                leftIcon={<Icon as={Feather} 
                name="edit-3" size={5} />}
                onPress={clickSubmit}
            >
                Add
            </Button>
        </Box>
    );
};

export default AddNote;
