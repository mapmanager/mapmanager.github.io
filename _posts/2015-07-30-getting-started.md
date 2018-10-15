---
layout: page
title: "Getting started"
category: workflow
date: 2015-07-30 22:46:33
order: 1
tags:
- Getting Started
---


<p class="important"><B>Important:</B> As of Oct, 2018, Map Manager is compatible with Igor Pro 6 or Igor Pro 7. Map Manager is <B>NOT</B> compatible with Igor Pro 8.
</p>

### 1) Install Igor Pro

- Map Manager runs in <A HREF="https://www.igorpro.net" target="_blank">Igor Pro</A> 6 or 7 on both Windows and Mac OSX.
- Please <A HREF="https://www.wavemetrics.com/products/igorpro" target="_blank">purchase Igor Pro 6/7</A>.
- Or download a fully function but time limited <A HREF="https://www.wavemetrics.com/downloads/current" target="_blank">demo</A>.

### 2)  Install Map Manager

 - There is no formal installation of Map Manager.

### 3) Run Map Manager

 - Run Map Manager in Igor Pro by double-clicking `'MapManager_<date>.ipf'`. Where `<date>` is the date that your version of Map Manager was created.
 - Once the `'MapManager_<date>.ipf'` file is opened in Igor Pro, click in the Igor Pro 'command window' to activate the main MapManager menu. The Igor Pro 'command window' should be in the lower left of your screen and has the window title 'Untitled'. Alternatively, click on the 'compile' button in the `'MapManager_<date>'` window that has the file/code you just opened.
 
### 3)  Annotating Stacks and/or Time-Series

 - **Single time-point stacks**. Open the [Stack Browser][6] with the main menu 'MapManager &rarr; Stack Browser'. See [Annotating a stack][10] for more information.
 - **Time-series stacks**. Open the [Stack Browser][6] with the main menu 'MapManager &rarr; Stack Browser' and import your stacks into the [time series][5] panel with the main menu 'MapManager &rarr; Time Series'. See [Making A Map][11] for more information.

<figure class="img-float-right">
<IMG class="img-float-right" SRC="images/mm3/quit-igor.png" WIDTH="425">
<figcaption>Always answer 'No'.</figcaption>
</figure>

### 4)  Quiting Map Manager

 - To quit Map Manager, you need to quit Igor Pro. Quit Igor Pro by selecting the main menu 'Igor Pro&rarr;Quit Igor Pro'.
 - When you quit Igor Pro, you will always be prompted with a dialog asking 'Do you want to save changes to experiment 'Untitled' before quitting' and you will <b>always answer no.</B>.
 - All Map Manager annotations are saved using the 'Save' buttons from within the Map Manager interface in the [stack][stack] or [time-series][time-series] windows.

<div class="print-page-break"></div>

[1]: https://www.wavemetrics.com
[2]: https://www.wavemetrics.com/order/order1.php?type=Academic
[3]: https://www.wavemetrics.com/support/versions.htm
[4]: https://www.wavemetrics.com/support/demos.htm
[5]: time-series-panel
[6]: stack-browser
[8]: user-files
[9]: stackdb-options-panel
[10]: annotating-a-stack
[11]: making-a-map
[stack]: stack
[time-series]: time-series-panel
