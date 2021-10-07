import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';
import FormInput from '../components/FormInput';
import {postImages} from '../services/getImageApi';

import utils from '../utils/Utils';

const ImageDetail = props => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleSubmit = () => {
    postImages(firstName, lastName, email, phone, props.route.params.imagePath);
  };

  console.log('====================================');
  console.log('imageDetailProps ', props.route.params);
  console.log('====================================');

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 100}>
      <View
        style={{
          marginTop: 42,
          marginBottom: 24,
        }}>
        <Image
          source={{uri: props.route.params.imagePath}}
          style={{width: 300, height: 300}}
        />
        <View style={{padding: 20}}>
          <FormInput
            label="First name"
            onChange={value => {
              setFirstName(value);
            }}
          />
          <FormInput
            label="Last name"
            onChange={value => {
              setLastName(value);
            }}
          />
          {/* Email */}
          <FormInput
            label="Email"
            keyboardType="email-address"
            autoCompleteType="email"
            onChange={value => {
              utils.validateEmail(value, setEmailError);
              setEmail(value);
            }}
            errorMsg={emailError}
          />
          {/* Phone */}
          <FormInput
            label="Phone"
            keyboardType="phone"
            onChange={value => {
              utils.validatePhone(value, setPhoneError);
              setPhone(value);
            }}
            errorMsg={phoneError}
          />
          <TouchableOpacity onPress={handleSubmit}>
            <Text>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
    // <Text>Hiii</Text>
  );
};

export default ImageDetail;
