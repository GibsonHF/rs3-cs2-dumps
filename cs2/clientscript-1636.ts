//
function script1636(int0: component, int1: graphic, int2: int, int3: int, int4: int, int5: unknown_int, int6: int, int7: int): void {
    var int8 = (0 - int3);
    var int9 = 233;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    if ((IF_FIND(int0) == 1)) {
        [int9, int10] = script3874(int4);
        if ((CC_FINDBYCATEGORY(int0, int9, int10) == 1)) {
            int11 = cc_getparam(8959);
            int12 = cc_getparam(8960);
            if ((CC_FINDBYCATEGORY[1](int0, int9, int11) == 1)) {
                CC_SETSIZE[1](int3, int2, 0, 0);
                CC_SETPOSITION[1](0, int7, 0, int6);
                CC_SETGRAPHIC[1](int1);
            };
            if ((CC_FINDBYCATEGORY[1](int0, int9, int12) == 1)) {
                CC_SETSIZE[1](int3, int2, 0, 0);
                CC_SETPOSITION[1](int8, int7, 0, int6);
                CC_SETGRAPHIC[1](int1);
            };
            CC_SETHIDE(false);
            CC_SETONTIMER(callback(script6724, int0, int3, int8, int9, int11, int12, int5, int6, int7));
        };
    };
    return;
}