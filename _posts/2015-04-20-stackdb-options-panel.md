---
layout: page
title: "Options"
category: interface
date: 2015-04-20 22:46:33
order: 7
tags:
- Interface
---

<style>
table{
    border-collapse: collapse;
    border:1px solid #000000;
    margin-left:50px
}

th{
    border:1px solid #000000;
    padding: 5px;
}

td{
    border:1px solid #000000;
    padding: 5px;
}
</style>

The Map Manager Options panel provides global options to control the behavior of Map Manager. Options can be saved using the **Save Options** button. Values shown in <font color="red"><strong>red</strong></font> will effect analysis and those in <font color="black"><strong>black</strong></font> effect program behavior..

The options panel is opened from the main menu 'MapManager - Options'.

<IMG class="img-float-left" SRC="images/mm3/options/options.png" WIDTH="800">
<div class="print-page-break"></div>


### General

<IMG class="img-float-right" SRC="images/mm3/options/options-general.png" WIDTH="350">

 - **Stack Browser On Open**. Open the [stack browser][6] when Map Manager is opened.
 - **Time Series On Open**. Open the [time-series panel][5] when Map Manager is opened.
 - **Hide Code**. Hide code windows when Map Manager is opened.

### Stack Display

<IMG class="img-float-right" SRC="images/mm3/options/options-stack-display.png" WIDTH="350">

Options that control the display of [stack][1] windows. Changes will be applied the next time a stack window is opened. Already opened stack windows can be updated on-the-fly by pressing keyboard 'r' (in the stack window).

 - **Points**. Toggle stack db objects.

 - **Spine Line**. Toggle the line connecting the spine head to the segment radius.

 - **Point mask**. Turn point masking on/off. If off, annotations will be shown in all image planes. If on, annotations will only be shown near the image plane corresponding to each annotations Z position. See **Mask Points**.
 
 - **Segment Color For All Points**. Display all points using the segment color specified in the [stack][1] window.

 - **User Type**.
 
 - **Line and Radii**. Toggle the segment tracing and radius lines
 
 - **Line Mask**. Similar to **Point mask**, toggle masking the line to only display around the image plane it is in.

 - **Channel Order**.
 
 - **Tag Font Size**. In a stack window, the tags are the stack db point number. In a map, the tags are the **run** number of the point.

 - **Scale Bar**. Displayed in the bottom right of all stack windows. Cycle through stack window candy options with keyboard shift+c.

 - **Left/Right Arrows Will Scroll Through Line (Otherwise Pan)**.
 
 - **Mask Points**. If **Point Mask** is on, this controls the number of image planes an annotation is visible above and below its Z position..
 
 - **Flash Ticks**. A number that controls the speed that a point is flashed when selected. Smaller numbers are faster. Point flashing is used to make it easier to see where there is a point selection. See 'flashSel' to control the size and shape of the point that is flashed.
 
 - **Window With 1/2**. Default stack window size. Each stack window has two sizes that can be cycled using keyboard ']'.
 
 - **Default Zoom**. Default zoom (in um) to zoom points in a stack and run plot. This is used when an annotation is right-clicked and 'plot point' or 'plot run' is selected.
 
<IMG class="img-float-right" SRC="images/mm3/options/options-stack-candy.png" WIDTH="150">

 - **Default Stack Candy**. Default window candy for each stack. There are 5 options.
     - **All**.
     - **None**.
     - **Scale**.
     - **Scale + Label**.
     - **Scale + Label + Axis**.
 
 - **Kill Stack (from memory) on window close**.
 
 - **Click and Drag**.
 
 - **Keyboard edits 'User Type'**.
 

### Stack DB

<IMG class="img-float-right" SRC="images/mm3/options/options-stackdb.png" WIDTH="350">

 - **Warn On New Objects**.
 - **Warn On Delete Objects**.
 - **New Objects On Mouse Click (no shift)**.
 - **Allow New Objects When Viewing Sliding Z-Projection**.
 - **Search line points when connecting spine/bouton**.
 - **New Object (Shift+Click)**. The default object to make on shift+click.
 - **Default plot object**.

### Object Map

<IMG class="img-float-right" SRC="images/mm3/options/options-object-map.png" WIDTH="350">

 - **Connect points within this distance (um)**. When auto connecting points in a map and generating a Guess in Find points.

 - **Connect spines within this distance (um)**. When auto connecting spines in a map and generating a Guess in Find points. This is the distance from the segment pivot points along a dendritic segment (um). You can see this distance (pDist) in the Point Info panel of a [stack][1].

 - **Run Window Width (pixels)**. The size of each window in a spine run.
 - **Show timepoint in stack window**.
 - **Always show stack DB indices (tags)**. xxx
 - **Fixed posiiton for each run window**. xxx
 - **Lock segment selection in run plot**. xxx
 - **Shift + left/right to go to prev/next timepoint**. xxx
 - **Auto plot object map on load**. xxx
 - **Check map before save**. xxx
 - **Allow Jumping Objects**.



<!-- <IMG class="img-float-left" SRC="images/mm3/mm3-options-bottom.png" WIDTH="300"> -->

### Intensity Analysis

<IMG class="img-float-right" SRC="images/mm3/options/options-intensity-analysis.png" WIDTH="350">

See the [intensity analysis][4] page for a thouough decription.

 - **Intensity Analysis**. Turn intensity analysis on/off. When on, spine selections will show intensity ROIs in the [stack][1] window.
 - **Debug**.
 - **Debug On Error**.
 - **Width (um)**.
 - **+/- Slices**.
 - **Extend Head (um)**.
 - **Extend Tail (um)**.
 - **+/- Segment (um)**.
 - **Background Candidates**
     - **Both Sides**.
     - **Rows and Row Mult**.
     - **Columns and Column Mult**.
  

### Importing Segments From FIJI

<IMG class="img-float-right" SRC="images/mm3/options/options-fiji-import.png" WIDTH="350">

 - **Default Segment Radius (um)**.

 - **Box Filter Line (points)**.

 - **Box Filter Radius (points)**.

 - **Convert To 8-bit**. Will convert to 8-bit (in Fiji). This makes line fit much faster.

 - **Close Fiji When Done**. Always leave this on. This has been depreciated and will be remove.

### Miscellaneous

<IMG class="img-float-right" SRC="images/mm3/options/options-misc.png" WIDTH="250">

A table to set how annotations are displayed. Right-click on 'marker' or 'color' to set. Double-click on 'size' to set. Note, 'size' is in arbitrary Igor Pro centric units.

|Idx      |Name		|Meaning
| :-------------- | :------------- | :-------------
|0	|spineROI		| Spine marker in stack and map plot
|1	|boutonROI		| 
|2	|controlPnt		| 	
|3	|pivotPnt		| 
|4	|lineROI		| 
|5	|otherROI		| 
|6	|pntSel			| Point selection marker
|7	|runSel			| Run selection marker
|8	|maskSel		| Mask selection marker
|9	|flashSel		| Marker used to flash point selections (makes them easier to visually locate)
|10	|globalPivot	| 
|11	|lineSel		| 
|12	|line			| Segment tracing line
|13	|radius			| Segment tracing radius
|14	|sROI			| Spine intensity ROI
|15	|dROI			| Dendrite/segment intensity ROI
|16	|sbROI			| Spine background ROI
|17	|dbROI			| Dendrite/segment background ROI
|18	|Bad			| Bad annotations
|19	|Add			| Added
|20	|Subtract		| Subtracted
|21	|Persistent		| Persistent
|22	|Transient		| Transient
|28	|User Type 0..9		| Markers for user type 0..9
 

### Load Stacks From Special Folder

<IMG class="img-float-right" SRC="images/mm3/options/options-special-folder.png" WIDTH="250">

Each of the check boxes will redirect the loading of image stacks to different folders. In particular, the **channels8** option will load 8-bit versions which is useful to speed annotations of larger 16-bit images. See Fiji plugin bConvertTo8Bit_v5_.py to convert entire directories of tiff stacks to 8-bit.

<div class="print-page-break"></div>

### Stack Browser Options

<IMG class="img-float-right" SRC="images/mm3/mm3-stack-browser-options.png" WIDTH="350">

Additional option are available in the Stack Browser Options panel.

Open the Stack Browser Options panel using the 'Options' button in the [stack browser][6].


<div class="print-page-break"></div>

[1]: stack
[2]: annotating-a-stack
[3]: user-files
[4]: intensity
[5]: time-series-panel
[6]: stack-browser
