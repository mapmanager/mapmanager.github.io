---
layout: page
title: "Annotating a stack"
category: workflow
date: 2015-02-21 22:46:33
order: 2
tags:
- Imaging core
- Workflow
- Getting Started
---

This is a workflow for annotating 3D annotations in a **single time-point stack**. To annotate a **time-series of stacks**, please see [making a map][3].

<p class="important">
Please use Igor Pro Version 6/7. Do not use Igor Pro version 8. Fully functional demo versions of Igor Pro 6/7 can be downloaded from <A HREF="https://www.wavemetrics.com/">Wavemetrics</A>
</p>


#### 1. Run Map Manager

- Run Map Manager in Igor Pro by double-clicking on the provided MapManager .ipf file. This is normally a file that looks like 'MapManager_yyyymmdd.ipf' where yyyymmdd specifies the release date of your particular Map Manager version.
- In Igor Pro, activate the Map Manager menus by compiling the source code. Either click on the command window (it has the title 'untitled'), or click the compile button in the map manager source code window, or just wait.


#### 2. Load a folder of Tiff stacks into the stack browser

A folder of single color channel Tiff stacks can be opened directly into the Map Manager - Stack Browser. If you have multiple color channel stacks or stacks acquired using propietary software such as **Zeiss Zen**, **Vidreo Scan Image**, **Bruker Prairie View**, **Nikon**, or **Olympus** (coming soon) then please see the [Fiji Plugins](fiji-plugins) page to convert these formats into Map Manager .tif files before import.

- Open the Map Manager [Stack Browser][2] by selecting the main menu 'MapManager &rarr; Stack Browser'.

- In the Map Manager [Stack Browser][2], load a folder of .tiff files using the 'Load Tiff Folder' button.

#### 3. Display a stack

 - Double-click on a stack in the stack list to display the stack in a [stack][1] window.
 - Right-click a stack in the stack list and select 'Display Stack'.
 - Select a stack and hit keyboard 'd' for display.
 
#### 4. Add 3D annotations

Map Manager has two types of annotations: **spines** and **other**. A global option needs to be set to work with one or the other

- Open the global options panel with 'MapManager - Options'.
- For spines, select 'spines' in the 'Default scoring' popup.
- For other, select 'Cell Bodies' in the 'Default scoring' popup.

<p class="important">Before a stack can be annotated, the voxel size (in um) needs to be set. If you use the <A HREF="fiji-plugins">Fiji plugins</A> this should already be taken care of. If not, display the stack and use keyboard shift+p to set the voxel size</p>


#### 4.1 Adding line segments (for spine annotations)

To create **spines**, a line segment has to be traced and then spines are attached to this segment. Fitting segments is done in Fiji and you need to set the path to Fiji in the [hard drive paths](hdd-paths) panel. See [stack annotations][12] for detailed instructions on creating line segments.

- In a [stack][1] window, open the annotation toolbar with keyboard <kbd>[</kbd>.
- Enable segment editing with the ‘Segments’ checkbox.
- Create a new (empty) line segment with the + button.
- Shift+click to make a series of 3D control point annotations along a dendritic segment. Make sure the X/Y position is near the center of the segment and the Z image plane is the brightest plane. If any of your control points are in complete darkenss, the Fiji Plugin Simple-Neurite-Tracer will not be able to fit a line between these points.
- Continue making control points along the dendritic segment.
- Fit the line segment in Fiji with a right-click on the new line segment (in the top left list of segment) and select ‘Make From Control Points - FIJI’. If this does not work, check your Fiji path in [hard drive paths](hdd-paths).

#### 4.2 Adding annotations (spines and/or other)

- In a [stack][1] window, open the annotation toolbar with keyboard <kbd>[</kbd>.
- Add a new 3D annotation with shift+click.
- Spine annotations can only be created when there is a parent segment selected. If you have traced a segment (See Adding Line Segments) then you can select the parent segment for a spine by selecting it in the segment list of the annotation (left) control bar or by clicking on the backbone tracing of the segment. Selected segments (like all other selection) will appear as 'yellow'.

#### 5. Editing annotations

- Select an existing annotation with a single-click. Selected annotations appear yellow.
- Delete an annotation by first selecting the annotation and hitting keyboard <kbd>delete</kbd> or <kbd>backspace</kbd>. Annotations can also be deleted with a right-click and selecting 'Delete'.
- Each annotation can have a textual note, select the annotation and press keyboard <kbd>n</kbd> to enter a note. Alternatively, use the annotation control bar (keyboard '[') and enter a note in the note field. Annotation notes can be searched using the [search][6] panel.
- Each annotation can have a 'user type'. Set the 'user type' with a right-click and select 'user type' 1 through 5. User types can be used to identify subsets of annotations. Each annotations can only have one user type, if you need more flexibility you can encode multiple user types into a new user type. User types can  be searched using the [search][6] panel.
- See [stack annotations][12] for more information.

#### 5.1 Marking annotations bad

 - Select an annotation with a single mouse click (selected annotations are yellow).
 - Right-click and select 'bad'

Be very liberal in your scoring, mark anything you think might be a valid annotation. Annotations marked 'bad' remain in the database but are **not** included in output [reports](reports) and can be toggled on/off in plots. As your datasets grow, marking questionable annotations as 'bad' allows you to return to a given stack and see you already decided **not** to include a putative annotation in your analysis.


#### 6. Saving and loading annotations

- Save stack annotations using the 'Save Stack' button.
- The next time a folder of Tiff files is loaded, the annotations for each stack will automatically be opened.

#### 7. Generating reports

Map Manager provides tabular reports for annotation density. See [reports][11].

#### 8. Searching annotations

Open the [Search][6] panel from the main menu 'MapManager &rarr; Search'.

The search panel will search all annotations in a stack and return a list of annotations. Once generated, clicking on an annotation in the search results will display the annotation in a [stack][1] window.

Different types of searches are performed with buttons:  

- **All** : Generate a list of all annotations in a stack.
- **Notes** : Use '&#42;' to generate a list of all annotations with notes. Enter 'mynote&#42;' to generate a list of annotations that have notes beginning with 'mynote'.
- **Bad** : Generate a list of all annotations marked as 'bad'.  
- **Close** : Generate a list of annotations that have other annotations within a 3D distance.

<strike>If you zoom the stack window (ctrl+mouse wheel or keyboard <kbd>+</kbd>) you can snap to different points while maintaining the zoom using the search panel 'Snap' checkbox.</strike>

Note, the search results are a static output report. Once a search is performed, if annotations in the stack window are modified (added, deleted, moved, etc.) the search results will not be automatically updated. If the annotations are modified in the stack window, simply regnerate the search results by perform the search again.

<div class="print-page-break"></div>


[1]: stack
[2]: stack-browser
[3]: making-a-map
[4]: stackdb-options-panel
[5]: annotating-a-stack
[6]: search-panel
[7]: plot-panel
[8]: map-plot
[10]: file-format
[11]: reports
[12]: stack-annotations
