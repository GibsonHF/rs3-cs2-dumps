//
function script4584(int0: number, int1: number, int2: number): void {
    CC_DELETEALL(int0);
    var int3 = IF_GETNEXTSUBID(int0);
    var string0 = "";
    string0 = `${enum_getvalue(0, 36, 950 as cs2enum, int1)}${inttostring(int2, 10)}`;
    CC_CREATE(int0, 4, int3);
    CC_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int0), 0, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETTEXTFONT(28);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(script10495(3));
    CC_SETTEXTSHADOW(1);
    CC_SETTEXT(string0);
    return;
}