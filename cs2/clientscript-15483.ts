//
function script15483(): void {
    if ((script15469() == 0)) {
        script1296("You cannot refresh without claiming at least one gem.");
        varbitplayer_48870 = 0;
        script15491(comp(770, 190), 1);
        return;
    };
    var int0 = script15485();
    script15492(comp(770, 213), `Refreshing will generate new prizes for each gem, and new rewards for completing each line.<br>It'll cost ${inttostring(int0, 10)} oddments<br><br>Do you want to continue?`);
    varbitplayer_48870 = 1;
    script15491(comp(770, 190), 0);
    return;
}