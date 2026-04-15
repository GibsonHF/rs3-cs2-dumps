//
function script10456(int0: component, int1: obj, int2: graphic, int3: int, int4: int, int5: int, string0: string): void {
    script10410(int0, comp(-1, 65535), 28575 as struct, int3, int4, int5, int5, 0, false, "");
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    if ((strcmp(string0, "") != 0)) {
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
    };
    if ((int1 != -1 as obj)) {
        CC_SETSIZE(36, 36, 0, 0);
        CC_SETPOSITION((int3 + 2), (int4 + 3), 0, 0);
        CC_SETOBJECT_NONUM(int1, 1);
    } else if ((int2 != -1 as graphic)) {
        CC_SETSIZE((int5 - 6), (int5 - 6), 0, 0);
        CC_SETPOSITION((int3 + 3), (int4 + 3), 0, 0);
        CC_SETGRAPHIC(int2);
    };
    return;
}