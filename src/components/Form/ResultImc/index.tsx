import { View, Text} from "react-native";
import styles from "./style";

type props = {
    messageResultImc: string
    resultImc: string
}

export default function ResultImc(props: props){
    return(
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}