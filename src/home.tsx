import React, { useState, useEffect } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import { Link } from "react-router-native"
import { CheckIcon, Rainy, Map, Gear } from '../assets'
import { styled } from 'nativewind'
import { db } from "./config";
import { onValue, ref, set } from "firebase/database";

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const handlePress = (key: String, val: Boolean) => {
  set(ref(db, `checklist/${key}/isDone`), !val);
}
const Home = () => {
  const [params, setParams] = useState(0);
  const [tempAvg, setTempAvg] = useState(0);
  const [udaraAvg, setUdaraAvg] = useState(0);
  const [tanahAvg, setTanahAvg] = useState(0);
  const [ppmAvg, setPpmAvg] = useState(0);
  const [tempL, setTempL] = useState(0);
  const [tempH, setTempH] = useState(0);
  const [lokasi, setLokasi] = useState("");
  const [dataCheck, setDataCheck] = useState({});
  useEffect(() => {
    // Checklist
    onValue(ref(db, "param/1/"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        let chunks = [];
        for(let i = 0; i < data.length; i+=3){
          chunks.push(data.slice(i,i+3));
        }
        setParams(chunks);
      }
    });
    // Checklist
    onValue(ref(db, "checklist"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setDataCheck(data);
      }
    });
    // Temp High
    const queryTempH = ref(db, "tempH");
    onValue(queryTempH, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setTempH(data);
      }
    });

    // Temp Low
    const queryTempL = ref(db, "tempL");
    onValue(queryTempL, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        setTempL(data);
      }
    });

    // Lokasi
    onValue(ref(db, "personalData/lokasi"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setLokasi(data);
      }
    });
  }, []);
  return (
    <StyledView className='bg-slate-100 pb-8'>

      {/* Header */}
      <StyledView className='w-full flex flex-row justify-center items-between'>
        <StyledText className='flex-1 m-3.5 text-slate-950 font-bold text-xs'>PGS</StyledText>
        <StyledLink to="/profile">
          <StyledImage className='w-6 h-6 m-3' source={Gear} />
        </StyledLink>
      </StyledView>

      {/* Main data */}
      <StyledView className='w-11/12 mx-auto bg-white rounded-xl'>
        <StyledView className='flex flex-row items-center px-4 pt-4'>
          <StyledImage className='w-3 h-3 mr-1' source={Map} />
          <StyledText className='text-xs text-slate-950 font-bold'>{lokasi}</StyledText>
        </StyledView>

        <StyledView className='flex flex-row justify-between items-center mt-4 px-4'>
          <StyledView className='flex flex-row justify-between items-center'>
            <StyledText className='text-4xl text-slate-950 font-bold'>{parseInt(params[0] ? params[0] : 0)}°C</StyledText>
            <StyledView className='flex flex-col justify-center items-center ml-2'>
              <StyledText className='text-xs m-0.5 text-slate-800 font-light'>H: {tempH}°C</StyledText>
              <StyledText className='text-xs m-0.5 text-slate-800 font-light'>L: {tempL}°C</StyledText>
            </StyledView>
          </StyledView>
          <StyledView className='flex justify-center flex-1 items-center'>
            <StyledImage className='w-12 h-12' source={Rainy} />
          </StyledView>
        </StyledView>

        <StyledView className='bg-teal-900 rounded-b-lg py-2 mt-5 flex flex-row'>
          <StyledView className='flex justify-center items-center flex-col w-4/12'>
            <StyledText className='text-xs m-0.5 text-slate-200 font-normal mt-2 text-center'>Udara</StyledText>
            <StyledText className='text-lg m-0.5 text-white font-bold -mt-1'>{parseInt(params[1] ? params[1] : 0)}%</StyledText>
          </StyledView>
          <StyledView className='flex justify-center items-center flex-col w-4/12'>
            <StyledText className='text-xs m-0.5 text-slate-200 font-normal mt-2 text-center'>Tanah</StyledText>
            <StyledText className='text-lg m-0.5 text-white font-bold -mt-1'>{parseInt(params[2] ? params[2] : 0)}%</StyledText>
          </StyledView>
          <StyledView className='flex justify-center items-center flex-col w-4/12'>
            <StyledText className='text-xs m-0.5 text-slate-200 font-normal mt-2 text-center'>Cahaya</StyledText>
            <StyledText className='text-lg m-0.5 text-white font-bold -mt-1'>{parseInt(params[3] ? params[3] : 0)}%</StyledText>
          </StyledView>
        </StyledView>

      </StyledView>

      {/* Check List */}
      <StyledView className='w-11/12 mx-auto py-4 rounded-xl mt-3'>
        <StyledView className='w-full flex flex-row justify-center items-between'>
          <StyledText className='flex-1 text-slate-950 font-bold text-xs'>Check List</StyledText>
        </StyledView>

        <StyledView className='w-full flex flex-col'>

          {Object.keys(dataCheck).map((key: String, i) => {
            const obj = dataCheck[key];
            if (obj.isDone && i < 3) {
              return (
                <StyledView key={i} className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
                  <StyledPressable onPress={() => handlePress(key, obj.isDone)} className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
                    <StyledImage className="w-3 h-3" source={CheckIcon} />
                  </StyledPressable>
                  <StyledView className="w-full flex flex-col">
                    <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                      {obj.title}
                    </StyledText>
                    <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                      {obj.date}
                    </StyledText>
                  </StyledView>
                </StyledView>
              )
            }
            else if (i < 3) {
              return (
                <StyledView key={i} className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
                  <StyledPressable onPress={() => handlePress(key, obj.isDone)} className="w-5 h-5 rounded border-2 border-teal-900 bg-white mx-4 ml-8"></StyledPressable>
                  <StyledView className="w-full flex flex-col">
                    <StyledText className="flex-1 text-slate-950 font-bold text-md">
                      {obj.title}
                    </StyledText>
                    <StyledText className="flex-1 text-slate-800 font-light text-xs">
                      {obj.date}
                    </StyledText>
                  </StyledView>
                </StyledView>
              )
            }
          }
          )}
        </StyledView>
        <StyledLink className="mt-4 mx-auto bg-teal-800 hover:bg-teal-900 px-6 py-2 rounded-md shadow-lg" to="/check"><StyledText className='text-white'>Tampilkan Semua</StyledText></StyledLink>
      </StyledView>


    </StyledView>
  )
}

export default Home