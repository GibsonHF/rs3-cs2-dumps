//
function script7317(int0: inv, int1: int): int {
    if ((INV_GETOBJ(int0, int1) == -1 as obj)) {
        return 0;
    };
    var int2 = script7319(int1);
    var int3 = AND(int2, 8191);
    if ((int3 < 7)) {
        return 0;
    };
    if ((int3 < 21)) {
        return 1;
    };
    if ((int3 < 50)) {
        return 2;
    };
    if ((int3 < 100)) {
        return 3;
    };
    if ((int3 < 200)) {
        return 4;
    };
    if ((int3 < 400)) {
        return 5;
    };
    if ((int3 < 800)) {
        return 6;
    };
    if ((int3 < 1500)) {
        return 7;
    };
    if ((int3 < 2300)) {
        return 8;
    };
    if ((int3 < 4000)) {
        return 9;
    };
    return 10;
}