import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form(){

    const [height, setHeight] = useState<number | string | undefined>(undefined);
    const [weight, setWeight] = useState<number | string | undefined>(undefined);
    const [messageImc, setMessageImc] = useState("preencha o peso e altura");
    const [imc, setImc] = useState<string>("");
    const [textButton, SetTextButton] = useState("Calcular");

    function imcCalculator(){
        const imcWeight = Number(weight);
        const imcHeight = Number(height)
        return setImc((imcWeight / (imcHeight * imcHeight)).toFixed(2)); 
    }

    function validationImc(){
        if(weight != undefined && height != undefined){
            imcCalculator();
            setHeight(undefined);
            setWeight(undefined);
            setMessageImc("Seu imc é igual:");
            SetTextButton("Calcular Novamente");
            return;
        }
        setImc("");
        SetTextButton("Calcular");
        setMessageImc("preencha o peso e altura");
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput style={styles.input} placeholder="Ex. 1.75" keyboardType="numeric" onChangeText={setHeight} value={height ? height.toString() : undefined}/>

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput style={styles.input} placeholder="Ex. 75.365" keyboardType="numeric" onChangeText={setWeight} value={weight ? weight.toString(): undefined}/>

                <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImc()}>
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}