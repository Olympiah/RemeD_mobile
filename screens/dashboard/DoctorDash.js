import { Box, Input, useColorModeValue } from "native-base";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardCard from "../../components/DashboardCard";
import { FlatList } from "react-native";

const data = [
  {
    id: 123,
    name: "Harry Styles",
    hospital: "Nairobi Hospital",
    location: "Nairobi",
    specialty: "orthodontist",
  },
  {
    id: 456,
    name: "Liam Payne",
    hospital: "Aga Khan Hospital",
    location: "Parklands",
    specialty: "cardiologist",
  },
  {
    id: 789,
    name: "Zayn Malik",
    hospital: "Nairobi Women's Hospital",
    location: "Lang'ata",
    specialty: "dermatologist",
  },
  {
    id: 987,
    name: "Louis Tomlinson",
    hospital: "Kenyatta Hospital",
    location: "Nairobi",
    specialty: "haematologist",
  },
  {
    id: 654,
    name: "Niall Horan",
    hospital: "Mama Lucy Hospital",
    location: "Nairobi",
    specialty: "general surgeon",
  },
];

const DoctorDash = () => {
  const [text, setText] = useState("");

  return (
    <SafeAreaView bg="white">
      <Box>
        <Input
          bg={useColorModeValue("warmGray.50", "coolGray.800")}
          mt="3"
          ml="4"
          placeholder="🔎 Search for Patients"
          w="75%"
          maxWidth="300px"
          value={text}
          onChangeText={(val) => setText(val)}
        />
      </Box>
      <FlatList
        maxW="300"
        w="100%"
        mb="4"
        data={data}
        keyExtractor={(item) => item.id}
        // renderItem={({ id, name, location, hospital, specialty }) => (
        renderItem={({ item }) => (
          <DashboardCard
            id={item.id}
            name={item.name}
            location={item.location}
            hospital={item.hospital}
            specialty={item.specialty}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default DoctorDash;
