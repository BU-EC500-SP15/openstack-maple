var w = 400,
    h = 400;

//the width of the circle
var circleWidth = 5;



var palette = {
      "lightgray": "#819090",
      "gray": "#708284",
      "mediumgray": "#536870",
      "darkgray": "#475B62",
      "darkblue": "#0A2933",
      "darkerblue": "#042029",
      "paleryellow": "#FCF4DC",
      "paleyellow": "#EAE3CB",
      "yellow": "#A57706",
      "orange": "#BD3613",
      "red": "#D11C24",
      "pink": "#C61C6F",
      "purple": "#595AB7",
      "blue": "#2176C7",
      "green": "#259286",
      "yellowgreen": "#738A05"
  }

//adding the nodes
//看得懂，但是target是谁定义的？现在看应该是d3
var nodes = [
  { name:"Parent"},
  { name:"child1", target:[0]},
  { name:"child2", target:[0]},
  { name:"child3", target:[0]},
  { name:"child4", target:[0]},
  { name:"child5", target:[0]}

];


var links = [];

//写一个javascript functions

for (var i = 0; i<nodes.length; i++){
  if (nodes[i].target !== undefined){
    for (var x = 0; x < nodes[i].target.length;x++){
      links.push({
        source:nodes[i],
        target:nodes[nodes[i].target[x]]
      })
    }
  }
}


//在index.html 建立一个这样的<div id="chart"></div> 文件
var myChart = d3.select("#chart")
    .append('svg')
    .attr('width',w)
    .attr('height', h)


//第一个括号里是递交的nodes
var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .gravity(0.1)
    .charge(-1000)
    .size([w,h])

//这里selectAll('line') 是选择一个你将要创造的东西
//links 是从上面的javascript里 push 进来的

var link = myChart.selectAll('line')
      .data(links).enter().append('line')
      .attr('stroke', palette.gray)


// append('g') = append group
// call是把之前定义的force variable method叫出来
var node = myChart.selectAll('circle')
      .data(nodes).enter()
      .append('g')
      .call(force.drag);

node.append('circle')
  .attr('cx', function(d) {return d.x;})
  .attr('cy', function(d) {return d.y;})
  .attr('r', circleWidth)
  .attr('fill', palette.pink)


//动画

force.on('tick', function(e){
  node.attr('transform', function(d,i ){
    return 'translate(' + d.x +', '+ d.y + ')';
  })
link
  .attr('x1', function(d) {return d.source.x})
  .attr('y1', function(d) {return d.source.y})
  .attr('x2', function(d) {return d.target.x})
  .attr('y2', function(d) {return d.target.y})

})

force.start()






















//nodes2 for cas

var nodes2 = [
  { name:"Parent"},
  { name:"child1", target:[0]},
  { name:"child2", target:[0]},
  { name:"child3", target:[0]},
  { name:"child4", target:[0]},
  { name:"child5", target:[0]}
];



//目标：建立一个CAS的网络示意图

var myChart2 = d3.select('#cas')
















