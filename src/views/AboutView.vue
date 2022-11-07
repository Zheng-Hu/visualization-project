<template>
  <div class="about">
    <div class="player">
    <div class="avatar-image">
      <img class="team-icon" width="30" height="30" src="../assets/Team-Logo/DRX.png">
      <img class="avatar" src="../assets/Player/Deft.png">
    </div>
    <div class="nickname">Deft</div>
    <div class="player-more-info">
      <img src="../assets/Country/Koera.png" class="nationality">
      <div class="text-label">ADC</div>
      <div class="text-label">DRX</div>

    </div>
  </div>
    <div id="container" style="height: 500px"></div>
    <div id="mycontainer"></div>
  </div>
</template>
<style>

.player-more-info{
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nationality {
  height: 18px;
  border-radius: 2px;
}
.nickname{
  text-align: center;
    margin-top: 10px;
    height: 34px;
    font-family: Industry-Bold;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #2d2f33;
}
.player{
  background-color: white;
  margin-bottom: 10px;
  padding: 20px;
}
.text-label{
  height: 20px;
    margin-left: 6px;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: rgb(168, 171, 179);
    background: #f5f6f7;
    padding: 0px 5px;
    border-radius: 4px;
}
#container{
  background-color: white;
  margin-bottom: 10px;
  padding:10px;
}

#mycontainer{
  background-color: white;
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
<script>
import * as echarts from 'echarts';
import * as Highcharts from 'highcharts'
export default {
  name: 'about-view',
  data() {
    return {

    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var dom = document.getElementById('container');
      var myChart = echarts.init(dom, null, {
        renderer: 'canvas',
        useDirtyRect: false
      });
      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['Kills', 'Death', 'Assist', 'CS', 'Damage', 'Gold', 'DT']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Deft',
            type: 'bar',
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: 'Highest',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Average',
            type: 'bar',
            stack: 'Ad',
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },


        ]
      };

      if (option && typeof option === 'object') {
        myChart.setOption(option);
      }
      Highcharts.chart('mycontainer', {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Recent Performance'
        },

        xAxis: {
          categories: ['10-16', '10-16', '10-16', '10-11', '10-10', '10-09'],
          accessibility: {
            description: 'Months of the year'
          }
        },
        yAxis: {
          title: {
            text: 'Score'
          },

        },
        tooltip: {
          crosshairs: true,
          shared: true
        },
        plotOptions: {
          spline: {
            marker: {
              radius: 4,
              lineColor: '#666666',
              lineWidth: 1
            }
          }
        },
        series: [{
          name: 'Deft',
          // data: [46.7, 41.8, 48.5, 23.5, 18.9, 72.5]
          data: [{
            y: 46.7,
            marker: {
              symbol: 'url(https://img.scoregg.com/z/0/p/174/2114523592694_100X100.png)',
              width: 30,
              height: 30
            },
          }, {
            y: 41.9,
            marker: {
              symbol: 'url(https://img.scoregg.com/z/2373870/p/211/1316582381157_100X100.png)',
              width: 30,
              height: 30
            },
          }, {
            y: 48.5,
            marker: {
              symbol: 'url(https://img.scoregg.com/z/2373870/p/229/2213023839515_100X100.png)',
              width: 30,
              height: 30
            },
          }, {
            y: 23.5,
            marker: {
              symbol: 'url(https://img.scoregg.com/z/2373870/p/211/1316582381157_100X100.png)',
              width: 30,
              height: 30
            },
          }, {
            y: 18.9,
            marker: {
              symbol: 'url(https://img.scoregg.com/z/2373870/p/229/2213023839515_100X100.png)',
              width: 30,
              height: 30
            },
          }, {
            y: 72.5,
            marker: {
              symbol: 'url(https://img.scoregg.com/z/0/p/174/2114523592694_100X100.png)',
              width: 30,
              height: 30
            },

          }]
        }]
      });
    }
  }
}


</script>