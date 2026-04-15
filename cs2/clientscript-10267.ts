//
function script10267(int0: stat): int {
    var int1 = 0;
    var int2 = 100;
    var int3 = 0;
    var int4 = 1;
    int1 = script2181(2, int0, 0);
    while ((int4 <= 26)) {
        if ((TESTBIT(varbitplayer_23327, int4) == 1)) {
            if ((++int3 <= 10)) {
                int2 = (int2 + 8);
            } else if ((int3 <= 15)) {
                int2 = (int2 + 6);
            } else if ((int3 <= 20)) {
                int2 = (int2 + 4);
            } else {
                int2 = (int2 + 3);
            };
        };
        int4 = (int4 + 1);
    };
    return (SCALE((int1 * int3), 100, int2) / 10);
}