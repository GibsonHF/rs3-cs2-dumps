//
function script19370(int0: int, int1: obj, int2: inv, int3: int, int4: unknown_int): void {
    var int5 = int0;
    if ((int0 == -1)) {
        var int0 = script19584(int1, 0, 0);
    };
    var int6 = int0;
    var int7 = script19579();
    while (((int0 != -1) && (int0 <= int7))) {
        script19602(int0, 1, int1, 1, int2, -1, false, int4);
        int6 = MIN(int0, int6);
        if ((--int3 <= 0)) {
            script19371(int6, int1, int4);
            return;
        };
        int0 = script19584(int1, int0, 0);
        if (((int0 == -1) && (int5 != -1))) {
            int0 = script19584(int1, 0, 0);
            int5 = -1;
        };
    };
    script19371(int6, int1, int4);
    return;
}