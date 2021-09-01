import React from 'react';
import Story from '../Story/Story';
import './StoryReel.css';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story
            image="https://i.pinimg.com/564x/3c/c2/e3/3cc2e3ff1f1a381affb70989c83e6254.jpg"
            profilePic="https://pbs.twimg.com/profile_images/1426282902900199424/2Ul-n-EF_400x400.jpg"
            title="Maitri Mistri"
            />
            <Story
            image="https://i.pinimg.com/564x/3f/d1/29/3fd1299edbf8f508f3d07a583c4017e0.jpg"
            profilePic="https://i.pinimg.com/564x/da/9a/d6/da9ad63bb3e72a3a687007c85e49b97a.jpg"
            title="Devdutt Padikkal"
            />
             <Story
            image="https://i.pinimg.com/564x/b6/e0/a0/b6e0a0a1b7aed067ec9a84ddea905246.jpg"
            profilePic="https://pbs.twimg.com/profile_images/1157313327867092993/a09TxL_1_400x400.jpg"
            title="Cristiano Ronaldo"
            />
            <Story
            image="https://i.pinimg.com/564x/c1/47/3e/c1473e77eee95b04c709fb9d44ae0f1d.jpg"
            profilePic="https://i.pinimg.com/564x/05/35/fd/0535fdec5a5cb1a66d3f13dbdeb53830.jpg"
            title="Tomato Food Delivery"
            />
             <Story
            image="https://i.pinimg.com/564x/ad/c1/54/adc15429cc0bc6df26c73680ed21f42a.jpg"
            profilePic="https://i.pinimg.com/564x/97/62/75/976275cb42ebbc0e4457688557c4f7b1.jpg"
            title="Tesla"
            />
        </div>
    )
}

export default StoryReel
