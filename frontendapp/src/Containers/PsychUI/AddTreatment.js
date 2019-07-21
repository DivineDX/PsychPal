import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Input, Text } from 'react-native-elements';
import { Textarea } from "native-base";

const AddTreatment = () => {
  return (
    <View>
      <Text h4>{`\n  `}Create treatment plan{'\n  '}</Text>

      <Input
        placeholder='Title'
      />

      <Textarea style = {styles.textboxContainer} rowSpan={5} bordered placeholder="Instructions" />

    </View>
  );
};

const styles = StyleSheet.create({
  textboxContainer: {
    marginHorizontal: 20,
  }
})
export default AddTreatment;