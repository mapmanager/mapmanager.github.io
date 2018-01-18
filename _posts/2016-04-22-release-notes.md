---
layout: page
title: "Release Notes"
category: post
date: 2016-04-22 01:46:33
order: 2
tags:
- faq
---

### 20180117
 
 - Fixed map 'subtraction' search. Previously was not returning 'transient' objects as subtraction
 - All windows should now have a main menu help that brings user to web page for help for that window.
 
### 20171030

Working on new version and have seeded it to the following people

 - Daisuke (Cirelli & Tononi, Wisc-Madison), 20171030
 - Richard (Huganir), 20171029
 - Zeng You (Linden), 20170818
 - Amit (Bergles), 20170817 (plus one earlier version from feb?)

#### New Features
 - Each annotation can be tagged with 1 of 10 'user type'.
    - right-click on annotation in stack window
    - right-click on annotation in map to set run
    - search for user type
    - dynamics and survival report now break down dynamics based on user type
    - masks are automatically created and available in trajectory analysis

 - Survival report
 - Birth/death plot. Right-click on intensity plots
 - Map plot now has 'transform' to transform y-data to: Raw, %, Abs, Diff, etc
 - Buttons window to expose all the features of stack and map plots
 - Options panel noew has 'default scoring' for: spines, cell bodies, prairie line scan
 - Trajectory analysis
    - Uses concept of stack pivot (rather than segment pivot)
    - 2d/3d distance is distance an annotation moves between timepoints
    - Cum 2d/3d distance
    - Masks are automatically created: added, subtracted, always present, user type, etc. etc.
    - Plot with mask allows plotting subsets of annotations: added, subtracted, user type, etc
    - Overlay mask over existing plot and get stats for each mask

 - New Fiji plugin to fit tracings (written in Jython) will work with all versions of FIji and does not require user to explicitly install a plugin
 - New Fiji plugins to convert raw data to .tif for import
    - Zeiss LSM/CZI
    - Prairie View

 - [Matlab](https://github.com/cudmore/MapManager-Matlab) code to open, plot, and add new analysis to Map Manager files
    - see: https://github.com/cudmore/MapManager-Matlab
 
#### Improvements
 - When adding stacks to a map from Stack Browser, no longer need to open channels.
 - Map DB now searches 2x deep, will handle a folder with condition folders (that then have the maps)
 - Simplified interface to stack browser and time series. All column options are now in a right-click menu
 - Standardized voxel size in stack browser and time series, they are now: vx, vy, vz
 - Large rewrite of online help including recipes, stack, etc
 
#### Bug fixes
 -  No longer allowed to delete an annotation while in 'move' or 'manual connect'. This was causing unexpected results.
 - Intensity analysis channel 2, utssdtds was incorrect. See code comment '20171005 intensity bug in utssdtds'
 - fixed errors when initially opening search panel
 - fixed search for added
 
### 20170123, Distributed MapManager to Zeng-You and Julia (Linden), Richard (Huganir)

This is a major release with new features, improvements, and bug fixes. A full list of these will follow.

### 20161012, Distributed MapManager to Julia (Linden)

### 20160722. Distributed MapManager to Allen (Linden)

### 20160630. Distributed MapManager to Mengnan (Huganir)

### 20160422 Update (file version 20151224)

This is a major release with new features, improvements, and bug fixes. The file format has not changed but the options have. Please remake your options!

#### New Features

- No more limitation on length of file names when importing into stack browser
- Plot run +/- now has option to set 'row' of run
- Added 'Div' option to plot panel.
- Added option to normalize all spines to a constant value
- Segment density report now has segment position information {zMin, zMax, zMean, zMedian, xyAngle, tort}
- Main map manager panel now remembers its position
- Main map plot now remembers its position
- Conrol click on 'close all windows' will now close tables
- Jumping spines
Jumping spines are specified just like other persistent spines. select spines in both time-points and hit keyboard 'p'. When you make jumping spines, the source and destination spines are required to be subtraction and addition respectively.
- Added jumping to map search

#### Improvements

- Fast left/right mouse click should no longer be a problem.
- User clicks during long operations like opening a run should no longer be a problem.
- Updated coloring of spines in map plot. If there is no previous segment, spines are no longer marked as added (green). If there is no next segment, spines are no longer marked as subtracted (red). Same rules for transient (blue).
- Map Plot. Snapping a marquee rectangle and right-click to make a selection now prints the mean/sd/se/n for both x and y axis.
- Map Plot. Snapping a marquee rectangle and right-click to make a selection now works for +/- from mask.
- Stats button in map plot will now report grand mean of all spine masks in plot (previously was only per segment).
- All spine dynamics now plot following colors and size specified in table in options panel.
- The size of masks in map plots now follow 'pntSel' in main map manager options panel.
- Revamped example user file. tried to make it clear that this can be empty and that values specified will over-ride setting in main options panel.
- Added 'dynamics' menu to right-click in map plot.
- Added 'Edit Line' menu to right-click in main stack window 'Line Segments'.


#### Bug Fixes

- Fixed export to text. If there is an error during export. 'Clear User' then 'Analyze User Map' and try export again. 
- Replotting a run while existing run is linked will continue to correctly link
- Linked windows +/- zoom now works when some windows have left control bar and some do not

### 20160126

#### New Features
- Opening a stack will now display a floating dialog while stack is loading (it is yellow)
- Exposed interface to set defaults for intensity background candidates.
- We can now set # rows, # cols, row mult, col mult, and a boolean to include other side of dendrite. When you include candidates on the other side of the dendrite, you are doubling the # of candidated. Due to this increased analysis, spine/second is dropping down to ~8 spines/second
- Added 'segment ends' search to return spines close to the end of each segment

#### New Interface
- Added 'debug on error' checkbox to the Intensity Tab. This turns 'debug on error' (global igor option) on/off to run intensity analysis for a map or a stack. You want to run intensity analysis with this OFF
- added 'export map' to right-click of map list in main map manager panel
- revamped search panel with two tabs: map and manual
- reworked obj info window interface
		- removed 'analyze run'
		- on 'analyze' we will now open ch1/ch2 if neccessary
- control click on 'Unload Stacks' in main mapmanager panel to unload ALL stack across ALL open maps
- added (density report, dynamics report) right-click to map in main map manager panel
- added (scale, date/time) checkboxes to main map manager panel. This hides columns so you can see LONG 'original names'
	
#### General Improvements
- Fixed user interface for clicking to set a manual position for intensity background
		- clicking off the image does nothing
		- if click results in roi going off image, we revert to last good background roi
		- removed help text from main window and now display in igor command window
- Rewrote 'clear' intensity analysis to be much faster.
- Moved default plot window to left (was off screen to right for richard)
- Rewrote 'dynamics report' to include 3d segment length and density. Previously lengths were calculated from 2d projections, now they are true 3d lengths. New columns are: {totalLen3d, goodLen3d, totalDen3d, goodDen3d}

#### Bug Fixes
- setting the segment pivot point will be correctly saved. Previous versions (not all of them) were not doing this correctly.
- Fixed bug where the backbone roi was 'looping around' to previous backbone segment. This was happening for spines at the beginning of a segment (not at the end). Now, spines at both the beginning and end of a segment get the correct backbone ROI.
- fixed plot panel (ch1, ch2, dyn) checkboxes, they now generate full stat lists including 'u' stats
- [BUG] stat lists are using tp=0 to generate stats, if they are missing 'u', you will not get 'u' in stat list
- fixed bug where right-click below segment list (in left control panel of stack window) would sometime give an error
	
#### Known Bugs
- 'Export map' has a bug if size of int analysis is different between stacks in a map. This happens if int analysis fails half way through and user 'u' stats are added to some but not other stacks. Solution is to clear and then re analyze intensity for the offending stacks. Be careful, when you clear, you lose your manual setting (individual spine background position, spine width, etc).


### 20160119 Update (sent to users on 20160115 / 20160118)

This is the first MapManager version of intensity analysis
	
#### New Features
- Complete rewrite of intensity analysis
- Depending on the size of your stacks, intensity analysis should do ~15 spines/sec for large stacks and ~50 spines/sec for smaller stack. Loading stacks is the rate limiting factor.
- Spine roi is drawn using the longest spine length in each run
- Added intensity bad. Can be set for each spine. Spines marked 'intensity bad' can be toggled in all plots.
- Each spine has errors and warnings if intensity analysis had problems. Search for 'errors and warnings' to decide what to do with the errors. Most of the time you will set 'Intensity Bad'
- Intensity Analysis Errors occur when
    - spine roi is off image
    - backbone roi had to be shortened (near end of dendrite)
    - background roi not found because all candidates are off image
- Intensity analysis should be run with 'Procedure - Debug On Error' off
- Added 'Save Map As...' to save an entire map under a new name. Use Map Manager Panel - Utility - Save Map As...
	
#### New Interface
- Search - Errors & warnings
- Search - V Spines. Will search spines that have spine head above/below the backbone line connection point
- Search - ROI Bounds. Will search for spines that have background spine ROI near edge of image.
	
#### Known bugs
- [FIXED] Spine density in a map is using 2D projection of line
- [checked and seems to work] RIght-click menu items with 'tab' might not work on windows. For example 'Reset Zoom   [enter]'
- [FIXED] changing a spine (e.g. 'move') does not set intensity dirty for other spines in run
- [FIXED] editing spine dynamics (add/subtract/persist) needs to mark all effected spines as 'intensity dirty'
- After int analysis, if no background is found (error #99) it is not possible to have user set manual background



### 20150731 Sent first version of Map Manager to Richard and Yong

- This is a COMPLETE rewrite of original bSpine program that was used in Zhang et al, 2015.
- Did not hear back