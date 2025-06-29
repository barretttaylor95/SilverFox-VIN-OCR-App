import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from 'react-native';

import { RootStackParamList } from '../types/navigation';
import { MainTabNavigator } from './MainTabNavigator';
import { ProfileSetupScreen } from '../screens/ProfileSetupScreen';
import { colors } from '../constants/theme';

const RootStack = createStackNavigator<RootStackParamList>();

export const AppNavigator: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    checkUserProfile();
  }, []);

  const checkUserProfile = async () => {
    try {
      const profileData = await AsyncStorage.getItem('userProfile');
      if (profileData) {
        const profile = JSON.parse(profileData);
        setHasProfile(!!profile.name && !!profile.dealership);
      }
    } catch (error) {
      console.error('Error checking user profile:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProfileComplete = () => {
    setHasProfile(true);
  };

  if (isLoading) {
    return (
      <View style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: colors.background 
      }}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.background },
      }}
    >
      {hasProfile ? (
        <RootStack.Screen name="MainApp" component={MainTabNavigator} />
      ) : (
        <RootStack.Screen name="ProfileSetup">
          {(props) => (
            <ProfileSetupScreen 
              {...props} 
              onProfileComplete={handleProfileComplete}
            />
          )}
        </RootStack.Screen>
      )}
    </RootStack.Navigator>
  );
};