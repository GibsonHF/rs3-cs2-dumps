//
function script16694(): void {
    var int0 = IF_GETWIDTH(comp(998, 0));
    var int1 = IF_GETWIDTH(comp(998, 3));
    var int2 = IF_GETWIDTH(comp(998, 17));
    var int3 = IF_GETHEIGHT(comp(998, 0));
    var int4 = IF_GETHEIGHT(comp(998, 3));
    var int5 = IF_GETHEIGHT(comp(998, 17));
    if ((script6431() == true)) {
        [int0, int2] = [492, 232];
    };
    IF_SETSIZE(int0, int3, 0, 0, comp(998, 0));
    IF_SETSIZE(int1, int4, 0, 0, comp(998, 3));
    IF_SETSIZE(int2, int5, 0, 0, comp(998, 17));
    script16698();
    return;
}