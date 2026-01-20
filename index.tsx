import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>

      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.desc}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
  },
  desc: {
    color: '#666',
    marginVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#eee',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#999',
    fontWeight: '600',
  },
});
