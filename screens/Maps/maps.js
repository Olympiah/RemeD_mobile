import { View } from 'react-native';
// import GetMaps from './GetMaps';
// import MapScreen from './MapScreen';
import Cordinate from './so';

const Maps = ({ navigation }) => {
    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
         {/* <GetMaps/> */}
         {/* <MapScreen/> */}
         <Cordinate/>
        </View>
    );
};


export default Maps; 