//
function script3353(int0: component, int1: int, string0: string): void {
    var int2 = comp(1322, 0);
    var int3 = enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989);
    var int4 = struct_getparam(int3, 7275);
    var int5 = 270;
    var int6 = (3 + (PARAHEIGHT(string0, (int5 - 3), int4) * enum_getvalue(25, 0, 8549 as cs2enum, int4)));
    var int7 = ((IF_GETHEIGHT(comp(1322, 6)) + int6) + 15);
    int5 = (int5 + 10);
    var int8 = 0;
    var int9 = 0;
    CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETFILL(1);
    CC_SETCOLOUR(struct_getparam(int3, 7260));
    script4512(int2, struct_getparam(int3, 7266), int6, 0, 0, struct_getparam(int3, 7268));
    script6199(int2, struct_getparam(int3, 7270), struct_getparam(int3, 7266), 0, int5, struct_getparam(int3, 7266));
    script10066(int2, IF_GETNEXTSUBID(int2), (int5 - 6), (int6 + 6), 3, 3, 1444876, 1, 50);
    if ((IF_GETHEIGHT(comp(1322, 6)) > 0)) {
        script6199(int2, struct_getparam(int3, 7270), struct_getparam(int3, 7266), (int6 + 5), int5, struct_getparam(int3, 7266));
    };
    script7924(int2, IF_GETNEXTSUBID(int2), struct_getparam(int3, 7266), int6, (int5 - struct_getparam(int3, 7266)), 0, struct_getparam(int3, 7268), true, false, false, 0);
    script6199(int2, struct_getparam(int3, 7269), 0, int6, struct_getparam(int3, 7266), ((int7 - int6) - struct_getparam(int3, 7266)));
    script7924(int2, IF_GETNEXTSUBID(int2), struct_getparam(int3, 7266), ((int7 - int6) - struct_getparam(int3, 7266)), (int5 - struct_getparam(int3, 7266)), int6, struct_getparam(int3, 7269), true, false, true, 0);
    script4512(int2, struct_getparam(int3, 7271), struct_getparam(int3, 7271), 0, (int7 - struct_getparam(int3, 7271)), struct_getparam(int3, 7272));
    script6199(int2, struct_getparam(int3, 7270), struct_getparam(int3, 7271), (int7 - struct_getparam(int3, 7266)), (int5 - (2 * struct_getparam(int3, 7271))), struct_getparam(int3, 7266));
    script7924(int2, IF_GETNEXTSUBID(int2), struct_getparam(int3, 7271), struct_getparam(int3, 7271), (int5 - struct_getparam(int3, 7271)), (int7 - struct_getparam(int3, 7271)), struct_getparam(int3, 7272), true, false, false, 0);
    script10629(int2, IF_GETNEXTSUBID(int2), (int5 - 3), (int6 - 3), 0, 3, string0, struct_getparam(int3, 7273), int4, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, int4), false);
    [int8, int9] = script3351(int5, int7, int0, int1);
    IF_SETSCROLLPOS(0, 0, comp(1322, 7));
    if ((varclient_6403 != 0)) {
        IF_SETSCROLLSIZE(0, (IF_GETHEIGHT(comp(1322, 7)) + 20), comp(1322, 7));
        if ((IF_GETHEIGHT(comp(1322, 7)) < int7)) {
            IF_SETHIDE(true, comp(1322, 8));
        } else {
            IF_SETHIDE(false, comp(1322, 8));
        };
    };
    IF_SETSIZE(int5, int7, 0, 0, comp(1322, 6));
    IF_SETPOSITION(int8, int9, 0, 0, comp(1322, 6));
    IF_SETPOSITION(0, (int6 + 9), 0, 0, comp(1322, 7));
    if ((varclient_6403 != 0)) {
        script7791(comp(1322, 8), comp(1322, 7));
    } else {
        IF_SETHIDE(true, comp(1322, 8));
    };
    return;
}