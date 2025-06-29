import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { MainTabParamList } from '../types/navigation';
import { VINScannerStackNavigator } from './VINScannerStackNavigator';
import { HistoryStackNavigator } from './HistoryStackNavigator';
import { SettingsStackNavigator } from './SettingsStackNavigator';
import { colors, typography } from '../constants/theme';

const MainTab = createBottomTabNavigator<MainTabParamList>();

export const MainTabNavigator: React.FC = () => {
  return (
    <MainTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconText: string;

          switch (route.name) {
            case 'VINScanner':
              iconText = '📷';
              break;
            case 'History':
              iconText = '📋';
              break;
            case 'Settings':
              iconText = '⚙️';
              break;
            default:
              iconText = '❓';
          }

          return <Text style={{ fontSize: 24, color: focused ? colors.primary : colors.gray600 }}>{iconText}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray600,
        tabBarStyle: {
          backgroundColor: colors.white,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.medium,
          marginBottom: 4,
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
      })}
    >
      <MainTab.Screen 
        name="VINScanner" 
        component={VINScannerStackNavigator}
        options={{
          tabBarLabel: 'Scanner',
        }}
      />
      <MainTab.Screen 
        name="History" 
        component={HistoryStackNavigator}
        options={{
          tabBarLabel: 'History',
        }}
      />
      <MainTab.Screen 
        name="Settings" 
        component={SettingsStackNavigator}
        options={{
          tabBarLabel: 'Settings',
        }}
      />
    </MainTab.Navigator>
  );
};