//
function script19578(): int {
    var int0 = 0;
    var int1 = 0;
    var int2 = script19579();
    while ((int0 < int2)) {
        if (((CC_FIND(comp(1313, 75), int0) == 1) && (CC_GETINVOBJECT() != 48447 as obj))) {
            int1 = (int1 + 1);
        };
        int0 = (int0 + 1);
    };
    return int1;
}