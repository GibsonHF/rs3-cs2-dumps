//
function script12392(int0: int): void {
    var int1 = 1;
    var int2 = comp(-1, 65535);
    while ((int1 <= ENUM_GETOUTPUTCOUNT(11000 as cs2enum))) {
        int2 = enum_getvalue(0, 9, 11000 as cs2enum, int1);
        if ((int2 != comp(-1, 65535))) {
            script12394(int0, int1, int2);
        };
        int1 = (int1 + 1);
    };
    return;
}