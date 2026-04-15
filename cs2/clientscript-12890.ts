//
function script12890(int0: cs2enum, int1: unknown_int, string0: string): void {
    var int2 = comp(1803, 5);
    var int3 = comp(1803, 13);
    var int4 = comp(1803, 10);
    switch (int1) {
        case 1: {
            break;
        }
        case 2: {
            int2 = comp(1803, 4);
            int3 = comp(1803, 23);
            int4 = comp(1803, 20);
            break;
        }
    };
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETHIDE(false, int2);
    };
    var int5 = -1 as graphic;
    int5 = enum_getvalue(0, 23, int0, MAP_LANG());
    IF_SETTEXT(string0, int3);
    IF_SETOP(1, string0, int4);
    stack(int5);
    stack(118161408);
    IF_SETGRAPHIC();
    return;
}