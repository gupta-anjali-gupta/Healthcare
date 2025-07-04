import React, { useState } from 'react';
import Container from '../../component/Container/Container';
import Header from '../../component/Header/Header';
import Icons from '../../utils/Icons';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import appTheme from '../../utils/appTheme';
import CustomText from '../../component/CustomText/CustomText';
import { useSelector } from 'react-redux';

const ReminderScreen = props => {
  const navigation = props.navigation;
  const reminders = useSelector(state => state.cloudinaryFiles.files);
  console.log('reminders', reminders);
  return (
    <Container customStyle={{ paddingHorizontal: 20 }}>
      <Header
        leftIcon={Icons.back}
        leftIconPress={() => navigation.goBack()}
        title={'Reminder'}
      />

      {reminders.length > 0 ? (
        <FlatList
          numColumns={2}
          data={reminders}
          renderItem={({ item }) => (
            <View
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: appTheme.secondary,
                marginRight: '10%',
                marginBottom: '10%',
              }}
            >
              <Image
                source={{ uri: item.url }}
                style={{
                  width: 160,
                  height: 160,
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
            </View>
          )}
          keyExtractor={item => item.id}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <CustomText text={'No reminders found!'} />
        </View>
      )}
    </Container>
  );
};

export default ReminderScreen;

const styles = StyleSheet.create({
  uploadView: {
    paddingVertical: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: appTheme.secondary,
    borderRadius: 15,
  },
  fileTab: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
