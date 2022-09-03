import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
} from "react-native-reanimated";
import { Keyboard } from "react-native";

export const FloatingActions = ({ children }) => {
  // Animated Floating Action Button
  const FABBottomPosition = useSharedValue(20);
  const FABAnimatedStyles = useAnimatedStyle(() => {
    return {
      bottom: FABBottomPosition.value,
      position: "absolute",
      right: 0,
      left: 0,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    };
  });

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", (e) => {
      FABBottomPosition.value = withTiming(e.endCoordinates.height);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      FABBottomPosition.value = withSpring(20, {
        restDisplacementThreshold: 0.001,
      });
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return <Animated.View style={FABAnimatedStyles}>{children}</Animated.View>;
};
