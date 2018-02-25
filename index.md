---
layout: default
title: "Map Manager Documentation"
---

<BR>

<p style="font-size:20px">
Map Manager is software to annotate and analyze 3D image time-series
</p>

<BR>

<!-- <IMG class="img-float-right" SRC="/images/imagingcore/example0.png" width="400"> -->

<IMG class="img-float-right" SRC="/images/imagingcore/figure-1.png" width="500">

### Features


- Track 3D annotations in time-series images including dendritic spines, axonal boutons, cell bodies, and vascular branch points.
- Semi-automatically identifies corresponding annotions between time-points.
- Automatically aligns images between time-points.
- Designed to work with any image volume including in vivo, ex vivo, and fixed tissue.

### Analysis
 - Track the dynamics of 3D annotations including persistence, addition, subtraction, and transient.
 - Trajectory analysis to track the motility of annotations.
 - ROI based neuronal spine intensity analysis.
  
### Getting started

- [Annotating a stack][3].
- [Making a map][4].

### Extending Map Manager analysis
- <A HREF="https://github.com/cudmore/MapManager-Matlab" target="_blank">Map Manager - Matlab</A> - A Matlab class library to load, analyze, and plot Map Manager files. Allows for arbitrary new analysis to be easily scripted.
- <A HREF="http://blog.cudmore.io/PyMapManager" target="_blank">PyMapManager</A> - A Python package   to load, analyze, and plot Map Manager files. Allows for arbitrary new analysis to be easily scripted.


[1]: http://wavemetrics.com
[2]: http://robertcudmore.org
[3]: annotating-a-stack
[4]: making-a-map
[5]: getting-started
[6]: gallery
