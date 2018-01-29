---
layout: page
title: "Fiji plugins"
category: post
date: 2017-10-22 00:00:01
order: 1
tags:
- Fiji
---

Map Manager uses a number of custom <A HREF="http://fiji.sc/" target="_blank">Fiji</A> plugins to convert raw data into a format that can be imported into Map Manager.

Map Manager also has an internal Fiji plugin to fit dendritic segments.

### Converting raw 3D data to open in Map Manager

Map Manager can open 3D .tif image stack with 1, 2, or 3 color channels.

 - Map Manager **will** open single color channel 3D .tif files.
 - Map Manager will <span style="color:red">not</span> open 3D volumes that have interleaved color channels.
 - Map Manager will <span style="color:red">not</span> open 3D volumes saved as individual .tif files

Fiji plugins are provided to make these conversions fast and easy.


Please see the <A HREF="https://github.com/cudmore/bob-fiji-plugins" target="_blank">Fiji Plugins</A> Github repository for the most recent version of each of these plugins.


#### Zeis LSM/CZI

Use bFolder2MapManager

#### ScanImage (<A HREF="http://scanimage.vidriotechnologies.com/display/SIH/ScanImage+Home" target="_blank">ScanImage/Vidrio</A>)

Use bFolder2MapManager

#### Prairie View (<A HREF="https://www.bruker.com/products/fluorescence-microscopes/ultima-multiphoton-microscopy.html" target="_blank">Bruker</A>)

Use bPrairie2tif

In all these plugins, great care was taken to extract the voxel size, date, and time. This is critical for rapid workflows to always score annotations in um and to make time-series in the correct order. If the voxel size, date, or time is not correct, please contact Robert Cudmore directly and we can make them work for your raw data.

<p class="important"><B>Important:</B> When stacks are first imported into the stack browser, please verify the voxel size, date, and time are set correctly.
</p>

### Fitting dendritic segments

This is done seemlesly from within Map Manager and only requires an installed Fiji program to be specified in [hard drive paths][2].

The Map Manager code to fit dendritic segments is a modified version of the <A HREF="https://imagej.net/Simple_Neurite_Tracer" target="_blank">Simple Neurite Tracer</A> Fiji plugin.


[1]: https://github.com/cudmore/bob-fiji-plugins
[2]: hdd-paths
[3]: http://scanimage.vidriotechnologies.com/display/SIH/ScanImage+Home
[4]: https://www.bruker.com/products/fluorescence-microscopes/ultima-multiphoton-microscopy.html
[5]: https://imagej.net/Simple_Neurite_Tracer
[6]: http://fiji.sc/
