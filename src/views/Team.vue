<template>
    <div class="whole-page">
        <div class="navbar">
            <span @click="clickPlayer" id="player">Player</span>
            <span @click="clickTeam" id="team">Team</span>

        </div>
        <div class="player">
            <div class="player-detail">
                <div class="avatar-image">

                    <img class="team-avatar" src="../assets/Team-Logo/T1.png">
                    <div class="name">T1</div>
                    <div class="score"> 
                        <span> Score</span>:196.1
                    </div>
                </div>

                <div class="image-block">
                    <img class="avatar" src="../assets/Player/Owner.png">
                    <img class="avatar" src="../assets/Player/Zeus.png">
                    <img class="avatar" src="../assets/Player/Keria.png">
                    <img class="avatar" src="../assets/Player/Gumayusi.png">
                    <img class="avatar" src="../assets/Player/Faker.png">

                </div>
                <div id="myChart1" style="margin-left:40px; width: 600px; height: 500px"></div>
                <div style="position:absolute; left:940px; top:200px">
                13 wins 5 lose
                </div>
                <div id="myPieChart1" style="margin-left:40px; width:500px; height:500px"></div>
                <div id="chart3" style="margin-left:40px; width:500px; height:500px"></div>
            </div>
        </div>




    </div>
</template>
<script >
import * as echarts from 'echarts';

export default {
    name: 'hello-world',
    data() {
        return {

        }
    },
    mounted() {
        this.drawLine();
    },
    methods: {
        clickPlayer() {
            document.getElementById("player").style.color = "black";
            document.getElementById("team").style.color = "#a8abb3";
            this.$router.push({ name: 'home' })

        },
        clickTeam() {


        },
        redirect() {
            this.$router.push({ name: 'about' })
        },
        drawLine() {
            // ???????????????????????? DOM ?????????????????? EChart ??????
            // let myChart = this.$echarts.init(document.getElementById('myChart'))
            var chartDom1 = document.getElementById('myChart1');
            var myChart1 = echarts.init(chartDom1);
            var option1;

            option1 = {
                radar: {
                    shape: 'circle',
                    indicator: [
                        { name: 'Baron', max: 6500 },
                        { name: 'Kills', max: 16000 },
                        { name: 'Gold', max: 30000 },
                        { name: 'Drakes', max: 38000 },
                        { name: 'Tower', max: 52000 },
                        { name: 'First Kill', max: 25000 }
                    ]
                },
                radius: '25%',
                series: [
                    {
                        name: 'Budget vs spending',
                        type: 'radar',
                        data: [
                            {
                                value: [5000, 8000, 20000, 35000, 50000, 18000],
                                name: 'Allocated Budget'
                            },
                        ]
                    }
                ]
            };
            myChart1.setOption(option1);
            var myPieChart1 = echarts.init(document.getElementById("myPieChart1"));
            var option = {
                //  ???????????????
                tooltip: {
                    //?????????????????????????????????????????????????????? axisPointe
                    show: false,
                    // ????????????: item:??????????????????axis??????????????????
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                series: [
                    {
                        // ?????????????????????tooltip????????????legend ????????????????????? setOption ?????????????????????????????????????????????????????????

                        type: 'pie',
                        // ????????????????????????????????????????????????????????????????????????
                        radius: ['50%', '70%'],
                        // ???????????????????????????????????????????????????
                        avoidLabelOverlap: false,
                        hoverAnimation: false,
                        // ???????????????????????????????????? label Role ?????????'outside'?????????????????????????????????
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },

                        data: [
                            {   // ?????????
                                value: 13,
                                // ???????????????
                                name: 'Win Ratio',
                                //???????????????????????????
                                selected: false,
                                // ???????????????????????????
                                label: {
                                    normal: {
                                        // ???????????????
                                        show: true,
                                        position: 'center',
                                        fontSize: 18,
                                        fontStyle: 'italic',
                                        // ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????? \n ??????
                                        formatter: '{b}\n{d}%',
                                    }
                                },
                            },
                            {
                                value: 5,
                                label: {
                                    normal: {
                                        show: false,

                                    }
                                }

                            },

                        ]
                    }
                ]
            };
            myPieChart1.setOption(option)
       

           
            var myChart = echarts.init(document.getElementById("chart3"));
        
        

           var option2 = {
                title: {
                    text: 'Damage',
                
                    left: 'center'
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'ADC' },
                            { value: 735, name: 'TOP' },
                            { value: 580, name: 'SUPPORT' },
                            { value: 484, name: 'MIDDLE' },
                            { value: 300, name: 'JUNGLE' }
                        ],
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };

            option2 && myChart.setOption(option2);

        }
    }
}


</script>
  
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.navbar {
    display: flex;
    align-items: center;
    background: white;
    height: 50px;
    color: #a8abb3;
    margin-bottom: 10px;


}

#player {
    margin-left: 10px;
    margin-right: 20px;
    color: #a8abb3;
}


#team {
    margin-left: 10px;
    margin-right: 20px;
    color: black;

}

.data-progress {
    width: 300px;
    margin-top: 36px;
    margin-left: 50px;
}

.ivu-progress-inner {
    display: inline-block;
    width: 100%;
    background-color: #f3f3f3;
    border-radius: 100px;
    vertical-align: middle;
    position: relative;
}

.ivu-progress-success-bg {
    border-radius: 100px;
    background-color: #19be6b;
    transition: all .2s linear;
    position: absolute;
    top: 0;
    left: 0;
}

.ivu-progress-bg {
    text-align: right;
    border-radius: 100px;
    background-color: #2d8cf0;
    transition: all .2s linear;
    position: relative;
}

body {
    background-color: rgb(245, 246, 247);
}

.kda-progress-bar {
    width: 100%;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    height: 10px;
}

.kda-progress-bar .k-bar {
    background: #ffcc60;
}

.kda-progress-bar .d-bar {
    background: #7e64b0;
}

.kda-progress-bar .a-bar {
    background: #afe585;
}

.progress-top-text {
    display: flex;
    justify-content: space-between;
}

.l-text {
    height: 16px;
    font-family: Industry-Bold;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #2d2f33;
}

.title {
    height: 16px;
    font-family: Industry-Bold;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 16px;
    color: #2d2f33;
}

.join-rate {
    margin-top: 13px;
}

.KDA {
    margin-top: 13px;
}

.sub-title {
    height: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: #2d2f33;
}

.sub-titles {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #676b73;
}

.light-text {
    color: #0d8dfc;
}

.r-text {
    font-family: PingFang SC;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: right;
    color: #a8abb3;
    line-height: 22px;
}

.player-detail {
    background-color: white;
    display: flex;
    padding: 30px;
    margin: 30px 0;
    margin-bottom: 10px;
}

.team-icon {
    position: absolute;
    background-color: #fff;
    box-shadow: 0 3px 6px 0 rgb(2 5 13 / 10%);
    border-radius: 50%;
}

.ivu-progress {
    display: inline-block;
    width: 100%;
    font-size: 12px;
    position: relative;
}

.avatar {
    width: 80px;
    height: 80px;
    margin-left: 5px;
}

.team-avatar {
    overflow: hidden;
    width: 130px;
    height: 130px;
    background: white;
    display: block;
}

.image-block {
    width: 285px;
    height: 190px;
    margin-top: 30px;
    margin-left: 20px;
}

.player-info {
    width: 130px;
    margin-left: 15px;
    padding-top: 12px;
    padding-left: 5px;
    text-align: left;
}

.name {
    /* font-family: 'Industry-BoldItalic',sans-serif; */
    font-family: 'Industry-BoldItalic';
    font-size: 24px;
    height: 24px;
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    font-style: italic;
    font-weight: bold;
}

.score {
    height: 20px;
    line-height: 20px;
    margin-top: 3px;
    color: #999fad;
    font-style: italic
}

.split-line {
    height: 1px;
    background-color: #ebedf2;
    margin: 14px 0 12px;

}

.team {
    font-size: 13px;
    height: 18px;
    line-height: 18px;
    margin-top: 4px;
}

.pos {
    font-size: 13px;
    margin-top: 4px;
    height: 18px;
    line-height: 18px;
}
</style>
  
  
  