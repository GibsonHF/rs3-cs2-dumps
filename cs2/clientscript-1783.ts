//[proc,clanwars_focuslayer]
function script1783(int0: component, int1: component, int2: component, int3: int): void {
    if ((int2 == comp(-1, 65535))) {
        if ((CC_FIND(int1, 1) == 1)) {
            script157(int1, int0, 0, 1);
        };
        return;
    };
    var int4 = 0;
    if (((CC_FIND(int2, int3) == 1) || ((int3 == -1) && (IF_FIND(int2) == 1)))) {
        int4 = (CC_GETY() + (CC_GETHEIGHT() / 2));
        int4 = (int4 - (IF_GETHEIGHT(int0) / 2));
        if ((CC_FIND(int1, 1) == 1)) {
            script157(int1, int0, int4, 1);
        };
    };
    return;
}