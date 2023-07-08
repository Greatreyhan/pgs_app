/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {NativeRouter, Route, Link, Routes} from 'react-router-native';
import {styled} from 'nativewind';
import {Splash, Setting, Profile, Home, History, Navigation, Check} from './src';
import {CheckIcon} from './assets';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}
const StyledScrollView = styled(ScrollView);
const StyledNativeRouter = styled(NativeRouter);
const StyledView = styled(View);
const StyledRoutes = styled(Routes);
function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StyledNativeRouter>
        {/* Route */}
        <StyledView className="flex flex-col h-screen bg-slate-100">
          <StyledScrollView>
            <StyledRoutes>
              <Route path="/" Component={Splash} />
              <Route path="/home" Component={Home} />
              <Route path="/setting" Component={Setting} />
              <Route path="/profile" Component={Profile} />
              <Route path="/history" Component={History} />
              <Route path="/check" Component={Check} />
            </StyledRoutes>
          </StyledScrollView>
          {/* Navigation */}
          <Navigation />
        </StyledView>
      </StyledNativeRouter>
    </SafeAreaView>
  );
}

export default App;
