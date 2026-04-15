//
function script6539(): int {
    var int0 = script8314(2);
    if ((int0 != -1)) {
        return int0;
    };
    if ((script6431() == false)) {
        return -1;
    };
    var int1 = 0;
    var int2 = 0;
    while ((int1 < 30)) {
        int2 = script2384(int1, 1);
        if ((script8314(int2) != -1)) {
            return int2;
        };
        int1 = (int1 + 1);
    };
    return -1;
}