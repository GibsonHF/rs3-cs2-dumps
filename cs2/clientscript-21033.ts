//
function script21033(): void {
    var int2 = PARAWIDTH(IF_GETTEXT(int1), IF_GETWIDTH(int0), IF_GETFONTMETRICS(int1));
    IF_SETSIZE((int2 + (2 * 4)), 0, 0, 1, int0);
    script13990(int0, -1, 49435);
    var int3 = -1;
    int3 = (int3 + 1);
    while ((int3 < IF_GETNEXTSUBID(int0))) {
        if ((CC_FIND(int0, int3) == 1)) {
            CC_SETTRANS(191);
        };
    };
    return;
}