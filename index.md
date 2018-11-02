---
layout: default
title: "Map Manager"
---

<BR>

<p style="font-size:20px">
Map Manager is software to annotate and analyze image volume time-series
</p>

<!-- <IMG class="img-float-right" SRC="/images/imagingcore/example0.png" width="400"> -->


### News

 - #### We are seeding Map Manager to beta testers, go to the [download](download) page to request a copy.
 - #### We have a poster at SFN 2018 in San Diego, Sunday PM poster session, Program number 254.17. You can download a copy of the poster [here][sfn2018_poster].
 
<IMG class="img-float-right" SRC="/images/imagingcore/figure-1.png" width="500">

### Features


- Track 3D annotations in time-series images including dendritic spines and cell bodies.
- Semi-automatically identifies corresponding annotations between time-points.
- Automatically aligns images between time-points.
- Designed to work with any 3D image volume including in vivo, ex vivo, and fixed tissue.

### Analysis
 - Track the dynamics of 3D annotations including persistence, addition, subtraction, and transient.
 - Trajectory analysis to track the motility of annotations.
 - Neuronal spine intensity analysis.

### Gallery

 - Please see the [gallery][gallery] for screenshots and movies of Map Manager in action.
 
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
[gallery]: gallery
[sfn2018_poster]: images/cudmore_sfn2018_20181022.pdf