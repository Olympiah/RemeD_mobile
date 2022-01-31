import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

import React from "react";
import {
  Avatar,
  VStack,
  Box,
  Button,
  Image,
  Center,
  Heading,
  Stack,
  HStack,
  AspectRatio,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Zocial } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const PatientProfileScreen = () => {
  return (
    <View style={styles.background}>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      >
        <Box
          backgroundColor="white"
          mt="25%"
          shadow={9}
          rounded="lg"
          maxWidth="90%"
          minHeight="70%"
          ml="5%"
        >
          <Center>
            <VStack
              space={2}
              alignItems={{
                base: "center",
                md: "flex-start",
              }}
            >
              <AspectRatio
                alignSelf="center"
                w="100%"
                ratio={16 / 12}
                bg="gray.900"
              >
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
                  }}
                  alt="image"
                />
              </AspectRatio>

              <Stack space={1}>
                <Heading
                  size="lg"
                  mt="10%"
                  alignSelf="center"
                  _light={{ color: "black" }}
                >
                  Spencer Brown
                </Heading>
                <HStack space={5} pt="5%" alignSelf="center">
                  <Ionicons
                    name="chatbubble-ellipses"
                    size={40}
                    color="black"
                  />
                  <Ionicons name="call" size={40} color="black" />
                  <Ionicons name="videocam" size={40} color="black" />
                  <MaterialCommunityIcons name="notebook-outline" size={40} />
                </HStack>

                <HStack mt="9%" space={2} mr="5%">
                  <Zocial name="email" size={18} color="black" />
                  <Text>anayachadha@gmail.com</Text>
                </HStack>
                <HStack mt="2%" space={2}>
                  <Ionicons name="call" size={18} color="black" />

                  <Text>+254712345678</Text>
                </HStack>
              </Stack>
            </VStack>
          </Center>
          ;
        </Box>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "deepskyblue",
    minHeight: "100%",
  },
});

export default PatientProfileScreen;
