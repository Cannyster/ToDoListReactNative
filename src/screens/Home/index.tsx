import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from "./styles";
import { useState } from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        "Participante Já Existente",
        "Já existe um participante cadastrado com esse nome"
      );
    }
    setParticipants((prevState) => [...prevState, participantName]);
    setParticipantName("");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o particpante ${name} ?`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
        // () => Alert.alert("Deletado!"),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Você Removeu ${name}`);
  }

  return (
    <View style={styles.container}>
      <img src={rocket} alt="Logotipo do Todo List" />
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          // onChangeText={handleState}
          onChangeText={(text) => setParticipantName(text)}
          value={participantName} //vinculando o valor ao estado quando ele for limpo vai zera o input
          // keyboardType="numeric" // altera o tipo de teclado, apenas números, apenas texto e outros tipos
        />

        <TouchableOpacity onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      {/* <FlatList
        data=
        keyExtractor=
        renderItem=
        showsVerticalScrollIndicator
      /> */}
    </View>
  );
}
