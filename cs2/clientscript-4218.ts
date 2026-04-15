//
function script4218(): int {
    var int0 = 0;
    var int1 = 0;
    [int0, int1] = script4217();
    var int2 = (varplayer_1577 - int1);
    var int3 = (varplayer_1574 - int0);
    while (((int2 > 0) && (int3 <= 1000000000))) {
        [int2, int3] = [(int2 - 1), (int3 + 1000000000)];
    };
    while (((int2 < 0) && (int3 >= 1000000000))) {
        [int2, int3] = [(int2 + 1), (int3 - 1000000000)];
    };
    if ((int2 < 0)) {
        return 0;
    };
    if (((int2 == 0) && (int3 <= 100000))) {
        return MAX(int3, 0);
    };
    return 100000;
}