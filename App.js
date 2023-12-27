import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!userName || !password) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }

    Alert.alert('Xin chào', `Chào mừng ${userName}!`);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e8bee0' }}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Đăng Nhập</Text>

      
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',  
          marginBottom: 10,
        }}>
        
          <TextInput
            style={{
              flex: 2, 
              height: 40,
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 15,
            }}
            placeholder="Tên đăng nhập"
            value={userName}
            onChangeText={(text) => setUserName(text)}
          />
        </View>

       
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          marginBottom: 20,
        }}>
          
          <TextInput
            style={{
              flex: 2,
              height: 40,
              borderWidth: 1,
              borderRadius: 20,
              paddingLeft: 15,
            }}
            placeholder="Mật khẩu"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>

       
        <TouchableOpacity
          style={{
            backgroundColor: '#870c6f',
            paddingVertical: 12,
            paddingHorizontal: 50,
            borderRadius: 25,
            alignItems: 'center',
          }}
          onPress={handleLogin}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
