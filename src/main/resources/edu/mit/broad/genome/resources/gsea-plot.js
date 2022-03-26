// Copyright (c) 2022 Broad Institute, Inc., Massachusetts Institute of Technology, and Regents of the University of California.  All rights reserved.

function mountain_plot(geneSetName, geneLabels, geneScores, hitIndices, hitLabels, 
	runningES, geneSetScore, featureCount) {
	var geneIndices = new Array(geneLabels.length);
	for (const key of geneIndices.keys()) { geneIndices[key] = key + 1; }
	var hitMarkers = new Array(hitLabels.length);
	hitMarkers.fill(0.0);
	Plotly.newPlot(geneSetName + "_mtn",
		[{ "hoverinfo": "x+y+text", "name": "Score", "line": { "color": "20d9ba", "width": 0 },
		   "mode": "lines", "x": geneIndices, "text": geneLabels, "type": "scatter", "fill": "tozeroy", "y": geneScores }, 
		 { "name": "Set", "marker": { "line_width": 2.0, "symbol": "line-ns-open", "color": "9017e6", "size": 24.576000000000004 }, 
		   "mode": "markers", "x": hitIndices, "yaxis": "y2", "text": hitLabels, "type": "scatter", "hoverinfo": "x+text", "y": hitMarkers }, 
		 { "hoverinfo": "x+y+text", "name": "Enrichment", "line": { "color": "008000", "width": 2.0 }, "mode": "lines", 
		   "x": geneIndices, "yaxis": "y3", "text": geneLabels, "type": "scatter", "y": runningES },], 
	    { "height": 480, "hovermode": "closest", "xaxis": { "zeroline": false, "spikethickness": 0.8, "spikedash": "solid", 
	      "showspikes": true, "spikemode": "across" }, "annotations": [{ "y": 1.16, "yanchor": "middle", "font_size": 24, 
	      "x": 0.5, "xref": "paper", "yref": "paper", "showarrow": false, "text": "<b>" + geneSetName.toUpperCase() + "</b>", 
	      "xanchor": "center" }, { "y": 1.04, "yanchor": "middle", "x": 0.5, "xref": "paper", "yref": "paper", 
	      "font": { "color": "2a603b", "size": 15.36 }, "showarrow": false, "text": '<b>Score = ' + geneSetScore + '</b>', "xanchor": "center" }, 
	      { "y": 0.12, "yanchor": "middle", "font_size": 12, "x": -0.064, "xref": "paper", "yref": "paper", "showarrow": false, 
	        "text": "<b>Score</b>", "xanchor": "right" }, 
	        { "y": 0.28, "yanchor": "middle", "font_size": 12, "x": -0.064, "xref": "paper", "yref": "paper", "showarrow": false, "text": "<b>Set</b>", "xanchor": "right" }, 
	        { "y": 0.66, "yanchor": "middle", "font_size": 12, "x": -0.064, "xref": "paper", "yref": "paper", "showarrow": false, "text": "<b>Enrichment</b>", "xanchor": "right" }, 
	        { "y": -0.088, "yanchor": "middle", "x": 0.5, "xref": "paper", "yref": "paper", "showarrow": false, "text": '<b>Feature Rank (n=' + featureCount + ')</b>', 
	        "xanchor": "center" }], "yaxis3": 
	        { "showline": true, "domain": [0.32, 1.0] }, "width": 776.6563145999496, "margin": { "t": 76.0, "l": 124.0 }, 
	          "yaxis1": { "showline": true, "domain": [0.0, 0.24] }, "yaxis2": { "showticklabels": false, "domain": [0.24, 0.32], "showgrid": false }, 
	          "legend": { "y": -0.2, "yanchor": "middle", "x": 0.5, "orientation": "h", "xanchor": "center" } }, 
	          { "displaylogo": false, "modebarbuttonstoremove": ["select", "lasso", "resetscale"], "responsive": true });
}
