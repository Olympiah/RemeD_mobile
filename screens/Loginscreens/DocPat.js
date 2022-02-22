import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native"

const DocPat = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            alignItems: 'center',
            flex: 1,
            // marginTop: 30,
            justifyContent: "center",
            backgroundColor: 'white',
        }}>
            <Text style={{
                fontSize: 28,
                fontFamily: 'Poppins',
                color: '#03045e',
                marginBottom: 5
            }}>
                Choose...
            </Text>
            <TouchableOpacity
            >
                <Button
                    title="DOCTOR"
                    icon={{
                        name: 'user-md',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    onPress={() => navigation.push('Doctor')}
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
            // onPress={() => navigation.push('Patient')}
            >
                <Button
                    title="PATIENT"
                    onPress={() => navigation.push('Patient')}
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
    button: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 20,
    },
})