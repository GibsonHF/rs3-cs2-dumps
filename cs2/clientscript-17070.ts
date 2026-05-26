//
function script17070(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    var int10 = 0;
    var int11 = 0;
    var int12 = (29 / int0);
    var int13 = ((int12 * int3) + int2);
    var int14 = 9178;
    var int15 = 9179;
    var int16 = 33679;
    if ((int9 == 0)) {
        int10 = script16491(varbitplayer_55314);
    } else {
        int11 = script16491(varbitplayer_55317);
    };
    CC_CREATE(int4, 5, 29);
    CC_SETSIZE(60, 27, 0, 0);
    CC_SETPOSITION(int1, int13, 0, 0);
    var int17 = 16747520;
    if (((varbitplayer_19009 == 1) && (((int9 == 1) && (int11 >= 99)) || ((int9 == 0) && (int10 >= 99))))) {
        int14 = 14833;
        int15 = 14834;
    };
    CC_SETGRAPHIC(int14);
    CC_SETONMOUSEOVER(callback(script688, -2147483645, 29, int15));
    CC_SETONMOUSELEAVE(callback(script688, -2147483645, 29, int14));
    CC_CREATE(int5, 5, 29);
    CC_SETSIZE(25, 25, 0, 0);
    CC_SETPOSITION(int1, int13, 0, 0);
    CC_SETGRAPHIC(int16);
    CC_CREATE(int6, 4, 29);
    CC_SETSIZE(18, 11, 0, 0);
    CC_SETPOSITION((int1 + 24), (int13 + 2), 0, 0);
    CC_SETTEXTFONT(66);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(int17);
    if ((int9 == 1)) {
        CC_SETTEXT(inttostring(int11, 10));
    } else {
        CC_SETTEXT(inttostring(int10, 10));
        CC_SETONVARTRANSMIT(callback(script17166, -2147483645, CC_GETID(), 11657, 1));
    };
    CC_CREATE(int7, 4, 29);
    CC_SETSIZE(18, 11, 0, 0);
    CC_SETPOSITION((int1 + 39), (int13 + 14), 0, 0);
    CC_SETTEXTFONT(66);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(int17);
    if ((int9 == 1)) {
        CC_SETTEXT(inttostring(int11, 10));
    } else {
        CC_SETTEXT(inttostring(int10, 10));
        CC_SETONVARTRANSMIT(callback(script17167, -2147483645, CC_GETID(), 11657, 1));
    };
    CC_CREATE(int8, 4, 29);
    CC_SETSIZE(60, 27, 0, 0);
    CC_SETPOSITION(int1, int13, 0, 0);
    if ((int9 == 0)) {
        CC_SETOP(1, "View Skillguide");
    };
    if ((script6431() == 1)) {
        CC_SETONCLICK(callback(script7774, script17410(int9), -2147483645, -2147483643, 0));
        CC_SETONVARTRANSMIT(callback(script17201, -2147483645, CC_GETID(), int9, 11657, 1));
    } else {
        CC_SETONMOUSEREPEAT(callback(script17168, -2147483645, -2147483643, int9));
    };
    return;
}