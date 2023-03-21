import { View, Text} from "react-native";
import { headerStyle } from "../../styles/header.style";

export default function Title(){
    return(
        <View style={headerStyle.style}>
            <Text style={headerStyle.text}>OneBitHealth</Text>
        </View>
    );
}