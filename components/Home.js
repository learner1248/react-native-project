import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import FadeInView from "./Views/FadeInView";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

const Home = ({ navigation }) => {
  const [command, setCommand] = useState("");
  const [state, setState] = useState({
    w1: 0,
    w2: 0,
  });

  if (command) {
    let args = command.split(" ");
    let cmd = args.shift();

    switch (cmd) {
      case "commandlist":
      case "cmdlist":
        navigation.navigate("Command List");
        break;
      case "create":
        let createType = args[0];
        switch (createType) {
          case "command":
            let commandName = args[1];
            let commandText = args.slice(2).join(" ");
            console.log(commandText);
            break;
        }
        break;
      case "delete":
        break;
      case "deactivate":
        break;
      case "set":
        break;
      case "select":
        break;
      case "save":
        break;
    }
  }

  return (
    <View style={styles.container}>
      {command ? (
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: "24px" }}>
          [ {command} ]
        </Text>
      ) : (
        <FadeInView
          style={{ width: 250, height: 50, backgroundColor: "powderBlue" }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 28,
              textAlign: "center",
              margin: 10,
            }}
          >
            _
          </Text>
        </FadeInView>
      )}
      {/*<Text style={{color: '#fff', fontSize: 28, textAlign: 'center'}}>COMMAND</Text>
        <Text style={{color: '#fff', fontSize: 28, textAlign: 'center'}}>
                _____________
        </Text>*/}
      <StatusBar style="auto" />
      <TextInput
        defautValue={command}
        onChangeText={(newCommand) => setCommand(newCommand)}
        style={{
          color: "#fff",
          margin: "8px",
          textAlign: "center",
          width: "50%",
          border: "2px solid #fff",
        }}
      />
    </View>
  );
};

export default Home;
