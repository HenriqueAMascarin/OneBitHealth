import { View } from 'react-native';
import Title from './src/components/Title/';
import Main from './src/components/Main/';
import { bodyStyle } from './src/styles/body.style';

export default function App() {

  return (
    <View style={bodyStyle.style}> 
      <Title />
      <Main />
    </View>
  );
}
