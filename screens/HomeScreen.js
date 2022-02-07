import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {/* <Text>Home Screen</Text> */}
      <Button title='Doctor Dashboard' onPress={() => navigation.navigate('DoctorDash',{name: 'Doctor'})}/>
      <Button color='black' title='Patient Dashboard' onPress={() => navigation.navigate('PatientDash',{name: 'Patient'})}/>
      <Button color='dodgerblue' title='Faqs' onPress={() => navigation.navigate('Faqs',{name: 'Faqs'})}/>
      {/* <Button color='black' title='Landing' onPress={() => navigation.navigate('Landing')}/> */}
    </View>
  );
};


const Faqs = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s </Text>;
};

export default HomeScreen; 
