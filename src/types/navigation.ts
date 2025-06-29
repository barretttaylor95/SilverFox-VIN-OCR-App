import { StackNavigationProp } from '@react-navigation/stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

// Root Stack Navigator (handles authentication flow)
export type RootStackParamList = {
  ProfileSetup: undefined;
  MainApp: undefined;
};

// Main Tab Navigator (authenticated users)
export type MainTabParamList = {
  VINScanner: undefined;
  History: undefined;
  Settings: undefined;
};

// VIN Scanner Stack Navigator
export type VINScannerStackParamList = {
  Scanner: undefined;
  VINDetected: {
    vin: string;
    confidence: number;
    imageUri?: string;
  };
  Success: {
    dealId?: string;
    vin: string;
    dealership: string;
  };
};

// History Stack Navigator
export type HistoryStackParamList = {
  HistoryList: undefined;
  HistoryDetail: {
    scanId: string;
  };
};

// Settings Stack Navigator
export type SettingsStackParamList = {
  SettingsList: undefined;
  ProfileEdit: undefined;
  About: undefined;
};

// Navigation prop types for screens
export type RootStackNavigationProp<T extends keyof RootStackParamList> = 
  StackNavigationProp<RootStackParamList, T>;

export type MainTabNavigationProp<T extends keyof MainTabParamList> = 
  BottomTabNavigationProp<MainTabParamList, T>;

export type VINScannerStackNavigationProp<T extends keyof VINScannerStackParamList> = 
  StackNavigationProp<VINScannerStackParamList, T>;

export type HistoryStackNavigationProp<T extends keyof HistoryStackParamList> = 
  StackNavigationProp<HistoryStackParamList, T>;

export type SettingsStackNavigationProp<T extends keyof SettingsStackParamList> = 
  StackNavigationProp<SettingsStackParamList, T>;

// Route prop types for screens
export type RootStackRouteProp<T extends keyof RootStackParamList> = 
  RouteProp<RootStackParamList, T>;

export type VINScannerStackRouteProp<T extends keyof VINScannerStackParamList> = 
  RouteProp<VINScannerStackParamList, T>;

export type HistoryStackRouteProp<T extends keyof HistoryStackParamList> = 
  RouteProp<HistoryStackParamList, T>;

export type SettingsStackRouteProp<T extends keyof SettingsStackParamList> = 
  RouteProp<SettingsStackParamList, T>;

// Combined navigation types for screens
export interface VINScannerScreenProps {
  navigation: VINScannerStackNavigationProp<'Scanner'>;
}

export interface VINDetectedScreenProps {
  navigation: VINScannerStackNavigationProp<'VINDetected'>;
  route: VINScannerStackRouteProp<'VINDetected'>;
}

export interface SuccessScreenProps {
  navigation: VINScannerStackNavigationProp<'Success'>;
  route: VINScannerStackRouteProp<'Success'>;
}

export interface HistoryListScreenProps {
  navigation: HistoryStackNavigationProp<'HistoryList'>;
}

export interface HistoryDetailScreenProps {
  navigation: HistoryStackNavigationProp<'HistoryDetail'>;
  route: HistoryStackRouteProp<'HistoryDetail'>;
}

export interface SettingsListScreenProps {
  navigation: SettingsStackNavigationProp<'SettingsList'>;
}

export interface ProfileEditScreenProps {
  navigation: SettingsStackNavigationProp<'ProfileEdit'>;
}

export interface ProfileSetupScreenProps {
  navigation: RootStackNavigationProp<'ProfileSetup'>;
}