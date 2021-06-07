import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../constants/colors';

const CountryPicker = props => {
  const [selected, setSelected] = useState();
  const renderCountryData = item => {
    const countryObject = {};
    return (
      <TouchableOpacity
        onPress={() =>
          setSelected({
            name: item.name.common,
            flag: item.flag,
            curr: item.cca2,
          })
        }
        style={{
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: COLORS.primaryColor,
        }}>
        <Text style={{fontSize: 18, margin: 8}}>{item.flag}</Text>
        <Text style={{fontSize: 18, marginRight: 8}}>{item.name.common}</Text>
        <Text style={{fontSize: 18}}>{item.cca2}</Text>
      </TouchableOpacity>
    );
  };
  console.log(selected);

  return (
    <View>
      <Modal visible={props.isVisible}>
        <View style={{flex: 1}}>
          <FlatList
            style={{flex: 1}}
            data={props.data}
            renderItem={({item}) => renderCountryData(item)}
          />
        </View>
      </Modal>
    </View>
  );
};

export default CountryPicker;

const styles = StyleSheet.create({});
