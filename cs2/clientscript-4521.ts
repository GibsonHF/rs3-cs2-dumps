//[proc,aif_checkbox_build_layer]
function script4521(int0: component, int1: unknown_int, int2: unknown_int, int3: unknown_int): void {
    var int4 = 0;
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int0);
    var int5 = script9793(int1);
    int4 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int4);
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int5);
    int5 = script9793(int2);
    int4 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int4);
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int5);
    CC_SETTRANS(255);
    CC_SETONMOUSEOVER(callback(script4410, int0, int4, 0));
    CC_SETONMOUSELEAVE(callback(script4410, int0, int4, 1));
    int5 = script9793(int3);
    int4 = IF_GETNEXTSUBID(int0);
    CC_CREATE(int0, 5, int4);
    CC_SETSIZE(16384, 16384, 2, 2);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETGRAPHIC(int5);
    CC_SETTRANS(255);
    CC_SETONCLICK(callback(script5362, int0, int4, 0));
    CC_SETONRELEASE(callback(script5362, int0, int4, 255));
    IF_SETONVARTRANSMIT(callback(script9792, -2147483645, int1, int2, int3, 3814, 1), int0);
    return;
}