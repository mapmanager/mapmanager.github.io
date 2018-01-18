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

### Within a single timepoint

#### Calculating distance along a segment and segment length

Each point in the 3D tracing of a segment is assigned a 3D distance from the start of the segment. For calculating the total segment length, used in [segment reports][reports], the Z values of the 3D line segment fit are first smoothed. For a segment running parallel to a single image plane, the actual Z-values of the fitted 3D line tend to jump up and down between adjacent imaging planes. This causes an accumulation of erronious length and the total length is thus an overestimate of the 'real' length. By smoothing the Z values of a segment (before segment length calculation) we reduce this additive error.

#### Connecting a spine to its segment

Spines are automatically connected to their respective dendritic segments by finding the line with the brightest pixels between the spine head and its segment.

Starting from the closest point on the segment tracing, a number of candidate lines are drawn between the spine head and the nearby dendritic segment and the line with the brightest intensity is chosen. There will sometimes be errors in this calculation, especially when there is curvature in the dendritic segment, resulting in the starting point being mis-identified. These are easy to fix by right-clicking a spine, selecting 'manually connect' and then clicking on the center dendritic line to specify it connection point.

The number of lines to search is a parameter.

    Line Points To Search When Connecting Spine/Bouton

#### Spine intensity analysis

See [intensity][intensity] analysis.

### In a time-series

#### Finding corresponding points

Pivot points are used to identify corresponding regions between image stacks in a time-series. Pivot points are regular 3D annotations that must be manually positioned to correspond to a structure that is present in each stack of a time-series. Map Manager can then snap to corresponding regions of an image in multiple timepoints by snapping to the same 3D offset with respect to each image stacks 3D pivot point.

    Connect points within this distance (um)

#### Finding corresponding spines

Distance away from segment pivot point is used.

    Connect spines within this distance (um)

[reports]: reports
[intensity]: intensity
