import Header from "../../components/Header";
import { Box, TextArea, Button, Icon } from "native-base";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";

const AddNote = () => {
    const height = Dimensions.get("window").height;

    return (
        <Box pt={height * 0.06} bg={"white"} px={"6"} w={"full"} h={"full"}>
            {/* Heading and back Button */}
            <Header title={"Add Note"} mb={height * 0.06} />
            {/* Description */}
            <TextArea
                h={0.3 * height}
                placeholder={"Add Note Description"}
                w={"100%"}
                style={{ fontFamily:"Poppins" }}
            />
            <Button borderRadius={'40'} mt={height * 0.08} w={'100%'} bgColor={'#006466'} leftIcon={<Icon as={Feather} name="edit-3" size={5} />}>Add</Button>
        </Box>
    );
};

export default AddNote;
