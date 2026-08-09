//
function script2622(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    if ((int3 <= 0)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int5 = (int2 - int1);
        IF_SETONTIMER(callback(script2623, int0, int1, int3, int4, int1, int5), comp(1253, 103));
    };
    return;
}