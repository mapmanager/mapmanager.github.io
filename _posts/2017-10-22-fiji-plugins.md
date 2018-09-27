---
layout: page
title: "Converting raw data into map manager Tif stacks"
category: post
date: 2017-10-22 00:00:01
order: 1
tags:
- Fiji
---

## Importing 3D Tif stacks into map manager

Map Manager uses <A HREF="http://fiji.sc/" target="_blank">Fiji</A> plugins to convert raw image stacks from a number of proprietary vendors into a format that can be imported into the Map Manager - [Stack Browser][stack-browser]. Please see the <A HREF="https://github.com/cudmore/bob-fiji-plugins" target="_blank">Fiji Plugins</A> Github repository for the most recent version of each of these plugins.

Great care was taken to extract the voxel size, date, and time. This is critical for rapid workflows to always score annotations at um scale and to make time-series in the correct order. After using these plugins, if the voxel size, date, or time is not correct, please contact Robert Cudmore directly and we can make them work for you.

We are assuming you know how to use Fiji and if you do not, this is beyond the scope of this tutorial. Basically, save a plugin to your hard-drive and drag and drop it into Fiji. Make sure the name of your file ends with '_.py'.

#### Zeis lsm/czi, Nikon nd2, ScanImage

 - Use [bFolder2MapManager][bFolder2MapManager].

 
#### Bruker - Prairie View

 - Use [bPrairie2tif][bPrairieToTif]

 1. **Map Manager will not** import 3D .tif files that have interleaved color channels (as is the case with Vidreo - ScanImage).
 2. **Map Manager will not** import 3D .tif files saved as individual .tif files (as is the case with Bruker - Prairie View).

Note, Nikon nd2 files do not have date or time in the header???
Note, Olympus coming soon

<p class="important"><B>Important:</B> When stacks are first imported into the stack browser, please verify the voxel size, date, and time are set correctly. If these are not set correctly, contact Robert Cudmore and we can make it work.
</p>

## Fitting dendritic segments

This is done entirely within Map Manager and only requires an installed Fiji program to be specified in [hard drive paths][2].

The Map Manager code to fit dendritic segments is a modified version of the <A HREF="https://imagej.net/Simple_Neurite_Tracer" target="_blank">Simple Neurite Tracer</A> Fiji plugin.

## Exporting stack annotations to Fiji

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


