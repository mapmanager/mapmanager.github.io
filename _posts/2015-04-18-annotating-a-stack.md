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

This describes a workflow for annotating 3D annotations in a **single stack**. To annotate a timeseries of stacks, please see [making a map][3].


#### 1. Open and initialize Map Manager

- Open Map Manager in Igor Pro (double-click the MapManager.ipf file).
- Click in the Igor Pro command window to compile (the command window is titled 'Untitled').
- Open the [Stack Browser][2] window by selecting the main menu 'MapManager - Stack Browser'.

#### 2. Load a folder of .tif stacks

Load a folder of .tif stacks in the [Stack Browser][2] using the 'Load Tiff Folder' button.

Single channel .tif stacks can be opened directly into the Stack Browser.

If you have multi-channel stacks or stacks acquired using Zeiss Zen, Scan Image, or Prairie View software then please see the [Fiji Plugins](fiji-plugins) page to easily convert these formats before import.

#### 3. Display a stack

Once a stack is loaded in the [Stack Browser][2], double-click on its name in the list to display the stack in a [stack][1] window.

#### 4. Add 3D annotations

- In a [stack][1] window, open the annotation toolbar with keyboard <kbd>[</kbd>.
- Add a new 3D annotation with shift+click.
- Delete an annotation by selecting the point (single left-click) and hitting keyboard <kbd>delete</kbd> or <kbd>backspace</kbd>.
- Each annotation can have a textual note, select the annotation and press keyboard <kbd>n</kbd> to enter a note. Notes can then be searched using the [search][6] panel.
- See [stack annotations][12] for more information.

<p class="important">Before a stack can be annotated, the voxel size (in um) needs to be set. If you use the <A HREF="fiji-plugins">Fiji plugins</A> this should already be taken care of. If not, open the stack and use keyboard shift+p to set the voxel size</p>


#### 5. Saving and loading annotations

- Save stack annotations using the 'Save Stack' button.
- The next time a folder of .tif files is opened, the annotations for each stack will automatically be opened

#### 6. Generating reports

Map Manager provides tabular reports for annotation density. See [reports][11].

#### 7. Searching annotations

Open the [Search][6] panel from the main menus 'Map Manager - Search'.

The search panel will search all annotations in a stack and return a list of annotations. Once generated, clicking on an annotation in the search results will display the annotation in the [stack][1] window.

Different types of searches are performed with buttons:  

- All : Generate a list of all annotations in a stack.
- Notes : Generate a list of all annotations with notes.  
- Close : Search for annotations that have other annotations within a 3D distance.

If you zoom the stack window (ctrl+mouse wheel or keyboard <kbd>+</kbd>) you can snap to different points while maintaining the zoom using the search panel 'Snap' checkbox.

The search results are a static output report. Once a search is performed, if annotations in the stack window are modified (added, deleted, moved, etc.) the search results will not be automatically updated. If the annotations are modified in the stack window, simply regnerate the search results by perform the search again.



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