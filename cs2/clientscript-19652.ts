//
function script19652(int0: inv): int {
    var int1 = (INV_SIZE(int0) - 1);
    var int2 = 0;
    while ((int1 > -1)) {
        int2 = (int2 + script19653(INV_GETOBJ(int0, int1)));
        int1 = (int1 - 1);
    };
    return int2;
}