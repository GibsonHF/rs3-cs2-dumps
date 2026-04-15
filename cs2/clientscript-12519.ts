//
function script12519(): int {
    var int0 = ENUM_GETOUTPUTCOUNT(10383 as cs2enum);
    var int1 = 1;
    var int2 = 0;
    while ((int1 <= int0)) {
        int2 = (int2 + script12520(int1));
        int1 = (int1 + 1);
    };
    if ((int2 == int0)) {
        return 1;
    };
    return 0;
}