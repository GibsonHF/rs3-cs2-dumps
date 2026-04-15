//
function script5577(int0: struct, int1: component, int2: int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    varclient_2 = 0;
    script3350();
    script11364(int0, int1, -1);
    var int3 = 0;
    var int4 = 0;
    [int3, int4] = script3351(350, IF_GETHEIGHT(comp(1618, 0)), int1, int2);
    IF_SETSIZE(350, IF_GETHEIGHT(comp(1618, 0)), 0, 0, comp(1618, 0));
    IF_SETPOSITION(int3, int4, 0, 0, comp(1618, 0));
    return;
}