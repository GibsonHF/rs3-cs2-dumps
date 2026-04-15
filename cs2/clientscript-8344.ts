//
function script8344(int0: component, int1: unknown_int): void {
    var int2 = IF_GETWIDTH(int0);
    var int3 = IF_GETHEIGHT(int0);
    var int4 = IF_GETWIDTH(IF_GETPARENTLAYER(int0));
    var int5 = IF_GETHEIGHT(IF_GETPARENTLAYER(int0));
    var int6 = IF_GETWIDTH(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0)));
    var int7 = IF_GETHEIGHT(IF_GETPARENTLAYER(IF_GETPARENTLAYER(int0)));
    var int8 = (int4 - int2);
    var int9 = (int5 - int3);
    if ((IF_FIND(int0) == 1)) {
        if ((int1 == 1)) {
            int3 = (int3 - 10);
        } else if ((int1 == 2)) {
            int2 = (int2 - 10);
        };
        int3 = MAX(0, int3);
        int2 = MAX(0, int2);
        CC_SETSIZE(int8, int9, 1, 1);
        int2 = IF_GETWIDTH(int0);
        int3 = IF_GETHEIGHT(int0);
    };
    return;
}