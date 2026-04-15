//
function script20223(int0: int): void {
    IF_SETTRANS(int0, comp(1401, 36));
    IF_SETTRANS(int0, comp(1401, 37));
    IF_SETTRANS(int0, comp(1401, 35));
    IF_SETTRANS(int0, comp(1401, 42));
    IF_SETTRANS(int0, comp(1401, 50));
    IF_SETTRANS(int0, comp(1401, 52));
    script4161(comp(1401, 48), int0);
    script4161(comp(1401, 49), int0);
    script4161(comp(1401, 34), int0);
    script4161(comp(1401, 38), int0);
    script4161(comp(1401, 51), int0);
    if ((CC_FIND(comp(1401, 38), 0) == 1)) {
        cc_setparam(3994, int0);
    };
    if ((CC_FIND(comp(1401, 51), 0) == 1)) {
        cc_setparam(3994, int0);
    };
    return;
}