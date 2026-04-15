//
function script19000(): void {
    var int0 = IF_GETNEXTSUBID(comp(1870, 18));
    var int1 = -1;
    while ((++int1 < int0)) {
        if ((CC_FIND(comp(1870, 18), int1) == 1)) {
            CC_SETONTIMER(callback());
            CC_SETTRANS(0);
        };
    };
    return;
}