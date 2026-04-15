//
function script11139(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    if ((int2 != comp(-1, 65535))) {
        CC_DELETEALL(int2);
    };
    IF_SETSIZE(0, 0, 1, 1, int0);
    IF_SETPOSITION(0, 0, 0, 0, int0);
    var int3 = 0;
    while ((int3 < 6)) {
        CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(0, ((int3 * 30) + 50), 0, 0);
        CC_SETSIZE(0, 30, 1, 0);
        CC_SETFILL(1);
        if ((MODULO(int3, 2) == 0)) {
            script10010(28679 as struct);
        } else {
            script10010(28680 as struct);
        };
        int3 = (int3 + 1);
    };
    int3 = 0;
    while ((int3 < 6)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(10, ((int3 * 30) + 50), 0, 0);
        CC_SETSIZE(100, 30, 0, 0);
        script11024(3);
        CC_SETTEXTFONT(27 as fontmetrics);
        CC_SETTEXTALIGN(0, 1, 12);
        int3 = (int3 + 1);
        CC_SETTEXT(enum_getvalue(0, 36, 9847 as cs2enum, int3));
    };
    return;
}