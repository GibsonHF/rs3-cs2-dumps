//
function script13852(int0: number, int1: number): void {
    var int2 = script6431();
    if ((varbitplayer_27169 == 1)) {
        script13853();
        return;
    };
    if ((int2 == 1)) {
        script13853();
    } else if ((script20475() == 0)) {
        script13853();
        return;
    };
    if ((script15532(0) == 1)) {
        script13853();
        script13854(1, 0, 0, 0, 0);
        return;
    };
    var string0 = "Switch layout: Edit Mode";
    var int3 = 17;
    var int4 = -1;
    var int5 = -1;
    if ((varbitclient_42113 == 1)) {
        if ((int2 == 0)) {
            if ((script2384(0, 1) < 0)) {
                IF_SETTEXT("Click on the cog icon to add buttons to this panel.", comp(1431, 7));  // toplevel_v2_ribbon:error_msg
            } else {
                IF_SETTEXT("", comp(1431, 7));  // toplevel_v2_ribbon:error_msg
            };
        } else {
            IF_SETTEXT("", comp(1431, 7));  // toplevel_v2_ribbon:error_msg
        };
        if ((int2 == 0)) {
            IF_SETHIDE(false, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
            IF_SETHIDE(false, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
            if ((varplayer_12314 > 0)) {
                IF_SETGRAPHIC(script20124(), comp(1431, 11));  // toplevel_v2_ribbon:league_button
                IF_SETHIDE(false, comp(1431, 11));  // toplevel_v2_ribbon:league_button
                script20918();
                int5 = [];
                IF_SETONMOUSEOVER(callback(script44, -2147483645, int5), comp(1431, 11));  // toplevel_v2_ribbon:league_button
                int5 = script20124();
                IF_SETONMOUSELEAVE(callback(script44, -2147483645, int5), comp(1431, 11));  // toplevel_v2_ribbon:league_button
            } else {
                IF_SETHIDE(true, comp(1431, 11));  // toplevel_v2_ribbon:league_button
            };
        } else {
            IF_SETHIDE(true, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
            IF_SETHIDE(true, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
            IF_SETHIDE(true, comp(1431, 11));  // toplevel_v2_ribbon:league_button
            int3 = 0;
            int4 = 0;
        };
        if ((int0 >= int1)) {
            script13854(0, 4, 3, 2, 0);
            IF_SETPOSITION(0, 0, 2, 2, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
            IF_SETPOSITION(0, 0, 2, 1, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int1));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));  // toplevel_v2_ribbon:league_button
                IF_SETPOSITION(0, 0, 0, 1, comp(1431, 11));  // toplevel_v2_ribbon:league_button
            };
            IF_SETSIZE((17 + int4), 0, 1, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
            IF_SETPOSITION(int4, 0, 0, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
        } else {
            script13854(0, 2, 3, 2, 2);
            IF_SETPOSITION(0, 0, 0, 2, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
            IF_SETPOSITION(2, 0, 1, 2, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int0));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));  // toplevel_v2_ribbon:league_button
                IF_SETPOSITION(0, 0, 1, 0, comp(1431, 11));  // toplevel_v2_ribbon:league_button
            };
            IF_SETSIZE(0, (int3 + int4), 1, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
            IF_SETPOSITION(0, int4, 1, 0, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1431, 10));  // toplevel_v2_ribbon:mode_button
        return;
    };
    if ((int2 == 0)) {
        IF_SETHIDE(true, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
        IF_SETHIDE(false, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
        if ((varplayer_12314 > 0)) {
            IF_SETGRAPHIC(script20124(), comp(1431, 11));  // toplevel_v2_ribbon:league_button
            IF_SETHIDE(false, comp(1431, 11));  // toplevel_v2_ribbon:league_button
        } else {
            IF_SETHIDE(true, comp(1431, 11));  // toplevel_v2_ribbon:league_button
        };
    } else {
        IF_SETHIDE(true, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
        IF_SETHIDE(true, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
        IF_SETHIDE(true, comp(1431, 11));  // toplevel_v2_ribbon:league_button
    };
    string0 = "Switch layout: Default Mode";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), comp(1431, 10));  // toplevel_v2_ribbon:mode_button
    IF_SETHIDE(true, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
    IF_SETTEXT("", comp(1431, 7));  // toplevel_v2_ribbon:error_msg
    if ((varbitplayer_38842 == 1)) {
        varbitclient_42113 = 1;
        script13852(int0, int1);
    } else {
        IF_SETSIZE(15, 15, 0, 0, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
        IF_SETSIZE(15, 15, 0, 0, comp(1431, 9));  // toplevel_v2_ribbon:extra_button
        if ((int0 >= int1)) {
            IF_SETPOSITION(0, 0, 2, 2, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int1));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));  // toplevel_v2_ribbon:league_button
                IF_SETPOSITION(0, 0, 0, 1, comp(1431, 11));  // toplevel_v2_ribbon:league_button
            };
            IF_SETSIZE((17 + int4), 0, 1, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
            IF_SETPOSITION(int4, 0, 0, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
            script13854(0, 4, 3, 2, 0);
        } else {
            IF_SETPOSITION(0, 0, 0, 2, comp(1431, 10));  // toplevel_v2_ribbon:mode_button
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int0));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));  // toplevel_v2_ribbon:league_button
                IF_SETPOSITION(0, 0, 1, 0, comp(1431, 11));  // toplevel_v2_ribbon:league_button
            };
            IF_SETSIZE(0, (17 + int4), 1, 1, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
            IF_SETPOSITION(0, int4, 1, 0, comp(1431, 8));  // toplevel_v2_ribbon:window_holder
            script13854(0, 2, 3, 2, 2);
        };
    };
    return;
}