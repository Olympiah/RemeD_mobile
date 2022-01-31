import { View, Text, Button,StyleSheet } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import ProfileCard from '../../components/ProfileCard';
import { LinearGradient } from 'expo-linear-gradient';


const DoctorProfileScreen = () => {
  return (
    <View style= {styles.background} >
        <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.background}
        >
        <ProfileCard/>
        </LinearGradient>
    </View> 
  );
};

const styles = StyleSheet.create({
  background:{
    backgroundColor: "deepskyblue",
    minHeight:'100%',
  }
})

export default DoctorProfileScreen; 