---
layout: page
title: "User files"
category: post
date: 2015-04-20 22:46:33
order: 3
tags:
- Posts
---

#### Please see the Map Manager [Options Panel][2]. User files have been depreciated. 

<p class="important">
Map Manager options can now be easily saved and loaded using the 'Options Panel'. User files have been depreciated.
</p>

User files are text files where global options are specified and then loaded and applied within Map Manager. This is useful when you have mutiple users within one Map Manager installation.

User files are loaded using the main menu 'mm3 -> Load User' or in the [Hard Drive Paths][1] panel.

**Important.** When you load a user file, anything specified in the file will **override** existing options.

### Rules
Make sure there is NO space surround the '=' sign. 

 - GOOD: root:line2:options:gDefaultSegmentRadius=0.35
 - BAD: root:line2:options:gDefaultSegmentRadius = 0.35

Make sure your text editor is using simple double quotes 

 - GOOD: root:stackdb2:options:gFijiPath="C:\Users\cudmore.linden-image2\Desktop\Fiji.app\fiji-win64.exe"
 - BAD: root:stackdb2:options:gFijiPath=&ldquo;C:\Users\cudmore.linden-image2\Desktop\Fiji.app\fiji-win64.exe&rdquo;
 
### Some useful options

#### Specify default user folder to load/save maps:
    root:MapManager3:gMapDriveDir="vasculature:Users:cudmore:Documents:MapManager3:"

#### The default radius of new segments (um)
	root:line2:options:gDefaultSegmentRadius=0.3

#### The maximum distance along a segment when automatically connecting objects in a map (um)
Objects will only be connected if their position on the segment line is **less** than this.
	root:ObjMap:options:gMaxPDistConnDist=3

#### The number of segment points to search when auto-connecting a spine
	root:StackDB2:options:gLinePointsToSearch=6

### Here is an example user file...

	# mac
	root:stackdb2:options:gFijiPath="/Applications/Fiji.app/Contents/MacOS/Imagej-macosx"
	# windows
	# root:stackdb2:options:gFijiPath="C:\Users\cudmore.linden-image2\Desktop\Fiji.app\fiji-win64.exe"

	# default point size for stack db objects
	root:stackdb2:options:gPointSize=3

	# default size for user selections
	root:StackDB2:options:gPointSelSize=5

	# default stack window width
	root:bStack:gStackWindowWidth1=1000

	# default segment radius
	root:line2:options:gDefaultSegmentRadius=0.35

	# set the number of image planes an object is visible
	# controls mask as you scroll up/down with mouse wheel
	root:bStack:gMaskWindow=2

	# turn on real-time intnesity analysis
	root:stackdb2:options:gAnalyzeIntOnNewSpines = 0
	root:stackdb2:options:gShowSpineIntensity = 0

	root:line2:options:gFIlterSWC_BoxWidth = 5
	root:line2:options:gFIlterRadius_BoxWidth = 5

	root:bNV:gUserName="cudmore"

	# stack browser
	root:bStack:gRootHDD=""

	#
	root:bStack:gRootHDD="fourt:jhu:data:"
	#
	root:bStack:gAnalysisPath="Vasculature:Users:cudmore:jhu:vascularAnalysis:"

	# set defaults in ‘Process Image’
	# ch1 defaults
	root:bProcess:gAutoContrast=1
	root:bProcess:gMinContrast=0
	root:bProcess:gMaxContrast=200
	root:bProcess:gColorTable="Green"

	# ch2 default
	root:bProcess:gAutoContrastCh2=1
	root:bProcess:gMinContrastCh2=0
	root:bProcess:gMaxContrastCh2=200
	root:bProcess:gColorTable2="Grays"

	#
	root:bStack:gDefaultChannel=1

	root:ObjMap:options:gDefaultPlusMinusRun=1
	root:ObjMap:options:gDefaultRunWindowWidth=400
	root:ObjMap:options:gDefaultZoomWidth=20
	root:ObjMap:options:gDefaultZoomHeight=20

	# only allow auto spine connections < this number
	root:ObjMap:options:gMaxPDistConnDist=3

	# default segment radius (um)
	root:line2:options:gDefaultSegmentRadius=0.3

	# line points to search when connecting spine/bouton
	root:StackDB2:options:gLinePointsToSearch=6

	# single stack window parameters
	root:bStack:gStackWindowWidth1=800
	root:bStack:gStackWindowWidth2=767.5

	root:bStack:stackScaleBar=5
	
	#“”
	
[1]: hdd-paths
[2]: stackdb-options-panel
