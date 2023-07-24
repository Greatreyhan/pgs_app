import React from 'react'
import {Text, View} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const List = () => {
    return (
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
    )
}

export default List