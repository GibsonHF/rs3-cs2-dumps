//
function script12890(int0: number, int1: number, string0: string): void {
    var int2 = 118161413;
    var int3 = 118161421;
    var int4 = 118161418;
    switch (int1) {
        case 1: {
            break;
        }
        case 2: {
            int2 = 118161412;
            int3 = 118161431;
            int4 = 118161428;
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETHIDE(0, int2);
    };
    var int5 = -1 as graphic;
    int5 = enum_getvalue(0, 23, int0, MAP_LANG());
    IF_SETTEXT(string0, int3);
    IF_SETOP(1, string0, int4);
    IF_SETGRAPHIC(int5, 118161408);
    return;
}