//
function script19346(int0: number, int1: number, int2: number, int3: number): number {
    var int4 = script19579();
    var int5 = script19582(int2, MAX(0, int1), int4);
    while ((int5 >= 0)) {
        if ((int5 <= int4)) {
            script19603(int0, -1, int2, int2, 1, int5);
            var int3 = (int3 - 1);
            if ((int3 <= 0)) {
                return 0;
            };
            int5 = script19582(int2, int5, int4);
        };
        return int3;
    };
    return int3;
}