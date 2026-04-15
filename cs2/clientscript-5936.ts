//
function script5936(int0: component, int1: component, int2: struct, int3: boolean): void {
    CC_DELETEALL(int0);
    script13966(int0, int1, int2, int3);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTFONT(12 as fontmetrics);
    script11024(3);
    CC_SETTEXT("<lt>");
    var string0 = "Back";
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
    return;
}