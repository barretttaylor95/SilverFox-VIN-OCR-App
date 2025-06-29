import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';

import { 
  VINDetectedScreenProps, 
  SuccessScreenProps,
  HistoryListScreenProps,
  HistoryDetailScreenProps,
  SettingsListScreenProps,
  ProfileEditScreenProps 
} from '../types/navigation';
import { colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

// VIN Detected Screen
export const VINDetectedScreen: React.FC<VINDetectedScreenProps> = ({ 
  navigation, 
  route 
}) => {
  const { vin, confidence = 95 } = route.params;

  const handleConfirm = () => {
    navigation.navigate('Success', {
      vin,
      dealership: 'Sample Dealership',
    });
  };

  const handleRetry = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>🔍</Text>
        <Text style={styles.title}>VIN Detected!</Text>
        <Text style={styles.vinText}>{vin}</Text>
        <Text style={styles.confidenceText}>
          Confidence: {confidence}%
        </Text>
        <Text style={styles.description}>
          Please verify that this VIN number is correct.
        </Text>
        
        <View style={{ marginTop: spacing.xl, gap: spacing.md }}>
          <Button 
            mode="contained" 
            onPress={handleConfirm}
            style={{ backgroundColor: colors.primary }}
            contentStyle={{ paddingVertical: spacing.sm }}
          >
            Confirm & Continue
          </Button>
          <Button 
            mode="outlined" 
            onPress={handleRetry}
            style={{ borderColor: colors.primary }}
            contentStyle={{ paddingVertical: spacing.sm }}
          >
            Scan Again
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Success Screen
export const SuccessScreen: React.FC<SuccessScreenProps> = ({ navigation, route }) => {
  const { vin, dealership } = route.params;

  const handleNewScan = () => {
    navigation.navigate('Scanner');
  };

  const handleViewHistory = () => {
    // Navigate to the parent navigator to switch tabs
    const parentNavigator = navigation.getParent();
    if (parentNavigator) {
      parentNavigator.navigate('History');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>✅</Text>
        <Text style={styles.title}>Success!</Text>
        <Text style={styles.description}>
          VIN {vin} has been successfully processed for {dealership}.
        </Text>
        
        <View style={{ marginTop: spacing.xl, gap: spacing.md }}>
          <Button 
            mode="contained" 
            onPress={handleNewScan}
            style={{ backgroundColor: colors.primary }}
            contentStyle={{ paddingVertical: spacing.sm }}
          >
            Scan Another VIN
          </Button>
          <Button 
            mode="outlined" 
            onPress={handleViewHistory}
            style={{ borderColor: colors.primary }}
            contentStyle={{ paddingVertical: spacing.sm }}
          >
            View History
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

// History List Screen
export const HistoryListScreen: React.FC<HistoryListScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>📋</Text>
        <Text style={styles.title}>Scan History</Text>
        <Text style={styles.description}>
          Your recent VIN scans will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// History Detail Screen
export const HistoryDetailScreen: React.FC<HistoryDetailScreenProps> = ({ 
  navigation, 
  route 
}) => {
  const { scanId } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>📄</Text>
        <Text style={styles.title}>Scan Details</Text>
        <Text style={styles.description}>
          Details for scan ID: {scanId}
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Settings List Screen
export const SettingsListScreen: React.FC<SettingsListScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>⚙️</Text>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.description}>
          App settings and preferences will be available here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// Profile Edit Screen
export const ProfileEditScreen: React.FC<ProfileEditScreenProps> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>👤</Text>
        <Text style={styles.title}>Edit Profile</Text>
        <Text style={styles.description}>
          Update your profile information here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

// About Screen
export const AboutScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.iconText}>ℹ️</Text>
        <Text style={styles.title}>About SilverFox</Text>
        <Text style={styles.description}>
          Professional VIN scanning app for automotive dealerships.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  iconText: {
    fontSize: 64,
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
    textAlign: 'center',
  },
  description: {
    fontSize: typography.fontSize.lg,
    color: colors.gray600,
    textAlign: 'center',
    lineHeight: typography.lineHeight.lg,
    marginTop: spacing.md,
  },
  vinText: {
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginVertical: spacing.md,
    textAlign: 'center',
  },
  confidenceText: {
    fontSize: typography.fontSize.md,
    color: colors.success,
    textAlign: 'center',
  },
});