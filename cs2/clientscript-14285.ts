//
function script14285(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    var int5 = 1;
    var int6 = true;
    var int7 = 0;
    if ((IF_HASSUBOVERLAY(int0, int2) == 1)) {
        int5 = 0;
        if ((int4 == int3)) {
            int6 = false;
            int7 = 1;
        };
    };
    script13960(int1, 28755, int5, int7);
    IF_SETHIDE(int6, int0);
    return;
}