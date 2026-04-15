//
function script18319(): int {
    if ((script13048() == 1)) {
        return 1;
    };
    if ((script13727(45) == 1)) {
        return 0;
    };
    if ((PLAYERMEMBER() == false)) {
        return 0;
    };
    var int0 = false;
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    [int2, int1, int3, int0] = script11179();
    if ((int0 == true)) {
        return 1;
    };
    if (((int1 - int3) > 788400)) {
        return 1;
    };
    return 0;
}