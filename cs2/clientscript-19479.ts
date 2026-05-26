//
function script19479(int0: number): number {
    while ((CC_FIND(86048843, int0) == 1)) {
        if (((CC_GETINVOBJECT() == 48447) || (CC_GETINVCOUNT() <= 0))) {
            return int0;
        };
        var int0 = (int0 + 1);
    };
    return -1;
}