//
function script10015(int0: component, int1: component, int2: component, int3: component, int4: component, int5: struct): void {
    if ((IF_FIND(IF_GETLAYER(int0)) == 1)) {
        cc_setparam(4425, int5);
    };
    var int6 = struct_getparam(int5, 3915);
    var int7 = struct_getparam(int5, 3916);
    if (((int0 != comp(-1, 65535)) && (CC_FIND(int0, 1) == 1))) {
        CC_SETSIZE(int6, int7, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int5, 3910));
    };
    if (((int1 != comp(-1, 65535)) && (CC_FIND(int1, 1) == 1))) {
        CC_SETSIZE(int6, int7, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int5, 3911));
    };
    if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, 1) == 1))) {
        CC_SETSIZE(int6, int7, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int5, 3912));
    };
    if (((int3 != comp(-1, 65535)) && (CC_FIND(int3, 1) == 1))) {
        CC_SETSIZE(int6, int7, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int5, 3913));
    };
    if (((int4 != comp(-1, 65535)) && (CC_FIND(int4, 1) == 1))) {
        CC_SETSIZE(int6, int7, 0, 0);
        CC_SETGRAPHIC(struct_getparam(int5, 3914));
    };
    return;
}