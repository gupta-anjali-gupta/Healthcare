import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Container from '../../component/Container/Container';
import Header from '../../component/Header/Header';
import Icons from '../../utils/Icons';
import IconButton from '../../component/IconButton/IconButton';
import appTheme from '../../utils/appTheme';
import CustomText from '../../component/CustomText/CustomText';
import StringConstants from '../../utils/StringConstants';
import CustomButton from '../../component/CustomButton/CustomButton';

const HomeScreen = props => {
  const navigation = props.navigation;
  const buttons = [
    { id: 0, title: 'Questions', icon: Icons.ques },
    { id: 1, title: 'Reminders', icon: Icons.reminder },
    { id: 2, title: 'Messages', icon: Icons.messages },
    { id: 3, title: 'Calendar', icon: Icons.calendr },
    
    
  ];
  return (
    <Container customStyle={{ paddingHorizontal: 20 }} scrollEnabled>
      <Header
        leftIcon={Icons.bar}
        leftIconPress={() => navigation.openDrawer()}
        rightIcon={Icons.mic}
      />
      <View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => (
            <IconButton
            onPress={() => {
              if(item.title==='Reminders')
              {
                navigation.navigate('Reminder');
              }
            }}
              leftText={item.title}
              icon={item.icon}
              size={27}
              width={'45%'}
              customStyle={{
                borderWidth: 1,
                borderColor: appTheme.gray,
                marginRight: '10%',
                paddingHorizontal: 14,
                paddingVertical: 5,
                justifyContent: 'space-between',
              }}
            />
          )}
          numColumns={2}
          keyExtractor={item => item.id}
          contentContainerStyle={{ gap: 15 }}
          scrollEnabled={false}
        />
      </View>
      <View style={styles.subContainer}>
        <View style={styles.titleView}>
          <CustomText text={StringConstants.uploadTitle} fontSize={14} />
          <CustomText text={StringConstants.uploadDescription} fontSize={12} />
        </View>
        <View style={styles.percentOffView}>
          <CustomText
            text={StringConstants.offPercent}
            fontSize={12}
            customStyle={{ lineHeight: 12 * 1.5 }}
          />
          <CustomButton
            // onPress={handleLogin}
            title={'ORDER NOW'}
            color={appTheme.white}
            fontSize={14}
            buttonStyle={{
              backgroundColor: appTheme.tertiary,
            }}
          />
        </View>
        <Image
          source={Icons.doctor}
          style={{ resizeMode: 'contain', width: '100%' }}
        />
        <View style={styles.shopNow}>
          <View style={{ gap: 10 }}>
            <View style={styles.uptoView}>
              <View style={styles.textWrapper}>
                <CustomText
                  text={'UPTO'}
                  fontSize={20}
                  fontWeight="700"
                  customStyle={{
                    transform: [{ rotate: '-90deg' }],
                    width: 60,
                  }}
                />
              </View>
              <View>
                <CustomText text={'80%'} fontSize={35} fontWeight="700" />
                <CustomText text={'offer'} fontSize={15} fontWeight="700" />
              </View>
            </View>
            <CustomText
              text={'On Health Products'}
              fontSize={14}
              fontWeight="700"
            />
            <CustomButton
              // onPress={handleLogin}
              title={'SHOP NOW'}
              color={appTheme.white}
              fontSize={14}
              buttonStyle={{
                backgroundColor: appTheme.tertiary,
              }}
            />
          </View>
          <Image
            source={Icons.medicine}
            style={{ resizeMode: 'contain', height: 100, alignSelf: 'center' }}
          />
        </View>
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    paddingVertical: 30,
    gap: 20,
  },
  titleView: {
    gap: 10,
  },
  percentOffView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  uptoView: {
    flexDirection: 'row',
  },
  textWrapper: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  shopNow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: appTheme.cardBackground,
    borderRadius: 12,
    padding: 15,
  },
});
