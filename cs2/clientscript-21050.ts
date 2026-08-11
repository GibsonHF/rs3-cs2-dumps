//
function script21050(): void {
    var int0 = 1;
    var string0 = "";
    if ((PLAYERMEMBER() == false)) {
        if ((varbitplayer_58388 >= 2)) {
            int0 = 0;
            string0 = "You have unlocked the maximum number of free regions.";
        };
        stack(varbitplayer_58391);
        script20931();
        if (BRANCH_EQUALS(1)) {
            int0 = 0;
            string0 = "You must be a member to access this region.";
        };
        if ((int0 == 0)) {
            IF_SETHIDE(false, comp(1409, 5));  // league_parent_areas:area_list
            IF_SETTEXT(`${string0}<br>To continue your Leagues journey, please subscribe to RuneScape.`, comp(1409, 133));
            if ((script6431() == 0)) {
                IF_SETTEXT("Subscribe", comp(1409, 134));
            } else {
                IF_SETTEXT("Close", comp(1409, 134));
            };
            return;
        };
    };
    if ((script20133(varbitplayer_58391) == 0)) {
        script21048();
    };
    return;
}