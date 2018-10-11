---
layout: page
title: "Converting raw data into Map Manager Tiff stacks"
category: post
date: 2017-10-22 00:00:01
order: 1
tags:
- Fiji
---

The Map Manager - [Stack Browser][stack-browser] will only import single channel Tiff (.tif) stacks and will **not** import proprietary image formats. Thus, all raw data must be converted using the provided <A HREF="http://fiji.sc/" target="_blank">Fiji</A> plugins.

Great care has been taken to extract the **voxel size**, **date**, and **time**. This is critical as all annotations and analysis use um scale (not pixels) and [time-series][time-series] use the acquisition date and time. After using these plugins, if the **voxel size**, **date**, or **time** is not correct, please email Robert Cudmore and we can make them work for you.

<p class="important"><B>Important:</B> When stacks are imported into the Map Manager - Stack Browser, please verify the <B>voxel size</B>, <B>date</B>, and <B>time</B> are correct. If any of these are not correct, contact Robert Cudmore and we can make it work.
</p>

### Rules of Map Manager import

 - Map Manager **will** import 3D .tif files that have been converted using the provided Fiji plugins.
 - Map Manager will **not** import 3D .tif files that have interleaved color channels (e.g. raw ScanImage files).
 - Map Manager will **not** import 3D .tif files saved as individual .tif files (e.g. raw Prairie View files).

### Running the Fiji plugins

 - **Either**, save a plugin to your hard-drive and drag and drop it into Fiji. Once the plugin is open in the Fiji code editor, use 'ctrl+r' to run.
 - **Or**, place a copy of the plugin in the 'Fiji.app/plugins' folder, restart Fiji, and the plugin will be available from the Fiji menu 'Plugins'.


### Scope specific conversion

#### Zeis (lsm/czi) and Nikon (nd2) files

 - Use [bFolder2MapManager][bFolder2MapManager].
 - **Important for Nikon/nd2 import**. Nikon nd2 files do not have date or time in the header. This is an egregious emmision and we are working with Nikon to fix this.



#### Bruker - Prairie View files

 - Use [bPrairie2tif][bPrairieToTif]

#### Olympus

 - Coming soon.
 
#### ScanImage 3/4

 - Use [bFolder2MapManager][bFolder2MapManager].
 - **Important for ScanImage import**. ScanImage 3/4 does **not** save the x/y voxel size in its raw .tif images as the x/y voxel size depends on how the scope is configured. You need to set the 'magic_scan_image_scale' variable in the Fiji plugin to correspond to the x/y voxel size when scanning at 1x magnification with images at 1024x1024 pixels. If this is not set properly, ScanImage Tiff imports into Map Manager will not have the correct x/y scale.
 
### Fiji plugin Github repository

Please see the <A HREF="https://github.com/cudmore/bob-fiji-plugins" target="_blank">Fiji Plugins</A> Github repository for the most recent version of each of these plugins.

### Fitting dendritic segments

This is done entirely within Map Manager and only requires an installed Fiji program to be specified in [hard drive paths][2].

The Map Manager code to fit dendritic segments is a modified version of the <A HREF="https://imagej.net/Simple_Neurite_Tracer" target="_blank">Simple Neurite Tracer</A> Fiji plugin.

### Exporting stack annotations to Fiji

A Fiji plugin (bMergeChannels) is provided to open all annotations and segments in a stack into Fiji, displaying them in the Fiji ROI manager, 3D viewer, and in Simple Neurite Tracer.

 - From a stack window, select the main menu 'MapManager - Experimental - Export To Fiji'. This will generate a number of text files in a folder named 'MapManagerExport' on the desktop.
 - Open Fiji and drag and drop the 'bMergeChannelsv1_.py' plugin onto the Fiji window. The plugin is in the main map manager source code in the 'Tracing' folder.
 - In Fiji, run the plugin and select the .txt file corresponding to the stack that was just exported. The plugin will display the stack, all annotations in the ROI manager, and display a 3D view of the stack with line segments and annotations included.
 - The tracing can also be opened in [Simple Neurite Tracer][5]. In Fiji, with the stack window frontmost, select 'Plugins - Segmentation - Simple Neurite Tracer'. In Simple Neurite Tracer, load the .swc file (in the MapManagerExport folder) corresponding to the stack that was just exported.
 

[1]: https://github.com/cudmore/bob-fiji-plugins
[2]: hdd-paths
[3]: http://scanimage.vidriotechnologies.com/display/SIH/ScanImage+Home
[4]: https://www.bruker.com/products/fluorescence-microscopes/ultima-multiphoton-microscopy.html
[5]: https://imagej.net/Simple_Neurite_Tracer
[6]: http://fiji.sc/
[stack-browser]: stack-browser
[bFolder2MapManager]: https://github.com/cudmore/bob-fiji-plugins/blob/master/bFolder2MapManager.v0.0_.py
[bPrairieToTif]: https://github.com/cudmore/bob-fiji-plugins/blob/master/bFolder2MapManager.v0.0_.py
[time-series]: time-series-panel


