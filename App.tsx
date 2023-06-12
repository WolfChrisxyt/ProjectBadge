import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
import axios from 'axios';

const data = [
  { date: '5', title: 'Tarefa de Java', description: 'para mudar de nível realizar a tarefa', circleColor: '#092C4C', lineColor: '#092C4C' },
  { date: '9', title: 'Tarefa de banco de dados', description: 'para mudar de nível realizar a tarefa', circleColor: '#092C4C', lineColor: '092C4C' },
  { date: '3', title: 'Tarefa de React Native de tela de usuário', description: 'para mudar de nível realizar a tarefa', circleColor: '#092C4C', lineColor: '#092C4C' },
];

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Timeline
        style={styles.list}
        data={data}
        separator={true}
        circleSize={20}
        circleColor='rgb(45,156,219)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{ minWidth: 52, marginTop: 20 }}
        timeStyle={{ textAlign: 'center', backgroundColor: '#2F80ED', color: 'white', padding: 6, borderRadius: 25, overflow: 'hidden' }}
        descriptionStyle={{ color: 'black' }}
        options={{
          style: { paddingTop: 6 }
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});

export default App;