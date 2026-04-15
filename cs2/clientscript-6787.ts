//
function script6787(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    while ((int1 < ENUM_GETOUTPUTCOUNT(3620 as cs2enum))) {
        if ((script7073(enum_getvalue(0, 0, 3620 as cs2enum, int1)) == 2)) {
            int0 = (int0 + 1);
        };
        int1 = (int1 + 1);
    };
    if ((int0 >= 20)) {
        return 1;
    };
    return 0;
}