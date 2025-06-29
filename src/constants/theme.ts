// SilverFox brand colors
export const colors = {
  // Primary brand colors
  primary: '#FF4444',        // SilverFox red
  primaryDark: '#E03333',    // Darker red for pressed states
  primaryLight: '#FF6666',   // Lighter red for highlights
  
  // Secondary colors
  secondary: '#1A1A1A',      // Dark charcoal
  secondaryLight: '#2C2C2C', // Medium charcoal
  secondaryDark: '#000000',  // Pure black
  
  // Neutral colors
  white: '#FFFFFF',
  gray100: '#F8F9FA',
  gray200: '#E9ECEF',
  gray300: '#DEE2E6',
  gray400: '#CED4DA',
  gray500: '#ADB5BD',
  gray600: '#6C757D',
  gray700: '#495057',
  gray800: '#343A40',
  gray900: '#212529',
  
  // Semantic colors
  success: '#28A745',
  successLight: '#D4EDDA',
  warning: '#FFC107',
  warningLight: '#FFF3CD',
  error: '#DC3545',
  errorLight: '#F8D7DA',
  info: '#17A2B8',
  infoLight: '#D1ECF1',
  
  // Background colors
  background: '#FFFFFF',
  surface: '#F8F9FA',
  surfaceVariant: '#F1F3F4',
  
  // Text colors
  onPrimary: '#FFFFFF',
  onSecondary: '#FFFFFF',
  onBackground: '#212529',
  onSurface: '#212529',
  
  // Border colors
  border: '#DEE2E6',
  borderFocus: '#FF4444',
  
  // Shadow colors
  shadow: 'rgba(0, 0, 0, 0.15)',
  shadowDark: 'rgba(0, 0, 0, 0.25)',
  
  // Overlay colors
  overlay: 'rgba(0, 0, 0, 0.5)',
  overlayLight: 'rgba(255, 255, 255, 0.9)',
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
  round: 50,
};

export const typography = {
  // Font families
  fontFamily: {
    regular: 'System',
    medium: 'System',
    bold: 'System',
  },
  
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
    display: 40,
  },
  
  // Line heights
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 28,
    xl: 32,
    xxl: 36,
    xxxl: 44,
    display: 52,
  },
  
  // Font weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
};

export const shadows = {
  sm: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  md: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  lg: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    elevation: 8,
  },
  xl: {
    shadowColor: colors.shadowDark,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.25,
    shadowRadius: 24,
    elevation: 12,
  },
};

// React Native Paper theme customization
export const paperTheme = {
  colors: {
    primary: colors.primary,
    primaryContainer: colors.primaryLight,
    secondary: colors.secondary,
    secondaryContainer: colors.secondaryLight,
    surface: colors.surface,
    background: colors.background,
    error: colors.error,
    onPrimary: colors.onPrimary,
    onSecondary: colors.onSecondary,
    onSurface: colors.onSurface,
    onBackground: colors.onBackground,
    outline: colors.border,
  },
};

export default {
  colors,
  spacing,
  borderRadius,
  typography,
  shadows,
  paperTheme,
};