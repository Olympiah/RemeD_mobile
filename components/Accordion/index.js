import {
    Box,
    Text,
    Flex,
    IconButton,
    PresenceTransition,
    Icon,
    Divider,
} from "native-base";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import { useState } from "react";

const Accordion = ({ title, description }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);
    return (
        <Box w={"100%"}>
            {/* Title and Click Open Btn */}
            <Flex justify={"space-between"} alignItems={"center"} direction={"row"}>
                {/* Title */}
                <Text style={{ fontFamily:"Poppins" }} fontSize={'20'} color={'#005f73'} >{title}</Text>
                <IconButton
                    icon={
                        <Icon
                            as={show ? <Entypo name="minus" /> : <MaterialIcons name="add" />}
                            size={5}
                        />
                    }
                    onPress={handleShow}
                />
            </Flex>
            {/* Description Container */}
            <PresenceTransition
                visible={show}
                initial={{
                    opacity: 0,
                    scale: 0,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 250,
                    },
                }}
            >
                {show ? <Item description={description} /> : null}
            </PresenceTransition>
            <Divider my="2" />
        </Box>
    );
};

const Item = ({ description }) => (
    <Box w={"90%"}>
        <Text style={{ fontFamily:"Poppins" }} >
           {description}
        </Text>
    </Box>
);

export default Accordion;
