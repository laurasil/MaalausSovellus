import logo from './logo.svg';
import './App.css';

export default function App() {
  const [maalinNimi, setMaalinNimi] = useState('');

  return (
    <div id="container">
    <View>
      <Text>Kirjoita maalin nimi:</Text>
      <TextInput
        onChangeText={(val) => setMaalinNimi(val)} />
    </View>
    </div>
  );
}






