import React,{useState, useEffect} from 'react'
import {TextInput, Text, View, Pressable} from 'react-native';
import {styled} from 'nativewind';
import { db } from "./config";
import { onValue, ref, set } from "firebase/database";

const StyledView = styled(View);
const StyledTextInput = styled(TextInput);
const StyledText = styled(Text);
const StyledPressable = styled(Pressable);

const Profile = () => {
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState(0);
  const [email, setEmail] = useState("");
  const [telp, setTelp] = useState("");
  const [lokasi, setLokasi] = useState("");
  useEffect(()=>{
    onValue(ref(db, "personalData/"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setNama(data['nama']);
        setUmur(parseInt(data['umur']));
        setTelp(data['telp']);
        setEmail(data['email']);
        setLokasi(data['lokasi']);
      }
    });
  },[]);
  const handleSubmit = () =>{
    set(ref(db,'personalData/nama'),nama);
    set(ref(db,'personalData/umur'),umur);
    set(ref(db,'personalData/email'),email);
    set(ref(db,'personalData/telp'),telp);
    set(ref(db,'personalData/lokasi'),lokasi);
  }
  const handleReset = () =>{
    onValue(ref(db, "personalData/"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setNama(data['nama']);
        setUmur(parseInt(data['umur']));
        setTelp(data['telp']);
        setEmail(data['email']);
        setLokasi(data['lokasi'])
      }
    });
  }
  return (
    <StyledView className='w-9/12 mx-auto mt-10'>
      <StyledText className='font-bold text-teal-900'>Nama Pengguna</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' placeholder='Nama Panjang' value={nama} onChangeText={(text)=>setNama(text)} />
      <StyledText className='font-bold text-teal-900 mt-3'>Umur</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' keyboardType='number-pad' placeholder='20' value={String(umur)} onChangeText={(text)=>setUmur(parseInt(text))} />
      <StyledText className='font-bold text-teal-900 mt-3'>Email Pengguna</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' keyboardType='email-address' placeholder='contoh@gmail.com' value={email} onChangeText={(text)=>setEmail(text)} />
      <StyledText className='font-bold text-teal-900 mt-3'>Telephone</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' keyboardType='number-pad' placeholder='+6289187238912' value={telp} onChangeText={(text)=>setTelp(text)} />
      <StyledText className='font-bold text-teal-900 mt-3'>Lokasi</StyledText>
      <StyledTextInput className='border-2 border-teal-800 w-64 h-9 rounded-lg bg-white mt-1 px-3 shadow-lg' keyboardType='ascii-capable' placeholder='Desa Maju' value={lokasi} onChangeText={(text)=>setLokasi(text)} />
      {/* Button Save */}
      <StyledView className="flex flex-row justify-center mt-10">
        <StyledPressable onPress={handleSubmit} className="px-8 py-2.5 bg-teal-800 rounded-md">
          <StyledText className="text-white font-bold">Simpan</StyledText>
        </StyledPressable>
        <StyledPressable onPress={handleReset} className="px-8 py-2.5 rounded-md">
          <StyledText className="text-teal-900 font-bold">Kembalikan</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  )
}

export default Profile