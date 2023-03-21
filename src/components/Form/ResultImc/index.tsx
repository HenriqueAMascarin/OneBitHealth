import { View, Text} from "react-native";

type props = {
    messageResultImc: string
    resultImc: string
}

export default function ResultImc(props: props){
    return(
        <View>
            <Text>{props.messageResultImc}</Text>
            <Text>{props.resultImc}</Text>
        </View>
    );
}