//
function script2878(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component): void {
    if (((((IF_GETGRAPHIC(int2) != 16942 as graphic) && (IF_GETGRAPHIC(int2) != 16944 as graphic)) && (IF_GETGRAPHIC(int3) != 16926 as graphic)) && (IF_GETGRAPHIC(int3) != 16928 as graphic))) {
        script8808();
        varclient_1 = 0;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(int4);
    var int6 = 0;
    while ((int6 < 100)) {
        CC_CREATE(int0, 4, int6);
        int6 = (int6 + 1);
    };
    while ((int6 < (100 * 2))) {
        CC_CREATE(int0, 5, int6);
        int6 = (int6 + 1);
    };
    var int7 = 5;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    while ((int8 < 100)) {
        int9 = script3079(int8);
        int7 = script2879(int0, int8, int9, int7);
        if (((int9 != 32767) && (int10 < 100))) {
            int10 = (int10 + 1);
        };
        int8 = (int8 + 1);
    };
    if (((varbitplayer_190 == 32767) && (varclient_1077 == true))) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(15, int7, 0, 0);
    CC_SETSIZE(150, int7, 0, 1);
    if (((int7 + 15) > IF_GETHEIGHT(int0))) {
        script7791(int4, int0);
        IF_SETSCROLLSIZE(0, (int7 + 15), int0);
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
    };
    IF_SETTEXT(`Playlist: ${inttostring(int10, 10)} / ${inttostring(100, 10)}`, int5);
    return;
}