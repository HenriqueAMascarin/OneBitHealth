import { StyleSheet } from "react-native";

export const formStyle = StyleSheet.create({
    style: {
        backgroundColor: "white",
        paddingVertical: 40,
        paddingHorizontal: 30,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: "100%",
    },
    labelText:{
        fontSize: 20,
        paddingVertical: 10,
        paddingLeft: 10,
    },
    textInput:{
        backgroundColor: "#F6F6F6",
        paddingVertical: 8,
        paddingLeft: 10,
        borderRadius: 50,
    },
    button:{
        paddingVertical: 15,
        backgroundColor: "#E2003F",
        marginTop: 40,
        marginBottom: 80,
        borderRadius: 50,
    },
    textButton: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    aboutText:{
        fontSize: 20,
    },
    resultText:{
        fontSize: 22,
        color: '#E2003F',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    resultNumberText:{
        fontSize: 60,
        color: '#E2003F',
        fontWeight: 'bold',
        textAlign: 'center',
    }
})