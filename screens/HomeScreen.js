import { View, Text, Button, TouchableOpacity } from 'react-native';
import { signOut } from "@firebase/auth"
import { auth } from '../utils/firebase';

const HomeScreen = ({navigation}) => {
  const logout = () => {
    signOut(auth).then(() => navigation.push('Land')).catch(err => console.log(err.message))
  }
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* <Text>Home Screen</Text> */}
      <Button title='Doctor Dashboard' onPress={() => navigation.navigate('DoctorDash',{name: 'Doctor'})}/>
      <Button color='black' title='Patient Dashboard' onPress={() => navigation.navigate('PatientDash',{name: 'Patient'})}/>
      <Button color='dodgerblue' title='Faqs' onPress={() => navigation.navigate('Faqs',{name: 'Faqs'})}/>
      <TouchableOpacity onPress={logout}><Text>Logout</Text></TouchableOpacity>
    </View>
  );
};


const Faqs = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s </Text>;
};

export default HomeScreen; 
