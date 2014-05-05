var colourPalette = [
						'125278', '417593', '7197AE', 'A0BAC9', 'D0DCE4',
						'1E91B4', '4BA7C3', '78BDD2', 'A5D3E1', 'D2E9F0',
						'A0D2F0', 'B3DBF3', 'C6E4F6', 'D9EDF9', 'ECF6FC',
						'E1191E', 'E7474B', 'ED7578', 'F3A3A5', 'F9D1D2',
						'646464', '838383', 'A2A2A2', 'C1C1C1', 'E0E0E0',
						'C3C3C3', 'CFCFCF', 'DBDBDB', 'E7E7E7', 'F3F3F3'
					];
var creditLine = 'CBC News | Made with Chartbuilder';



var defaultChartConfig = {
    container: "#chartContainer", //css id of target chart container
    editable: true, // reserved for enabling or dissabling on chart editing
    lineDotsThreshold: 15, //line charts will have dots on points until a series has this number of points
    bargridLabelMargin: 4, //the horizontal space between a bargrid bar and it's label
    bargridBarThickness: 20, //thickness of the bars in a bargrid
    xAxisMargin: 8, //the vertical space between the plot area and the x axis
    footerMargin: 4, //the vertical space between the bottom of the bounding box and the meta information
    legendLabelSpacingX: 10, //the horizontal space between legend items
    legendLabelSpacingY: 20, //the vertical space between legend items
    columnGap: 1, //the horizontal space between two columns that have the same x-axis value
    axisBarGap: 8, //the horizontal space between a vertical axis and an adjacent bar
    maxColumnWidth: 8, // the maximum width of a column as a percent of the available chart width primaryAxisPosition: "right", // the first axis will be rendered on this side, "right" or "left" only
    primaryAxisPosition: "right", // the first axis will be rendered on this side, "right" or "left" only
    legend: true, // whether or not there should be a legend
    title: "Unemployment rate by gender (1976-2012)", // the chart title
    titleBottomMargin: 15, // the vertical space between the title and the next element (sometimes a legend, sometimes an axis)
    bargridLabelBottomMargin: 5, //the space between the bargrid series label and the top most bar
    padding :{
        top: 10,
        bottom: 60,
        left: 10,
        right: 10
    },
    xAxis: {
            domain: [null,null],
            prefix: "",
            suffix: "",
            type: "date",
            formatter: 'yyyy',
            mixed: true,
            ticks: null
    },
    yAxis: [
        {
            domain: [null,null],
            tickValues: null,
            prefix: {
                value: "",
                use: "top" //can be "top" "all" "positive" or "negative"
            },
            suffix: {
                value: "",
                use: "top"
            },
            ticks: 5,
            formatter: null,
            color: null
        }
    ],
    series: [
        {
            name: "Women",
            data: [8.2, 9.2, 9.5, 8.7, 8.3, 8.3, 10.7, 11.6, 11.3, 10.6, 9.8, 9.2, 8.2, 7.8, 8.1, 9.7, 10.2, 10.7, 9.8, 9.1, 9.3, 8.9, 8, 7.3, 6.7, 6.9, 7.1, 7.2, 6.9, 6.5, 6.1, 5.6, 5.7, 7, 7.2, 7, 6.8, ],
            source: "Some Org",
            type: "line",
            axis: 0,
            color: "#125278"
        },
        {
            name: "Men",
            data: [6.4, 7.4, 7.6, 6.8, 7, 7.2, 11.2, 12.3, 11.4, 10.5, 9.5, 8.5, 7.4, 7.4, 8.2, 10.8, 12, 11.9, 10.9, 9.8, 9.9, 9.3, 8.5, 7.8, 6.9, 7.5, 8.1, 7.9, 7.5, 7, 6.5, 6.4, 6.6, 9.4, 8.7, 7.8, 7.7 ],
            source: "Some Org",
            type: "line",
            axis: 0,
            color: "#C1C1C1"
        }
    ],
    xAxisRef: [
        {
            name: "Date",
            data: [1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012 ]
        }
    ],
    sourceline: "Parliament of Canada (http://parl.gc.ca)",
    creditline: "CBC News | Made with Chartbuilder"
};

