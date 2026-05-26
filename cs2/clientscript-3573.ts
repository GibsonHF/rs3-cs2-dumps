//
function script3573(int0: number): number {
    if ((int0 == -1)) {
        return 0;
    };
    var int1 = 1;
    var int2 = -1;
    var int3 = 0;
    var int4 = -1;
    var int5 = 0;
    while ((int1 <= 10)) {
        [int2, int3, int3, int4, int5] = script2517(int0, int1);
        if (((int2 == -1) && (int4 == -1))) {
            return (int1 - 1);
        };
        int1 = (int1 + 1);
    };
    return (int1 - 1);
}