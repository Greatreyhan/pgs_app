import React, { useState, useEffect } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import { CheckIcon, Rainy, Map, Gear } from '../assets';
import { styled } from 'nativewind';
import { db } from "./config";
import { onValue, ref, set } from "firebase/database";

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);
const StyledPressable = styled(Pressable);
const handlePress = (key:String, val:Boolean) =>{
  set(ref(db,`checklist/${key}/isDone`),!val);
}
const Check = () => {
  const [dataCheck, setDataCheck] = useState({});
  useEffect(() => {
    // Checklist
    onValue(ref(db, "checklist"), (snapshot) => {
      const data = snapshot.val();
      if (snapshot.exists()) {
        setDataCheck(data);
      }
    });
  }, []);

  return (
    <StyledView>
      {/* Header */}
      <StyledView className="w-full flex flex-row justify-center items-between">
        <StyledText className="flex-1 m-3.5 text-slate-950 font-bold text-xs">
          PGS
        </StyledText>
        <StyledLink to="/profile">
          <StyledImage className="w-6 h-6 m-3" source={Gear} />
        </StyledLink>
      </StyledView>
      <StyledView className="w-11/12 mx-auto rounded-xl mt-2">
        <StyledView className="w-full flex flex-row justify-center items-between">
          <StyledText className="flex-1 text-slate-950 font-bold text-xs">
            Check List
          </StyledText>
        </StyledView>

        <StyledView className="w-full flex flex-col pb-10">

          {Object.keys(dataCheck).map((key:String, i) => {
            const obj = dataCheck[key];
            if (obj.isDone) {
              return(
              <StyledView key={i} className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
                <StyledPressable onPress={()=>handlePress(key, obj.isDone)} className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
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
            else {
              return (
                <StyledView key={i} className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
                  <StyledPressable onPress={()=>handlePress(key, obj.isDone)} className="w-5 h-5 rounded border-2 border-teal-900 bg-white mx-4 ml-8"></StyledPressable>
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

      </StyledView>
    </StyledView>
  );
};

export default Check;
