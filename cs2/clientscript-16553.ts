//
function script16553(int0: component, int1: int, int2: component, int3: cs2enum, int4: unknown_int): void {
    if ((((int4 != 1) || (int2 == comp(-1, 65535))) || (int3 == -1 as cs2enum))) {
        return;
    };
    var int5 = 0;
    var int6 = 0;
    if (((IF_GETHIDE(comp(1477, 787)) == false) && (IF_HASSUBOVERLAY(comp(1477, 788), 977 as overlayinterface) == 1))) {
        script2256(comp(1477, 787));
        return;
    };
    script16566(int2);
    [int5, int6] = script16557(int2, int3, 1);
    script16569(977 as overlayinterface);
    script13536(int5, int6, int0, int1, 1, 0, 0, 40, 40);
    return;
}