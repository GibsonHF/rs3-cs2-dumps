//
function script8343(int0: component, int1: unknown_int): void {
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = IF_GETWIDTH(IF_GETPARENTLAYER(int0));
    var int5 = IF_GETHEIGHT(IF_GETPARENTLAYER(int0));
    var int6 = (int4 - int2);
    var int7 = (int5 - int3);
    if ((IF_FIND(int0) == 1)) {
        if ((int1 == 1)) {
            int7 = (int7 + 10);
        } else if ((int1 == 2)) {
            int6 = (int6 + 10);
        };
        int3 = MAX(0, int3);
        int2 = MAX(0, int2);
        CC_SETSIZE(int6, int7, 1, 1);
        int2 = IF_GETWIDTH(int0);
        int3 = IF_GETHEIGHT(int0);
    };
    return;
}