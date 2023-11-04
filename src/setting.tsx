import React, {useState, useEffect} from 'react';
import {Text, View, Image, Pressable, Button} from 'react-native';
import {Link} from 'react-router-native';
import {styled} from 'nativewind';
import {
  ClockIcon,
  Gear,
  MinusIcon,
  PlantIcon,
  PlusIcon,
  VolumeIcon,
} from '../assets';
import { app, db } from "./config";
import { onValue, ref, set } from "firebase/database";

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const Setting = () => {
  const [intervalPompa, setIntervalPompa] = useState(0);
  const [intervalPupuk, setIntervalPupuk] = useState(0);
  const [levelTanah, setLevelTanah] = useState(0);
  const [pompa, setPompa] = useState(false);
  const [valveA, setValveA] = useState(false);
  const [valveB, setValveB] = useState(false);
  const [valveC, setValveC] = useState(false);
  const [valveD, setValveD] = useState(false);
  const [valveE, setValveE] = useState(false);

  useEffect(() => {

    // Interval Pompa
    onValue(ref(db, "intervalPompa"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setIntervalPompa(data);
      }
    });

    // Interval Pupuk
    onValue(ref(db, "intervalPupuk"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setIntervalPupuk(data);
      }
    });

    // Level Tanah
    onValue(ref(db, "levelTanah"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setLevelTanah(data);
      }
    });

  }, []);

  const handleSimpan = () =>{
    set(ref(db,'intervalPompa'),100);
    console.log('simpan');
  }
  const handleKembalikan = () =>{
    console.log('kembalikan');
  }

  const handleControls = (id:string) =>{
    if(id == "pompa") setPompa(!pompa);
    if(id == "valveA") setValveA(!valveA);
    if(id == "valveB") setValveB(!valveB);
    if(id == "valveC") setValveC(!valveC);
    if(id == "valveD") setValveD(!valveD);
    if(id == "valveE") setValveE(!valveE);
    
  }
  return (
    <StyledView className="">
      {/* Header */}
      <StyledView className="w-full flex flex-row justify-center items-between">
        <StyledText className="flex-1 m-3.5 text-slate-950 font-bold text-xs">
          PGS
        </StyledText>
        <StyledLink to="/profile">
          <StyledImage className="w-6 h-6 m-3" source={Gear} />
        </StyledLink>
      </StyledView>

      {/* Pengaturan Interval Pompa */}
      <StyledView className="flex flex-row items-center justify-between w-11/12 mx-auto rounded-xl bg-white px-4 py-4 shadow-lg">
        <StyledView className="flex flex-row justify-center items-center">
          <StyledImage className="w-4 h-4" source={ClockIcon} />
          <StyledText className="text-teal-900 font-bold ml-3">
            Interval Pompa
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row items-center">
          <StyledPressable
            className="px-1.5 py-1.5 bg-teal-800 rounded-full"
            onPress={() => setIntervalPompa(intervalPompa + 1)}>
            <StyledImage className="w-3 h-3" source={PlusIcon} />
          </StyledPressable>
          <StyledText className="text-teal-900 font-black ml-2 text-sm">
            {intervalPompa}
          </StyledText>
          <StyledPressable
            className="px-1.5 py-1.5 bg-teal-800 rounded-full ml-2"
            onPress={() => setIntervalPompa(intervalPompa - 1)}>
            <StyledImage className="w-3 h-3" source={MinusIcon} />
          </StyledPressable>
        </StyledView>
      </StyledView>

      {/* Pengaturan Volume */}
      <StyledView className="flex flex-row mt-5 items-center justify-between w-11/12 mx-auto rounded-xl bg-white px-4 py-4 shadow-lg">
        <StyledView className="flex flex-row justify-center items-center">
          <StyledImage className="w-4 h-4" source={VolumeIcon} />
          <StyledText className="text-teal-900 font-bold ml-3">
            Interval Pupuk
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row items-center">
          <StyledPressable
            className="px-1.5 py-1.5 bg-teal-800 rounded-full"
            onPress={() => setLevelTanah(levelTanah + 1)}>
            <StyledImage className="w-3 h-3" source={PlusIcon} />
          </StyledPressable>
          <StyledText className="text-teal-900 font-black ml-2 text-sm">
            {levelTanah}
          </StyledText>
          <StyledPressable
            className="px-1.5 py-1.5 bg-teal-800 rounded-full ml-2"
            onPress={() => setLevelTanah(levelTanah - 1)}>
            <StyledImage className="w-3 h-3" source={MinusIcon} />
          </StyledPressable>
        </StyledView>
      </StyledView>

      {/* Pengaturan Pupuk */}
      <StyledView className="flex flex-row mt-5 items-center justify-between w-11/12 mx-auto rounded-xl bg-white px-4 py-4 shadow-lg">
        <StyledView className="flex flex-row justify-center items-center">
          <StyledImage className="w-4 h-4" source={PlantIcon} />
          <StyledText className="font-bold text-teal-900 ml-3">
            Level Tanah
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row items-center">
          <StyledPressable
            className="px-1.5 py-1.5 bg-teal-800 rounded-full"
            onPress={() => setIntervalPupuk(intervalPupuk + 1)}>
            <StyledImage className="w-3 h-3" source={PlusIcon} />
          </StyledPressable>
          <StyledText className="text-teal-900 font-black ml-2 text-sm">
            {intervalPupuk}
          </StyledText>
          <StyledPressable
            className="px-1.5 py-1.5 bg-teal-800 rounded-full ml-2"
            onPress={() => setIntervalPupuk(intervalPupuk - 1)}>
            <StyledImage className="w-3 h-3" source={MinusIcon} />
          </StyledPressable>
        </StyledView>
      </StyledView>

      <StyledView className="flex flex-row flex-wrap w-11/12 gap-1 gap-y-2 mx-auto justify-between mt-4">
        <StyledPressable className={`px-6 py-2 ${pompa ? 'bg-teal-800' : 'bg-slate-500'}  rounded-md`}  onPress={()=>handleControls('pompa')}>
          <StyledText className="text-white text-xs font-bold" >Pompa</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveA ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={()=>handleControls('valveA')}>
          <StyledText className="text-white text-xs font-bold">Valve A</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveB ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={()=>handleControls('valveB')}>
          <StyledText className="text-white text-xs font-bold">Valve B</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveC ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={()=>handleControls('valveC')}>
          <StyledText className="text-white text-xs font-bold">Valve C</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveD ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={()=>handleControls('valveD')}>
          <StyledText className="text-white text-xs font-bold">Valve D</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveE ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={()=>handleControls('valveE')}>
          <StyledText className="text-white text-xs font-bold">Valve E</StyledText>
        </StyledPressable>
      </StyledView>

      {/* Button Save */}
      <StyledView className="flex flex-row w-11/12 mx-auto justify-between mt-10">
        <StyledPressable className="px-12 py-3 bg-teal-800 rounded-md">
          <StyledText className="text-white font-bold text-sm" onPress={handleSimpan}>Simpan</StyledText>
        </StyledPressable>
        <StyledPressable className="px-12 py-3 rounded-md">
          <StyledText className="text-teal-900 font-bold text-sm" onPress={handleKembalikan}>Kembalikan</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
};

export default Setting;