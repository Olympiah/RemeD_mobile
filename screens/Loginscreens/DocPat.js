import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Button} from 'react-native-elements';

const DocPat = ({navigation}) => {
  return (
    <View style={{
        alignItems:'center',
        flex:1,
        marginTop:30,
        backgroundColor:'white',
    }}>
      <Text style={{
          fontSize:28,
          fontFamily:'Poppins',
          color:'#03045e',
          marginBottom:5
      }}>
      Choose...
      </Text>
      <TouchableOpacity 
        // onPress={navigation.push('DoctorProfile')}
       >
        <Button
                title="DOCTOR"
                icon={{
                  name: 'user-md',
                  type: 'font-awesome',
                  size: 15,
                  color: 'white',
                }}
                iconContainerStyle={{ marginRight: 12 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 40,
                  marginVertical: 10,
                }}
              />
      </TouchableOpacity>
      <TouchableOpacity 
        // onPress={navigation.navigate('PatientProfile')}
       >
        <Button
                title="PATIENT"
                // icon={{
                //   name: 'hospital-user',
                //   type: 'font-awesome',
                //   size: 15,
                //   color: 'white',
                // }}
                iconContainerStyle={{ marginRight: 10 }}
                titleStyle={{ fontWeight: '700' }}
                buttonStyle={{
                  backgroundColor: 'rgba(90, 154, 230, 1)',
                  borderColor: 'transparent',
                  borderWidth: 0,
                  borderRadius: 30,
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                }}
              />
      </TouchableOpacity>


    </View>
  )
}

export default DocPat

const styles = StyleSheet.create({
    button:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        marginVertical:20,
    },
})