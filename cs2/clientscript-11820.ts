//
function script11820(int0: number, int1: number): [number, number, number, string] {
    var int0 = script8247(int0);
    if ((int0 == -1)) {
        return [0, 0, -1, ""];
    };
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = script6506(int0);
    var int4 = (int3 - int2);
    var int5 = (CLIENTCLOCK() - int2);
    var int6 = 0;
    var string0 = "";
    var int7 = -1;
    if ((int5 >= int4)) {
        int7 = 14659;
        if ((script6431() == 1)) {
            int7 = 14659;
        };
    } else {
        if ((int1 == 1)) {
            int7 = 14521;
            if ((script6431() == 1)) {
                int7 = 5403;
            };
        } else {
            int6 = SCALE(int5, int4, 138);
            int6 = MAX(int6, 0);
            int6 = MIN(int6, 138);
            int7 = script7988(int6);
        };
        int3 = (((int4 + 50) - int5) / 50);
        if ((int3 > 59)) {
            string0 = `${inttostring((int3 / 60), 10)}:`;
            if ((MODULO(int3, 60) < 10)) {
                string0 = `${string0}0`;
            };
            string0 = `${string0}${inttostring(MODULO(int3, 60), 10)}`;
        } else {
            string0 = inttostring(int3, 10);
        };
    };
    return [int5, int4, int7, string0];
}