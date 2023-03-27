import { View, Text, TouchableOpacity, Share} from "react-native";
import styles from "./style";

type props = {
    messageResultImc: string
    resultImc: string | undefined
}

export default function ResultImc(props: props){
    
    const onShare = async () =>{
        const result = await Share.share({
            message:"Meu imc hoje é: " + props.resultImc,
        })
    }

    return(
        <View style={styles.contextImc}>
            <View style={styles.boxShareButton}>
                {props.resultImc != undefined ? 
                <TouchableOpacity 
                 onPress={onShare}
                 style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
                :
                <View/>
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.resultImc}</Text>
        </View>
    );
}