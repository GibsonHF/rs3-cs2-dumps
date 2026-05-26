//
function script3353(int0: number, int1: number, string0: string): void {
    var int2 = 86638592;
    var int3 = enum_getvalue(0, 73, 14118 as cs2enum, varplayer_7989);
    var int4 = struct_getparam(int3, 7275);
    var int5 = 270;
    var int6 = (3 + (PARAHEIGHT(string0, (int5 - 3), int4) * enum_getvalue(25, 0, 8549 as cs2enum, int4)));
    var int7 = ((IF_GETHEIGHT(86638598) + int6) + 15);
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
    if ((IF_GETHEIGHT(86638598) > 0)) {
        script6199(int2, struct_getparam(int3, 7270), struct_getparam(int3, 7266), (int6 + 5), int5, struct_getparam(int3, 7266));
    };
    script7924(int2, IF_GETNEXTSUBID(int2), struct_getparam(int3, 7266), int6, (int5 - struct_getparam(int3, 7266)), 0, struct_getparam(int3, 7268), 1, 0, 0, 0);
    script6199(int2, struct_getparam(int3, 7269), 0, int6, struct_getparam(int3, 7266), ((int7 - int6) - struct_getparam(int3, 7266)));
    script7924(int2, IF_GETNEXTSUBID(int2), struct_getparam(int3, 7266), ((int7 - int6) - struct_getparam(int3, 7266)), (int5 - struct_getparam(int3, 7266)), int6, struct_getparam(int3, 7269), 1, 0, 1, 0);
    script4512(int2, struct_getparam(int3, 7271), struct_getparam(int3, 7271), 0, (int7 - struct_getparam(int3, 7271)), struct_getparam(int3, 7272));
    script6199(int2, struct_getparam(int3, 7270), struct_getparam(int3, 7271), (int7 - struct_getparam(int3, 7266)), (int5 - (2 * struct_getparam(int3, 7271))), struct_getparam(int3, 7266));
    script7924(int2, IF_GETNEXTSUBID(int2), struct_getparam(int3, 7271), struct_getparam(int3, 7271), (int5 - struct_getparam(int3, 7271)), (int7 - struct_getparam(int3, 7271)), struct_getparam(int3, 7272), 1, 0, 0, 0);
    script10629(int2, IF_GETNEXTSUBID(int2), (int5 - 3), (int6 - 3), 0, 3, string0, struct_getparam(int3, 7273), int4, 1, 0, enum_getvalue(25, 0, 8549 as cs2enum, int4), 0);
    [int8, int9] = script3351(int5, int7, int0, int1);
    IF_SETSCROLLPOS(0, 0, 86638599);
    if ((varclient_6403 != 0)) {
        IF_SETSCROLLSIZE(0, (IF_GETHEIGHT(86638599) + 20), 86638599);
        if ((IF_GETHEIGHT(86638599) < int7)) {
            IF_SETHIDE(1, 86638600);
        } else {
            IF_SETHIDE(0, 86638600);
        };
    };
    IF_SETSIZE(int5, int7, 0, 0, 86638598);
    IF_SETPOSITION(int8, int9, 0, 0, 86638598);
    IF_SETPOSITION(0, (int6 + 9), 0, 0, 86638599);
    if ((varclient_6403 != 0)) {
        script7791(86638600, 86638599);
    } else {
        IF_SETHIDE(1, 86638600);
    };
    return;
}