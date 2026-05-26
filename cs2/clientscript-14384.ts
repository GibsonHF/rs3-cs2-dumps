//
function script14384(): [number, number, number] {
    if ((script8404(33882280) >= 48)) {
        return [0, 0, 0];
    };
    var int0 = (IF_GETSCROLLX(33882283) + script8403(33882283));
    var int1 = (IF_GETSCROLLX(33882281) + script8403(33882281));
    var int2 = (((int1 / 48) + 2) - 1);
    var int3 = (script5796() + 1);
    while ((int2 <= int3)) {
        if ((((CC_FIND(33882283, int2) == 1) && (int0 >= CC_GETX())) && (int0 <= (CC_GETX() + CC_GETWIDTH())))) {
            return [int2, ((IF_GETX(33882283) - IF_GETSCROLLX(33882283)) + CC_GETX()), 0];
        };
        if (((((int2 < (int3 - 1)) && (CC_FIND(33882281, int2) == 1)) && (int1 >= CC_GETX())) && (int1 <= ((CC_GETX() + CC_GETWIDTH()) - 4)))) {
            return [int2, ((IF_GETX(33882280) - IF_GETSCROLLX(33882280)) + CC_GETX()), 1];
        };
        int2 = (int2 + 1);
    };
    return [0, 0, 0];
}