//
function script7123(): void {
    if (((varplayer_1170 == -1 as obj) || (varplayer_1170 == 0 as obj))) {
        return;
    };
    var int0 = varplayer_1170;
    if ((int0 == -1 as obj)) {
        IF_SETHIDE(true, comp(1370, 5));
        IF_SETHIDE(true, comp(1370, 15));
        IF_SETHIDE(true, comp(1370, 23));
        return;
    };
    IF_SETHIDE(false, comp(1370, 5));
    IF_SETHIDE(false, comp(1370, 15));
    IF_SETHIDE(false, comp(1370, 23));
    var int1 = item_getparam(int0, 2989);
    if ((int1 == -1 as obj)) {
        int1 = int0;
    };
    var int2 = item_getparam(int0, 3858);
    if ((int2 > -1)) {
        IF_SETHIDE(false, comp(1370, 9));
        IF_SETHIDE(false, comp(1370, 8));
        IF_SETHIDE(false, comp(1370, 7));
        switch (int2) {
            case 0: {
                stack(15217);
                stack(89784329);
                IF_SETGRAPHIC();
                stack(15218);
                stack(89784328);
                IF_SETGRAPHIC();
                stack(15218);
                stack(89784327);
                IF_SETGRAPHIC();
                break;
            }
            case 1: {
                stack(15217);
                stack(89784329);
                IF_SETGRAPHIC();
                stack(15217);
                stack(89784328);
                IF_SETGRAPHIC();
                stack(15218);
                stack(89784327);
                IF_SETGRAPHIC();
                break;
            }
            case 2: {
                stack(15217);
                stack(89784329);
                IF_SETGRAPHIC();
                stack(15217);
                stack(89784328);
                IF_SETGRAPHIC();
                stack(15217);
                stack(89784327);
                IF_SETGRAPHIC();
                break;
            }
        };
    } else {
        IF_SETHIDE(true, comp(1370, 9));
        IF_SETHIDE(true, comp(1370, 8));
        IF_SETHIDE(true, comp(1370, 7));
    };
    if ((item_getparam(int0, 5491) != -1 as graphic)) {
        stack(item_getparam(int0, 5491));
        stack(89784332);
        IF_SETGRAPHIC();
        IF_SETSIZE(32, 32, 0, 0, 89784332);
    } else {
        if ((item_getparam(int0, 2653) > 1)) {
            IF_SETOBJECT(int1, script18374(int0), comp(1370, 12));
        } else if ((item_getparam(int0, 3860) > 1)) {
            IF_SETOBJECT(int1, item_getparam(int0, 3860), comp(1370, 12));
        } else {
            IF_SETOBJECT_NONUM(int1, -1, comp(1370, 12));
        };
        IF_SETSIZE(36, 32, 0, 0, comp(1370, 12));
    };
    if (((STRING_LENGTH(item_getparam(int0, 3859)) > 0) && (item_getparam(int0, 2989) != -1 as obj))) {
        IF_SETONMOUSEREPEAT(callback(script3584, item_getparam(int0, 2989), item_getparam(int0, 2989), -1, -2147483645, -2147483643, 0, 1, ""), 89784325);
    } else {
        IF_SETONMOUSEREPEAT(callback(script14194, int0, -2147483645, -2147483643), 89784325);
    };
    var int3 = script7124(comp(1370, 13), int0, script18374(int0));
    script7126(comp(1370, 16), int0);
    var int4 = ((IF_GETY(comp(1370, 16)) + IF_GETHEIGHT(comp(1370, 16))) + 2);
    var int5 = 0;
    var int6 = ((IF_GETY(comp(1370, 20)) + IF_GETHEIGHT(comp(1370, 20))) + 2);
    IF_SETPOSITION(IF_GETX(comp(1370, 19)), int4, 0, 0, comp(1370, 19));
    int5 = script7127(int0, int6, comp(1370, 19));
    if ((int5 > int6)) {
        IF_SETHIDE(false, comp(1370, 19));
        int4 = ((int4 + int5) + 2);
    } else {
        IF_SETHIDE(true, comp(1370, 19));
    };
    IF_SETPOSITION(IF_GETX(comp(1370, 21)), int4, 0, 0, comp(1370, 21));
    int6 = ((IF_GETY(comp(1370, 22)) + IF_GETHEIGHT(comp(1370, 22))) + 2);
    int5 = script7129(int0, int6, comp(1370, 21));
    if ((int5 > int6)) {
        IF_SETHIDE(false, comp(1370, 21));
        int4 = (int4 + int5);
    } else {
        IF_SETHIDE(true, comp(1370, 21));
    };
    if ((IF_GETHEIGHT(comp(1370, 15)) < int4)) {
        IF_SETSCROLLSIZE(IF_GETWIDTH(comp(1370, 15)), int4, comp(1370, 15));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1370, 15));
    };
    IF_SETSCROLLPOS(0, 0, comp(1370, 15));
    script31(comp(1370, 23), comp(1370, 15), 4343 as graphic, 4340 as graphic, 4341 as graphic, 4342 as graphic, 4337 as graphic, 4336 as graphic);
    return;
}