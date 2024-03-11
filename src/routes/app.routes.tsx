import { Platform } from 'react-native';
import { useTheme } from 'native-base';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Profile from '../screens/Profile'; 
import { House } from 'phosphor-react-native';

type AppRoutes = {
  home: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

  const { sizes, colors } = useTheme();

  const iconSize = sizes[6];

  return (
    <Navigator screenOptions={{ 
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === "android" ? 'auto' : 96,
        paddingBottom: sizes[10],
        paddingTop: sizes[6]
      }
    }}>
      <Screen 
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={iconSize} />
          )
        }}
      />

      <Screen 
        name='profile'
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <House color={color} size={iconSize} />
          )
        }}
      />

    </Navigator>
  );
}