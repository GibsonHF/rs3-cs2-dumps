//
function script9511(int0: number): void {
    if ((IF_GETNEXTSUBID(33882316) == 0)) {
        return;
    };
    script10185();
    script14385();
    var int1 = script5792();
    var int2 = 0;
    var int3 = 0;
    var int4 = MIN(int1, (15 + 1));
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1;
    if ((varbitplayer_45192 == 1)) {
        int8 = IF_GETHEIGHT(33882280);
        script14408(33882278, 24382, 0, 0, 0, 0, script9670(1, varbitplayer_45141));
    } else {
        int8 = IF_GETWIDTH(33882280);
        script14408(33882278, 26573, 0, 0, 0, 0, script9670(1, varbitplayer_45141));
    };
    while ((int2 < int4)) {
        if ((int2 >= 2)) {
            int6 = script14372(int2);
            int7 = script5799(int6);
        };
        if ((int7 > 0)) {
            script9587(int2, int6, int7, int0, int5, 0);
            int5 = (int5 + 48);
        };
        int2 = (int2 + 1);
    };
    script9587(int2, int2, 0, 0, int5, 1);
    if ((int2 != (15 + 1))) {
        script9587(int2, int2, 0, 0, int5, 2);
        int5 = (int5 + 48);
    };
    if ((IF_FIND(33882280) == 1)) {
        int3 = cc_getparam(3843);
        if ((int3 != int4)) {
            cc_setparam(3843, int4);
        };
    };
    if ((varbitplayer_45192 == 1)) {
        IF_SETSCROLLSIZE(0, int5, 33882280);
        IF_SETSCROLLSIZE(0, ((int5 + 12) + 12), 33882283);
    } else {
        IF_SETSCROLLSIZE(int5, 0, 33882280);
        IF_SETSCROLLSIZE(((int5 + 12) + 12), 0, 33882283);
    };
    if ((int5 > int8)) {
        if (((int3 != -1) && (int3 < int4))) {
            IF_TRIGGEROP(33882274, -1, 1);
        };
    } else {
        IF_SETSCROLLPOS(0, 0, 33882280);
        IF_SETSCROLLPOS(0, 0, 33882283);
    };
    script10241();
    return;
}