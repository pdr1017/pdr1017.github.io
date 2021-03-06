var myChart =
	{
		"graphset":[
    		{
		        "type":"bar",
		        "stacked" : true,
		        "background-color":"#326395",
		        "title":{
		            "text":"Goals For/Goals Against | All Groups",
		            "background-color":"#326395",
		            "fontFamily" : "Raleway",
		            "fontWeight" : "200",
		            "fontSize" : "16",
		            "color":"#FFFFFF"
		        },
		        "scaleX":{
		            "line-color":"none",
		            "line-width":0,
		            "guide":{
		                "line-color":"none"
		            },
		            "tick":{
		                "line-color":"#none",
		                "line-width":0,
		                "visible":0
		            },
		            "item":{
		                "color":"#FFFFFF",
		                "fontFamily" : "Raleway",
		            	"fontWeight" : "200",
		            },
		            "labels": ["ALG","ARG","AUS","BEL","BOS","BRA","CAM","CHL","COL","COS","CRO","CIV","ECU","ENG","FRA","GER","GHA","GRE","HON","IRA","ITA","JPN","KOR","MEX","NED","NGA","POR","RUS","SPA","SWI","USA","URU"],
		        },
		        "scaleY":{
		            "line-color":"none",
		            "line-width":0,
		            "guide":{
		                "line-color":"none"
		            },
		            "tick":{
		                "line-color":"none",
		                "line-width":0
		            },
		            "item":{
		                "color":"#326395"
		            }
		        },
		        "plot":{
		            "tooltip":{
		                "shadow":0,
		                "border-radius":5,
		                "sticky":1,
		                "timeout":200
		            },
		            "animation" : {
		            	"effect" : "2",
		            	"delay" : 500,
		            	"speed" : 100,
		            },
		        },
		        "series":[
		            {
		                "values":[5,5,3,3,4,7,1,5,9,4,5,4,3,2,7,7,4,2,1,1,2,2,3,4,10,3,3,1,4,7,4,4],
		                "data-scored" : ["Algeria has scored ","Argentina has scored ","Australia has scored ","Belgium has scored ","Bosnia & Herzegovina has scored ","Brazil has scored ","Cameroon has scored ","Chile has scored ","Colombia has scored ","Costa Rica has scored ","Croatia has scored ","Cote d`Ivoire has scored ","Ecuador has scored ","England has scored ","France has scored ","Germany has scored ","Ghana has scored ","Greece has scored ","Honduras has scored ","Iran has scored ","Italy has scored ","Japan has scored ","South Korea has scored ","Mexico has scored ","Netherlands has scored ","Nigeria has scored ","Portugal has scored ","Russia has scored ","Spain has scored ","Switzerland has scored ","USA has scored ","Uruguay has scored "],
		                "tooltip" : {
		                	"rules" : [
		                	{
		                		"rule" : "%v == 1",
		                		"text" : "%data-scored" + "%v" + " goal",
		                	},
		                	{
		                		"rule" : "%v == 0",
		                		"text" : "%data-scored" + "no goals",
		                	}
		                	],
		                	"fontFamily" : "Raleway",
		            		"fontWeight" : "200",
		            		"fontSize" : "14",
		            		"maxWidth" : "100px",
		            		"wrapText" : true,
		                	"text" : "%data-scored" + "%v" + " goals" 
		                },
		                "background-color":"#44CC44"
		            },
		            {
		                "values":[-4,-3,-9,-1,-4,-2,-9,-3,-2,-1,-6,-5,-3,-4,-2,-2,-6,-4,-8,-4,-3,-6,-5,-1,-3,-3,-7,-2,-7,-6,-4,-4],
		                "data-positive":[4,3,9,1,4,2,9,3,2,1,6,5,3,4,2,2,6,4,8,4,3,6,5,1,3,3,7,2,7,6,4,4],
		                "data-allowed" : ["Algeria has allowed ","Argentina has allowed ","Australia has allowed ","Belgium has allowed ","Bosnia & Herzegovina has allowed ","Brazil has allowed ","Cameroon has allowed ","Chile has allowed ","Colombia has allowed ","Costa Rica has allowed ","Croatia has allowed ","Cote d`Ivoire has allowed ","Ecuador has allowed ","England has allowed ","France has allowed ","Germany has allowed ","Ghana has allowed ","Greece has allowed ","Honduras has allowed ","Iran has allowed ","Italy has allowed ","Japan has allowed ","South Korea has allowed ","Mexico has allowed ","Netherlands has allowed ","Nigeria has allowed ","Portugal has allowed ","Russia has allowed ","Spain has allowed ","Switzerland has allowed ","USA has allowed ","Uruguay has allowed "],
		                "tooltip" : {
		                	"rules" : [
		                	{
		                		"rule" : "%v == 0",
		                		"text" : "%data-allowed" + " no goals",
		                	},
		                	{
		                		"rule" : "%v == 1",
		                		"text" : "%data-allowed" + "1 goal",
		                	}
		                	],
		                	"fontFamily" : "Raleway",
		            		"fontWeight" : "200",
		            		"fontSize" : "14",
		            		"maxWidth" : "100px",
		            		"wrapText" : true,
		                	"text" : "%data-allowed" + "%data-positive" + " goals" 
		                },
		                "background-color":"#CC4444"
		            }
		        ]
		    }
		]
	}

window.onload=function() {
		zingchart.render({
			id:"myChartDiv",
			data: myChart,
			height: 400,
			width: "100%"
		});
	};

var globalCurrentLink = "all_groups";

$(".group_button").mouseenter(function() {
	if ($(this).attr("id") != globalCurrentLink) {
		$(this).css("background-color", "#FFFFFF");
		$(this).css("color", "#326395");
		$(this).css("border-radius", "10px");
	};
});

$(".group_button").mouseleave(function() {
	if ($(this).attr("id") != globalCurrentLink) {
		$(this).css("background-color", "#326395");
		$(this).css("color","#FFFFFF");
	};
});

// Loads All Group Data =====================================

$("#all_groups").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | All Groups",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["ALG","ARG","AUS","BEL","BOS","BRA","CAM","CHL","COL","COS","CRO","CIV","ECU","ENG","FRA","GER","GHA","GRE","HON","IRA","ITA","JPN","KOR","MEX","NED","NGA","POR","RUS","SPA","SWI","USA","URU"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[5,2,3,3,1,7,1,5,9,4,5,4,3,2,7,6,3,2,1,0,2,2,3,4,10,1,2,1,4,4,4,4],
			                "data-scored" : ["Algeria has scored ","Argentina has scored ","Australia has scored ","Belgium has scored ","Bosnia & Herzegovina has scored ","Brazil has scored ","Cameroon has scored ","Chile has scored ","Colombia has scored ","Costa Rica has scored ","Croatia has scored ","Cote d`Ivoire has scored ","Ecuador has scored ","England has scored ","France has scored ","Germany has scored ","Ghana has scored ","Greece has scored ","Honduras has scored ","Iran has scored ","Italy has scored ","Japan has scored ","South Korea has scored ","Mexico has scored ","Netherlands has scored ","Nigeria has scored ","Portugal has scored ","Russia has scored ","Spain has scored ","Switzerland has scored ","USA has scored ","Uruguay has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-4,-1,-9,-1,-3,-2,-9,-3,-2,-1,-6,-5,-3,-4,-2,-2,-4,-4,-5,-1,-3,-6,-5,-1,-3,0,-6,-2,-7,-6,-3,-4],
			                "data-positive":[4,1,9,1,3,2,9,3,2,1,6,5,3,4,2,2,4,4,5,1,3,6,5,1,3,0,6,2,7,6,3,4],
			                "data-allowed" : ["Algeria has allowed ","Argentina has allowed ","Australia has allowed ","Belgium has allowed ","Bosnia & Herzegovina has allowed ","Brazil has allowed ","Cameroon has allowed ","Chile has allowed ","Colombia has allowed ","Costa Rica has allowed ","Croatia has allowed ","Cote d`Ivoire has allowed ","Ecuador has allowed ","England has allowed ","France has allowed ","Germany has allowed ","Ghana has allowed ","Greece has allowed ","Honduras has allowed ","Iran has allowed ","Italy has allowed ","Japan has allowed ","South Korea has allowed ","Mexico has allowed ","Netherlands has allowed ","Nigeria has allowed ","Portugal has allowed ","Russia has allowed ","Spain has allowed ","Switzerland has allowed ","USA has allowed ","Uruguay has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF");
		$("#all_groups").css("background-color", "#FFFFFF");
		$("#all_groups").css("color", "#326395");
	};
});

//Loads Group A Data ===========================

$("#group_a").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group A",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Brazil","Cameroon","Croatia","Mexico"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[7,1,6,4],
			                "data-scored" : ["Brazil has scored ","Cameroon has scored ","Croatia has scored ","Mexico has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-2,-9,-6,-1],
			                "data-positive" : [2,9,6,1],
			                "data-allowed" : ["Brazil has allowed ","Cameroon has allowed ","Croatia has allowed ","Mexico has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_a").css("background-color", "#FFFFFF");
		$("#group_a").css("color", "#326395");
	};
});
// Loads Group B Data ===============================

$("#group_b").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group B",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Australia","Chile","Netherlands","Spain"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[3,5,10,4],
			                "data-scored" : ["Australia has scored ","Chile has scored ","Netherlands has scored ","Spain has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-9,-3,-3,-7],
			                "data-positive" : [9,3,3,7],
			                "data-allowed" : ["Australia has allowed ","Chile has allowed ","Netherlands has allowed ","Spain has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_b").css("background-color", "#FFFFFF");
		$("#group_b").css("color", "#326395");
	};
});

// Load Group C Data =====================================

$("#group_c").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group C",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Colombia","Cote d'Ivoire","Greece","Japan"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[9,4,2,2],
			                "data-scored" : ["Colombia has scored ","Cote d'Ivoire has scored ","Greece has scored ","Japan has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-2,-5,-4,-6],
			                "data-positive" : [2,5,4,6],
			                "data-allowed" : ["Colombia has allowed ","Cote d'Ivoire has allowed ","Greece has allowed ","Japan has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_c").css("background-color", "#FFFFFF");
		$("#group_c").css("color", "#326395");
	};
});

// Load Group D Data ================================

$("#group_d").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group D",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Costa Rica","England","Italy","Uruguay"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[4,2,2,4],
			                "data-scored" : ["Costa Rica has scored ","England has scored ","Italy has scored ","Uruguay has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-1,-4,-3,-4],
			                "data-positive" : [1,4,3,4],
			                "data-allowed" : ["Costa Rica has allowed ","England has allowed ","Italy has allowed ","Uruguay has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF");
		$(".group_button").css("border-radius", "10px");
		$("#group_d").css("background-color", "#FFFFFF");
		$("#group_d").css("color", "#326395");
	};
});

// Load Group E ===================================

$("#group_e").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group E",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Ecuador","France","Honduras","Switzerland"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[3,8,1,4],
			                "data-scored" : ["Ecuador has scored ","France has scored ","Honduras has scored ","Switzerland has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-3,-2,-5,-6],
			                "data-positive" : [3,2,5,6],
			                "data-allowed" : ["Ecuador has allowed ","France has allowed ","Honduras has allowed ","Switzerland has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_e").css("background-color", "#FFFFFF");
		$("#group_e").css("color", "#326395");
	};
});

// Load Group F Data ==============================

$("#group_f").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group F",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Argentina","Bosnia & Herzegovina","Iran","Nigeria"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[3,1,0,1],
			                "data-scored" : ["Argentina has scored ","Bosnia & Herzegovina has scored ","Iran has scored ","Nigeria has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-1,-3,-1,0],
			                "data-positive" : [1,3,1,0],
			                "data-allowed" : ["Argentina has allowed ","Bosnia & Herzegovina has allowed ","Iran has allowed ","Nigeria has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_f").css("background-color", "#FFFFFF");
		$("#group_f").css("color", "#326395");
	};
});

// Load Group G Data ====================================

$("#group_g").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group G",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Germany","Ghana","Portugal","USA"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[6,3,2,4],
			                "data-scored" : ["Germany has scored ","Ghana has scored ","Portugal has scored ","USA has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-2,-4,-6,-3],
			                "data-positive" : [-2,-4,-6,-3],
			                "data-allowed" : ["Germany has allowed ","Ghana has allowed ","Portugal has allowed ","USA has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_g").css("background-color", "#FFFFFF");
		$("#group_g").css("color", "#326395");
	};
});

// Load Group H Data =====================================

$("#group_h").bind('click', function() {
	if ($(this).attr("id") != globalCurrentLink) {
		globalCurrentLink = $(this).attr("id");
		zingchart.exec('myChartDiv', 'setdata', {
			"data" : {
				"graphset":[
	    		{
			        "type":"bar",
			        "stacked" : true,
			        "background-color":"#326395",
			        "title":{
			            "text":"Goals For/Goals Against | Group H",
			            "background-color":"#326395",
			            "fontFamily" : "Raleway",
			            "fontWeight" : "200",
			            "fontSize" : "16",
			            "color":"#FFFFFF"
			        },
			        "scaleX":{
			            "line-color":"none",
			            "line-width":0,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"#none",
			                "line-width":1,
			                "visible":0
			            },
			            "item":{
			                "color":"#FFFFFF",
			                "fontFamily" : "Raleway",
			            	"fontWeight" : "200",
			            },
			            "labels": ["Algeria","Belgium","South Korea","Russia"],
			        },
			        "scaleY":{
			            "line-color":"none",
			            "line-width":1,
			            "guide":{
			                "line-color":"none"
			            },
			            "tick":{
			                "line-color":"none",
			                "line-width":1
			            },
			            "item":{
			                "color":"#326395"
			            }
			        },
			        "plot":{
			            "tooltip":{
			                "shadow":0,
			                "border-radius":5,
			                "sticky":1,
			                "timeout":200
			            },
			            "animation" : {
			            	"effect" : "2",
			            	"delay" : 200,
			            	"speed" : 100,
			            },
			        },
			        "series":[
			            {
			                "values":[5,3,3,1],
			                "data-scored" : ["Algeria has scored ","Belgium has scored ","South Korea has scored ","Russia has scored "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 1",
			                		"text" : "%data-scored" + "%v" + " goal",
			                	},
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-scored" + "no goals",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-scored" + "%v" + " goals" 
			                },
			                "background-color":"#44CC44"
			            },
			            {
			                "values":[-4,-1,-5,-2],
			                "data-positive" : [4,1,5,2],
			                "data-allowed" : ["Algeria has allowed ","Belgium has allowed ","South Korea has allowed ","Russia has allowed "],
			                "tooltip" : {
			                	"rules" : [
			                	{
			                		"rule" : "%v == 0",
			                		"text" : "%data-allowed" + " no goals",
			                	},
			                	{
			                		"rule" : "%v == -1",
			                		"text" : "%data-allowed" + "1 goal",
			                	}
			                	],
			                	"fontFamily" : "Raleway",
			            		"fontWeight" : "200",
			            		"fontSize" : "14",
			            		"maxWidth" : "100px",
			            		"wrapText" : true,
			                	"text" : "%data-allowed" + "%data-positive" + " goals" 
			                },
			                "background-color":"#CC4444"
			            }
			        ]
			    }
			]
			}
		});
		$(".group_button").css("background-color", "#326395");
		$(".group_button").css("color", "#FFFFFF")
		$("#group_h").css("background-color", "#FFFFFF");
		$("#group_h").css("color", "#326395");
	};
});