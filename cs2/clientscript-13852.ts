//
function script13852(int0: int, int1: int): void {
    var int2 = script6431();
    if ((varbitplayer_27169 == 1)) {
        script13853();
        return;
    };
    if ((int2 == true)) {
        script13853();
    } else if ((script20475() == 0)) {
        script13853();
        return;
    };
    if ((script15532(0) == 1)) {
        script13853();
        script13854(true, 0, 0, 0, 0);
        return;
    };
    var string0 = "Switch layout: Edit Mode";
    var int3 = 17;
    var int4 = -1;
    if ((varbitclient_42113 == 1)) {
        if (((int2 == false) && (script2384(0, 1) < 0))) {
            IF_SETTEXT("Click on the cog icon to add buttons to this panel.", comp(1431, 7));
        } else {
            IF_SETTEXT("", comp(1431, 7));
        };
        if ((int2 == false)) {
            IF_SETHIDE(false, comp(1431, 9));
            IF_SETHIDE(false, comp(1431, 10));
            if ((varplayer_12314 > 0)) {
                stack(script20124());
                stack(93782027);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, 93782027);
            } else {
                IF_SETHIDE(true, comp(1431, 11));
            };
        } else {
            IF_SETHIDE(true, comp(1431, 9));
            IF_SETHIDE(true, comp(1431, 10));
            IF_SETHIDE(true, comp(1431, 11));
            int3 = 0;
            int4 = 0;
        };
        if ((int0 >= int1)) {
            script13854(false, 4, 3, 2, 0);
            IF_SETPOSITION(0, 0, 2, 2, comp(1431, 10));
            IF_SETPOSITION(0, 0, 2, 1, comp(1431, 9));
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int1));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));
                IF_SETPOSITION(0, 0, 0, 1, comp(1431, 11));
            };
            IF_SETSIZE((17 + int4), 0, 1, 1, comp(1431, 8));
            IF_SETPOSITION(int4, 0, 0, 1, comp(1431, 8));
        } else {
            script13854(false, 2, 3, 2, 2);
            IF_SETPOSITION(0, 0, 0, 2, comp(1431, 10));
            IF_SETPOSITION(2, 0, 1, 2, comp(1431, 9));
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int0));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));
                IF_SETPOSITION(0, 0, 1, 0, comp(1431, 11));
            };
            IF_SETSIZE(0, (int3 + int4), 1, 1, comp(1431, 8));
            IF_SETPOSITION(0, int4, 1, 0, comp(1431, 8));
        };
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 93782026);
        return;
    };
    if ((int2 == false)) {
        IF_SETHIDE(true, comp(1431, 9));
        IF_SETHIDE(false, comp(1431, 10));
        if ((varplayer_12314 > 0)) {
            stack(script20124());
            stack(93782027);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 93782027);
        } else {
            IF_SETHIDE(true, comp(1431, 11));
        };
    } else {
        IF_SETHIDE(true, comp(1431, 9));
        IF_SETHIDE(true, comp(1431, 10));
        IF_SETHIDE(true, comp(1431, 11));
    };
    string0 = "Switch layout: Default Mode";
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 93782026);
    IF_SETHIDE(1, 93782025);
    IF_SETTEXT("", 93782023);
    if ((varbitplayer_38842 == 1)) {
        varbitclient_42113 = 1;
        script13852(int0, int1);
    } else {
        IF_SETSIZE(15, 15, 0, 0, comp(1431, 10));
        IF_SETSIZE(15, 15, 0, 0, comp(1431, 9));
        if ((int0 >= int1)) {
            IF_SETPOSITION(0, 0, 2, 2, comp(1431, 10));
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int1));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));
                IF_SETPOSITION(0, 0, 0, 1, comp(1431, 11));
            };
            IF_SETSIZE((17 + int4), 0, 1, 1, comp(1431, 8));
            IF_SETPOSITION(int4, 0, 0, 1, comp(1431, 8));
            script13854(false, 4, 3, 2, 0);
        } else {
            IF_SETPOSITION(0, 0, 0, 2, comp(1431, 10));
            if (((varplayer_12314 > 0) && (int4 == -1))) {
                int4 = MAX(32, MIN(48, int0));
                IF_SETSIZE(int4, int4, 0, 0, comp(1431, 11));
                IF_SETPOSITION(0, 0, 1, 0, comp(1431, 11));
            };
            IF_SETSIZE(0, (17 + int4), 1, 1, comp(1431, 8));
            IF_SETPOSITION(0, int4, 1, 0, comp(1431, 8));
            script13854(false, 2, 3, 2, 2);
        };
    };
    return;
}