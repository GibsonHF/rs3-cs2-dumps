//
function script13639(): int {
    var int0 = ENUM_GETOUTPUTCOUNT(12737 as cs2enum);
    var int1 = int0;
    while ((int1 > 0)) {
        if ((enum_getvalue(0, 32, 12737 as cs2enum, int1) == -1 as npc)) {
            int0 = (int0 - 1);
        };
        int1 = (int1 - 1);
    };
    return int0;
}