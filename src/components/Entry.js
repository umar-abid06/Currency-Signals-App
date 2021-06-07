import React from 'react';
import {View, Text, ScrollView, TextInput, StyleSheet} from 'react-native';

const AddNewCardsScreen = () => {
  return (
    <ScrollView>
      <Text>Add a Currency Signal</Text>
      <View style={styles.form}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Enter an ID number to the Signal</Text>
          <TextInput style={styles.input} placeholder="1" />
          <Text style={styles.label}>From (Enter the first Currency Code)</Text>
          <TextInput style={styles.input} placeholder="USD" />
          <Text style={styles.label}>To (Enter the second Currency Code)</Text>
          <TextInput style={styles.input} placeholder="PKR" />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>
            From (Enter the link of the first Currency Flag)
          </Text>
          <TextInput style={styles.input} placeholder="https://" />
          <Text style={styles.label}>
            To (Enter the link of the first Currency Flag)
          </Text>
          <TextInput style={styles.input} placeholder="https://" />
        </View>
        <View style={styles.formControl}>
          <Text style={styles.label}>Entry Value</Text>
          <TextInput style={styles.input} placeholder="" />
          <Text style={styles.label}>TP value</Text>
          <TextInput style={styles.input} placeholder="" />
          <Text style={styles.label}>SL value</Text>
          <TextInput style={styles.input} placeholder="" />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  form: {
    margin: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});
export default AddNewCardsScreen;
