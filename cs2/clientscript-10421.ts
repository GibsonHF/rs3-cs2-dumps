//
function script10421(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    if ((script6431() == true)) {
        [int1, int2, int3, int4] = script2956();
        IF_SETSIZE(0, (50 + int2), 1, 0, int0);
        IF_SETPOSITION(0, int2, 1, 0, comp(1422, 78));
        IF_SETSIZE((int1 + int3), 50, 1, 0, comp(1422, 78));
        IF_SETSIZE(0, (50 + int2), 1, 1, comp(1422, 1));
        IF_SETPOSITION(int1, IF_GETHEIGHT(int0), 0, 0, comp(1422, 2));
        IF_SETSIZE((int1 + int3), ((IF_GETHEIGHT(int0) + int2) + int4), 1, 1, comp(1422, 2));
        IF_SETPOSITION(script8407(comp(1422, 101)), (script8408(comp(1422, 101)) + IF_GETHEIGHT(comp(1422, 101))), 0, 0, comp(1422, 113));
    };
    script13990(int0, comp(-1, 65535), 2830 as struct);
    return;
}