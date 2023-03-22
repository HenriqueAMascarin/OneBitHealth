import { View, Text} from "react-native";
import { formStyle } from "../../../styles/form.style";

type props = {
    messageResultImc: string
    resultImc: string
}

export default function ResultImc(props: props){
    return(
        <View>
            <Text style={formStyle.resultText}>{props.messageResultImc}</Text>
            <Text style={formStyle.resultNumberText}>{props.resultImc}</Text>
        </View>
    );
}