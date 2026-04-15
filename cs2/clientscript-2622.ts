//
function script2622(int0: component, int1: int, int2: int, int3: unknown_int, int4: unknown_int): void {
    var int5 = 0;
    if ((int3 <= 0)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int5 = (int2 - int1);
        IF_SETONTIMER(callback(script2623, int0, int1, int3, int4, int1, int5), 82116711);
    };
    return;
}