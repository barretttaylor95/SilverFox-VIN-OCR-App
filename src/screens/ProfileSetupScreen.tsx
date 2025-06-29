import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ProfileSetupScreenProps } from '../types/navigation';
import { colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

interface Props extends ProfileSetupScreenProps {
  onProfileComplete: () => void;
}

export const ProfileSetupScreen: React.FC<Props> = ({ onProfileComplete }) => {
  const [name, setName] = useState('');
  const [dealership, setDealership] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSaveProfile = async () => {
    if (!name.trim() || !dealership.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    setIsLoading(true);
    try {
      const profileData = {
        name: name.trim(),
        dealership: dealership.trim(),
        createdAt: new Date().toISOString(),
      };

      await AsyncStorage.setItem('userProfile', JSON.stringify(profileData));
      onProfileComplete();
    } catch (error) {
      console.error('Error saving profile:', error);
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to SilverFox</Text>
        <Text style={styles.subtitle}>Set up your profile to get started</Text>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                label="Your Name"
                value={name}
                onChangeText={setName}
                mode="outlined"
                style={styles.input}
                disabled={isLoading}
                outlineColor={colors.border}
                activeOutlineColor={colors.primary}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                label="Dealership Name"
                value={dealership}
                onChangeText={setDealership}
                mode="outlined"
                style={styles.input}
                disabled={isLoading}
                outlineColor={colors.border}
                activeOutlineColor={colors.primary}
              />
            </View>

            <Button
              mode="contained"
              onPress={handleSaveProfile}
              loading={isLoading}
              disabled={isLoading}
              style={styles.button}
              buttonColor={colors.primary}
              textColor={colors.white}
            >
              Continue
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xxl,
    paddingHorizontal: spacing.lg,
    alignItems: 'center',
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.white,
    textAlign: 'center',
    opacity: 0.9,
  },
  content: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: spacing.lg,
  },
  form: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    ...shadows.md,
  },
  inputContainer: {
    marginBottom: spacing.lg,
  },
  input: {
    backgroundColor: colors.white,
  },
  button: {
    marginTop: spacing.md,
    borderRadius: borderRadius.md,
  },
});