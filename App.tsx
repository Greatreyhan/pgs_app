/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { NativeRouter, Route, Link, Routes } from 'react-router-native';
import { styled } from "nativewind";
import { Splash, Setting, Profile, Home, History } from './src';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View>
      <Text>
        {title}
      </Text>
      <Text>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {

  return (
    <SafeAreaView>  
      <NativeRouter>

        {/* Navigation */}
        {/* <View>
          <Link to="/home" >
              <Text>Home</Text>
          </Link>
          <Link to="/setting">
            <Text>Setting</Text>
          </Link>
          <Link to="/profile">
            <Text>Profile</Text>
          </Link>
          <Link to="/history">
            <Text>History</Text>
          </Link>
        </View> */}
        {/* Route */}
        <Routes>
        <Route path='/' Component={Splash} />
        <Route path="/home" Component={Home} />
        <Route path="/setting" Component={Setting} />
        <Route path="/profile" Component={Profile} />
        <Route path="/history" Component={History} />
        </Routes>
      </NativeRouter>
    </SafeAreaView>
  );
}

export default App;
