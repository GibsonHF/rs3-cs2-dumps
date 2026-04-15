//
function script19346(int0: inv, int1: int, int2: obj, int3: int): int {
    var int4 = script19579();
    var int5 = script19582(int2, MAX(0, int1), int4);
    while (((int5 >= 0) && (int5 <= int4))) {
        script19603(int0, -1, int2, int2, 1, int5);
        if ((--int3 <= 0)) {
            return 0;
        };
        int5 = script19582(int2, int5, int4);
    };
    return int3;
}