---
layout: page
title: "Search"
category: interface
date: 2015-04-20 22:46:33
order: 3
tags:
- Interface
---


Use the search panel to find annotations in a single stack or map or all loaded stacks and maps.

Opening the search panel

 - From the main menu 'MapManager - Search'
 - From the time-point window 'Search' button

<IMG class="img-float-left" SRC="images/mm3/mm3-search-panel.png" WIDTH="900">

<div class="print-page-break"></div>


### Searching

Select the type of object to search with the 'Object Type' popup.

Select the scope of the search, either a stack or a map, and choose wether to 'include bad' annotations in the search.

Click any of the buttons down the left hand side of the panel to perform a search. The resulting annotations will be show as a list on the right.


#### Interacting with results

<IMG class="img-float-right" SRC="images/mm3/search/search-right-click.png" WIDTH="200">

Right-click an annotation in the search results to open the annotation in a [stack][3] or [run plot][4]. Selecting an annotation (left-click) will select that annotation in any open [stack][3] and [map][2] plots. Likewise, selecting an annotation in a [stack][3] or [map][2] plot will select the annotation in the search result list (if it is in the list).

Sort the search results by a value by clicking on its column header. Additional 'smart' sorting is provided with the sort buttons:

 - **Sort.** Sort by idx, map, segmentID, sess, pnt
 - **Sort Mod Time.** Sort by mSeconds, idx
 - **Sort Segments.** Sort by map, sess, segmentID, pDist, idx

Right-click the columns of the search results to choose the columns to display. This includes 'Date Time', 'Note', 'Errors and Warnings', 'Spine Info', and 'Canvas'.


### Editing searches

Right-click on an annotation in the results list to open a popup to either display or edit the annotation. Annotations can be tagged as good/bad or as a particular user type.

Individual annotations can also be set with the keyboard.

 - <kbd>g</kbd>: Set selected annotation to good.
 - <kbd>b</kbd>: Set selected annotation to bad.
 - <kbd>0 .. 9</kbd>: Set selected annotation to a specific user type.

### Types of searches

#### Annotations

  - **All.** Find all annotations of 'Object Type'.
  - **Bad.** Find annotations marked bad.
  - **Notes.** Find annotations with notes matching the search criteria. Use an asterix (\*) as a wildcard. Use \* to search all annotations with a note, use thistext\* to find annotation with notes starting with 'thistext' or ending with 'thistext' using \*thistext.
  - **Closeness.** Find annotations that are within specified distance (um) of each other. This is useful for finding overlapping/duplicate annotations.
  - **User Bool.**
  - **User Type.** Find annotations tagged with a user type 0, 1, 2, ...
  
#### Map Tab

  - **Addition.** Find annotations that are addition.
  - **Subtraction.** Find annotations that are subtraction.
  - **Persistent.** Find annotations that are persistent (not that usefull).
  - **Transient.** Find annotations that are transient. Transient annotations occur in only one time-point.
  - **Bad Runs.** Find annotations that have a mixture of good and bad within their respective run. This is used for debugging and will be removed.
  - **Re Added.** (Spine Annotations) Find added spines that have a previous subtraction (on a previous timepoint) that is within specified distance along the segment tracing.
  - **Jumping.** Advanced, not used.
  - **Changing User Type.** Find all annotations that are connected to other annotations with a different user type.

#### Spines Tab

  - **V Spines.** Find spines where the z-plane of the spine head is farther (in z) from the connected backbone/dendrite line. This is useful for finding spines that project out of the imaging plane. 
  - **Segment Ends.** Find spines within specified distance (um) of the end of their segment/backbone line. This is useful for finding problematic spines during [spine intensity analysis][5].

  - **Int Dirty.** Find spines with dirty intensity analysis. Spines with dirty intensity analysis can be analyzed in the main [map manager panel][6], intensity tab.
  - **Int User.** Find spines that have their intensity analysis parameters manually set. Individual spine annotation can have their intensity analysis parameters set in a stack window using the info panel (keyboard <kbd>i</kbd>).
  - **Int Bad.** Find spines marked as intensity bad. 
  - **ROI Bounds.** Find spines with background ROI within specified distance (um) from edges of image. This is useful if stack alignment has been run causing images to be shifted/rotated resulting in undefined regions on the edge of the image.
  - **Errors and Warning.** Find annotations with [Intensity Analysis][5] errors and warnings. To display the Errors and Warnings columns, right-click the column headers and select 'Errors and Warnings'. See [intensity analysis][5].


#### Manual Tab
  Find annotations matching a user specified criterion.
  
  Do this by selecting a statistic in the list, specify a value, and an operator (>, >=, <, <=, =, Not).
  
  For example, to find all spines/filapodia longer than 3 um, select 'Stat:sLen2d Type:IntCh1', enter a value 3, select '>' operator and press the 'Manual Search' button.

### Batch editing search results

All annotations in the search results can be set to a particular user type. Use the 'Results to user type' button in the lower right of the window.

[1]: stack-browser
[2]: map-plot
[3]: stack-plot
[4]: run-plot
[5]: intensity
[6]: time-series-panel

