//
function script16694(int0: unknown_int): void {
    var int1 = IF_GETWIDTH(comp(998, 0));
    var int2 = IF_GETWIDTH(comp(998, 3));
    var int3 = IF_GETWIDTH(comp(998, 17));
    var int4 = IF_GETHEIGHT(comp(998, 0));
    var int5 = IF_GETHEIGHT(comp(998, 3));
    var int6 = IF_GETHEIGHT(comp(998, 17));
    var int7 = comp(998, 0);
    var int8 = comp(998, 3);
    var int9 = comp(998, 17);
    switch (int0) {
        case 486: {
            int1 = IF_GETWIDTH(comp(486, 0));
            int2 = IF_GETWIDTH(comp(486, 3));
            int3 = IF_GETWIDTH(comp(486, 22));
            int4 = IF_GETHEIGHT(comp(486, 0));
            int5 = IF_GETHEIGHT(comp(486, 3));
            int6 = IF_GETHEIGHT(comp(486, 22));
            int7 = comp(486, 0);
            int8 = comp(486, 3);
            int9 = comp(486, 22);
            break;
        }
    };
    if ((script6431() == true)) {
        [int1, int3] = [492, 232];
    };
    IF_SETSIZE(int1, int4, 0, 0, int7);
    IF_SETSIZE(int2, int5, 0, 0, int8);
    IF_SETSIZE(int3, int6, 0, 0, int9);
    script16698(int0);
    return;
}