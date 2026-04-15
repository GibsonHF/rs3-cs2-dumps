//
function script6919(int0: component, int1: int, int2: unknown_int, string0: unknown_string, string1: unknown_string): void {
    CC_DELETEALL(int0);
    script6930(int0, 0);
    CC_CREATE(int0, 3, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETFILL(1);
    CC_SETCOLOUR(16711680);
    CC_SETHIDE(true);
    IF_SETONTIMER(callback(script6931, -2147483645, CC_GETID()), int0);
    CC_CREATE(int0, 5, 1);
    CC_SETSIZE(12, 12, 0, 0);
    CC_SETPOSITION(4, 0, 0, 1);
    CC_CREATE[1](int0, 4, 2);
    CC_SETSIZE[1](20, 0, 1, 1);
    CC_SETPOSITION[1](0, 0, 2, 1);
    CC_SETTEXTFONT[1](27);
    CC_SETTEXTALIGN[1](0, 1, 0);
    CC_SETTEXTSHADOW[1](1);
    CC_SETTEXT[1](string0);
    if (((MAP_MEMBERS() == 0) && (int2 == 1))) {
        CC_SETGRAPHIC(5930 as graphic);
        CC_SETCOLOUR[1](script10495(0));
        var string1 = "You need to be on a members' server to use this option.";
        IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int0);
        IF_SETONMOUSELEAVE(callback(script8805), int0);
        return;
    };
    script6921(int0, int1, 0);
    IF_SETONMOUSEOVER(callback(script6920, -2147483645, CC_GETID(), CC_GETID[1](), int1, 1, 0), int0);
    IF_SETONMOUSELEAVE(callback(script6920, -2147483645, CC_GETID(), CC_GETID[1](), int1, 0, 1), int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -1), int0);
    return;
}