import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import batLogo from './assets/bat-logo.png'
import { useState } from 'react';


export default function App() {
const [homeView, setHomeRender] = useState(true)
const [formView, setFormRender] = useState(false)

function Home(){
  return (
    <View style={homeStyles.home} >
      <Image style={homeStyles.batLogo} source={batLogo} resizeMode='contain' /> 
      <Text style={homeStyles.signalButton} 
      onPress={ () => {
        setHomeRender(!homeView)
        setFormRender(!formView)
      }}>ACTIVATE BAT SIGNAL</Text>
      <StatusBar style="auto" />
    </View>
  )
}

function Form(){
  return (
    <View style={[formStyles.form]}>
      <View style={formStyles.label}>
        <Text style={formStyles.textForm}>Nome:</Text>
        <TextInput 
          placeholder='Informe seu nome completo'
          style={formStyles.textInputForm}
        />
      </View>
      <View style={formStyles.label}>
        <Text style={formStyles.textForm}>Telefone:</Text>
        <TextInput  
          placeholder='Insira seu melhor número de contato'
          style={formStyles.textInputForm}
        />
      </View>
      <View style={formStyles.label}>
        <Text style={formStyles.textForm}>Localização:</Text>
        <TextInput
          placeholder='Informe sua localização'
          multiline
          numberOfLines={4}
          style={formStyles.textInputForm}
        />
      </View>
      <View style={formStyles.label}>
        <Text style={formStyles.textForm}>Observação:</Text>
        <TextInput
          placeholder='Insira informações adicionais'
          multiline
          numberOfLines={5}
          style={formStyles.textInputForm}
        />
      </View>
      <Text style={formStyles.sendButton}>Enviar</Text>
      <StatusBar style="auto" />
    </View>
  )
}

  return (
    homeView && Home() || formView && Form()
  );
}


const homeStyles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',

  },
  signalButton: {
    color: '#000',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#FFF22D'
  },
  batLogo: {
    width: '80%',
    height: 200
  }
});

const formStyles = StyleSheet.create({
  form: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  label: {
    backgroundColor: '#FFF22D',
    width: '80%',
    padding: 10,
    borderRadius: 5
  },
  textForm: {
    color: '#000',
    fontSize: 16
  },
  textInputForm: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    color: '#424242ff',
    marginTop: 5
  },
  sendButton: {
    color: '#000',
    padding: 20,
    fontWeight: 'bold',
    fontSize: 20,
    borderRadius: 5,
    backgroundColor: '#FFF22D',
    textAlign: 'center',
    width: '80%'
  }
})