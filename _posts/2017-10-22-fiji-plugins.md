---
layout: page
title: "Fiji plugins"
category: post
date: 2017-10-22 00:00:01
order: 2
tags:
- Fiji
---

Map Manager uses a number of custom [Fiji][6] plugins to convert raw data into a format that can be imported into Map Manager.

Map Manager also has an internal Fiji plugin to fit dendritic segments.

### Fitting dendritic segments

This is done seemlesly from within Map Manager and only requires an installed Fiji program to be specified in [hard drive paths][2].

The Map Manager code to fit dendritic segments is a modified version of the [Simple Neurite Tracer][5] Fiji plugin.

### Converting raw 3D data to open in Map Manager

Map Manager can open 3D .tif image stack with 1, 2, or 3 color channels.

 - Map Manager **will** open single color channel 3D .tif files.
 - Map Manager will <span style="color:red">not</span> open 3D volumes that have interleaved color channels.
 - Map Manager will <span style="color:red">not</span> open 3D volumes saved as individual .tif files

Fiji plugins are provided to make these conversions fast and easy.

In all these plugins, great care was taken to extract the voxel size, date, and time. This is critical for rapid workflows to always score annotations in um and to make time-series in the correct order. If the voxel size, date, or time is not correct, please contact Robert Cudmore directly and we can make them work for your raw data.

<p class="important"><B>Important:</B> When stacks are first imported into the stack browser, please verify the voxel size, date, and time are set correctly.
</p>

#### Zeis LSM/CZI

bFolder2MapManager

#### Prairie View ([Bruker][4])

bPrairie2tif

#### ScanImage ([Vidrio][3])

bFolder2MapManager  

[1]: https://github.com/cudmore/bob-fiji-plugins
[2]: hdd-paths
[3]: http://scanimage.vidriotechnologies.com/display/SIH/ScanImage+Home
[4]: https://www.bruker.com/products/fluorescence-microscopes/ultima-multiphoton-microscopy.html
[5]: https://imagej.net/Simple_Neurite_Tracer
[6]: http://fiji.sc/