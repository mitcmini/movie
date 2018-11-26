Page({
  data:{
    weeklymovielist:[
      {
        name:'泰坦尼克号',
        comment:'失去的才是永恒的',
        imagePath: '/image/n.jpg',
        ishighlyrecommended:false
      },
      {
        name: '这个杀手不太冷',
        comment: '小萝莉与怪蜀黍纯真灿烂的爱情故事',
        imagePath: '/image/n.jpg',
        ishighlyrecommended:false
      },
      {
      name:'教父',
      comment:'最精彩的剧本，最真实的黑帮电影',
      imagePath:'/image/n.jpg',
      ishighlyrecommended:true
    }],
    count:0,
    score:61,
  },

  onLoad:function(options){
    this.setData({
      currentindex:this.data.weeklymovielist.length-1
    })
  },
  f0:function(event){
    this.setData({
      currentindex: this.data.weeklymovielist.length - 1
    })
  }
})