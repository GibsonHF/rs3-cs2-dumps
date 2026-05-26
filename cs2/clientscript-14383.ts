//
function script14383(): [number, number, number] {
    if ((script8403(33882280) >= 38)) {
        return [0, 0, 0];
    };
    var int0 = (IF_GETSCROLLY(33882283) + script8404(33882283));
    var int1 = (IF_GETSCROLLY(33882281) + script8404(33882281));
    var int2 = (((int1 / 48) + 2) - 1);
    var int3 = (script5796() + 1);
    while ((int2 <= int3)) {
        if ((((CC_FIND(33882283, int2) == 1) && (int0 >= CC_GETY())) && (int0 <= (CC_GETY() + CC_GETHEIGHT())))) {
            return [int2, ((IF_GETY(33882283) - IF_GETSCROLLY(33882283)) + CC_GETY()), 0];
        };
        if (((((int2 < (int3 - 1)) && (CC_FIND(33882281, int2) == 1)) && (int1 >= CC_GETY())) && (int1 <= ((CC_GETY() + CC_GETHEIGHT()) - 4)))) {
            return [int2, ((IF_GETY(33882280) - IF_GETSCROLLY(33882280)) + CC_GETY()), 1];
        };
        int2 = (int2 + 1);
    };
    return [0, 0, 0];
}