import { useState } from 'react'
import {
    Platform,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import * as Animatable from "react-native-animatable";
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from "expo-linear-gradient";
import { doc, setDoc } from "@firebase/firestore"
import { db } from "../../utils/firebase"
import useAuth from "../../hooks/useAuth"
import { useNavigation } from "@react-navigation/native"
import { Avatar, Badge, withBadge } from 'react-native-elements';


const Doctor = () => {
    const [name, setName] = useState("");
    const [hospital, setHospital] = useState("");
    const [location, setLocation] = useState("");
    const [speciality, setSpeciality] = useState("");
    const { user } = useAuth()
    const navigation = useNavigation()
    const [image, setImage]= useState('');


    const clickSubmit = async () => {
        const data = {
            name: name,
            hospital: hospital,
            location: location,
            speciality: speciality,
            isDoctor: true,
        }

        const userRef = doc(db, "users", user.uid)
        await setDoc(userRef, data)
        navigation.push("Home")
    }


//  useEffect (async()=>{
//     if (Platform !== 'web'){
//         const{status}= await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if(status !== 'granted'){
//             alert('Permission denied!')
//         }
//     }
// },[])

// const pickPhoto = async ()=>{
//     let result =await ImagePicker.launchImageLibraryAsync({
//         mediaTypes:ImagePicker.MediaTypeOptions.Images,
//         allowsEditing:true,
//         aspect:[4,3],
//         quality:1
//     })
//     console.log(result)
//     if(!result.cancelled){
//         setImage(result.uri)
//     }

    //the code showing the  image
    // {Image && <Image source={{uri:image}} style={styles.image}/>}
    
// }


    return (
        <View showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Additional Info!</Text>
                <View>
                    <Avatar
                        rounded
                        source={{
                            uri: 'https://i.pinimg.com/originals/db/40/43/db40433674a9ea8eee9206a49e59f62b.jpg',
                        }}
                        size="large"
                    />
                    <Badge
                        status="primary"
                        value={<Icon type="feather" name="edit-2" size={12} />}
                        containerStyle={{ position: 'absolute', bottom: 5, left: 58, }}
                        badgeStyle={{height:25, width: 25, borderRadius:999, backgroundColor:"#ffddd2"}}
                    />
                </View>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>  Name</Text>
                <View style={styles.action} >
                    <Input
                        style={styles.text_input}
                        color="#14213d"
                        placeholder="Anna Devley"
                        leftIcon={
                            <Icon type="font-awesome" name="user" size={20} color="#14213d" />
                        }
                        onChangeText={val => setName(val)}
                    />

                </View>
                <Text style={styles.text_footer}>  Hospital</Text>
                <View style={styles.action} >
                    <Input
                        style={styles.text_input}
                        color="#14213d"
                        placeholder="Aga Khan "
                        leftIcon={
                            <Icon type="font-awesome" name="h-square" size={20} color="#14213d" />
                        }
                        onChangeText={val => setHospital(val)}
                    />

                </View>
                <Text style={styles.text_footer}> Location</Text>
                <View style={styles.action} >
                    <Input
                        style={styles.text_input}
                        color="#14213d"
                        placeholder="Nairobi,Kenya"
                        leftIcon={
                            <Icon type="font-awesome" name="location-arrow" size={20} color="#14213d" />
                        }
                        onChangeText={val => setLocation(val)}
                    />

                </View>
                <Text style={styles.text_footer}> Speciality</Text>
                <View style={styles.action} >
                    <Input
                        style={styles.text_input}
                        color="#14213d"
                        placeholder="Cardiologist"
                        leftIcon={
                            <Icon type="font-awesome" name="user-md" size={20} color="#14213d" />
                        }
                        onChangeText={val => setSpeciality(val)}
                    />

                </View>

                <View style={styles.button}>
                    <TouchableOpacity onPress={clickSubmit} >
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

export default Doctor

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#98c1d9",
        // height: Dimensions.get("window").height,
    },
    button: {
        marginTop: 16,
        width: 300,
    },
    signIn: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        marginLeft:19
    },
    textSign: {
        color: "white",
        fontWeight: "bold",
    },

    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 30,
    },
    header: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingBottom: 5,
        alignItems: "center",
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
    uploadImg: {
        width: 65,
        height: 65,
        borderRadius: 999,
        marginTop: 10,
    }
})