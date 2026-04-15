//
function script14475(): void {
    var int0 = -1;
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(6521 as cs2enum);
    while ((++int0 < int3)) {
        int1 = enum_getvalue(0, 0, 6517 as cs2enum, int0);
        script10416(enum_getvalue(0, 9, 6521 as cs2enum, int1), enum_getvalue(0, 9, 6522 as cs2enum, int1), "", "", "", script14449(int1));
    };
    script14476(6518 as cs2enum);
    script14476(6519 as cs2enum);
    script14476(6520 as cs2enum);
    return;
}