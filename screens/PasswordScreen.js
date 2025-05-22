import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import MaterialDesignIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
// install navigation type (stack, drawer, tab)
import { saveRegistrationProgress } from '../utils/registrationUtils';
import axios from 'axios';
import { BASE_URL } from '../urls/url';

const PasswordScreen = () => {
  const [password, setPassword] = useState('');
  const route = useRoute();
  const navigation = useNavigation();
  const email = route?.params?.email;
  // const handleSendOtp = async () => {
  //   if(!email){
  //     return;
  //   }

  //   try{
  //     const response = await axios.post(`${BASE_URL}/sendOtp`,{
  //       email,
  //       password
  //     });
  //     console.log(response.data.message);
  //     navigation.navigate('Otp', {email});

  //   } catch(error){
  //     console.log("Error sending the OTP",error)
  //   }
  // }
  const handleNext = () => {
    // if(password.trim() !== ''){
    //   saveRegistrationProgress('Password',{password});
    // }
    navigation.navigate('Otp', {email});

    // handleSendOtp();
  };
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === 'android' ? 35 : 0,
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{marginTop: 80, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialDesignIcons name="lock" size={26} color="black" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginTop: 15,
          }}>
          Please choose a password
        </Text>

        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          autoFocus={true}
          placeholder="Enter your Password"
          secureTextEntry={true}
          placeholderTextColor={'#BEBEBE'}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontFamily: 'GeezaPro-Bold',
            fontSize: password ? 22 : 22,
          }}
        />

        <Text style={{color: 'gray', marginTop: 7, fontSize: 15}}>
          Note: You details will be safe with us
        </Text>

        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <Ionicons
            name="chevron-forward-circle-outline"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});