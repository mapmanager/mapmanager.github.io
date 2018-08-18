---
layout: page
title: "Algorithms"
category: analysis
date: 2016-07-07 22:46:33
order: 3
tags:
- Analysis
---

Map Manager uses a range of algorithms at different stages of the analysis

### Calculating segment length and distance along a segment

Each point in the 3D tracing of a segment is assigned a 3D distance from the start of the segment. For calculating the total segment length, used in [segment reports][reports], the Z values of the 3D line segment fit are first smoothed. For a segment running parallel to a single image plane, the actual Z-values of the fitted 3D line tend to jump up and down between adjacent imaging planes. This causes an accumulation of erronious length and the total length is thus an overestimate of the 'real' length. By smoothing the Z values of a segment (before segment length calculation) we reduce this additive error.

The amount of Z-smoothing is specified in both segment and dynamics [reports][reports].

### Connecting a spine to its dendritic segment tracing

Spines are automatically connected to their respective dendritic segment tracing by finding the line with the brightest pixels between the spine head and its segment. Starting from the closest point on the segment tracing, a number of candidate lines between the spine head and the nearby dendritic segment are analyzed and the line with the brightest intensity is chosen. There will sometimes be errors in this calculation, especially when there is curvature in the dendritic segment, resulting in the starting point being mis-identified. These are easy to fix by right-clicking a spine, selecting 'manually connect' and then clicking on the center dendritic line to manually specify its connection point.

The number of candidate connection points to search is specified in the [options panel][options] - Stack DB - Search Line Pnts When Connecting Spine/Bouton'.

### Spine intensity analysis

See [intensity][intensity] analysis.


### Linking corresponding annotations

A key feature of Map Manager is to connect/link corresponding annotations between time-points in a time-series map. Annotations can be automatically connected in a time-series [map plot][map-plot] using right-click - Dynamics - Connect Objects To Next.

#### Connecting/linking corresponding 3D annotations

This is done by user specified '3D pivot point' annotations in each time-point of a time-series. 3D pivot point annotations must be manually positioned to correspond to a structure that is present in each time-point of a time-series. Map Manager can then snap to corresponding regions of a 3D stack between timepoints by snapping to the same 3D offset with respect to each time-points 3D pivot point.

The allowable distance to automatically connect two annotations can be set in the [options panel][options] - Object Map - Connect points within this distance (um).


#### Connecting/linking corresponding spines

Spine annotations are connected/linked between time-points when they are at the same (um) position along a dendritic tracing. Because each tracing in each time-point will be slightly different, Map Manager uses a 'segment pivot point' for each segment to specify a '0' distance along a dendritic tracing. These segment pivot points must be manually positioned to correspond to a structure (e.g. a persistent spine) that is present in all time-points.

Set the 'segment pivot point' for a given dendritic tracing in a stack window by clicking a point in the tracing, right-click and select 'Set As Segment Pivot'.

The allowable distance to automatically connect two spine annotations can be set in the [options panel][options] - Object Map - Connect spines within this distance (um).

[reports]: reports
[intensity]: intensity
[map-plot]: map-plot
[options]: stackdb-options-panel