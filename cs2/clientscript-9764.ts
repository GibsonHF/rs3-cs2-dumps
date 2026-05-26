//
function script9764(): void {
    var int0 = comp(-1, 65535);
    IF_SETOPKEY(1, 0, 0, comp(1145, 31));
    var int1 = 0;
    while ((int1 < ENUM_GETOUTPUTCOUNT(8839 as cs2enum))) {
        int0 = enum_getvalue(0, 9, 8839 as cs2enum, int1);
        IF_SETOPKEY(1, 0, 0, int0);
        int1 = (int1 + 1);
    };
    script1187();
    return;
}