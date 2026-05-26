//
function script2624(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 0;
    if ((int3 <= 0)) {
        return;
    };
    if ((IF_FIND(int0) == 1)) {
        int5 = (int2 - int1);
        IF_SETONTIMER(callback(script2625, int0, 0, int3, int4, int1, int5), int0);
    };
    return;
}