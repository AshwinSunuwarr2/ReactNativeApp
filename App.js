import { StatusBar } from 'expo-status-bar';
import { Button, Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 20 }}>English(Np)</Text>
      <Image source={require("./assets/instagramtext.png")} style={styles.instaText} />
      <TextInput placeholder='Phone number, email or username' style={styles.txtInput1} />
      <TextInput placeholder='Password' style={styles.txtInput2} />
      <Pressable style={styles.loginBtn} onPress={() => { }}>
        <Text style={{ color: "white", fontSize: 18, fontWeight: "500", letterSpacing: 0.25 }}>Login</Text>
      </Pressable>
      <View style={{ flex: 0, flexDirection: 'row', padding: 7, marginTop: 20, marginBottom: 75 }}>
        <Text>Forgot your login details?</Text>
        <Pressable onPress={() => { }}>
          <Text style={{ fontWeight: "700", marginLeft: 8 }}>Get help</Text>
        </Pressable>
      </View>
      <Text>----------------- OR --------------------</Text>
      <Pressable style={{ flex: 0, flexDirection: 'row', marginTop: 20 }} onPress={() => { }}>
        <Image source={require("./assets/fblogo.png")} style={styles.fbLogo} /><Text>Login with facebook</Text>
      </Pressable>

      <Image source={require("./assets/horizontalline.png")} style={styles.lineStyle} />

      <View style={{ flex: 0, flexDirection: 'row' }}>
        <Text>Don't have an account? </Text>
        <Pressable onPress={() => { }}>
          <Text style={{ fontWeight: "700", marginLeft: 2 }}>Sign in</Text>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between"
  },
  instaText: {
    width: 180,
    height: 80,
    marginTop: 75,
    objectFit: 'fill'
  },
  txtInput1: {
    borderWidth: 1, padding: 7, fontSize: 16, borderRadius: 4, width: "95%", backgroundColor: "#f2f2f2"
  },
  txtInput2: {
    marginTop: 12, borderWidth: 1, padding: 7, fontSize: 16, borderRadius: 4, width: "95%", marginBottom: 30, backgroundColor: "#f2f2f2"
  },
  loginBtn: {
    width: "95%",
    paddingVertical: 12,
    paddingHorizontal: 12, elevation: 3, alignItems: "center", justifyContent: "center", borderRadius: 12, backgroundColor: "dodgerblue"
  },
  fbLogo: {
    width: 25, height: 22, objectFit: "fill", marginRight: 5
  },
  lineStyle: {
    width: "200%", height: 1.5, marginTop: 50,
    objectFit: "cover"
  }
});
