//
function script4777(int0: number, int1: number, int2: number): void {
    var int3 = -1 as graphic;
    var string0 = "";
    var string1 = "";
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = (varclan_2724 / 100);
    var int8 = (varclan_2725 / 100);
    var int9 = (varclan_2728 / 100);
    var int10 = (varclan_2732 / 100);
    var int11 = (varclan_2731 / 100);
    var int12 = (varclan_2730 / 100);
    var int13 = (varclan_2733 / 100);
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var int30 = 0;
    var int31 = 0;
    var int32 = 0;
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = int0;
    var int39 = 0;
    var int40 = 0;
    var int41 = 0;
    var string2 = "";
    var string3 = "";
    var int42 = (IF_GETWIDTH(comp(1115, 8)) - 2);  // clan_build_jobs:info_timber_layer
    if (((int0 < 1) || (int0 > 900))) {
        return;
    };
    if ((CLANPROFILE_FIND() == 1)) {
        IF_SETHIDE(false, comp(1115, 34));  // clan_build_jobs:info_main_layer
        [int3, string0, int4, int5, int6, int39, int40, int41] = script4791(int0);
        [int14, int15, int16, int17, int18, int19, int20, int21, int22, int23, int24, int25, int26, int27, int28, int29, int30, int31, int32, int33, int34, int35, int36, int37, int38] = script4794(int2, int7, int8, int9, int10, int11, int12, int13);
        if (((int0 > 300) && (int0 < 600))) {
            int4 = (int4 - int5);
        };
        if ((int39 == 5)) {
            if ((int4 == 1)) {
                string3 = "(Basic)";
            } else if ((int4 == 2)) {
                string3 = "(Medium)";
            } else if ((int4 == 3)) {
                string3 = "(Grand)";
            };
        } else {
            string3 = `(Tier ${inttostring(int4, 10)})`;
        };
        if ((PARAHEIGHT(string0, IF_GETWIDTH(comp(1115, 37)), 26 as fontmetrics) > 1)) {  // clan_build_jobs:info_summary_name
            IF_SETTEXT(`${string0} ${string3}`, comp(1115, 37));  // clan_build_jobs:info_summary_name
        } else {
            IF_SETTEXT(`${string0}<br>${string3}`, comp(1115, 37));  // clan_build_jobs:info_summary_name
        };
        IF_SETGRAPHIC(int3, comp(1115, 36));  // clan_build_jobs:info_summary_icon
        if ((int0 > 600)) {
            string1 = "Upgrade";
            IF_SETHIDE(true, comp(1115, 80));  // clan_build_jobs:tiers_layer
            IF_SETHIDE(true, comp(1115, 42));  // clan_build_jobs:info_postdown_layer
            IF_SETHIDE(false, comp(1115, 41));  // clan_build_jobs:info_resource_layer
            IF_SETHIDE(false, comp(1115, 119));  // clan_build_jobs:info_customise_layer
            if ((int14 == 0)) {
                IF_SETHIDE(true, comp(1115, 8));  // clan_build_jobs:info_timber_layer
                IF_SETHIDE(false, comp(1115, 9));  // clan_build_jobs:info_notimber
            } else {
                IF_SETHIDE(false, comp(1115, 8));  // clan_build_jobs:info_timber_layer
                IF_SETHIDE(true, comp(1115, 9));  // clan_build_jobs:info_notimber
            };
            if ((int15 == 0)) {
                IF_SETHIDE(true, comp(1115, 45));  // clan_build_jobs:info_stone_layer
                IF_SETHIDE(false, comp(1115, 46));  // clan_build_jobs:info_nostone
            } else {
                IF_SETHIDE(false, comp(1115, 45));  // clan_build_jobs:info_stone_layer
                IF_SETHIDE(true, comp(1115, 46));  // clan_build_jobs:info_nostone
            };
            if ((int16 == 0)) {
                IF_SETHIDE(true, comp(1115, 82));  // clan_build_jobs:info_bars_layer
                IF_SETHIDE(false, comp(1115, 83));  // clan_build_jobs:info_nobars
            } else {
                IF_SETHIDE(false, comp(1115, 82));  // clan_build_jobs:info_bars_layer
                IF_SETHIDE(true, comp(1115, 83));  // clan_build_jobs:info_nobars
            };
            if ((int17 == 0)) {
                IF_SETHIDE(true, comp(1115, 86));  // clan_build_jobs:info_rations_layer
                IF_SETHIDE(false, comp(1115, 87));  // clan_build_jobs:info_norations
            } else {
                IF_SETHIDE(false, comp(1115, 86));  // clan_build_jobs:info_rations_layer
                IF_SETHIDE(true, comp(1115, 87));  // clan_build_jobs:info_norations
            };
            if ((int18 == 0)) {
                IF_SETHIDE(true, comp(1115, 90));  // clan_build_jobs:info_cloth_layer
                IF_SETHIDE(false, comp(1115, 91));  // clan_build_jobs:info_nocloth
            } else {
                IF_SETHIDE(false, comp(1115, 90));  // clan_build_jobs:info_cloth_layer
                IF_SETHIDE(true, comp(1115, 91));  // clan_build_jobs:info_nocloth
            };
            if ((int19 == 0)) {
                IF_SETHIDE(true, comp(1115, 117));  // clan_build_jobs:info_precious_bars_layer
                IF_SETHIDE(false, comp(1115, 118));  // clan_build_jobs:info_noprecious_bars
            } else {
                IF_SETHIDE(false, comp(1115, 117));  // clan_build_jobs:info_precious_bars_layer
                IF_SETHIDE(true, comp(1115, 118));  // clan_build_jobs:info_noprecious_bars
            };
            IF_SETSIZE(((int20 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 12)), 0, 0, comp(1115, 12));  // clan_build_jobs:info_timber_paid
            string2 = `${inttostring(int20, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 12));  // clan_build_jobs:info_timber_paid
            IF_SETSIZE(((int21 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 98)), 0, 0, comp(1115, 98));  // clan_build_jobs:info_stone_paid
            string2 = `${inttostring(int21, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 98));  // clan_build_jobs:info_stone_paid
            IF_SETSIZE(((int22 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 103)), 0, 0, comp(1115, 103));  // clan_build_jobs:info_bars_paid
            string2 = `${inttostring(int22, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 103));  // clan_build_jobs:info_bars_paid
            IF_SETSIZE(((int23 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 108)), 0, 0, comp(1115, 108));  // clan_build_jobs:info_rations_paid
            string2 = `${inttostring(int23, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 108));  // clan_build_jobs:info_rations_paid
            IF_SETSIZE(((int24 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 113)), 0, 0, comp(1115, 113));  // clan_build_jobs:info_cloth_paid
            string2 = `${inttostring(int24, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 113));  // clan_build_jobs:info_cloth_paid
            IF_SETSIZE(((int25 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 121)), 0, 0, comp(1115, 121));  // clan_build_jobs:info_precious_bars_paid
            string2 = `${inttostring(int25, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 121));  // clan_build_jobs:info_precious_bars_paid
            IF_SETPOSITION(((IF_GETX(comp(1115, 12) /*clan_build_jobs:info_timber_paid*/) + IF_GETWIDTH(comp(1115, 12) /*clan_build_jobs:info_timber_paid*/)) + 1), 0, 0, 1, comp(1115, 94) /*clan_build_jobs:info_timber_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 98) /*clan_build_jobs:info_stone_paid*/) + IF_GETWIDTH(comp(1115, 98) /*clan_build_jobs:info_stone_paid*/)) + 1), 0, 0, 1, comp(1115, 99) /*clan_build_jobs:info_stone_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 103) /*clan_build_jobs:info_bars_paid*/) + IF_GETWIDTH(comp(1115, 103) /*clan_build_jobs:info_bars_paid*/)) + 1), 0, 0, 1, comp(1115, 104) /*clan_build_jobs:info_bars_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 108) /*clan_build_jobs:info_rations_paid*/) + IF_GETWIDTH(comp(1115, 108) /*clan_build_jobs:info_rations_paid*/)) + 1), 0, 0, 1, comp(1115, 109) /*clan_build_jobs:info_rations_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 113) /*clan_build_jobs:info_cloth_paid*/) + IF_GETWIDTH(comp(1115, 113) /*clan_build_jobs:info_cloth_paid*/)) + 1), 0, 0, 1, comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 121) /*clan_build_jobs:info_precious_bars_paid*/) + IF_GETWIDTH(comp(1115, 121) /*clan_build_jobs:info_precious_bars_paid*/)) + 1), 0, 0, 1, comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/);
            IF_SETSIZE(((int26 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 94)), 0, 0, comp(1115, 94));  // clan_build_jobs:info_timber_stored
            string2 = `${inttostring(int26, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 94));  // clan_build_jobs:info_timber_stored
            IF_SETSIZE(((int27 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 99)), 0, 0, comp(1115, 99));  // clan_build_jobs:info_stone_stored
            string2 = `${inttostring(int27, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 99));  // clan_build_jobs:info_stone_stored
            IF_SETSIZE(((int28 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 104)), 0, 0, comp(1115, 104));  // clan_build_jobs:info_bars_stored
            string2 = `${inttostring(int28, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 104));  // clan_build_jobs:info_bars_stored
            IF_SETSIZE(((int29 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 109)), 0, 0, comp(1115, 109));  // clan_build_jobs:info_rations_stored
            string2 = `${inttostring(int29, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 109));  // clan_build_jobs:info_rations_stored
            IF_SETSIZE(((int30 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 114)), 0, 0, comp(1115, 114));  // clan_build_jobs:info_cloth_stored
            string2 = `${inttostring(int30, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 114));  // clan_build_jobs:info_cloth_stored
            IF_SETSIZE(((int31 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 122)), 0, 0, comp(1115, 122));  // clan_build_jobs:info_precious_bars_stored
            string2 = `${inttostring(int31, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 122));  // clan_build_jobs:info_precious_bars_stored
            IF_SETPOSITION(((IF_GETX(comp(1115, 94) /*clan_build_jobs:info_timber_stored*/) + IF_GETWIDTH(comp(1115, 94) /*clan_build_jobs:info_timber_stored*/)) + 1), 0, 0, 1, comp(1115, 95) /*clan_build_jobs:info_timber_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 99) /*clan_build_jobs:info_stone_stored*/) + IF_GETWIDTH(comp(1115, 99) /*clan_build_jobs:info_stone_stored*/)) + 1), 0, 0, 1, comp(1115, 100) /*clan_build_jobs:info_stone_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 104) /*clan_build_jobs:info_bars_stored*/) + IF_GETWIDTH(comp(1115, 104) /*clan_build_jobs:info_bars_stored*/)) + 1), 0, 0, 1, comp(1115, 105) /*clan_build_jobs:info_bars_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 109) /*clan_build_jobs:info_rations_stored*/) + IF_GETWIDTH(comp(1115, 109) /*clan_build_jobs:info_rations_stored*/)) + 1), 0, 0, 1, comp(1115, 110) /*clan_build_jobs:info_rations_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/) + IF_GETWIDTH(comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/)) + 1), 0, 0, 1, comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/) + IF_GETWIDTH(comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/)) + 1), 0, 0, 1, comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/);
            IF_SETSIZE(((int32 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 95)), 0, 0, comp(1115, 95));  // clan_build_jobs:info_timber_wild
            string2 = `${inttostring(int32, 10)}<br>of<br>${inttostring(int14, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 95));  // clan_build_jobs:info_timber_wild
            IF_SETSIZE(((int33 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 100)), 0, 0, comp(1115, 100));  // clan_build_jobs:info_stone_wild
            string2 = `${inttostring(int33, 10)}<br>of<br>${inttostring(int15, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 100));  // clan_build_jobs:info_stone_wild
            IF_SETSIZE(((int34 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 105)), 0, 0, comp(1115, 105));  // clan_build_jobs:info_bars_wild
            string2 = `${inttostring(int34, 10)}<br>of<br>${inttostring(int16, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 105));  // clan_build_jobs:info_bars_wild
            IF_SETSIZE(((int35 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 110)), 0, 0, comp(1115, 110));  // clan_build_jobs:info_rations_wild
            string2 = `${inttostring(int35, 10)}<br>of<br>${inttostring(int17, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 110));  // clan_build_jobs:info_rations_wild
            IF_SETSIZE(((int36 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 115)), 0, 0, comp(1115, 115));  // clan_build_jobs:info_cloth_wild
            string2 = `${inttostring(int36, 10)}<br>of<br>${inttostring(int18, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 115));  // clan_build_jobs:info_cloth_wild
            IF_SETSIZE(((int37 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 123)), 0, 0, comp(1115, 123));  // clan_build_jobs:info_precious_bars_wild
            string2 = `${inttostring(int37, 10)}<br>of<br>${inttostring(int19, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 123));  // clan_build_jobs:info_precious_bars_wild
            IF_SETPOSITION(((IF_GETX(comp(1115, 95) /*clan_build_jobs:info_timber_wild*/) + IF_GETWIDTH(comp(1115, 95) /*clan_build_jobs:info_timber_wild*/)) + 1), 0, 0, 1, comp(1115, 96) /*clan_build_jobs:info_timber_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 100) /*clan_build_jobs:info_stone_wild*/) + IF_GETWIDTH(comp(1115, 100) /*clan_build_jobs:info_stone_wild*/)) + 1), 0, 0, 1, comp(1115, 101) /*clan_build_jobs:info_stone_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 105) /*clan_build_jobs:info_bars_wild*/) + IF_GETWIDTH(comp(1115, 105) /*clan_build_jobs:info_bars_wild*/)) + 1), 0, 0, 1, comp(1115, 106) /*clan_build_jobs:info_bars_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 110) /*clan_build_jobs:info_rations_wild*/) + IF_GETWIDTH(comp(1115, 110) /*clan_build_jobs:info_rations_wild*/)) + 1), 0, 0, 1, comp(1115, 111) /*clan_build_jobs:info_rations_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/) + IF_GETWIDTH(comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/)) + 1), 0, 0, 1, comp(1115, 116) /*clan_build_jobs:info_cloth_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/) + IF_GETWIDTH(comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/)) + 1), 0, 0, 1, comp(1115, 124) /*clan_build_jobs:info_precious_bars_short*/);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 12) /*clan_build_jobs:info_timber_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 94) /*clan_build_jobs:info_timber_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 95) /*clan_build_jobs:info_timber_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 96) /*clan_build_jobs:info_timber_short*/), 0, 0, comp(1115, 96) /*clan_build_jobs:info_timber_short*/);
            string2 = `${inttostring((int14 - ((int20 + int26) + int32)), 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 96));  // clan_build_jobs:info_timber_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 98) /*clan_build_jobs:info_stone_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 99) /*clan_build_jobs:info_stone_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 100) /*clan_build_jobs:info_stone_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 101) /*clan_build_jobs:info_stone_short*/), 0, 0, comp(1115, 101) /*clan_build_jobs:info_stone_short*/);
            string2 = `${inttostring((int15 - ((int21 + int27) + int33)), 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 101));  // clan_build_jobs:info_stone_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 103) /*clan_build_jobs:info_bars_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 104) /*clan_build_jobs:info_bars_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 105) /*clan_build_jobs:info_bars_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 106) /*clan_build_jobs:info_bars_short*/), 0, 0, comp(1115, 106) /*clan_build_jobs:info_bars_short*/);
            string2 = `${inttostring((int16 - ((int22 + int28) + int34)), 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 106));  // clan_build_jobs:info_bars_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 108) /*clan_build_jobs:info_rations_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 109) /*clan_build_jobs:info_rations_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 110) /*clan_build_jobs:info_rations_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 111) /*clan_build_jobs:info_rations_short*/), 0, 0, comp(1115, 111) /*clan_build_jobs:info_rations_short*/);
            string2 = `${inttostring((int17 - ((int23 + int29) + int35)), 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 111));  // clan_build_jobs:info_rations_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 113) /*clan_build_jobs:info_cloth_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 116) /*clan_build_jobs:info_cloth_short*/), 0, 0, comp(1115, 116) /*clan_build_jobs:info_cloth_short*/);
            string2 = `${inttostring((int18 - ((int24 + int30) + int36)), 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 116));  // clan_build_jobs:info_cloth_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 121) /*clan_build_jobs:info_precious_bars_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 124) /*clan_build_jobs:info_precious_bars_short*/), 0, 0, comp(1115, 124) /*clan_build_jobs:info_precious_bars_short*/);
            string2 = `${inttostring((int19 - ((int25 + int31) + int37)), 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 124));  // clan_build_jobs:info_precious_bars_short
            string2 = `${inttostring(int20, 10)} paid<br>${inttostring(int26, 10)} available<br>${inttostring(int32, 10)} from wildcard<br>${inttostring((int14 - ((int20 + int26) + int32)), 10)} shortfall`;
            if ((int14 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 7));  // clan_build_jobs:info_timber_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 7));  // clan_build_jobs:info_timber_icon
            };
            string2 = `${inttostring(int21, 10)} paid<br>${inttostring(int27, 10)} available<br>${inttostring(int33, 10)} from wildcard<br>${inttostring((int15 - ((int21 + int27) + int33)), 10)} shortfall`;
            if ((int15 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 44));  // clan_build_jobs:info_stone_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 44));  // clan_build_jobs:info_stone_icon
            };
            string2 = `${inttostring(int22, 10)} paid<br>${inttostring(int28, 10)} available<br>${inttostring(int34, 10)} from wildcard<br>${inttostring((int16 - ((int22 + int28) + int34)), 10)} shortfall`;
            if ((int16 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 81));  // clan_build_jobs:info_bars_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 81));  // clan_build_jobs:info_bars_icon
            };
            string2 = `${inttostring(int23, 10)} paid<br>${inttostring(int29, 10)} available<br>${inttostring(int35, 10)} from wildcard<br>${inttostring((int17 - ((int23 + int29) + int35)), 10)} shortfall`;
            if ((int17 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 85));  // clan_build_jobs:info_rations_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 85));  // clan_build_jobs:info_rations_icon
            };
            string2 = `${inttostring(int24, 10)} paid<br>${inttostring(int30, 10)} available<br>${inttostring(int36, 10)} from wildcard<br>${inttostring((int18 - ((int24 + int30) + int36)), 10)} shortfall`;
            if ((int18 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 89));  // clan_build_jobs:info_cloth_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 89));  // clan_build_jobs:info_cloth_icon
            };
            string2 = `${inttostring(int25, 10)} paid<br>${inttostring(int31, 10)} available<br>${inttostring(int37, 10)} from wildcard<br>${inttostring((int19 - ((int25 + int31) + int37)), 10)} shortfall`;
            if ((int19 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 93));  // clan_build_jobs:info_precious_bars_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 93));  // clan_build_jobs:info_precious_bars_icon
            };
        } else if ((int0 < 300)) {
            string1 = `Downgrade -${inttostring(int5, 10)}`;
            IF_SETHIDE(false, comp(1115, 80));  // clan_build_jobs:tiers_layer
            IF_SETHIDE(false, comp(1115, 42));  // clan_build_jobs:info_postdown_layer
            IF_SETHIDE(true, comp(1115, 41));  // clan_build_jobs:info_resource_layer
            IF_SETHIDE(true, comp(1115, 119));  // clan_build_jobs:info_customise_layer
            IF_SETTEXT(inttostring(int14, 10), comp(1115, 137));  // clan_build_jobs:postdown_timber_old
            IF_SETTEXT(inttostring(int15, 10), comp(1115, 139));  // clan_build_jobs:postdown_stone_old
            IF_SETTEXT(inttostring(int16, 10), comp(1115, 141));  // clan_build_jobs:postdown_bars_old
            IF_SETTEXT(inttostring(int17, 10), comp(1115, 143));  // clan_build_jobs:postdown_rations_old
            IF_SETTEXT(inttostring(int18, 10), comp(1115, 145));  // clan_build_jobs:postdown_cloth_old
            IF_SETTEXT(inttostring(int19, 10), comp(1115, 147));  // clan_build_jobs:postdown_precious_bars_old
            [int14, int15, int16, int17, int18, int19] = script4792(int0, MAX((int4 - int5), 0));
            IF_SETTEXT(inttostring(int14, 10), comp(1115, 138));  // clan_build_jobs:postdown_timber_new
            IF_SETTEXT(inttostring(int15, 10), comp(1115, 140));  // clan_build_jobs:postdown_stone_new
            IF_SETTEXT(inttostring(int16, 10), comp(1115, 142));  // clan_build_jobs:postdown_bars_new
            IF_SETTEXT(inttostring(int17, 10), comp(1115, 144));  // clan_build_jobs:postdown_rations_new
            IF_SETTEXT(inttostring(int18, 10), comp(1115, 146));  // clan_build_jobs:postdown_cloth_new
            IF_SETTEXT(inttostring(int19, 10), comp(1115, 148));  // clan_build_jobs:postdown_precious_bars_new
        } else {
            string1 = "Upkeep";
            IF_SETHIDE(true, comp(1115, 80));  // clan_build_jobs:tiers_layer
            IF_SETHIDE(true, comp(1115, 42));  // clan_build_jobs:info_postdown_layer
            IF_SETHIDE(false, comp(1115, 41));  // clan_build_jobs:info_resource_layer
            IF_SETHIDE(true, comp(1115, 119));  // clan_build_jobs:info_customise_layer
            if ((int14 == 0)) {
                IF_SETHIDE(true, comp(1115, 8));  // clan_build_jobs:info_timber_layer
                IF_SETHIDE(false, comp(1115, 9));  // clan_build_jobs:info_notimber
            } else {
                IF_SETHIDE(false, comp(1115, 8));  // clan_build_jobs:info_timber_layer
                IF_SETHIDE(true, comp(1115, 9));  // clan_build_jobs:info_notimber
            };
            if ((int15 == 0)) {
                IF_SETHIDE(true, comp(1115, 45));  // clan_build_jobs:info_stone_layer
                IF_SETHIDE(false, comp(1115, 46));  // clan_build_jobs:info_nostone
            } else {
                IF_SETHIDE(false, comp(1115, 45));  // clan_build_jobs:info_stone_layer
                IF_SETHIDE(true, comp(1115, 46));  // clan_build_jobs:info_nostone
            };
            if ((int16 == 0)) {
                IF_SETHIDE(true, comp(1115, 82));  // clan_build_jobs:info_bars_layer
                IF_SETHIDE(false, comp(1115, 83));  // clan_build_jobs:info_nobars
            } else {
                IF_SETHIDE(false, comp(1115, 82));  // clan_build_jobs:info_bars_layer
                IF_SETHIDE(true, comp(1115, 83));  // clan_build_jobs:info_nobars
            };
            if ((int17 == 0)) {
                IF_SETHIDE(true, comp(1115, 86));  // clan_build_jobs:info_rations_layer
                IF_SETHIDE(false, comp(1115, 87));  // clan_build_jobs:info_norations
            } else {
                IF_SETHIDE(false, comp(1115, 86));  // clan_build_jobs:info_rations_layer
                IF_SETHIDE(true, comp(1115, 87));  // clan_build_jobs:info_norations
            };
            if ((int18 == 0)) {
                IF_SETHIDE(true, comp(1115, 90));  // clan_build_jobs:info_cloth_layer
                IF_SETHIDE(false, comp(1115, 91));  // clan_build_jobs:info_nocloth
            } else {
                IF_SETHIDE(false, comp(1115, 90));  // clan_build_jobs:info_cloth_layer
                IF_SETHIDE(true, comp(1115, 91));  // clan_build_jobs:info_nocloth
            };
            if ((int19 == 0)) {
                IF_SETHIDE(true, comp(1115, 117));  // clan_build_jobs:info_precious_bars_layer
                IF_SETHIDE(false, comp(1115, 118));  // clan_build_jobs:info_noprecious_bars
            } else {
                IF_SETHIDE(false, comp(1115, 117));  // clan_build_jobs:info_precious_bars_layer
                IF_SETHIDE(true, comp(1115, 118));  // clan_build_jobs:info_noprecious_bars
            };
            IF_SETSIZE(((int20 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 12)), 0, 0, comp(1115, 12));  // clan_build_jobs:info_timber_paid
            string2 = `${inttostring(int20, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 12));  // clan_build_jobs:info_timber_paid
            IF_SETSIZE(((int21 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 98)), 0, 0, comp(1115, 98));  // clan_build_jobs:info_stone_paid
            string2 = `${inttostring(int21, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 98));  // clan_build_jobs:info_stone_paid
            IF_SETSIZE(((int22 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 103)), 0, 0, comp(1115, 103));  // clan_build_jobs:info_bars_paid
            string2 = `${inttostring(int22, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 103));  // clan_build_jobs:info_bars_paid
            IF_SETSIZE(((int23 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 108)), 0, 0, comp(1115, 108));  // clan_build_jobs:info_rations_paid
            string2 = `${inttostring(int23, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 108));  // clan_build_jobs:info_rations_paid
            IF_SETSIZE(((int24 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 113)), 0, 0, comp(1115, 113));  // clan_build_jobs:info_cloth_paid
            string2 = `${inttostring(int24, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 113));  // clan_build_jobs:info_cloth_paid
            IF_SETSIZE(((int25 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 121)), 0, 0, comp(1115, 121));  // clan_build_jobs:info_precious_bars_paid
            string2 = `${inttostring(int25, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 121));  // clan_build_jobs:info_precious_bars_paid
            IF_SETPOSITION(((IF_GETX(comp(1115, 12) /*clan_build_jobs:info_timber_paid*/) + IF_GETWIDTH(comp(1115, 12) /*clan_build_jobs:info_timber_paid*/)) + 1), 0, 0, 1, comp(1115, 94) /*clan_build_jobs:info_timber_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 98) /*clan_build_jobs:info_stone_paid*/) + IF_GETWIDTH(comp(1115, 98) /*clan_build_jobs:info_stone_paid*/)) + 1), 0, 0, 1, comp(1115, 99) /*clan_build_jobs:info_stone_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 103) /*clan_build_jobs:info_bars_paid*/) + IF_GETWIDTH(comp(1115, 103) /*clan_build_jobs:info_bars_paid*/)) + 1), 0, 0, 1, comp(1115, 104) /*clan_build_jobs:info_bars_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 108) /*clan_build_jobs:info_rations_paid*/) + IF_GETWIDTH(comp(1115, 108) /*clan_build_jobs:info_rations_paid*/)) + 1), 0, 0, 1, comp(1115, 109) /*clan_build_jobs:info_rations_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 113) /*clan_build_jobs:info_cloth_paid*/) + IF_GETWIDTH(comp(1115, 113) /*clan_build_jobs:info_cloth_paid*/)) + 1), 0, 0, 1, comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 121) /*clan_build_jobs:info_precious_bars_paid*/) + IF_GETWIDTH(comp(1115, 121) /*clan_build_jobs:info_precious_bars_paid*/)) + 1), 0, 0, 1, comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/);
            IF_SETSIZE(((int26 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 94)), 0, 0, comp(1115, 94));  // clan_build_jobs:info_timber_stored
            string2 = `${inttostring(int26, 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 94));  // clan_build_jobs:info_timber_stored
            IF_SETSIZE(((int27 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 99)), 0, 0, comp(1115, 99));  // clan_build_jobs:info_stone_stored
            string2 = `${inttostring(int27, 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 99));  // clan_build_jobs:info_stone_stored
            IF_SETSIZE(((int28 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 104)), 0, 0, comp(1115, 104));  // clan_build_jobs:info_bars_stored
            string2 = `${inttostring(int28, 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 104));  // clan_build_jobs:info_bars_stored
            IF_SETSIZE(((int29 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 109)), 0, 0, comp(1115, 109));  // clan_build_jobs:info_rations_stored
            string2 = `${inttostring(int29, 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 109));  // clan_build_jobs:info_rations_stored
            IF_SETSIZE(((int30 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 114)), 0, 0, comp(1115, 114));  // clan_build_jobs:info_cloth_stored
            string2 = `${inttostring(int30, 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 114));  // clan_build_jobs:info_cloth_stored
            IF_SETSIZE(((int31 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 122)), 0, 0, comp(1115, 122));  // clan_build_jobs:info_precious_bars_stored
            string2 = `${inttostring(int31, 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 122));  // clan_build_jobs:info_precious_bars_stored
            IF_SETPOSITION(((IF_GETX(comp(1115, 94) /*clan_build_jobs:info_timber_stored*/) + IF_GETWIDTH(comp(1115, 94) /*clan_build_jobs:info_timber_stored*/)) + 1), 0, 0, 1, comp(1115, 95) /*clan_build_jobs:info_timber_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 99) /*clan_build_jobs:info_stone_stored*/) + IF_GETWIDTH(comp(1115, 99) /*clan_build_jobs:info_stone_stored*/)) + 1), 0, 0, 1, comp(1115, 100) /*clan_build_jobs:info_stone_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 104) /*clan_build_jobs:info_bars_stored*/) + IF_GETWIDTH(comp(1115, 104) /*clan_build_jobs:info_bars_stored*/)) + 1), 0, 0, 1, comp(1115, 105) /*clan_build_jobs:info_bars_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 109) /*clan_build_jobs:info_rations_stored*/) + IF_GETWIDTH(comp(1115, 109) /*clan_build_jobs:info_rations_stored*/)) + 1), 0, 0, 1, comp(1115, 110) /*clan_build_jobs:info_rations_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/) + IF_GETWIDTH(comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/)) + 1), 0, 0, 1, comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/) + IF_GETWIDTH(comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/)) + 1), 0, 0, 1, comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/);
            IF_SETSIZE(((int32 * int42) / MAX(1, int14)), IF_GETHEIGHT(comp(1115, 95)), 0, 0, comp(1115, 95));  // clan_build_jobs:info_timber_wild
            string2 = `${inttostring(int32, 10)}<br>of<br>${inttostring(int14, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 95));  // clan_build_jobs:info_timber_wild
            IF_SETSIZE(((int33 * int42) / MAX(1, int15)), IF_GETHEIGHT(comp(1115, 100)), 0, 0, comp(1115, 100));  // clan_build_jobs:info_stone_wild
            string2 = `${inttostring(int33, 10)}<br>of<br>${inttostring(int15, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 100));  // clan_build_jobs:info_stone_wild
            IF_SETSIZE(((int34 * int42) / MAX(1, int16)), IF_GETHEIGHT(comp(1115, 105)), 0, 0, comp(1115, 105));  // clan_build_jobs:info_bars_wild
            string2 = `${inttostring(int34, 10)}<br>of<br>${inttostring(int16, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 105));  // clan_build_jobs:info_bars_wild
            IF_SETSIZE(((int35 * int42) / MAX(1, int17)), IF_GETHEIGHT(comp(1115, 110)), 0, 0, comp(1115, 110));  // clan_build_jobs:info_rations_wild
            string2 = `${inttostring(int35, 10)}<br>of<br>${inttostring(int17, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 110));  // clan_build_jobs:info_rations_wild
            IF_SETSIZE(((int36 * int42) / MAX(1, int18)), IF_GETHEIGHT(comp(1115, 115)), 0, 0, comp(1115, 115));  // clan_build_jobs:info_cloth_wild
            string2 = `${inttostring(int36, 10)}<br>of<br>${inttostring(int18, 10)}<br>1:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 115));  // clan_build_jobs:info_cloth_wild
            IF_SETSIZE(((int37 * int42) / MAX(1, int19)), IF_GETHEIGHT(comp(1115, 123)), 0, 0, comp(1115, 123));  // clan_build_jobs:info_precious_bars_wild
            string2 = `${inttostring(int37, 10)}<br>of<br>${inttostring(int19, 10)}<br>3:1 ratio`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 123));  // clan_build_jobs:info_precious_bars_wild
            IF_SETPOSITION(((IF_GETX(comp(1115, 95) /*clan_build_jobs:info_timber_wild*/) + IF_GETWIDTH(comp(1115, 95) /*clan_build_jobs:info_timber_wild*/)) + 1), 0, 0, 1, comp(1115, 96) /*clan_build_jobs:info_timber_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 100) /*clan_build_jobs:info_stone_wild*/) + IF_GETWIDTH(comp(1115, 100) /*clan_build_jobs:info_stone_wild*/)) + 1), 0, 0, 1, comp(1115, 101) /*clan_build_jobs:info_stone_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 105) /*clan_build_jobs:info_bars_wild*/) + IF_GETWIDTH(comp(1115, 105) /*clan_build_jobs:info_bars_wild*/)) + 1), 0, 0, 1, comp(1115, 106) /*clan_build_jobs:info_bars_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 110) /*clan_build_jobs:info_rations_wild*/) + IF_GETWIDTH(comp(1115, 110) /*clan_build_jobs:info_rations_wild*/)) + 1), 0, 0, 1, comp(1115, 111) /*clan_build_jobs:info_rations_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/) + IF_GETWIDTH(comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/)) + 1), 0, 0, 1, comp(1115, 116) /*clan_build_jobs:info_cloth_short*/);
            IF_SETPOSITION(((IF_GETX(comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/) + IF_GETWIDTH(comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/)) + 1), 0, 0, 1, comp(1115, 124) /*clan_build_jobs:info_precious_bars_short*/);
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 12) /*clan_build_jobs:info_timber_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 94) /*clan_build_jobs:info_timber_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 95) /*clan_build_jobs:info_timber_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 96) /*clan_build_jobs:info_timber_short*/), 0, 0, comp(1115, 96) /*clan_build_jobs:info_timber_short*/);
            string2 = `${inttostring((int14 - ((int20 + int26) + int32)), 10)}<br>of<br>${inttostring(int14, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 96));  // clan_build_jobs:info_timber_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 98) /*clan_build_jobs:info_stone_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 99) /*clan_build_jobs:info_stone_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 100) /*clan_build_jobs:info_stone_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 101) /*clan_build_jobs:info_stone_short*/), 0, 0, comp(1115, 101) /*clan_build_jobs:info_stone_short*/);
            string2 = `${inttostring((int15 - ((int21 + int27) + int33)), 10)}<br>of<br>${inttostring(int15, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 101));  // clan_build_jobs:info_stone_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 103) /*clan_build_jobs:info_bars_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 104) /*clan_build_jobs:info_bars_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 105) /*clan_build_jobs:info_bars_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 106) /*clan_build_jobs:info_bars_short*/), 0, 0, comp(1115, 106) /*clan_build_jobs:info_bars_short*/);
            string2 = `${inttostring((int16 - ((int22 + int28) + int34)), 10)}<br>of<br>${inttostring(int16, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 106));  // clan_build_jobs:info_bars_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 108) /*clan_build_jobs:info_rations_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 109) /*clan_build_jobs:info_rations_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 110) /*clan_build_jobs:info_rations_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 111) /*clan_build_jobs:info_rations_short*/), 0, 0, comp(1115, 111) /*clan_build_jobs:info_rations_short*/);
            string2 = `${inttostring((int17 - ((int23 + int29) + int35)), 10)}<br>of<br>${inttostring(int17, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 111));  // clan_build_jobs:info_rations_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 113) /*clan_build_jobs:info_cloth_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 114) /*clan_build_jobs:info_cloth_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 115) /*clan_build_jobs:info_cloth_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 116) /*clan_build_jobs:info_cloth_short*/), 0, 0, comp(1115, 116) /*clan_build_jobs:info_cloth_short*/);
            string2 = `${inttostring((int18 - ((int24 + int30) + int36)), 10)}<br>of<br>${inttostring(int18, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 116));  // clan_build_jobs:info_cloth_short
            IF_SETSIZE((((int42 - (IF_GETWIDTH(comp(1115, 121) /*clan_build_jobs:info_precious_bars_paid*/) + 1)) - (IF_GETWIDTH(comp(1115, 122) /*clan_build_jobs:info_precious_bars_stored*/) + 1)) - (IF_GETWIDTH(comp(1115, 123) /*clan_build_jobs:info_precious_bars_wild*/) + 1)), IF_GETHEIGHT(comp(1115, 124) /*clan_build_jobs:info_precious_bars_short*/), 0, 0, comp(1115, 124) /*clan_build_jobs:info_precious_bars_short*/);
            string2 = `${inttostring((int19 - ((int25 + int31) + int37)), 10)}<br>of<br>${inttostring(int19, 10)}`;
            IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 124));  // clan_build_jobs:info_precious_bars_short
            string2 = `${inttostring(int26, 10)} available<br>${inttostring(int32, 10)} from wildcard<br>${inttostring((int14 - (int26 + int32)), 10)} shortfall`;
            if ((int14 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 7));  // clan_build_jobs:info_timber_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 7));  // clan_build_jobs:info_timber_icon
            };
            string2 = `${inttostring(int27, 10)} available<br>${inttostring(int33, 10)} from wildcard<br>${inttostring((int15 - (int27 + int33)), 10)} shortfall`;
            if ((int15 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 44));  // clan_build_jobs:info_stone_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 44));  // clan_build_jobs:info_stone_icon
            };
            string2 = `${inttostring(int28, 10)} available<br>${inttostring(int34, 10)} from wildcard<br>${inttostring((int16 - (int28 + int34)), 10)} shortfall`;
            if ((int16 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 81));  // clan_build_jobs:info_bars_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 81));  // clan_build_jobs:info_bars_icon
            };
            string2 = `${inttostring(int29, 10)} available<br>${inttostring(int35, 10)} from wildcard<br>${inttostring((int17 - (int29 + int35)), 10)} shortfall`;
            if ((int17 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 85));  // clan_build_jobs:info_rations_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 85));  // clan_build_jobs:info_rations_icon
            };
            string2 = `${inttostring(int30, 10)} available<br>${inttostring(int36, 10)} from wildcard<br>${inttostring((int18 - (int30 + int36)), 10)} shortfall`;
            if ((int18 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 89));  // clan_build_jobs:info_cloth_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 89));  // clan_build_jobs:info_cloth_icon
            };
            string2 = `${inttostring(int31, 10)} available<br>${inttostring(int37, 10)} from wildcard<br>${inttostring((int19 - (int31 + int37)), 10)} shortfall`;
            if ((int19 == 0)) {
                IF_SETONMOUSEREPEAT(callback(), comp(1115, 93));  // clan_build_jobs:info_precious_bars_icon
            } else {
                IF_SETONMOUSEREPEAT(callback(script8799, string2, -2147483645, -2147483643), comp(1115, 93));  // clan_build_jobs:info_precious_bars_icon
            };
        };
        IF_SETTEXT(string1, comp(1115, 79));  // clan_build_jobs:info_jobtype
    };
    return;
}