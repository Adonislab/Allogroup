import * as React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import Navigation from './src/navigation';
import Amplify from "@aws-amplify/core";
import config from './src/aws-exports';

Amplify.configure(config);

const App = () => {
 
	return (
    <SafeAreaView style={styles.root}>
			<Navigation />
    </SafeAreaView>
		);
}


const styles = StyleSheet.create({
  root : {
    flex:1,
    backgroundColor : '#F9F8FC',
  },
});

export default App; 

