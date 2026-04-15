//
function script9059(int0: int, int1: int, int2: int, int3: achievement): int {
    var string0 = script9533(int1, int2, 0, int3);
    var int4 = 0;
    var string1 = "";
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    if ((strcmp(string0, "") != 0)) {
        int4 = script7593(string0, (int0 - (15 * 2)), 26 as fontmetrics, 14);
        int7 = (int7 + int4);
        int7 = (int7 + 5);
    };
    var int8 = script9534(int1);
    if ((int8 > 0)) {
        if ((TESTBIT(int8, 0) == 1)) {
            int7 = (++int7 + 5);
        };
        if ((TESTBIT(int8, 1) == 1)) {
            string1 = script9536(int1, int2, int3);
            int5 = script7593(string1, (int0 - (15 * 2)), 26 as fontmetrics, 14);
            int7 = (int7 + int5);
            int7 = (int7 + 5);
        };
    };
    return int7;
}