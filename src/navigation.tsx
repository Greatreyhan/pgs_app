import React from 'react';
import {Text, View, Image} from 'react-native';
import {Link, useLocation} from 'react-router-native';
import {styled} from 'nativewind';
import {
  EditIcon,
  EditIconI,
  HistoryIcon,
  HistoryIconI,
  HomeIcon,
  HomeIconI,
  SettingIcon,
  SettingIconI,
} from '../assets';
import Profile from './profile';

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Navigation = () => {
  const location = useLocation();
  return (
    <StyledView className="fixed h-12 bottom-7 z-100 shadow">
      {location.pathname == '/' ? null : (
        <StyledView className="flex items-center flex-row justify-evenly bg-teal-800">
          {location.pathname == '/home' ? (
            <StyledLink
              className="px-2 py-2 bg-teal-800 rounded-full -mt-1"
              to="/home">
              <StyledView className="flex justify-center items-center bg-teal-900 px-2.5 py-2.5 rounded-full">
                <StyledImage source={HomeIconI} className="h-4 w-4" />
              </StyledView>
            </StyledLink>
          ) : (
            <StyledLink to="/home">
              <StyledView className="flex justify-center items-center px-2 py-2">
                <StyledImage source={HomeIconI} className="h-4 w-4" />
                <StyledText className="text-xs font-semibold text-teal-50">
                  Home
                </StyledText>
              </StyledView>
            </StyledLink>
          )}
          {location.pathname == '/setting' ? (
            <StyledLink
              className="px-2 py-2 bg-teal-800 rounded-full -mt-1"
              to="/setting">
              <StyledView className="flex justify-center items-center bg-teal-900 px-2.5 py-2.5 rounded-full">
                <StyledImage source={SettingIconI} className="h-4 w-4" />
              </StyledView>
            </StyledLink>
          ) : (
            <StyledLink to="/setting">
              <StyledView className="flex justify-center items-center px-2 py-2">
                <StyledImage source={SettingIconI} className="h-4 w-4" />
                <StyledText className="text-xs font-semibold text-teal-50">
                  Setting
                </StyledText>
              </StyledView>
            </StyledLink>
          )}
          {location.pathname == '/check' ? (
            <StyledLink
              className="px-2 py-2 bg-teal-800 rounded-full -mt-1"
              to="/check">
              <StyledView className="flex justify-center items-center bg-teal-900 px-2.5 py-2.5 rounded-full">
                <StyledImage source={EditIconI} className="h-4 w-4" />
              </StyledView>
            </StyledLink>
          ) : (
            <StyledLink to="/check">
              <StyledView className="flex justify-center items-center px-2 py-2">
                <StyledImage source={EditIconI} className="h-4 w-4" />
                <StyledText className="text-xs font-semibold text-teal-50">
                  Check
                </StyledText>
              </StyledView>
            </StyledLink>
          )}
          {location.pathname == '/history' ? (
            <StyledLink
              className="px-2 py-2 bg-teal-800 rounded-full -mt-1"
              to="/history">
              <StyledView className="flex justify-center items-center bg-teal-900 px-2.5 py-2.5 rounded-full">
                <StyledImage source={HistoryIconI} className="h-4 w-4" />
              </StyledView>
            </StyledLink>
          ) : (
            <StyledLink to="/history">
              <StyledView className="flex justify-center items-center px-2 py-2">
                <StyledImage source={HistoryIconI} className="h-4 w-4" />
                <StyledText className="text-xs font-semibold text-teal-50">
                  History
                </StyledText>
              </StyledView>
            </StyledLink>
          )}
        </StyledView>
      )}
    </StyledView>
  );
};

export default Navigation;
