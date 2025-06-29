import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HistoryStackParamList } from '../types/navigation';
import { HistoryListScreen, HistoryDetailScreen } from '../screens/PlaceholderScreens';
import { colors, typography } from '../constants/theme';

const HistoryStack = createStackNavigator<HistoryStackParamList>();

export const HistoryStackNavigator: React.FC = () => {
  return (
    <HistoryStack.Navigator
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
      <HistoryStack.Screen 
        name="HistoryList" 
        component={HistoryListScreen}
        options={{
          title: 'Scan History',
          headerLeft: () => null, // Remove back button on main history screen
        }}
      />
      <HistoryStack.Screen 
        name="HistoryDetail" 
        component={HistoryDetailScreen}
        options={{
          title: 'Scan Details',
        }}
      />
    </HistoryStack.Navigator>
  );
};