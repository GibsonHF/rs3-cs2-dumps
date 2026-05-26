//
function script5938(int0: number, int1: number, int2: number, int3: number): void {
    CC_DELETEALL(int0);
    script13966(int0, int1, int2, int3);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETTEXTALIGN(1, 0, 0);
    CC_SETTEXTFONT(12);
    script11024(3);
    CC_SETTEXT("<gt>");
    var string0 = "Forward";
    CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -1));
    return;
}