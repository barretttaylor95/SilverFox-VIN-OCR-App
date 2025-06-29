import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingsStackParamList } from '../types/navigation';
import { SettingsListScreen, ProfileEditScreen, AboutScreen } from '../screens/PlaceholderScreens';
import { colors, typography } from '../constants/theme';

const SettingsStack = createStackNavigator<SettingsStackParamList>();

export const SettingsStackNavigator: React.FC = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
          elevation: 0,
          shadowOpacity: 0,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.bold,
        },
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      <SettingsStack.Screen 
        name="SettingsList" 
        component={SettingsListScreen}
        options={{
          title: 'Settings',
          headerLeft: () => null, // Remove back button on main settings screen
        }}
      />
      <SettingsStack.Screen 
        name="ProfileEdit" 
        component={ProfileEditScreen}
        options={{
          title: 'Edit Profile',
        }}
      />
      <SettingsStack.Screen 
        name="About" 
        component={AboutScreen}
        options={{
          title: 'About',
        }}
      />
    </SettingsStack.Navigator>
  );
};