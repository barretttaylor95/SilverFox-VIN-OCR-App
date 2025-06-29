import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { VINScannerStackParamList } from '../types/navigation';
import { VINScannerScreen } from '../screens/VINScannerScreen';
import { VINDetectedScreen, SuccessScreen } from '../screens/PlaceholderScreens';
import { colors, typography } from '../constants/theme';

const VINScannerStack = createStackNavigator<VINScannerStackParamList>();

export const VINScannerStackNavigator: React.FC = () => {
  return (
    <VINScannerStack.Navigator
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
      <VINScannerStack.Screen 
        name="Scanner" 
        component={VINScannerScreen}
        options={{
          title: 'VIN Scanner',
          headerLeft: () => null, // Remove back button on main scanner screen
        }}
      />
      <VINScannerStack.Screen 
        name="VINDetected" 
        component={VINDetectedScreen}
        options={{
          title: 'VIN Detected',
        }}
      />
      <VINScannerStack.Screen 
        name="Success" 
        component={SuccessScreen}
        options={{
          title: 'Success',
          headerLeft: () => null, // Remove back button on success screen
          gestureEnabled: false, // Prevent swipe back
        }}
      />
    </VINScannerStack.Navigator>
  );
};