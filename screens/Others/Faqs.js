    
import { Box } from 'native-base';
import { Text, View, StyleSheet,Button,SafeAreaView ,Animated} from 'react-native';
import  AccordionListItem from '../../components/AccordionListItem';

function Faqs ({navigation}) {
  return (
    <SafeAreaView>
      <Animated.View style={styles.container}>
        <AccordionListItem title={' What is RemeD'}>
          <Text>RemeD is an online platform that offers consultancy services to patients with long term diseases.
          At RemeD we've always had one focus in mind: To provide quality healthcare services that are not only good for you but deliver real results to help you reach your goals!</Text>
        </AccordionListItem>
        <AccordionListItem title={' What services do we offer'}>
          <Text>We offer consultancy to patients with longterm diseases</Text>
        </AccordionListItem>
        <AccordionListItem title={'What are the forms of payment'}>
          <Text> Paypal is the form of payment we use</Text>
        </AccordionListItem>
        <AccordionListItem title={'Who is eligable for RemeD'}>
          <Text>Any patient undergoing  longterm illness is eligible to try out our platform.</Text>
        </AccordionListItem>
      </Animated.View>
      <Box width='8%' alignSelf='center' mt='5%'>
        <Button  color='black' title='Complains' onPress={() => navigation.navigate('Complaints',{name: 'Complaints'})}/>
      </Box>
    </SafeAreaView>
  );
};

const Complaints = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s </Text>;
};

export default Faqs;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '2rem',
    paddingTop: '10%',
    justifyContent: 'flex-start',
    width:'75%',
    alignSelf:'center',

  },
});


