//
function script13831(int0: unknown_int): void {
    var int1 = script6431();
    if ((int1 == true)) {
        IF_SETNOCLICKTHROUGH(1, comp(1477, 808));
        IF_SETSIZE(0, 0, 1, 1, comp(274, 0));
        IF_SETOP(1, "", comp(1477, 809));
        if ((IF_FIND(comp(274, 0)) == 1)) {
            unk11040(callback(script9537));
            CC_CALLONRESIZE();
        };
        if ((script248() == 1)) {
            IF_SETHIDE(true, comp(274, 15));
            IF_SETHIDE(true, comp(274, 25));
        };
    } else {
        IF_SETNOCLICKTHROUGH(0, comp(1477, 808));
        IF_SETOP(1, "", comp(1477, 809));
        IF_SETSIZE(470, 234, 0, 0, comp(1433, 0));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1433, 4));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1433, 23));
        IF_SETTEXTFONT(26 as fontmetrics, comp(1433, 48));
    };
    var int2 = false;
    var int3 = false;
    var int4 = true;
    var int5 = true;
    if ((varbitplayer_38842 == 1)) {
        int5 = false;
        int3 = true;
    } else if ((varbitplayer_22875 == 1)) {
        IF_SETSIZE(0, 68, 1, 0, comp(1433, 3));
        IF_SETSIZE(0, 40, 1, 0, comp(1433, 5));
    } else {
        IF_SETSIZE(0, 63, 1, 0, comp(1433, 3));
        IF_SETSIZE(0, 35, 1, 0, comp(1433, 5));
    };
    var int6 = 1;
    var int7 = 0;
    if ((script15532(0) == 1)) {
        int2 = true;
        int3 = true;
        int5 = true;
        int7 = 1;
        int4 = false;
        int6 = 0;
    };
    var int8 = 0;
    var int9 = 5;
    var int10 = -1;
    if ((int1 == false)) {
        int8 = script13832(comp(1433, 3), int2, int8, int9);
        int8 = script13832(comp(1433, 9), int4, int8, int9);
        if ((varbitplayer_22875 == 1)) {
            int8 = (int8 - 5);
        };
        int8 = script13832(comp(1433, 14), false, int8, int9);
        int8 = script13832(comp(1433, 19), int3, int8, int9);
        int8 = script13832(comp(1433, 31), int5, int8, int9);
        int8 = script13832(comp(1433, 40), false, int8, int9);
        int9 = 240;
        int8 = 0;
        int8 = script13832(comp(1433, 47), false, int8, int9);
        int8 = script13832(comp(1433, 61), false, int8, int9);
    };
    int8 = (int8 + 40);
    if ((int2 == false)) {
        script13836(comp(1433, 6), comp(1433, 7));
        IF_SETSIZE(220, 63, 0, 0, comp(1433, 3));
    };
    if ((int3 == false)) {
        if (((((varbitclient_19036 + varbitclient_19628) + varbitclient_31443) + varbitclient_31921) == 0)) {
            IF_SETHIDE(true, comp(1433, 23));
            IF_SETHIDE(true, comp(1433, 24));
        } else {
            script2708(comp(1433, 25), comp(1433, 26), 7711 as cs2enum, -1, "Select a preset to load", 0, script6428(varbitplayer_1899, 1));
        };
    };
    script14043();
    script7136();
    script2935();
    if ((int0 == 1)) {
        IF_CLOSE();
    };
    return;
}