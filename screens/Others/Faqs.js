import { Box } from "native-base";
import { Button, SafeAreaView } from "react-native";
import Accordion from "../../components/Accordion";

function Faqs({ navigation }) {
  return (
    <SafeAreaView>
      <Box mt={"30%"} p={"2%"}>
        <Accordion
          title={" What is RemeD"}
          description={
            "RemeD is an online platform that offers consultancy services to patients with long term diseases. At RemeD we've always had one focus in mind: To provide quality healthcare services that are not only good for you but deliver real results to help you reach your goals!"
          }
        ></Accordion>
        <Accordion
          title={" What services do we offer"}
          description={
            "We offer consultancy to patients with longterm diseases"
          }
        ></Accordion>
        <Accordion
          title={"What are the forms of payment"}
          description={"Paypal is the form of payment we use"}
        ></Accordion>
        <Accordion
          title={"Who is eligable for RemeD"}
          description={
            "Any patient undergoing  longterm illness is eligible to try out our platform."
          }
        ></Accordion>
        <Box width="60%" alignSelf="center" mt="5%">
          <Button
            color="black"
            title="Complains"
            onPress={() =>
              navigation.navigate("Complaints", { name: "Complaints" })
            }
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
}

export default Faqs;
