import React, { useState, useEffect } from 'react';
import { Text, View, Image, Pressable, Button } from 'react-native';
import { Link } from 'react-router-native';
import { styled } from 'nativewind';
import {
  ClockIcon,
  Gear,
  MinusIcon,
  PlantIcon,
  PlusIcon,
  VolumeIcon,
} from '../assets';
import { db } from "./config";
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
  const [valveF, setValveF] = useState(false);
  const [valveG, setValveG] = useState(false);
  const [valveH, setValveH] = useState(false);

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

    // Control
    onValue(ref(db, "controls/ALL"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setPompa(data[0] == 1 ? true : false);
        setValveA(data[1] == 1 ? true : false);
        setValveB(data[2] == 1 ? true : false);
        setValveC(data[3] == 1 ? true : false);
        setValveD(data[4] == 1 ? true : false);
        setValveE(data[5] == 1 ? true : false);
        setValveF(data[6] == 1 ? true : false);
        setValveG(data[7] == 1 ? true : false);
        setValveH(data[8] == 1 ? true : false);
      }
    });

  }, []);

  const handleSimpan = () => {
    set(ref(db, 'intervalPompa'), intervalPompa);
    set(ref(db, 'intervalPupuk'), intervalPupuk);
    set(ref(db, 'levelTanah'), levelTanah);
  }
  const handleKembalikan = () => {
    set(ref(db, 'intervalPompa'), 300);
    set(ref(db, 'intervalPupuk'), 100);
    set(ref(db, 'levelTanah'), 75);
  }
  const handleControls = (id: string) => {
    if (id == "pompa") { setPompa(!pompa); set(ref(db, 'controls/ALL'), ((!pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveA") { setValveA(!valveA); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (!valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveB") { setValveB(!valveB); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (!valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveC") { setValveC(!valveC); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (!valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveD") { setValveD(!valveD); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (!valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveE") { setValveE(!valveE); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (!valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveF") { setValveF(!valveF); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (!valveF ? "1" : "0") + (valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveG") { setValveG(!valveG); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (!valveG ? "1" : "0") + (valveH ? "1" : "0"))); }
    else if (id == "valveH") { setValveH(!valveH); set(ref(db, 'controls/ALL'), ((pompa ? "1" : "0") + (valveA ? "1" : "0") + (valveB ? "1" : "0") + (valveC ? "1" : "0") + (valveD ? "1" : "0") + (valveE ? "1" : "0") + (valveF ? "1" : "0") + (valveG ? "1" : "0") + (!valveH ? "1" : "0"))); }
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

      {/* Control Manual */}
      <StyledView className="flex flex-row flex-wrap w-11/12 gap-1 gap-y-2 mx-auto justify-between mt-4">
        <StyledPressable className={`px-6 py-2 ${pompa ? 'bg-teal-800' : 'bg-slate-500'}  rounded-md`} onPress={() => handleControls('pompa')}>
          <StyledText className="text-white text-xs font-bold" >Pompa</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveA ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveA')}>
          <StyledText className="text-white text-xs font-bold">Valve A</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveB ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveB')}>
          <StyledText className="text-white text-xs font-bold">Valve B</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveC ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveC')}>
          <StyledText className="text-white text-xs font-bold">Valve C</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveD ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveD')}>
          <StyledText className="text-white text-xs font-bold">Valve D</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveE ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveE')}>
          <StyledText className="text-white text-xs font-bold">Valve E</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveF ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveF')}>
          <StyledText className="text-white text-xs font-bold">Valve F</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveG ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveG')}>
          <StyledText className="text-white text-xs font-bold">Valve G</StyledText>
        </StyledPressable>
        <StyledPressable className={`px-6 py-2 ${valveH ? 'bg-teal-800' : 'bg-slate-500'} rounded-md`} onPress={() => handleControls('valveH')}>
          <StyledText className="text-white text-xs font-bold">Valve H</StyledText>
        </StyledPressable>
      </StyledView>

      {/* Button Save */}
      <StyledView className="flex flex-row w-11/12 mx-auto justify-between mt-10">
        <StyledPressable className="px-12 py-3 bg-teal-800 rounded-md">
          <StyledText className="text-white font-bold" onPress={handleSimpan}>Simpan</StyledText>
        </StyledPressable>
        <StyledPressable className="px-12 py-3 rounded-md">
          <StyledText className="text-teal-900 font-bold" onPress={handleKembalikan}>Reset</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
};

export default Setting;
