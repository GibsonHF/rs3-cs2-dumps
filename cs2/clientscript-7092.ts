//
function script7092(): void {
    if (((varplayer_1175 == -1 as obj) || (varplayer_1175 == 0 as obj))) {
        return;
    };
    var int0 = item_getparam(varplayer_1175, 2989);
    if ((int0 == -1 as obj)) {
        int0 = varplayer_1175;
    };
    var int1 = script18374(varplayer_1175);
    if ((item_getparam(varplayer_1175, 5445) == 1)) {
        int0 = varclient_5123;
        int1 = varclient_5124;
    };
    if (((int1 <= 1) && (item_getparam(varplayer_1175, 3860) > 1))) {
        int1 = item_getparam(varplayer_1175, 3860);
    };
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var string0 = "Make-X";
    if ((varclient_6404 != -1 as cs2enum)) {
        int4 = enum_getvalue(26, 0, 13284 as cs2enum, varclient_6404);
        string0 = enum_getvalue(0, 36, 13761 as cs2enum, int4);
    };
    if ((item_getparam(varplayer_1175, 5491) != -1 as graphic)) {
        IF_SETGRAPHIC(item_getparam(varplayer_1175, 5491), comp(1251, 0));
        IF_SETSIZE(32, 32, 0, 0, comp(1251, 0));
        IF_SETPOSITION(14, 12, 0, 0, comp(1251, 0));
    } else {
        if ((int1 > 1)) {
            IF_SETOBJECT(int0, int1, comp(1251, 0));
        } else {
            IF_SETOBJECT_NONUM(int0, -1, comp(1251, 0));
        };
        IF_SETSIZE(36, 32, 0, 0, comp(1251, 0));
        IF_SETPOSITION(12, 12, 0, 0, comp(1251, 0));
    };
    var int5 = script7124(81985537, int0, int1);
    IF_SETSIZE(IF_GETWIDTH(comp(1251, 8)), MAX(165, (165 + (int5 - 16))), 0, 0, comp(1251, 8));
    script8421(81985571, 81985573, 81985572, 81985574, string0, 21217, 1018, 1, -1, -1);
    var int6 = item_getparam(varplayer_1175, 2696);
    var int7 = item_getparam(varplayer_1175, 2698);
    if ((int6 == 0)) {
        IF_SETHIDE(true, comp(1251, 5));
    } else {
        IF_SETHIDE(false, comp(1251, 5));
        if ((int7 == 0)) {
            IF_SETPOSITION(170, 24, 0, 0, comp(1251, 5));
        } else {
            IF_SETPOSITION(135, 24, 0, 0, comp(1251, 5));
        };
        IF_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int6), comp(1251, 16));
        if (((varplayer_1176 == 0) && (varplayer_1177 == 0))) {
            script7102("0", 81985553);
        };
    };
    if ((int7 == 0)) {
        IF_SETHIDE(true, comp(1251, 6));
    } else {
        IF_SETHIDE(false, comp(1251, 6));
        if ((int6 == 0)) {
            IF_SETPOSITION(170, 24, 0, 0, comp(1251, 6));
        } else {
            IF_SETPOSITION(230, 24, 0, 0, comp(1251, 6));
        };
        IF_SETGRAPHIC(enum_getvalue(0, 23, 371 as cs2enum, int7), comp(1251, 28));
        if (((varplayer_1176 == 0) && (varplayer_1177 == 0))) {
            script7102("0", 81985566);
        };
    };
    var string1 = "";
    if (((varplayer_1176 == 0) && (varplayer_1177 == 0))) {
        script4542(0, 81985559, -1);
        script4212(81985563, "0/0", 26, 16777215, 0);
    };
    if ((script6431() == 0)) {
        IF_SETHIDE(false, comp(1251, 13));
        IF_SETHIDE(true, comp(1251, 14));
    } else {
        IF_SETHIDE(true, comp(1251, 13));
        IF_SETHIDE(true, comp(1251, 14));
        IF_SETPOSITION(0, 0, 1, 2, comp(1251, 2));
        IF_SETSIZE(IF_GETWIDTH(comp(1251, 8)), (IF_GETHEIGHT(comp(1251, 8)) - 45), 0, 0, comp(1251, 8));
    };
    IF_SETSIZE(IF_GETWIDTH(comp(1477, 623)), (IF_GETHEIGHT(comp(1251, 8)) + 35), 0, 0, comp(1477, 623));
    if ((varbitplayer_3034 == 1)) {
        IF_SETHIDE(true, comp(1251, 8));
    } else {
        IF_SETHIDE(false, comp(1251, 8));
    };
    return;
}