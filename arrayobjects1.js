weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

wd={}
for(let data of weatherData){
    //data={district:'thrissus',weather:29}

    district=data.district//thrissur//kottayam//palakkad//eranakulam//thrissur//kottayam
    currtemp=data.weather//32//29//34//33//29//30

    if(district in wd){
        oldtemp=wd[dist]//32//29
        if(oldtemp>currtemp){//32>29//29>30
            wd[dist]=oldtemp
        }
        else{
            wd[dist]=currtemp
        }

    }
}console.log(wd);