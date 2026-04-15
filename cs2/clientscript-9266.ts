//
function script9266(int0: component, int1: int, int2: unknown_int): void {
    if (((int1 < 0) || (int1 >= INV_SIZE(93 as inv)))) {
        return;
    };
    var int3 = script9274(int2);
    if (((int3 != -1) && (STOCKMARKET_ISOFFEREMPTY(int3, 0) == 1))) {
        if ((CC_FIND(int0, int1) == 1)) {
            script9264(int3, CC_GETINVOBJECT(), CC_GETINVCOUNT());
        } else {
            script9264(-1, -1 as obj, -1);
        };
        return;
    };
    int3 = script9275(int2);
    if (((int3 != -1) && (STOCKMARKET_ISOFFEREMPTY(int3, 0) == 1))) {
        if ((CC_FIND(int0, int1) == 1)) {
            script9262(int3, CC_GETINVOBJECT(), -1);
        } else {
            script9262(-1, -1 as obj, -1);
        };
        return;
    };
    return;
}