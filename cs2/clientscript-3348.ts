//
function script3348(int0: struct, int1: component, int2: int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    varclient_2 = 0;
    script3350();
    IF_SETSIZE(350, 0, 0, 0, comp(1451, 33));
    script11910(int0, comp(1322, 6), 0, 0, 0, 0);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script3351(350, IF_GETHEIGHT(comp(1451, 33)), int1, int2);
    IF_SETSIZE(350, IF_GETHEIGHT(comp(1451, 33)), 0, 0, comp(1451, 33));
    IF_SETPOSITION(int3, int4, 0, 0, comp(1451, 33));
    return;
}