webpackJsonp([2],{"30o4":function(t,s){},kPQs:function(t,s,i){"use strict";var e={name:"CountDown",props:{countDownMilliSeconds:{type:Number,default:0},autoStart:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:t=>t>=0},isEmit:{type:Boolean,default:!1}},data:()=>({isCounting:!1,currentMilliseconds:123123123}),computed:{days(){return Math.floor(this.currentMilliseconds/864e5)},hours(){return Math.floor(this.currentMilliseconds%864e5/36e5)},minutes(){return Math.floor(this.currentMilliseconds%36e5/6e4)},seconds(){return Math.floor(this.currentMilliseconds%6e4/1e3)},milliseconds(){return Math.floor(this.currentMilliseconds%1e3)},totalDays(){return this.days},totalHours(){return Math.floor(this.currentMilliseconds/36e5)},totalMinutes(){return Math.floor(this.currentMilliseconds/6e4)},totalSeconds(){return Math.floor(this.currentMilliseconds/1e3)},totalMilliseconds(){return this.currentMilliseconds}},methods:{start(){this.isCounting||(this.isCounting=!0,this.isEmit&&this.$emit("start"),this.continue())},continue(){if(!this.isCounting)return;const t=Math.min(this.currentMilliseconds,this.interval);t>0?this.timeout=setTimeout(this.progress,t,this):this.end()},progress(){this.isCounting&&(this.currentMilliseconds-=this.interval,console.log({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.isEmit&&this.currentMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},pause(){clearTimeout(this.timeout)},end(){this.isCounting&&(this.pause(),this.currentMilliseconds=0,this.isCounting=!1,this.isEmit&&this.$emit("end"))}},watch:{$prop:{deep:!0,immediate:!0,handler(){this.currentMilliseconds=this.countDownMilliSeconds,this.autoStart&&this.$nextTick(()=>{this.start()})}}},beforeDestroy(){this.pause()}},o={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",[t._t("default",null,{days:t.days,hours:t.hours,minutes:t.minutes,seconds:t.seconds,milliseconds:t.milliseconds,totalDays:t.totalDays,totalHours:t.totalHours,totalMinutes:t.totalMinutes,totalSeconds:t.totalSeconds,totalMilliseconds:t.totalMilliseconds,countDownMilliSeconds:t.countDownMilliSeconds})],2)},staticRenderFns:[]};var n=i("C7Lr")(e,o,!1,function(t){i("30o4")},"data-v-e1327268",null);s.a=n.exports},lVK7:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),function(t){var s=i("kPQs");t.exports=s.a}.call(s,i("VC+f")(t))}},["lVK7"]);
//# sourceMappingURL=index.js.map