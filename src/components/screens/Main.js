import React from 'react'
import styled from 'styled-components'
import jeremy from '../assets/images/image-jeremy.png'
import option from '../assets/images/icon-ellipsis.svg'
import workbg from '../assets/images/icon-work.svg'
import playbg from '../assets/images/icon-play.svg'
import studybg from '../assets/images/icon-study.svg'
import excercisebg from '../assets/images/icon-exercise.svg'
import social from '../assets/images/icon-social.svg'
import selfcare from '../assets/images/icon-self-care.svg'


export default function Main() {

    const datas = [
        {
            id:1,
            background:'hsl(15, 100%, 70%)',
            img:workbg,
            title: 'Work',
            time: '32hrs',
            last_week: '36hrs',
            class:false
        },
        {
            id:2,
            background:'hsl(195, 74%, 62%)',
            img:playbg,
            title: 'Play',
            time: '10hrs',
            last_week: '8hrs',
            class:false
        },
        {
            id:3,
            background:'hsl(348, 100%, 68%)',
            img:studybg,
            title: 'Study',
            time: '4hrs',
            last_week: '7hrs',
            class:false
        },
        {
            id:4,
            background:'hsl(145, 58%, 55%)',
            img:excercisebg,
            title: 'Exercise',
            time: '4hrs',
            last_week: '5hrs',
            class:true
        },
        {
            id:5,
            background:'hsl(264, 64%, 52%)',
            img:social,
            title: 'Social',
            time: '5hrs',
            last_week: '10hrs',
            class:true
        },
        {
            id:6,
            background:'hsl(43, 84%, 65%)',
            img:selfcare,
            title: 'Self care',
            time: '2hrs',
            last_week: '2hrs',
            class:true
        },
    ]

    const renderSingles = () => {
        return datas.map((data) => (
            <Single className={data.class ? 'no-margin' : ''} key={data.id}>
                <Behind style={{'background':data.background}}>
                    <BehindImg src={data.img} alt="" />
                </Behind>
                <Front>
                    <FrontTop>
                        <Title>{data.title}</Title>
                        <Option>
                            <OptionImg src={option} alt="" />
                        </Option>
                    </FrontTop>
                    <FrontBottom>
                        <Time>{data.time}</Time>
                        <Previos>Last Week - {data.last_week}</Previos>
                    </FrontBottom>
                </Front>
            </Single>
        ))
    }
  return (
    <BackGround>
        <Dashboard>
            <Left>
                <Top>
                    <Avatar>
                        <AvatarImg src={jeremy} alt="" />
                    </Avatar>
                    <Details>
                    <ReportP>Report for</ReportP>
                    <Person>Jeremy Robson</Person>
                    </Details>
                </Top>
                <Bottom>
                    <Duration>Daily</Duration>
                    <Duration>Weekly</Duration>
                    <Duration>Monthly</Duration>
                </Bottom>
            </Left>
            <Right>
                {renderSingles()}
            </Right>
        </Dashboard>
    </BackGround>
  )
}

const BackGround = styled.section`
    background: hsl(226, 43%, 10%);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width:541px){
        height: 280vh;
        align-items: flex-start;
        padding-top: 50px;
    }
`
const Dashboard = styled.section`
    width: 80%;
    height: 550px;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width:831px){
        height: 500px;
    }

    @media screen and (max-width:721px){
        width: 90%;
    }

    @media screen and (max-width:541px){
        width: 70%;
        flex-direction: column;
        justify-content: flex-start !important;
        height: 100%;
    }

`
const Left = styled.div`
    width: 300px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;

    @media screen and (max-width:1440px){
        width: 280px;
    }

    @media screen and (max-width:1200px){
        width: 230px;
    }

    @media screen and (max-width:960px){
        width: 200px;
    }

    @media screen and (max-width:831px){
        width: 190px;
    }

    @media screen and (max-width:641px){
        width: 160px;
    }
    @media screen and (max-width:541px){
        width: 100%;
        height: 220px;
        margin-bottom: 40px;
    }
`
const Right = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 900px;
    height: 100%;
    
    @media screen and (max-width:1440px){
        width: 850px;
    }
    @media screen and (max-width:1200px){
        width: 705px;
    }

    @media screen and (max-width:960px){
        width: 555px;
    }

    @media screen and (max-width:831px){
        width: 450px;
    }

    @media screen and (max-width:721px){
        width: 440px;
    }

    @media screen and (max-width:641px){
        width: 390px;
    }

    @media screen and (max-width:541px){
        width: 100%;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        margin-top: 0px;
    }
`
const Top = styled.div`
    width: 100%;
    height: 380px;
    background: hsl(246, 80%, 60%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 15px;
    position: absolute;
    z-index: 1;
    padding: 40px;
    box-sizing: border-box;

    @media screen and (max-width:831px){
        height: 340px;
    }
    @media screen and (max-width:541px){
        flex-direction: row;
        height: 150px;
        justify-content: space-between;
        align-items: center;
        padding: 40px 60px;
    }
    @media screen and (max-width:461px){
        padding: 40px 40px;
    }
    @media screen and (max-width:376px){
        padding: 40px 20px;
    }
`
const Bottom = styled.div`
    width: 100%;
    height: 185px;
    background: hsl(235, 46%, 20%);
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 40px;
    box-sizing: border-box;
    position: absolute;
    top: 360px;
    border-radius: 12px;
    overflow: hidden;

    @media screen and (max-width:831px){
        height: 170px;
        padding: 40px 40px;
        top: 320px;
        padding: 30px 40px;
    }
    @media screen and (max-width:541px){
        height: 80px;
        top: 135px;
        flex-direction: row;
    }
`
const Avatar = styled.div`
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid #fff;
    margin-bottom: 50px;

    @media screen and (max-width:641px){
        width: 60px;
        height: 60px;
    }
    @media screen and (max-width:541px){
        margin-bottom: 0px;
    }
    @media screen and (max-width:461px){
        margin-right: 10px;
    }
    @media screen and (max-width:376px){
        margin-right: 10px;
    }
`
const AvatarImg = styled.img`
    width: 100%;
    height: 100%;
`
const Details = styled.div`
    width: auto;
`
const ReportP = styled.p`
    color: #ccc;
    font-size: 15px;

    @media screen and (max-width:1200px){
        font-size: 12px;
    }
    @media screen and (max-width:831px){
        margin-bottom: 10px;
    }

    @media screen and (max-width:541px){
        margin-bottom: 0px;
    }
`
const Person = styled.h2`
    color: #fff;
    font-size:50px;
    font-weight: 100;
    @media screen and (max-width:1200px){
        font-size: 40px;
    }
    @media screen and (max-width:960px){
        font-size: 35px;
    }
    @media screen and (max-width:831px){
        font-size: 30px;
    }
    @media screen and (max-width:641px){
        font-size: 25px;
    }
    /* @media screen and (max-width:376px){
        font-size: 2px;
    } */
`
const Duration = styled.h4`
    color: #999;
    font-size: 15px;
    display: block;
    width: fit-content;
    &:hover{
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width:641px){
        font-size: 13px;
    }
    @media screen and (max-width:541px){
        margin-top: 10px;
    }
`
const Single = styled.div`
    width: 280px;
    height: 220px;
    margin-bottom: 19px;
    position: relative;
    &.no-margin{
        margin-bottom: 0;
    }
    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width:1200px){
        width: 220px;
    }

    @media screen and (max-width:960px){
        width: 175px;
    }
    @media screen and (max-width:831px){
        width: 135px;
        height: 190px;
    }    
    @media screen and (max-width:641px){
        width: 115px;
        height: 190px;
    }

    @media screen and (max-width:541px){
        width: 100%;
        height: 190px;
        margin-bottom: 60px !important;
    }
    @media screen and (max-width:461px){
        width: 100%;
        height: 140px;
        margin-bottom: 60px !important;
    }
`
const Behind = styled.div`
    background: #000;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
`
const BehindImg = styled.img`
    width: 60px;
    height: 60px;
    display: block;
    margin-left: auto;
`
const Front = styled.div`
    background: hsl(235, 46%, 20%);
    width: 100%;
    height: 100%;
    border-radius: 15px;
    padding: 20px;
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    top: 40px;
    transition: all 0.3s;
    &:hover{
        background: hsl(235, 36%, 30%);
    }    

`
const FrontTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
`
const FrontBottom = styled.div`
    @media screen and (max-width:461px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
    }
`
const Title = styled.h5`
    font-size: 18px;
    color: #fff;

    @media screen and (max-width:1200px){
        font-size: 15px;
    }
    @media screen and (max-width:960px){
        font-size: 13px;
    }
    @media screen and (max-width:641px){
        font-size: 11px;
    }
`
const Option = styled.span`
    display: block;
    width: 15px;
    height: 3px;

    @media screen and (max-width:641px){
        width: 10px;
    }
`
const OptionImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    &:hover{
        fill: #fff;
    }
`
const Time = styled.h1`
    font-size: 60px;
    font-weight: 300;
    color: #fff;
    margin-bottom: 10px;
    @media screen and (max-width:1200px){
        font-size: 50px;
    }
    @media screen and (max-width:960px){
        font-size: 40px;
    }
    @media screen and (max-width:831px){
        font-size: 30px;
    }
    @media screen and (max-width:641px){
        font-size: 25px;
    }
    @media screen and (max-width:461px){
        font-size: 35px;
        margin-right: 20px;
    }
`
const Previos = styled.p`
    font-size: 13px;
    color: #fff;
    @media screen and (max-width:831px){
        font-size: 10px;
    }
    @media screen and (max-width:831px){
        font-size: 9px;
    }
    @media screen and (max-width:461px){
        font-size: 13px;
    }
`
