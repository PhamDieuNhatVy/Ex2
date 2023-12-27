import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Kiểm tra xem userName và password có được nhập hay không
    if (!userName || !password) {
      Alert.alert('Thông báo', 'Vui lòng nhập tên đăng nhập và mật khẩu.');
      return;
    }

    // Hiển thị hộp thoại chào mừng
    Alert.alert('Xin chào', `Chào mừng ${userName}!`);
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Đăng Nhập</Text>

      {/* Input cho userName */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
        placeholder="Tên đăng nhập"
        value={userName}
        onChangeText={(text) => setUserName(text)}
      />

      {/* Input cho password */}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 10 }}
        placeholder="Mật khẩu"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Nút Đăng Nhập */}
      <TouchableOpacity
        style={{
          backgroundColor: '#FFB90F',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center',
        }}
        onPress={handleLogin}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Đăng Nhập</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
