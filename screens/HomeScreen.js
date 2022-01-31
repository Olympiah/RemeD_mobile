import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title='Doctor Profile' onPress={() => navigation.navigate('DoctorProfile',{name: 'Doctor'})}/>
      <Button color='black' title='Patient Profile' onPress={() => navigation.navigate('PatientProfile',{name: 'Pateint'})}/>
    </View>
  );
};
const DoctorProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const PatientProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default HomeScreen; 
