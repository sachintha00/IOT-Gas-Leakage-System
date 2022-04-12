import React,{useEffect,useState} from 'react';

const ProgressBar = (props)=>{

    const [offset,setOffset]=useState(0);

    const{
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke,
    } = props;

    const center = size/2;
    const radius = size/2 - strokeWidth/2;
    const circumference = 2*Math.PI*radius;

    useEffect(()=>{
        const progressOffset = ((100-progress)/100)*circumference;
        setOffset(progressOffset);
    },[setOffset,progress,circumference,offset]);

    return(
        <div>
            <svg
            className='circular-chart'
            width={size}
            height={size}
            >
                <circle 
                className='circular-bg'
                stroke={circleOneStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                />
                <circle 
                className='circular'
                stroke={circleTwoStroke}
                cx={center}
                cy={center}
                r={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                />

                <svg viewBox="0 0 10 10" x="200" width="100">
                    <circle cx="5" cy="5" r="4" />
                </svg>
            </svg>
        </div>
    );
}

export default ProgressBar;