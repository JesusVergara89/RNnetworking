import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import CourseListScreen from "./screens/CourseList";
import ProfileScreen from "./screens/Profile";
import SettingsScreen from "./screens/SettingsScreen";
import Ionicons from "@expo/vector-icons/Ionicons"
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarLabelPosition: "below-icon",
                tabBarShowLabel: true,
                tabBarActiveTintColor: "purple",
                tabBarInactiveTintColor: "green"
            }} >
                <Tab.Screen name="Course List" component={CourseListScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: "My profile",
                    tabBarIcon: ({color}) => <Ionicons name="person" size={20} color={color} />,
                    tabBarBadge: 1
                }}/>
                <Tab.Screen name="Settings" component={SettingsScreen} />
                <Tab.Screen name="About Stack" component={AboutStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}