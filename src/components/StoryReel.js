import React from 'react';
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="./story1.jpg" profileSrc="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat3&accessoriesType=Round&hatColor=Red&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Dizzy&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Black" title="Amritpreet Singh"/>
            <Story image="./story2.jpg" profileSrc="https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Sunglasses&hatColor=PastelRed&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=Close&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Brown" title="Mark Zuckerberg"/>
            <Story image="./story3.jpg" profileSrc="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hatColor=Black&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=Red&clotheType=BlazerShirt&eyeType=Default&eyebrowType=SadConcerned&mouthType=Serious&skinColor=Light" title="Sergey Brin" />
            <Story image="./story4.jpg" profileSrc="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BlondeGolden&facialHairType=MoustacheMagnum&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=Gray02&graphicType=Skull&eyeType=Close&eyebrowType=AngryNatural&mouthType=Vomit&skinColor=Pale" title="Elon Musk" />
            <Story image="../story5.jpg" profileSrc="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Heather&graphicType=Selena&eyeType=Dizzy&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Light" title="Tom Cruise" />
        </div>
    )
}

export default StoryReel;
