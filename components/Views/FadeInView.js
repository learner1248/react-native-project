import { useLinkProps } from '@react-navigation/native';
import React, { useRef, useEffect, useState } from 'react';
import { Animated, Text, View } from 'react-native';
// https://reactnative.dev/docs/animations
const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    const onAnimsCompletion = () => {
        anims();
    }

    const anims = () => {
        Animated.loop(Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start(({ finished }) => {
            Animated.timing(
                fadeAnim, {
                    toValue: 0,
                    duration: 1000
                }
            ).start(onAnimsCompletion);
        }));
    }

    useEffect(() => {
        anims();
    }, []);

    return (
        <Animated.View              // Special animatable view
            style={{
                ...props.style,
                opacity: fadeAnim,  // Bind opacity to animated value
            }}
        >
            {props.children}
        </Animated.View>
    );
};

export default FadeInView;