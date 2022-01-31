import { Box, Input, useColorModeValue } from "native-base";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PatientCard from "../../components/DashCards/PatientCard";
// Doctor viewing patient profiles and cards

const data = [
  {
    id: 123,
    name: "Luke Hemmings",
    location: "Nairobi",
  },
  {
    id: 456,
    name: "Calum Hood",
    location: "Parklands",
  },
  {
    id: 789,
    name: "Ashton Irwin",
    location: "Lang'ata",
  },
  {
    id: 987,
    name: "Michael Clifford",
    location: "Nairobi",
  },
];

const DoctorDash = () => {
  const [searchedText, setsearchedText] = useState("");
  const [currentData, setcurrentData] = useState(data);
  const [filteredData, setfilteredData] = useState(data);

  useEffect(() => {
    setfilteredData(data);
  }, []);

  const SearchFilter = (val) => {
    if (val) {
      const newData = currentData.filter((item) => {
        const itemData = Object.values(item).join(" ").toLowerCase();
        const textData = searchedText.toLowerCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilteredData(newData);
      setsearchedText(val);
    } else {
      setfilteredData(data);
      setsearchedText(val);
    }
  };

  const SearchData = ({ item }) => {
    return (
      <PatientCard id={item.id} name={item.name} location={item.location} />
    );
  };

  return (
    <SafeAreaView bg="white">
      <Box>
        <Input
          bg={useColorModeValue("warmGray.50", "coolGray.800")}
          mt="-4"
          ml="4"
          placeholder="🔎 Search for Patients"
          w="75%"
          maxWidth="300px"
          value={searchedText}
          onChangeText={(val) => SearchFilter(val)}
        />
      </Box>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={SearchData}
      />
    </SafeAreaView>
  );
};

export default DoctorDash;
