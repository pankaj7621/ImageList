import React from 'react';
import {View, Text, TextInput} from 'react-native';

const FormInput = ({
  containerStyle,
  label,
  inputStyle,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
}) => {
  return (
    <View style={{...containerStyle}}>
      {/* Label & Error Msg */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{}}>{label}</Text>
        <Text style={{}}>{errorMsg}</Text>
      </View>

      {/* Text Input */}
      <View
        style={{
          flexDirection: 'row',
          height: 55,
          paddingHorizontal: 24,
          marginTop: 12,
          borderRadius: 12,
          backgroundColor: '#F5F5F8',
        }}>
        <TextInput
          style={{flex: 1, ...inputStyle}}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={text => onChange(text)}
        />
      </View>
    </View>
  );
};

export default FormInput;
