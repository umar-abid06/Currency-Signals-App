import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../constants/colors';

export default function DrawerContent(props) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.accentColor}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <Icon
                  name="home-sharp"
                  color={COLORS.primaryColor}
                  size={size}
                />
              )}
              label={() => (
                <Text style={{color: COLORS.primaryColor, fontWeight: 'bold'}}>
                  Home
                </Text>
              )}
              onPress={() => {
                props.navigation.navigate('Home Page');
              }}
            />
            <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon
                    name="person-circle-sharp"
                    color={COLORS.primaryColor}
                    size={size}
                  />
                )}
                label={() => (
                  <Text
                    style={{color: COLORS.primaryColor, fontWeight: 'bold'}}>
                    Admin
                  </Text>
                )}
                onPress={() => {
                  props.navigation.navigate('Admin Page');
                }}
              />
              <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                  icon={({color, size}) => (
                    <Icon
                      name="grid-sharp"
                      color={COLORS.primaryColor}
                      size={size}
                    />
                  )}
                  label={() => (
                    <Text
                      style={{color: COLORS.primaryColor, fontWeight: 'bold'}}>
                      Details
                    </Text>
                  )}
                  onPress={() => {
                    // props.navigation.navigate('Details Page');
                  }}
                />
              </Drawer.Section>
            </Drawer.Section>

            <Drawer.Section style={styles.bottomDrawerSection}>
              <DrawerItem
                icon={({color, size}) => (
                  <Icon
                    name="cart-sharp"
                    color={COLORS.primaryColor}
                    size={size}
                  />
                )}
                label={() => (
                  <Text
                    style={{color: COLORS.primaryColor, fontWeight: 'bold'}}>
                    Orders
                  </Text>
                )}
                onPress={() => {
                  // props.navigation.navigate('Orders Page');
                }}
              />
            </Drawer.Section>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: COLORS.primaryColor,
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
