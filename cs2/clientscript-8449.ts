//
function script8449(int0: int, int1: cs2enum): int {
    var int2 = 0;
    while ((int0 > 1)) {
        if ((enum_getvalue(0, 73, int1, int2) == -1 as struct)) {
            var int0 = (int0 - 1);
        };
        int2 = (int2 + 1);
    };
    return int2;
}