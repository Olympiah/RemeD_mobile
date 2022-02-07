import { View, Button,StyleSheet,Alert} from 'react-native';
import { Box, TextArea, Center,VStack,FormControl, Input} from "native-base";
// import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from 'expo-linear-gradient';


// const Example = () => {
//     const [textAreaValue, setTextAreaValue] = useState("Value Controlled");
  
//     const demoValueControlledTextArea = e => {
//       setTextAreaValue(e.currentTarget.value);
//     };
  
//     return <Box alignItems="center" w="100%">
//         <TextArea value={textAreaValue} onChange={demoValueControlledTextArea} w="75%" maxW="300" />
//       </Box>;
//   };

// export default Complaints; 



import React from 'react';

const Complaints = () => {
//   return(
//   <SafeAreaView minHeight='100%'backgroundColor='azure' >
//     <Center>
//       <Box mb='10%' >
//       <TextArea  placeholder="Enter any complains" minW="74%" minH='50%' 
//       borderColor='black' borderStyle="solid" bgColor='white' alignSelf='center'  />
//       </Box>
//       <Button  color='dodgerblue' title='Send Complaints' onPress={() => navigation.navigate('Complaints',{name: 'Complaints'})}  />
//     </Center>
//     </SafeAreaView>);
// };

return (
  <View style= {styles.background} >
      <LinearGradient
      colors={['rgba(0,0,0,0.8)', 'transparent']}
      style={styles.background}
      >
      <Box backgroundColor='white' mt='25%' shadow={9} rounded="lg" maxWidth="90%" minHeight="70%" ml='5%'>
      
      <Center>
    <VStack space={2} alignItems={{
        base: "center",
        md: "flex-start"
      }}>
         
         <Box mt='5%' >
         <VStack space={5} >

         <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input borderColor='black' borderStyle="solid"/>
            <FormControl.Label mt='10%'>Email</FormControl.Label>
            <Input borderColor='black' borderStyle="solid"/>
          </FormControl>


       <TextArea  placeholder="Enter any complains" minW="74%" minH='15%' 
          borderColor='black' borderStyle="solid" bgColor='white' alignSelf='center' mt='15%' />
          </VStack>
          </Box>
          <Button  color='dodgerblue' title='Send Complaints' onPress={() => Alert.alert('Complaint Sent')}  />
    </VStack>
   </Center>;
         
      </Box>
          

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



export default Complaints;