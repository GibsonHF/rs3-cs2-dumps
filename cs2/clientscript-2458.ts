//
function script2458(): void {
    var int0 = 17;
    var int1 = script10405(int0);
    if ((int1 == -1 as struct)) {
        return;
    };
    var int2 = script8418(int1, 0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = comp(1477, 294);
    var string0 = "Close";
    if ((CC_FIND(int3, 1) == 1)) {
        CC_SETGRAPHIC(struct_getparam(int2, 3602));
        CC_SETONMOUSEOVER(callback(script5336, int3, 1, struct_getparam(int2, 3603)));
        CC_SETOP(1, "Close Window");
        CC_SETONOP(callback(script2459, int0));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_SETONMOUSELEAVE(callback(script8806, -2147483645, -2147483643, struct_getparam(int2, 3602)));
    };
    if ((CC_FIND(int3, 0) == 1)) {
        CC_SETPOSITION(struct_getparam(int2, 3575), struct_getparam(int2, 3576), 2, 0);
        CC_SETSIZE(struct_getparam(int2, 3563), struct_getparam(int2, 3564), 0, 0);
        CC_SETGRAPHIC(struct_getparam(int2, 3601));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
        CC_SETONMOUSELEAVE(callback(script8805));
    };
    if (((varplayer_3871 == 1) && (varbitplayer_27169 == 0))) {
        IF_SETHIDE(false, int3);
    } else {
        IF_SETHIDE(true, int3);
    };
    return;
}