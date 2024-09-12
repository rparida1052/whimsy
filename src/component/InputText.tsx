import { StyleSheet, Text, TextInput, View ,} from 'react-native'
import React from 'react'
import { theme } from '../theme/them';

interface TextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text:string) => void;
}
const InputText = () => {

  return (
   <View style={styles.container}>
    <TextInput placeholder='Enter ' style={styles.inputText}/>
   </View>
  )
}

export default InputText

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 64,
    marginHorizontal: 20,
    backgroundColor: theme.colorSecondary,
    padding: 10,
    borderRadius: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,

  },
  inputText: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "600",
  },
});