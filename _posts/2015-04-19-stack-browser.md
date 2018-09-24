---
layout: page
title: "Stack Browser"
category: imagingcore
date: 2015-04-19 22:46:33
order: 1
tags:
- Imaging core
---

<IMG class="img-float-left" SRC="images/mm3/stack-browser.png" WIDTH="850">

<div class="print-page-break"></div>

 
The stack browser is the main starting point for using Map Manager. The stack browser provides an interface to load and browse folders of Tiff [stacks][3].

Open the stack browser from the main menu 'MapManager &rarr; Stack Browser'.

The list on the left is a list of loaded folders. Select a folder (on the left) and the list on the right will show the individual stacks within that folder. The stack list can be sorted by clicking on the column headers. The columns to display in the stack list can be set with a right-click on the column headers.

To display a [stack][3]:

 - Double-click a stack
 - Right-click the stack and select 'Display Stack'
 - Select the stack and use keyboard <kbd>d</kbd> for 'D'isplay.

### Loading stacks

#### Load Tiff Folder

Load a folder of single channel Tiff files from hard-drive. If these Tiff files have been converted with one of the [Map Manager Fiji plugins][10], the voxel size, date, and time should be correctly set.

#### ScanImage Import - Load ScanImage Folder

The **Load ScanImage Folder** loads a folder of ScanImage Tiff stacks.

<p class="important"><B>Important.</B> When importing ScanImage Tiff files, the scale is not set by ScanImage. You need to calculate your x/y voxel size (in um per voxel) when you scan at 1x magnification with 1024 by 1024 pixels. You then set this value in '2p um/pixel (1024@1x)'. Map Manager will use this value to calculate each stacks x/y scale for arbitrary ScanImage zoom settings.</p>

#### Canvas - Load Canvas

The **Load Canvas** load an entire canvas of an imaging session. The canvas includes both video snap-shots and the location of two-photon imaging stacks. Please see the <A HREF="http://blog.cudmore.io/canvas">canvas</A> documentation for more information.

#### Drag and drop

A simple way to load a single stack is to drag and drop a Tiff file onto the Igor program icon. Stacks opened with drag-and-drop will appear in a special folder named 'DragAndDrop'.

### Displaying stacks

Select a folder on the left and the stacks in that folder will be shown on the right. The order of stacks can be sorted by selecting columns in the stack list. To sort by date, select 'Date' in the columns header. <b>This ordering is critical when batch importing a list of stacks into a Map Manager [time-series][time-series]</B>.

#### Display a [stack][3]:

 - Double-click a stack
 - Right-click the stack and select 'Display Stack'
 - Select the stack and use keyboard <kbd>d</kbd> for 'D'isplay.

#### Unload a [stack][3]:

Once a stack is opened and displayed in a [stack][stack] window, it will remain loaded until it is explicity unloaded with keyboard <kbd>u</kbd> or right-click 'Unload Stack'. 


### Right-click a folder for a context menu

Right-click a folder in the list on the left for a context menu that allows actions to be performed on all stacks in the folder.

<IMG class="img-float-right" SRC="images/mm3/stack-browser/stack-browser-right-click-folder.png" WIDTH="200">

 - **Unload Folder**. Unload the folder and all its stacks.

 - **Save Annotations (all stacks)**. Save the annotations for all 'dirty' stacks in a folder. Dirty stacks are stacks that have been changed or modified since they were loaded. Dirty stacks are noted in the stack list with a <font color="red"><strong>red</strong></font> background in the 'D' column.

 - **Stack Report (all stacks)**. Generate a stack [report][reports] for all stacks.

 - **Segment Report (all stacks)**. Generate a segment [report][reports] for all stacks.

 - **Annotation Table (all stacks)**. Generate a table with all annotations for all stacks. This can be copied and pasted into other programs for analysis.

 - **Unload all stacks**. Unload the raw image data for all stacks in the list.
 
 - **View Stack List**. Display the list of stacks as a table. This is useful to copy/paste to another program for analysis.
 
 - **Show Folder On Disk**. Open the hard-drive folder the folder was originally loaded from. This opens a Finder window on OSX and an Explorer window on Microsoft Windows.

 - **Refresh List**. To refresh the list of folders and the selected folder's list of stacks. This is generally not needed but can be useful to ensure stacks that have had their annotations edited (e.g. 'dirty' stacks) are show in red in their 'D' column.

<div class="print-page-break"></div>



### Right-click a stack for a context menu

<IMG class="img-float-right" SRC="images/mm3/stack-browser/sb-right-click-stack.png" WIDTH="200">

Right-click a stack to open a context menu. These menu items can also be performed using the indicated keyboard shortcuts.

 - **Display Stack**. Open a [stack][stack] window. Same as double-click.

 - **Save Annotations**. Save stack annotations.
 
 - **Unload Stack**. Unload the raw data for a stack. <font color="red"><strong>Important</strong></font>, this unloads the raw data to conserve memory, it **DOES NOT** unload the stack annotations.

 - **Edit Stack Condition**. Edit the stack condition for the selected stack. The stack condition can also be edited with keyboard <kbd>c</kbd>. Stack conditions can be displayed in the stack list by right-clicking on the column headers and selecting 'Condition'.
 
 - **Stack Info**. Open a stack info panel to view acquisition parameters for a stack. Use keyboard <kbd>shift</kbd>+<kbd>i</kbd> (that is 'i' as in Info) to views all acquisition parameters for a stack. Most acquisition parameters are read from the meta-data of the original stack. 

 - **Stack Report**.

 - **Segment Report**. Generate a segment report for all segments in a stack. See [reports][reports].

 - **Annotation Table**. Open a text table with all annotations in the stack. This can be copied and pasted into other programs for analysis.

 - **Experimental - Segment Length Plot**. Make both 2D and 3D plots of segment length as a function of the Z-Smoothing parameter.

<div class="print-page-break"></div>


### Right-click headers in the stack list for a context menu

<IMG class="img-float-right" SRC="images/mm3/stack-browser/sb-right-click-header.png" WIDTH="145">

This menu will toggle the columns that are displayed in the stack list. These setting are saved with the main Map Manager Options using the main menu 'MapManager - Save Options...'.

<div class="print-page-break"></div>

### What is next?

Once a folder of tif stacks is loaded

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
[stack]: stack
[options]: stackdb-options-panel
[time-series]: time-series-panel
