import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Link} from 'react-router-native';
import {CheckIcon, Rainy, Map, Gear} from '../assets';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledLink = styled(Link);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Check = () => {
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
          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-white mx-4 ml-8"></StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-950 font-bold text-md">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-800 font-light text-xs">
                Jan 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-white mx-4 ml-8"></StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-950 font-bold text-md">
                Isi Pupuk A & B
              </StyledText>
              <StyledText className="flex-1 text-slate-800 font-light text-xs">
                Jan 1
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

          <StyledView className="w-full flex flex-row justify-center items-center mt-3 px-5 py-3 rounded-xl bg-white">
            <StyledView className="w-5 h-5 rounded border-2 border-teal-900 bg-teal-900 mx-4 ml-8 flex justify-center items-center">
              <StyledImage className="w-3 h-3" source={CheckIcon} />
            </StyledView>
            <StyledView className="w-full flex flex-col">
              <StyledText className="flex-1 text-slate-700 font-bold text-md line-through opacity-50">
                Flush Kran Air
              </StyledText>
              <StyledText className="flex-1 text-slate-700 font-light text-xs opacity-50">
                Feb 3
              </StyledText>
            </StyledView>
          </StyledView>

        </StyledView>
  
      </StyledView>
    </StyledView>
  );
};

export default Check;
