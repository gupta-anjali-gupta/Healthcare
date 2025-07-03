import { ScrollView, StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import appTheme from '../../utils/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Container = ({
  children,
  bgColor,
  customStyle,
  barStyle,
  scrollEnabled = false,
}) => {
  const insets = useSafeAreaInsets();

  if (scrollEnabled) {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: bgColor ?? appTheme.white,
          paddingTop: insets.top,
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor={bgColor ?? appTheme.white}
          barStyle={barStyle ?? 'dark-content'}
        />
        <View style={[{ flex: 1 }, customStyle]}>{children}</View>
      </ScrollView>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: bgColor ?? appTheme.white,
          paddingTop: insets.top,
        }}
      >
        <StatusBar
          animated={true}
          backgroundColor={bgColor ?? appTheme.white}
          barStyle={barStyle ?? 'dark-content'}
        />
        <View style={[{ flex: 1 }, customStyle]}>{children}</View>
      </View>
    );
  }
};

export default Container;

const styles = StyleSheet.create({});
