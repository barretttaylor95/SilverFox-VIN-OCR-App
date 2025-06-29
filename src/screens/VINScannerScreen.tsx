import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { VINScannerScreenProps } from '../types/navigation';
import { colors, spacing, typography, borderRadius, shadows } from '../constants/theme';

export const VINScannerScreen: React.FC<VINScannerScreenProps> = ({ navigation }) => {
  const handleStartScan = () => {
    // For now, navigate directly to VIN detected with mock data
    // This will be replaced with actual camera functionality in Phase 2
    navigation.navigate('VINDetected', {
      vin: '1HGBH41JXMN109186',
      confidence: 95,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.cameraIcon}>📷</Text>
          <Text style={styles.title}>Ready to Scan</Text>
          <Text style={styles.subtitle}>
            Point your camera at a VIN number to get started
          </Text>
        </View>

        <View style={styles.instructionsContainer}>
          <View style={styles.instruction}>
            <Text style={styles.instructionIcon}>🎯</Text>
            <Text style={styles.instructionText}>
              Frame the VIN clearly in the viewfinder
            </Text>
          </View>
          <View style={styles.instruction}>
            <Text style={styles.instructionIcon}>☀️</Text>
            <Text style={styles.instructionText}>
              Ensure good lighting for best results
            </Text>
          </View>
          <View style={styles.instruction}>
            <Text style={styles.instructionIcon}>📏</Text>
            <Text style={styles.instructionText}>
              Hold device steady and parallel to VIN
            </Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.scanButton}
          onPress={handleStartScan}
          activeOpacity={0.8}
        >
          <Text style={styles.scanButtonIcon}>📷</Text>
          <Text style={styles.scanButtonText}>Start Scanning</Text>
        </TouchableOpacity>
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
    paddingHorizontal: spacing.lg,
    justifyContent: 'space-between',
    paddingVertical: spacing.xl,
  },
  header: {
    alignItems: 'center',
    marginTop: spacing.xxl,
  },
  cameraIcon: {
    fontSize: 64,
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.xxxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.secondary,
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: typography.fontSize.lg,
    color: colors.gray600,
    textAlign: 'center',
    lineHeight: typography.lineHeight.lg,
  },
  instructionsContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    ...shadows.md,
  },
  instruction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  instructionIcon: {
    fontSize: 24,
    marginRight: spacing.md,
  },
  instructionText: {
    fontSize: typography.fontSize.md,
    color: colors.gray700,
    flex: 1,
    lineHeight: typography.lineHeight.md,
  },
  scanButton: {
    backgroundColor: colors.primary,
    borderRadius: borderRadius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.xl,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.md,
  },
  scanButtonIcon: {
    fontSize: 32,
    marginRight: spacing.md,
  },
  scanButtonText: {
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.bold,
    color: colors.white,
  },
});