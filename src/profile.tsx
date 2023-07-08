import React from 'react'
import {Image, TextInput, Text, View, Pressable} from 'react-native';
import {CheckIcon, Rainy, Map, Gear} from '../assets';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const Profile = () => {
  return (
    <StyledView className='w-9/12 mx-auto mt-10'>
      <StyledText className='font-bold text-teal-900'>Nama Pengguna</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' placeholder='Nama Panjang'/>
      <StyledText className='font-bold text-teal-900 mt-3'>Umur</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' placeholder='20'/>
      <StyledText className='font-bold text-teal-900 mt-3'>Email Pengguna</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' placeholder='contoh@gmail.com' />
      <StyledText className='font-bold text-teal-900 mt-3'>Telephone</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' placeholder='+6289187238912' />
      {/* Button Save */}
      <StyledView className="flex flex-row justify-center mt-10">
        <StyledPressable className="px-8 py-2.5 bg-teal-800 rounded-md">
          <StyledText className="text-white font-bold">Simpan</StyledText>
        </StyledPressable>
        <StyledPressable className="px-8 py-2.5 rounded-md">
          <StyledText className="text-teal-900 font-bold">Kembalikan</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  )
}

export default Profile