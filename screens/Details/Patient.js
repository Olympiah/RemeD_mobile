import React from 'react'
import {
    Platform,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
  } from "react-native";
  import { Input,Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

const Patient = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Additional Info!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <Text style={styles.text_footer}>  Weight</Text>
        <View style={styles.action} >
          <Input
            style={styles.text_input}
            color="#14213d"
            placeholder="60kgs "
            leftIcon={
              <Icon type="font-awesome" name="h-square" size={20} color="#14213d" />
            }
          />
        
        </View>
        <Text style={styles.text_footer}> Blood Type</Text>
        <View style={styles.action} >
          <Input
            style={styles.text_input}
            color="#14213d"
            placeholder="Nairobi,Kenya"
            leftIcon={
              <Icon type="font-awesome" name="location-arrow" size={20} color="#14213d" />
            }
          />
         
        </View>
        <Text style={styles.text_footer}> Image-na fix sahii</Text>
        <View style={styles.action} >
          <Input
            style={styles.text_input}
            color="#14213d"
            placeholder="Cardiologist"
            leftIcon={
                <Icon type="font-awesome" name="user-md" size={20} color="#14213d" />
              }
           
          />
        
        </View>
       
        <View style={styles.button}>
          <TouchableOpacity>
            <LinearGradient
              style={styles.signIn}
              colors={["#2c7da0", "#98c1d9"]}
            >
              <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>
          </View>
      </Animatable.View>
    </View>
  )
}

export default Patient

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#98c1d9",
        height:Dimensions.get("screen").height,
      },
      button: {
        marginTop: 16,
        width:300,
      },
      signIn: {
        height: 50,
        width:"100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      },
      textSign: {
        color: "white",
        fontWeight: "bold",
      },
    
      footer: {
        flex: 4,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 30,
      },
      header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 5,
      },
      text_header: {
        color: "white",
        fontWeight: "bold",
        fontSize: 30,
      },
      text_footer: {
        color: "#14213d",
        fontSize: 18,
      },
      action: {
        flexDirection: "row",
        marginTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 2,
      },
      text_input: {
        flex: 1,
        // marginTop: Platform.OS === "ios" ? 0 : -10,
        paddingLeft: 10,
        color: "#14213d",
      },
})