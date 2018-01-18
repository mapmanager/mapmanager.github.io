---
layout: page
title: "Stack Browser"
category: interface
date: 2015-04-19 22:46:33
order: 1
tags:
- Imaging core
---

<IMG class="img-float-left" SRC="images/mm3/stack-browser.png" WIDTH="800">

<div class="print-page-break"></div>

 
The stack browser is the main starting point for using Map Manager. The stack browser provides an interface to load and browse folders of .tif [stacks][3].

The list on the left is a list of loaded folders. Select a folder (on the left) and the list on the right will show the individual stacks within that folder. Double click a stack to open a [stack][3] window.

### Loading stacks

#### Load Tiff Folder

Load a folder of single channel .tif files from hard-drive. If these .tif files have been converted with one of the [Map Manager Fiji plugins][10], the voxel size, date, and time should be correctly set.

#### ScanImage Import

The **Load ScanImage Folder** loads a folder of ScanImage .tif stacks.

<p class="important"><B>Important.</B> When importing ScanImage .tif files, the scale is not set by ScanImage. You need to calculate your x/y voxel size (in um per voxel) when you scan at 1x magnification with 1024 by 1024 pixels. You then set this value in '2p um/pixel (1024@1x)'. Map Manager will use this value to calculate each stacks x/y scale for arbitrary ScanImage zoom settings.</p>


#### Drag and drop

A simplest way to load a single stack is to drag and drop a .tif file onto the Igor program icon. Stacks opened in this way will appear in a special folder (in the list on the left) called 'DragAndDrop'.

<p class="tip"><B>Tip.</B> The order of stacks can be sorted by selecting columns in the stack list. To sort by date, select 'Date' in the columns header. <b>This ordering is critical when batch importing a list of stacks into a Map Manager map</B></p>. 

### Browsing loaded data

 - Select a loaded folder (on the left) and the stacks in that folder will be shown (on the right).
 - Double click a stack to open a [stack][3] window.



<IMG class="img-float-right" SRC="images/mm3/stack-browser/stack-browser-right-click-folder.png" WIDTH="200">

### Right-click a folder for a context menu


 - **Unload Folder**. Unload the folder and all its stacks.

 - **Stack Report (all stacks)**.

 - **Segment Report (all stacks)**. Generate a segment [report][reports] for all stacks.

 - **View Database (all stacks)**. Generate a table with all analysis. This can be copied and pasted into other programs for analysis.

 - **Intensity Analysis (all stacks)**. Analyze the intensity of all stacks in the folder. It is critical that each spine in the analysis is checked manually. Please see [Intensity Analysis][intensity].

 - **Save all stacks**. Will save the annotations for all 'dirty' stacks in a folder. Dirty stacks are stacks that have been changed or modified since they were loaded. Dirty stacks are noted in the stack list with a <font color="red"><strong>red</strong></font> background in the 'D' column.

 - **Unload all stacks**. Unload the raw image data for all stacks in the list.
 
 - **Show Folder On Disk**. Open the hard-drive folder the folder was originally loaded from. This opens a Finder window on OSX and an Explorer window on Microsoft Windows.

 - **Refresh List**. To refresh the list of folders and the selected folder's list of stacks. This is generally not needed.

<div class="print-page-break"></div>


<IMG class="img-float-right" SRC="images/mm3/stack-browser/sb-right-click-stack.png" WIDTH="160">

### Right-click a stack for a context menu

Right-click a stack to open a contextual menu. These menu items can also be triggered using the indicated keyboard shortcuts.

 - **Display Stack**. Open a [stack][stack] window. Same as double-click.

 - **Unload Stack**. Unload the raw data for a stack. <font color="red"><strong>Important</strong></font>, this unloads the raw data to conserve memory, it **DOES NOT** unload the stack annotations.

 - **Unload Stack DB**.

 - **Stack Info**.

 - **Stack Report**.

 - **Segment Report**. Generate a segment report for all segments in a stack. See [reports][reports].

 - **View Database**. Open a text table with all annotations in the stack. This can be copied and pasted into other programs for analysis.

 - **Experimental - Segment Length Plot**. Make both 2D and 3D plots of segment length as a function of the Z-Smoothing parameter.

<div class="print-page-break"></div>


<IMG class="img-float-right" SRC="images/mm3/stack-browser/sb-right-click-header.png" WIDTH="160">

### Right-click headers in the stack list for a context menu

This menu will toggle the columns that are displayed in the stack list. These setting are saved with the main Map MAnager Options.

<div class="print-page-break"></div>

### What is next?

Once a folder of .tif stacks is loaded

 - Start scoring single timepoint stacks following [annotating a stack][8]
 - Put the stacks into a time-series map following [making a map][9]


[1]: stack-browser
[2]: http://www.robertcudmore.org/maptracker/v2/stack-browser/
[3]: stack
[4]: map-plot
[5]: https://github.com/cudmore/bob-fiji-plugins
[6]: spine-dynamics
[reports]: reports
[8]: annotating-a-stack
[9]: making-a-map
[10]: fiji-plugins
