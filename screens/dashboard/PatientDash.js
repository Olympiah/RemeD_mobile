import { Box, Input, useColorModeValue } from "native-base";
import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import DashboardCard from "../../components/DashboardCard";

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

const PatientDash = () => {
  const [searchedText, setsearchedText] = useState("");
  const [currentData, setcurrentData] = useState(data);
  const [filteredData, setfilteredData] = useState(data);

  useEffect(() => {
    setfilteredData(data);
  }, []);

  console.log(typeof data);
  // Object.values()
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
      <DashboardCard
        id={item.id}
        name={item.name}
        location={item.location}
        hospital={item.hospital}
        specialty={item.specialty}
      />
    );
  };

  return (
    <SafeAreaView bg="white">
      <Box>
        <Input
          bg={useColorModeValue("warmGray.50", "coolGray.800")}
          mt="-4"
          ml="4"
          placeholder="🔎 Search for Doctors"
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

export default PatientDash;
