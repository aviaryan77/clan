import 'react-native-gesture-handler';
import React from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  withSpring,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import {
  PanGestureHandler,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
var {width: w, height: h} = Dimensions.get('window');

const SIZE = 100.0;
const SQUARE_RADIUS = SIZE / 2;
let ARRAY = [
  {id: '0', number: 0},
  {id: '1', number: 1},
  {id: '2', number: 2},
  {id: '3', number: 3},
  {id: '4', number: 4},
  {id: '5', number: 5},
  {id: '6', number: 6},
  {id: '7', number: 7},
  {id: '8', number: 8},
  {id: '9', number: 9},
];

export default function App() {
  const pos1 = useSharedValue(1);
  const pos2 = useSharedValue(2);
  const pos3 = useSharedValue(3);
  const translateX1 = useSharedValue(0);
  const translateY1 = useSharedValue(0);
  const translateX2 = useSharedValue(0);
  const translateY2 = useSharedValue(0);
  const translateX3 = useSharedValue(0);
  const translateY3 = useSharedValue(0);
  const translateX4 = useSharedValue(0);
  const translateY4 = useSharedValue(0);
  const translateX5 = useSharedValue(0);
  const translateY5 = useSharedValue(0);
  const translateX6 = useSharedValue(0);
  const translateY6 = useSharedValue(0);
  const translateX7 = useSharedValue(0);
  const translateY7 = useSharedValue(0);
  const translateX8 = useSharedValue(0);
  const translateY8 = useSharedValue(0);
  const translateX9 = useSharedValue(0);
  const translateY9 = useSharedValue(0);

  const panGestureEvent1 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX1.value;
      context.translateY = translateY1.value;
    },
    onActive: (event, context) => {
      translateX1.value = event.translationX + context.translateX;
      translateY1.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > 100 && event.translationX < 200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX1.value = withSpring(100);
          translateY1.value = withSpring(0);
          translateX2.value = withSpring(-100);
          translateY2.value = withSpring(0);
          pos1.value = 2;
          pos2.value = 1;
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX1.value = withSpring(100);
          translateY1.value = withSpring(100);
          translateX5.value = withSpring(-100);
          translateY5.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX1.value = withSpring(100);
          translateY1.value = withSpring(200);
          translateX8.value = withSpring(-100);
          translateY8.value = withSpring(-200);
        } else {
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(0);
        }
      } else if (event.translationX > 200 && event.translationX < 300) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX1.value = withSpring(200);
          translateY1.value = withSpring(0);
          translateX3.value = withSpring(-200);
          translateY3.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX1.value = withSpring(200);
          translateY1.value = withSpring(100);
          translateX6.value = withSpring(-200);
          translateY6.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX1.value = withSpring(200);
          translateY1.value = withSpring(200);
          translateX9.value = withSpring(-200);
          translateY9.value = withSpring(-200);
        } else {
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(0);
        }
      } else {
        if (event.translationY < 200 && event.translationY > 100) {
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(100);
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(200);
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(-200);
        } else {
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(0);
        }
      }
    },
  });

  const panGestureEvent2 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX2.value;
      context.translateY = translateY2.value;
    },
    onActive: (event, context) => {
      translateX2.value = event.translationX + context.translateX;
      translateY2.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > 100 && event.translationX < 200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX2.value = withSpring(100);
          translateY2.value = withSpring(0);
          translateX3.value = withSpring(-100);
          translateY3.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX2.value = withSpring(100);
          translateY2.value = withSpring(100);
          translateX6.value = withSpring(-100);
          translateY6.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX2.value = withSpring(100);
          translateY2.value = withSpring(200);
          translateX9.value = withSpring(-100);
          translateY9.value = withSpring(-200);
        } else {
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(0);
        }
      } else if (event.translationX > -200 && event.translationX < -100) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX2.value = withSpring(-100);
          translateY2.value = withSpring(0);
          translateX1.value = withSpring(100);
          translateY1.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX2.value = withSpring(-100);
          translateY2.value = withSpring(100);
          translateX4.value = withSpring(100);
          translateY4.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX2.value = withSpring(-100);
          translateY2.value = withSpring(200);
          translateX7.value = withSpring(100);
          translateY7.value = withSpring(-200);
        } else {
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(0);
        }
      } else {
        if (event.translationY < 200 && event.translationY > 100) {
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(100);
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(200);
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(-200);
        } else {
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(0);
        }
      }
    },
  });

  const panGestureEvent3 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX3.value;
      context.translateY = translateY3.value;
    },
    onActive: (event, context) => {
      translateX3.value = event.translationX + context.translateX;
      translateY3.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX < -100 && event.translationX > -200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX3.value = withSpring(-100);
          translateY3.value = withSpring(0);
          translateX2.value = withSpring(100);
          translateY2.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX3.value = withSpring(-100);
          translateY3.value = withSpring(100);
          translateX5.value = withSpring(100);
          translateY5.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX3.value = withSpring(-100);
          translateY3.value = withSpring(200);
          translateX8.value = withSpring(100);
          translateY8.value = withSpring(-200);
        } else {
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(0);
        }
      } else if (event.translationX > -300 && event.translationX < -200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX3.value = withSpring(-200);
          translateY3.value = withSpring(0);
          translateX1.value = withSpring(200);
          translateY1.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX3.value = withSpring(-200);
          translateY3.value = withSpring(100);
          translateX4.value = withSpring(200);
          translateY4.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX3.value = withSpring(-200);
          translateY3.value = withSpring(200);
          translateX7.value = withSpring(200);
          translateY7.value = withSpring(-200);
        } else {
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(0);
        }
      } else {
        if (event.translationY < 200 && event.translationY > 100) {
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(100);
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(-100);
        } else if (event.translationY < 300 && event.translationY > 200) {
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(200);
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(-200);
        } else {
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(0);
        }
      }
    },
  });
  const panGestureEvent4 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX4.value;
      context.translateY = translateY4.value;
    },
    onActive: (event, context) => {
      translateX4.value = event.translationX + context.translateX;
      translateY4.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > 100 && event.translationX < 200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX4.value = withSpring(100);
          translateY4.value = withSpring(0);
          translateX5.value = withSpring(-100);
          translateY5.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX4.value = withSpring(100);
          translateY4.value = withSpring(100);
          translateX8.value = withSpring(-100);
          translateY8.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX4.value = withSpring(100);
          translateY4.value = withSpring(-100);
          translateX2.value = withSpring(-100);
          translateY2.value = withSpring(100);
        } else {
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(0);
        }
      } else if (event.translationX > 200 && event.translationX < 300) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX4.value = withSpring(200);
          translateY4.value = withSpring(0);
          translateX6.value = withSpring(-200);
          translateY6.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX4.value = withSpring(200);
          translateY4.value = withSpring(100);
          translateX9.value = withSpring(-200);
          translateY9.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX4.value = withSpring(200);
          translateY4.value = withSpring(-100);
          translateX3.value = withSpring(-200);
          translateY3.value = withSpring(100);
        } else {
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(0);
        }
      } else {
        if (event.translationY < 200 && event.translationY > 100) {
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(100);
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(-100);
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(100);
        } else {
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(0);
        }
      }
    },
  });

  const panGestureEvent5 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX5.value;
      context.translateY = translateY5.value;
    },
    onActive: (event, context) => {
      translateX5.value = event.translationX + context.translateX;
      translateY5.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > 100 && event.translationX < 200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX5.value = withSpring(100);
          translateY5.value = withSpring(0);
          translateX6.value = withSpring(-100);
          translateY6.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX5.value = withSpring(100);
          translateY5.value = withSpring(100);
          translateX9.value = withSpring(-100);
          translateY9.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX5.value = withSpring(100);
          translateY5.value = withSpring(-100);
          translateX3.value = withSpring(-100);
          translateY3.value = withSpring(100);
        } else {
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(0);
        }
      } else if (event.translationX > -200 && event.translationX < -100) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX5.value = withSpring(-100);
          translateY5.value = withSpring(0);
          translateX4.value = withSpring(100);
          translateY4.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX5.value = withSpring(-100);
          translateY5.value = withSpring(100);
          translateX7.value = withSpring(100);
          translateY7.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX5.value = withSpring(-100);
          translateY5.value = withSpring(-100);
          translateX1.value = withSpring(100);
          translateY1.value = withSpring(100);
        } else {
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(0);
        }
      } else {
        if (event.translationY < 200 && event.translationY > 100) {
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(100);
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(-100);
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(100);
        } else {
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(0);
        }
      }
    },
  });
  const panGestureEvent6 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX6.value;
      context.translateY = translateY6.value;
    },
    onActive: (event, context) => {
      translateX6.value = event.translationX + context.translateX;
      translateY6.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > -200 && event.translationX < -100) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX6.value = withSpring(-100);
          translateY6.value = withSpring(0);
          translateX5.value = withSpring(100);
          translateY5.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX6.value = withSpring(-100);
          translateY6.value = withSpring(100);
          translateX8.value = withSpring(100);
          translateY8.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX6.value = withSpring(-100);
          translateY6.value = withSpring(-100);
          translateX2.value = withSpring(100);
          translateY2.value = withSpring(100);
        } else {
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(0);
        }
      } else if (event.translationX > -300 && event.translationX < -200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX6.value = withSpring(-200);
          translateY6.value = withSpring(0);
          translateX4.value = withSpring(200);
          translateY4.value = withSpring(0);
        } else if (event.translationY < 200 && event.translationY > 100) {
          translateX6.value = withSpring(-200);
          translateY6.value = withSpring(100);
          translateX7.value = withSpring(200);
          translateY7.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX6.value = withSpring(-200);
          translateY6.value = withSpring(-100);
          translateX1.value = withSpring(200);
          translateY1.value = withSpring(100);
        } else {
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(0);
        }
      } else {
        if (event.translationY < 200 && event.translationY > 100) {
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(100);
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(-100);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(-100);
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(100);
        } else {
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(0);
        }
      }
    },
  });
  const panGestureEvent7 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX7.value;
      context.translateY = translateY7.value;
    },
    onActive: (event, context) => {
      translateX7.value = event.translationX + context.translateX;
      translateY7.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > 100 && event.translationX < 200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX7.value = withSpring(100);
          translateY7.value = withSpring(0);
          translateX8.value = withSpring(-100);
          translateY8.value = withSpring(0);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX7.value = withSpring(100);
          translateY7.value = withSpring(-100);
          translateX5.value = withSpring(-100);
          translateY5.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX7.value = withSpring(100);
          translateY7.value = withSpring(-200);
          translateX2.value = withSpring(-100);
          translateY2.value = withSpring(200);
        } else {
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(0);
        }
      } else if (event.translationX > 200 && event.translationX < 300) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX7.value = withSpring(200);
          translateY7.value = withSpring(0);
          translateX9.value = withSpring(-200);
          translateY9.value = withSpring(0);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX7.value = withSpring(200);
          translateY7.value = withSpring(-100);
          translateX6.value = withSpring(-200);
          translateY6.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX7.value = withSpring(200);
          translateY7.value = withSpring(-200);
          translateX3.value = withSpring(-200);
          translateY3.value = withSpring(200);
        } else {
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(0);
        }
      } else {
        if (event.translationY < -100 && event.translationY > -200) {
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(-100);
          translateX4.value = withSpring(0);
          translateY4.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(-200);
          translateX1.value = withSpring(0);
          translateY1.value = withSpring(200);
        } else {
          translateX7.value = withSpring(0);
          translateY7.value = withSpring(0);
        }
      }
    },
  });
  const panGestureEvent8 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX8.value;
      context.translateY = translateY8.value;
    },
    onActive: (event, context) => {
      translateX8.value = event.translationX + context.translateX;
      translateY8.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > 100 && event.translationX < 200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX8.value = withSpring(100);
          translateY8.value = withSpring(0);
          translateX9.value = withSpring(-100);
          translateY9.value = withSpring(0);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX8.value = withSpring(100);
          translateY8.value = withSpring(-100);
          translateX6.value = withSpring(-100);
          translateY6.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX8.value = withSpring(100);
          translateY8.value = withSpring(-200);
          translateX3.value = withSpring(-100);
          translateY3.value = withSpring(200);
        } else {
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(0);
        }
      } else if (event.translationX > -200 && event.translationX < -100) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX8.value = withSpring(-100);
          translateY8.value = withSpring(0);
          translateX7.value = withSpring(100);
          translateY7.value = withSpring(0);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX8.value = withSpring(-100);
          translateY8.value = withSpring(-100);
          translateX4.value = withSpring(100);
          translateY4.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX8.value = withSpring(-100);
          translateY8.value = withSpring(-200);
          translateX1.value = withSpring(100);
          translateY1.value = withSpring(200);
        } else {
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(0);
        }
      } else {
        if (event.translationY < -100 && event.translationY > -200) {
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(-100);
          translateX5.value = withSpring(0);
          translateY5.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(-200);
          translateX2.value = withSpring(0);
          translateY2.value = withSpring(200);
        } else {
          translateX8.value = withSpring(0);
          translateY8.value = withSpring(0);
        }
      }
    },
  });
  const panGestureEvent9 = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX9.value;
      context.translateY = translateY9.value;
    },
    onActive: (event, context) => {
      translateX9.value = event.translationX + context.translateX;
      translateY9.value = event.translationY + context.translateY;
    },
    onEnd: event => {
      if (event.translationX > -200 && event.translationX < -100) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX9.value = withSpring(-100);
          translateY9.value = withSpring(0);
          translateX8.value = withSpring(100);
          translateY8.value = withSpring(0);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX9.value = withSpring(-100);
          translateY9.value = withSpring(-100);
          translateX5.value = withSpring(100);
          translateY5.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX9.value = withSpring(-100);
          translateY9.value = withSpring(-200);
          translateX2.value = withSpring(100);
          translateY2.value = withSpring(200);
        } else {
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(0);
        }
      } else if (event.translationX > -300 && event.translationX < -200) {
        if (event.translationY < 90 && event.translationY > -50) {
          translateX9.value = withSpring(-200);
          translateY9.value = withSpring(0);
          translateX7.value = withSpring(200);
          translateY7.value = withSpring(0);
        } else if (event.translationY < -100 && event.translationY > -200) {
          translateX9.value = withSpring(-200);
          translateY9.value = withSpring(-100);
          translateX4.value = withSpring(200);
          translateY4.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX9.value = withSpring(-200);
          translateY9.value = withSpring(-200);
          translateX1.value = withSpring(200);
          translateY1.value = withSpring(200);
        } else {
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(0);
        }
      } else {
        if (event.translationY < -100 && event.translationY > -200) {
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(-100);
          translateX6.value = withSpring(0);
          translateY6.value = withSpring(100);
        } else if (event.translationY < -200 && event.translationY > -300) {
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(-200);
          translateX3.value = withSpring(0);
          translateY3.value = withSpring(200);
        } else {
          translateX9.value = withSpring(0);
          translateY9.value = withSpring(0);
        }
      }
    },
  });

  const rStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX1.value},
        {translateY: translateY1.value},
      ],
    };
  });
  const rStyle2 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX2.value},
        {translateY: translateY2.value},
      ],
    };
  });
  const rStyle3 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX3.value},
        {translateY: translateY3.value},
      ],
    };
  });
  const rStyle4 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX4.value},
        {translateY: translateY4.value},
      ],
    };
  });

  const rStyle5 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX5.value},
        {translateY: translateY5.value},
      ],
    };
  });
  const rStyle6 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX6.value},
        {translateY: translateY6.value},
      ],
    };
  });
  const rStyle7 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX7.value},
        {translateY: translateY7.value},
      ],
    };
  });
  const rStyle8 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX8.value},
        {translateY: translateY8.value},
      ],
    };
  });
  const rStyle9 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX9.value},
        {translateY: translateY9.value},
      ],
    };
  });

  const onResetPress = () => {
    translateX1.value = withSpring(0);
    translateY1.value = withSpring(0);
    translateX2.value = withSpring(0);
    translateY2.value = withSpring(0);
    translateX3.value = withSpring(0);
    translateY3.value = withSpring(0);
    translateX4.value = withSpring(0);
    translateY4.value = withSpring(0);
    translateX5.value = withSpring(0);
    translateY5.value = withSpring(0);
    translateX6.value = withSpring(0);
    translateY6.value = withSpring(0);
    translateX7.value = withSpring(0);
    translateY7.value = withSpring(0);
    translateX8.value = withSpring(0);
    translateY8.value = withSpring(0);
    translateX9.value = withSpring(0);
    translateY9.value = withSpring(0);
  };

  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome to the Clan Game</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.circle}>
          <PanGestureHandler
            onGestureEvent={
              pos1.value === 1 ? panGestureEvent1 : panGestureEvent2
            }>
            <Animated.View
              style={[
                styles.square,
                rStyle1,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[1].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>

        <View style={styles.circle}>
          <PanGestureHandler
            onGestureEvent={
              pos2.value === 1 ? panGestureEvent1 : panGestureEvent2
            }>
            <Animated.View
              style={[
                styles.square,
                pos2.value === 1 ? rStyle1 : rStyle2,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[2].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>

        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent3}>
            <Animated.View
              style={[
                styles.square,
                rStyle3,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[3].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent4}>
            <Animated.View
              style={[
                styles.square,
                rStyle4,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[4].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent5}>
            <Animated.View
              style={[
                styles.square,
                rStyle5,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[5].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent6}>
            <Animated.View
              style={[
                styles.square,
                rStyle6,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[6].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent7}>
            <Animated.View
              style={[
                styles.square,
                rStyle7,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[7].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent8}>
            <Animated.View
              style={[
                styles.square,
                rStyle8,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[8].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
        <View style={styles.circle}>
          <PanGestureHandler onGestureEvent={panGestureEvent9}>
            <Animated.View
              style={[
                styles.square,
                rStyle9,
                {alignItems: 'center', justifyContent: 'center'},
              ]}>
              <Animated.Text style={{fontSize: 24, color: 'white'}}>
                {ARRAY[9].number}
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.button}
        onPress={onResetPress}>
        <Text style={styles.buttonText}>Reset Game</Text>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    marginTop: 100,
  },
  titleText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 100,
    flexWrap: 'wrap',
    flexBasis: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'rgba(0, 0, 256, 0.5)',
    borderRadius: 20,
  },
  circle: {
    width: SQUARE_RADIUS * 2,
    height: SQUARE_RADIUS * 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderWidth: 5,
    borderColor: 'rgba(0, 0, 256, 0.5)',
  },
  button: {
    width: w * 0.6,
    backgroundColor: '#3434ef',
    height: h * 0.1,
    borderRadius: h * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
