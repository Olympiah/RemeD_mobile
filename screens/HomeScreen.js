import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* <Text>Home Screen</Text> */}
      <Button title='Doctor Profile' onPress={() => navigation.navigate('DoctorDash',{name: 'Doctor'})}/>
      <Button color='black' title='Patient Profile' onPress={() => navigation.navigate('PatientDash',{name: 'Patient'})}/>
      <Button color='black' title='Login' onPress={() => navigation.navigate('Login')}/>
      <Button color='black' title='Register' onPress={() => navigation.navigate('Register')}/>
      <Button color='dodgerblue' title='Faqs' onPress={() => navigation.navigate('Faqs',{name: 'Faqs'})}/>
      {/* <Button color='black' title='Landing' onPress={() => navigation.navigate('Landing')}/> */}
    </View>
  );
};


const Faqs = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s </Text>;
};

export default HomeScreen; 
