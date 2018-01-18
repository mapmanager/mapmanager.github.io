---
layout: page
title: "Time Series"
category: interface
date: 2015-04-20 22:46:33
order: 2
tags:
- Interface
---


The Map Manager time-series panel provides an interface to load, save and browse Map Manager time-series (maps). Open the time-series panel using the menu 'MapManager - Time Series'

Loaded maps are listed on the left and when a map is selected, its time-points (stacks) are listed on the right.

<IMG class="img-float-center" SRC="images/mm3/time-series/ts-big.png" WIDTH="700">

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-small.png" WIDTH="225">

 - **Open Map**. Open/Load a map from the hard-drive.
 - **Save Map**. Save selected map to hard-drive. By default, only the portions of the map that need saving are saved. Ctrl+click will save the entire map.

<p class="important"><B>Opening Maps.</B> When opening a map, select the maps '.ipf' file. If a map is named 'mymap', load 'mymap.ipf'.
</p>

#### Plot
 - **Object Map**. Open a [map plot][12]. For spines, this will plot the position of each spine along its dendritic segment versus time-points (Sessions). For other annotations, this will plot annotations in their creation order. In both cases, these plots are crucial tools to visualize annotation dynamics.
 - **Segment Map**. Open a [map plot][12] showing the segments within each session and the connectivity of segments across sessions. This is only for spine annotations that have segment tracings.
 - **X Axis**. Choose different X-Axis for Object and Segment map plots. Available X-Axis are:
    - Sessions 
    - Datetime
    - Days
    - Hours
    - Zero Sessions
    - Zero Days
    - Zero Hours
 - **X-Axis Condition**.
    
Datetime, Days and Hours require stacks to have a date/time specified. A stacks date/time can be manually edited by turning on 'Edit Date/Time' in the Utility Tab. The X-Axis options 'Zero Sessions', 'Zero Days', 'Zeros Hours' use a session in the map as a zero timepoint. Specify this by right-clicking on a stack and selecting 'Zero Session'. The zero session for a map will have a '*' in its session list. Zero session is also used when plotting from time-series panel tabs including: Dynamics, Trajectory, and Intensity.
    
#### Panels

 - **Search**. Open the [search panel][5].
 - **Plot**. Open the [plot panel][6].
 - **Pool**. Open the [map pool panel][16].
 - **Map DB**. Open a map database panel to quickly browse and load maps from hard-drive. **No documentation yet**.


#### Miscellaneous

 - **Unload Stacks**. Unload all stacks in the selected map. Ctrl+click to unload all stacks in all open maps. Unloading a stack will unload the RAW IMAGE DATA. It DOES NOT unload the stack annotations or the map.
 - **Close Windows**. Close all windows associated with the selected map.

### Right-click for context menus

<IMG class="img-float-right" SRC="images/mm3/time-series/time-series-right-click-map.png" WIDTH="140">

#### Right-click on a map name.

 - **Find Points**. Open [find points panel][15].
 - **Density Report**. Generate a density report for the map. See [reports][17].
 - **Dynamics Report**. Generate a dynamics report for the map. See [reports][17].
 - **Survival Report**. Generate a survival report for the map. See [reports][17].
 - **Export Map**. <span style="color:red">DO NOT USE</span> Exports a map to text files. Files are saved in the 'export/' folder.
 - **Show on HDD**. Shows the hard-drive folder where the map is saved.
 - **Close map**. Close a map, removing all associated images and analysis from Igor memory.
 - **Close Windows**. Close all open windows associated with a map.

<div class="print-page-break"></div>

<IMG class="img-float-right" SRC="images/mm3/time-series/time-series-right-click-stack.png" WIDTH="160">

#### Right-click on a stack name.

 - **Display Stack**. Display the stack in a [stack][2] window.
 - **Plot Run +-1**. Plot a [run][11] of stacks from the selected stack.
 - **Plot Run +- All**.
 - **Plot Run +- n**.
 - **Zero Session**. Set the selected stack to the zero session. Zero sessions are used when plotting a map with X-Axis set to 'Zero Session', 'Zero Days', and 'Zero Hours'. The zero session will have an Asterix (\*) before its session index in the list of sessions.
 - **Find Points**. Open [find points panel][15].
 - **Edit Table**. Edit annotations in a stack as a text table. This is useful to copy and paste annotations for further analysis.
 - **Unload Stack**. Unload the raw image data for a stack. Unloading a stack does not unload the stack annotations.

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-right-click-header.png" WIDTH="140">

#### Right-click on the headers in the stack list.

 - Columns can be toggled on and off.
 - **Edit Condition**. Turns on editing of map and session conditions.

<div class="print-page-break"></div>

### Tabs

#### Map Making

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-mapmaking.png" WIDTH="475">

Interface to create maps and manage time-points. See [making a map][13].

<div class="print-page-break"></div>


#### Dynamics

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-dynamics.png" WIDTH="475">

Interface to plot the dynamics of annotations. See [reports][17] to create tabular reports of annotation dynamics.

<div class="print-page-break"></div>

#### Trajectory

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-trajectory.png" WIDTH="475">

Interface to analyze and plot the trajectories of annotations.

<div class="print-page-break"></div>

#### Intensity

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-intensity.png" WIDTH="475">

Interface to plot intensity analysis of spine annotations. See [intensity][18].

Right-click on plot buttons to plot 'lifetime' and 'death'.

<div class="print-page-break"></div>

#### Report

See [reports][17].

<div class="print-page-break"></div>

#### Utility

<IMG class="img-float-right" SRC="images/mm3/time-series/ts-utility.png" WIDTH="475">

Interface for advanced and internal debugging. In general there is no need to use this.

<div class="print-page-break"></div>


[1]: stack-browser
[2]: stack
[3]: user-files
[4]: annotating-a-stack
[5]: search-panel
[6]: plot-panel
[7]: stackdb-options-panel
[8]: contrast-panel
[9]: stack-browser
[10]: hdd-paths
[11]: run-plot
[12]: map-plot
[13]: making-a-map
[14]: scale-panel
[15]: find-points-panel
[16]: map-pool
[17]: reports
[18]: intensity

<div class="print-page-break"></div>
