//
function script633(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = (IF_GETTRANS(int0) + int3);
    IF_SETTRANS(int4, int0);
    if ((int4 >= int2)) {
        IF_SETONTIMER(callback(script634, int0, int1, int2, int3), int0);
    };
    return;
}