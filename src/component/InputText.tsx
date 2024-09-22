import { StyleSheet, Text, TextInput, View ,} from 'react-native'
import React from 'react'
import { theme } from '../theme/them';

interface TextInputProps {
    placeholder?: string;
    value?: string;
    onChangeText?: (text:string) => void;
    containerStyle?: object;
    icon?: React.ReactNode;
}
const InputText = ({placeholder,value,onChangeText,containerStyle,icon}:TextInputProps) => {

  return (
    <View style={[styles.container, containerStyle]}>
      {icon}
      <TextInput placeholder={placeholder} style={styles.inputText} value={value} onChangeText={onChangeText}/>
    </View>
  );
}

export default InputText

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems:"center",
    gap:10,
    width: "100%",
    height: 64,
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