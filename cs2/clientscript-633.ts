//
function script633(int0: component, int1: unknown_int, int2: int, int3: int): void {
    var int4 = (IF_GETTRANS(int0) + int3);
    IF_SETTRANS(int4, int0);
    if ((int4 >= int2)) {
        IF_SETONTIMER(callback(script634, int0, int1, int2, int3), int0);
    };
    return;
}