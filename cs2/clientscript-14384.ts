//
function script14384(): [int, int, unknown_int] {
    if ((script8404(comp(517, 168)) >= 48)) {
        return [0, 0, 0];
    };
    var int0 = (IF_GETSCROLLX(comp(517, 171)) + script8403(comp(517, 171)));
    var int1 = (IF_GETSCROLLX(comp(517, 169)) + script8403(comp(517, 169)));
    var int2 = (((int1 / 48) + 2) - 1);
    var int3 = (script5796() + 1);
    while ((int2 <= int3)) {
        if ((((CC_FIND(comp(517, 171), int2) == 1) && (int0 >= CC_GETX())) && (int0 <= (CC_GETX() + CC_GETWIDTH())))) {
            return [int2, ((IF_GETX(comp(517, 171)) - IF_GETSCROLLX(comp(517, 171))) + CC_GETX()), 0];
        };
        if (((((int2 < (int3 - 1)) && (CC_FIND(comp(517, 169), int2) == 1)) && (int1 >= CC_GETX())) && (int1 <= ((CC_GETX() + CC_GETWIDTH()) - 4)))) {
            return [int2, ((IF_GETX(comp(517, 168)) - IF_GETSCROLLX(comp(517, 168))) + CC_GETX()), 1];
        };
        int2 = (int2 + 1);
    };
    return [0, 0, 0];
}