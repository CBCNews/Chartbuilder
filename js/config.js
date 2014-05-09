
var colourPalette = [
						'125278', 'A0D2F0', '1E91B4', '646464', 'C3C3C3', 'E1191E',
						'417593', 'B3DBF3', '4BA7C3', '838383', 'CFCFCF', 'E7474B',
						'7197AE', 'C6E4F6', '78BDD2', 'A2A2A2', 'DBDBDB', 'ED7578',
						'A0BAC9', 'D9EDF9', 'A5D3E1', 'C1C1C1', 'E7E7E7', 'F3A3A5',
						'D0DCE4', 'ECF6FC', 'D2E9F0', 'E0E0E0', 'F3F3F3', 'F9D1D2'
					];
var creditLine = 'CBC News | Made with Chartbuilder';


var defaultChartConfig = {
	container: "#chartContainer",   // css id of target chart container
	editable: false,                // reserved for enabling or dissabling on chart editing
	lineDotsThreshold: 10,          // line charts will have dots on points until a series has this number of points
	bargridLabelMargin: 10,         // the horizontal space between a bargrid bar and it's label
	bargridBarThickness: 20,        // thickness of the bars in a bargrid
	xAxisMargin: 10,                // the vertical space between the plot area and the x axis
	footerMargin: 10,               // the vertical space between the bottom of the bounding box and the meta information
	legendLabelSpacingX: 5,         // the horizontal space between legend items
	legendLabelSpacingY: 40,        // the vertical space between legend items
	columnGap: 2,                   // the horizontal space between two columns that have the same x-axis value
	axisBarGap: 0,                  // the horizontal space between a vertical axis and an adjacent bar
	maxColumnWidth: 20,             // the maximum width of a column as a percent of the available chart width
	primaryAxisPosition: "right",   // the first axis will be rendered on this side, "right" or "left" only
	legend: true,                   // whether or not there should be a legend
	title: "Travellers to Canada by country of origin (2012, Thousands)",  	// the chart title
	titleBottomMargin: 10,          // the vertical space between the title and the next element (sometimes a legend, sometimes an axis)
	bargridLabelBottomMargin: 5,    // the space between the bargrid series label and the top most bar
	colors: [
		'#125278', '#A0D2F0', '#1E91B4', '#646464', '#C3C3C3', '#E1191E',
		'#417593', '#B3DBF3', '#4BA7C3', '#838383', '#CFCFCF', '#E7474B',
		'#7197AE', '#C6E4F6', '#78BDD2', '#A2A2A2', '#DBDBDB', '#ED7578',
		'#A0BAC9', '#D9EDF9', '#A5D3E1', '#C1C1C1', '#E7E7E7', '#F3A3A5',
		'#D0DCE4', '#ECF6FC', '#D2E9F0', '#E0E0E0', '#F3F3F3', '#F9D1D2'
	],
	padding :{
		top: 5,
		bottom: 70,
		left: 20,
		right: 70
	},
	xAxis: {
		domain: [0,100],
		prefix: "",
		suffix: "",
		type: "ordinal",
		formatter: null,
		mixed: true,
		ticks: 5
	},
	yAxis: [
		{
			domain: [0,25],
			tickValues: null,
			prefix: {
				value: "",
				use: "top" //can be "top" "all" "positive" or "negative"
			},
			suffix: {
				value: "",
				use: "top"
			},
			ticks: 4,
			formatter: null,
			color: null
		}
	],
	series: [
        {
            name: "Nights",
            data: [ 50849, 8324, 7026, 4802, 8137 ],
            source: "Some Org",
            type: "line",
            axis: 0,
            color: '#125278'
        },
		{
			name: "Trips",
			data: [ 11887, 597, 423, 277, 273 ],
			source: "Some Org",
			type: "line",
			axis: 0,
			color: '#A0D2F0'
		}
	],
	xAxisRef: [
		{
			name: "names",
			data: [ "United States", "U.K.", "France ", "Germany", "Mainland China "  ]
		}
	],
	sourceline: " Source: Statistics Canada ",
	creditline: "CBC News | Made with Chartbuilder"
};


