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

      {/* Button Save */}
      <StyledView className="flex flex-row w-11/12 mx-auto justify-between mt-10">
        <StyledPressable className="px-12 py-3 bg-teal-800 rounded-md">
          <StyledText className="text-white font-bold" onPress={handleSimpan}>Simpan</StyledText>
        </StyledPressable>
        <StyledPressable className="px-12 py-3 rounded-md">
          <StyledText className="text-teal-900 font-bold" onPress={handleKembalikan}>Kembalikan</StyledText>
        </StyledPressable>
      </StyledView>
    </StyledView>
  );
};

export default Setting;
