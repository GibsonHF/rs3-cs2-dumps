//
function script19479(int0: int): int {
    while ((CC_FIND(comp(1313, 75), int0) == 1)) {
        if (((CC_GETINVOBJECT() == 48447 as obj) || (CC_GETINVCOUNT() <= 0))) {
            return int0;
        };
        var int0 = (int0 + 1);
    };
    return -1;
}