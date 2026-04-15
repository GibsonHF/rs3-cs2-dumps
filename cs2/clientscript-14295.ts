//
function script14295(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = script14337();
    while ((int0 < int2)) {
        if (((CC_FIND(comp(517, 201), int0) == 1) && (CC_GETINVOBJECT() != 48447 as obj))) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return int1;
}