import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default function CurrencyCardButton({
  name,
  currencyName,
  currencyValue,
  currencySymbol,
  flagIcon,
}) {
  return (
    <View style={styles.currencyCardButton}>
      <Text style={styles.countryFlag}>{flagIcon}</Text>
      <Text style={styles.countryName}>{name}</Text>
      <Text style={styles.currencyName}>
        {currencyName} [{currencySymbol}]
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  currencyCardButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flexStart',
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  countryFlag: {
    fontSize: 70,
    marginBottom: -10,
  },
  countryName: {
    color: '#777',
    fontSize: 14,
    marginBottom: 5,
  },
  currencyName: {
    color: '#111',
    fontSize: 16,
    textAlign: 'center',
  },
});
