import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Pressable,
  Stack,
  Text,
  useColorModeValue,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

// id={id}
// name={name}
// location={location}
// hospital={hospital}
// specialty={specialty}

const DoctorCard = ({ id, name, location, hospital, specialty }) => {
  const navigation = useNavigation();

  return (
    <Center py={6} px={6} borderRadius={15}>
      <Box
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"md"}
        shadow={3}
        p={6}
        overflow={"hidden"}
      >
        <Box h={"150px"} mt={-6} mx={-6} mb={6}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            }}
            alt="Doctor's pic"
            size={"full"}
          />
        </Box>
        <Stack>
          <Text
            color={"black"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            Dr. {name}
          </Text>
          <Heading
            color={useColorModeValue("primary.700", "white")}
            fontSize={"xs"}
            pb={1}
            textTransform={"uppercase"}
          >
            {specialty}
          </Heading>
          <Text color={"gray.500"}>
            {hospital} - {location}
          </Text>
        </Stack>
        <Stack mt={4} direction={"row"} justifyContent={"space-between"}>
          <Button
            size="sm"
            w={"40%"}
            onPress={() => {
              navigation.navigate("Chat");
            }}
          >
            Consult
          </Button>

          <Button
            size="sm"
            variant="subtle"
            w={"40%"}
            onPress={() => {
              navigation.push("DoctorProfile");
            }}
          >
            View Profile
          </Button>
        </Stack>
      </Box>
    </Center>
  );
};

export default DoctorCard;
