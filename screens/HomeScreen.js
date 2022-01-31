import { View, Text, Button } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button title='Doctor Profile' onPress={() => navigation.navigate('DoctorDash',{name: 'Doctor'})}/>
      <Button color='black' title='Patient Profile' onPress={() => navigation.navigate('PatientDash',{name: 'Pateint'})}/>
    </View>
  );
};

export default HomeScreen; 
