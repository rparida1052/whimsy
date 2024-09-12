import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { theme } from '../theme/them';

interface PrimaryButtonProps {
  onPress?: () => void;
  title: string;
  bgColor?: string;
  color?: string;

}
const PrimaryButton = ({bgColor,color,onPress,title}:PrimaryButtonProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.btnText}>{title}</Text>
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 48,
    marginHorizontal: 20,
    backgroundColor: theme.colorPrimary,
    padding: 10,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: theme.colorPrimary,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  btnText: {
    color: theme.colorSecondary,
    fontSize: 16,
    fontWeight: "600",
  },
});