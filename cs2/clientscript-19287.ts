//
function script19287(): void {
    var int0 = dbrow_getfield(varplayer_11901, 1216528, 0);
    if ((varplayer_11882 > 0)) {
        script19221(dbrow_getfield(varplayer_11902, 1228848, 0), comp(1290, 83));
        IF_SETHIDE(false, comp(1290, 88));
        IF_SETTEXT("Attack", comp(1290, 204));
    } else {
        script19291();
    };
    IF_SETPOSITION(0, 0, 1, 1, comp(1290, 83));
    var string0 = dbrow_getfield(varplayer_11902, 1228816, 0);
    var string1 = dbrow_getfield(varplayer_11902, 1228832, 0);
    IF_SETTEXT(string0, comp(1290, 103));
    IF_SETOPBASE(`<col=FFFF00>${string0}</col> <col=FF0000>(level: ???)</col>`, comp(1290, 88));
    IF_SETONOP(callback(script7774, string1, -2147483645, -2147483643, 0), 84541528);
    var int1 = -1;
    var int2 = -1;
    var int3 = 0;
    var int4 = 1;
    var int5 = 0;
    while ((++int5 <= 8)) {
        [int2, int3, int4] = script19217(int5);
        if ((MODULO(((int5 - 1) / 2), 2) == 0)) {
            int1 = comp(1290, 86);
        } else {
            int1 = comp(1290, 87);
        };
        if ((unk11011(int5, 0, int1) == 0)) {
            script15938(int1, int5, 0, 0, 0, 1, 1, 82, 100, 0, 0);
            script7918(int5, 1, 0, 0, 1, 1, 0, 0, 1, 1, 20482 as graphic);
            script7918(int5, 2, 0, 0, 1, 1, 0, 0, 1, 1, script227(int4));
            CC_SETTRANS(160);
        };
    };
    script19270(comp(1290, 203), comp(1290, 205));
    return;
}