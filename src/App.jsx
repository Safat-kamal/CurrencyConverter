import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from 'react-native';

import CurrencyCardButton from './components/currencyCardButton';
import {currencies} from './currency';
import Snackbar from 'react-native-snackbar';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [convertPrice, setConvertedPrice] = useState('');
  const [targetCurrency, setTargetCurrency] = useState('');
  const pressedHandler = targetElement => {
    if (!inputValue) {
      Snackbar.show({
        text: 'Invalid amount to Convert',
        backgroundColor: '#f5424e',
        textColor: '#fff',
      });
    }
    const inputAmout = parseFloat(inputValue);
    if (!isNaN(inputAmout)) {
      const result = `${targetElement.currencySymbol} ${(
        inputAmout * targetElement.currencyValue
      ).toFixed(3)}`;
      setConvertedPrice(result);
      setTargetCurrency(targetElement.name);
      setInputValue('');
    } else {
      Snackbar.show({
        text: 'Invalid amount to Convert',
        backgroundColor: '#f5424e',
        textColor: '#fff',
      });
    }
  };
  return (
    <SafeAreaView>
      <StatusBar style={styles.statusBar} />
      <View style={styles.sectionContainer}>
        <View>
          <Text style={styles.defaultCurrencySymbol}>₹</Text>
          <TextInput
            style={styles.inputField}
            value={inputValue}
            onChangeText={setInputValue}
            maxLength={14}
            placeholder="Enter the amount in Indian Rupees"
            keyboardType="number-pad"
            clearButtonMode="always"
          />
          {convertPrice && (
            <View style={styles.resultBox}>
              <Text style={styles.resultTxt}>{convertPrice}</Text>
            </View>
          )}
        </View>
        <View style={styles.listOfCurrencies}>
          <Text style={styles.listTitle}>Convert Into:</Text>
          <FlatList
            numColumns={2}
            data={currencies}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <Pressable
                style={[
                  styles.clickable,
                  targetCurrency === item.name && styles.acitveItem,
                ]}
                onPress={() => pressedHandler(item)}>
                <CurrencyCardButton {...item} />
              </Pressable>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#1039A5',
    color: '#FFFFFF',
  },
  sectionContainer: {
    paddingVertical: 35,
    paddingHorizontal: 24,
    backgroundColor: '#111111',
  },
  defaultCurrencySymbol: {
    textAlign: 'center',
    fontSize: 40,
    color: '#8AE785',
  },
  inputField: {
    height: 50,
    borderWidth: 1,
    borderColor: '#232324',
    borderRadius: 10,
    paddingHorizontal: 19,
    marginVertical: 10,
    backgroundColor: '#eee',
    color: '#333',
    fontSize: 16,
  },
  resultBox: {
    backgroundColor: '#292CEA',
    marginTop: 10,
    borderRadius: 10,
  },
  resultTxt: {
    fontSize: 30,
    color: '#fff',
    paddingVertical: 5,
    textAlign: 'center',
  },
  listOfCurrencies: {
    marginTop: 20,
    marginBottom: 50,
    paddingBottom: 400,
  },
  listTitle: {
    color: '#fff',
    fontSize: 20,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  clickable: {
    backgroundColor: '#E7E7E7',
    margin: 8,
    width: 175,
    height: 160,
    borderRadius: 15,
  },
  acitveItem: {
    backgroundColor: '#ECE673',
  },
});

export default App;
