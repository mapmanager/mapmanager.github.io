---
layout: page
title: "Getting started"
category: workflow
date: 2015-07-30 22:46:33
order: 1
tags:
- Getting Started
---

#### Map Manager runs in [Igor Pro][1].

#### Installing Igor Pro

 - Igor Pro is a cross platform program that runs on both Windows and Mac OS X.
 - You need to [purchase][2] an Igor Pro license from [Wavemetrics][1], [download][3] Igor Pro and install it.
 - To try out Igor Pro, download and install a fully functional but time limited [demo version][4].

<p class="important"><B>Important.</B> Map Manager will only work with Igor Pro 6. Please make sure you have Igor Pro 6 or <A HREF="https://www.wavemetrics.com/order/order_igordownloads6.htm">download a trial version of Igor Pro 6.3</A>.
</p>

#### Installing Map Manager

 - Once Igor Pro is installed, there is no formal installation of Map Manager.
 - Until its final release, you need to get the source code from Robert Cudmore.
 - The source code will be in a folder named `'MapManager_<date>'` where `<date>` is the date the software was created. The folder will be something like `'MapManager_20171021'`.
 - The source code folder can be placed anywhere on your hard-drive.
 
#### Opening/Running Map Manager

 - Open Map Manager by double-clicking `'MapManager_<date>.ipf'` from within the source code folder. You can make a desktop shortcut to `'MapManager_<date>.ipf'` to make running Map Manager easier.
 - Once in Igor Pro, click in the command window to compile Map Manager and activate the main menus. The command window is in the lower left of your screen and has the window title 'Untitled'.
 
#### Creating annotations

 - To score a **single time-point** stack, open the [Stack Browser][6] with the main menu 'MapManager&rarr;Stack Browser'. See [Annotating a stack][10] for more information.
 - To score a **time-series**, open the [time series][5] panel with the main menu 'MapManager&rarr;Time Series'. See [Making A Map][11] for more information.

<IMG class="img-float-right" SRC="images/mm3/quit-igor.png" WIDTH="400">

#### Closing/Quiting Map Manager

 - Quit Igor Pro by selecting the main menu 'Igor Pro&rarr;Quit Igor Pro'.
 - When you quit Igor Pro, you will always be prompted with the following dialog.
 - Always answer **No**. All Map Manager analysis is saved using the 'Save' buttons from within the Map Manager interface.
 


<!--
#### Map Manager Options

 - Global options are set in the [Options Panel][9].
 - There is one set of options that will be reloaded the next time Map Manager is run.
 - Save the current options with the 'Save' button in the [Options][9] panel.
-->

<div class="print-page-break"></div>

[1]: https://www.wavemetrics.com/index.html
[2]: https://www.wavemetrics.com/order/order1.php?type=Academic
[3]: https://www.wavemetrics.com/support/versions.htm
[4]: https://www.wavemetrics.com/support/demos.htm
[5]: time-series-panel
[6]: stack-browser
[8]: user-files
[9]: stackdb-options-panel
[10]: annotating-a-stack
[11]: making-a-map
