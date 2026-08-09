//
function script13760(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string): void {
    var int5 = 0;
    var int6 = 0;
    var string1 = `This question requires ${inttostring(int4, 10)}% to pass`;
    if ((int2 != 0)) {
        int5 = SCALE(int1, int2, 100);
        int6 = int5;
    };
    CC_CREATE(comp(1029, 75), 4, IF_GETNEXTSUBID(comp(1029, 75)));
    CC_SETTEXT(string0);
    CC_SETSIZE(640, 30, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETPOSITION(55, int0, 0, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_SETONMOUSEREPEAT(callback(script13761, int3, (IF_GETNEXTSUBID(comp(1029, 75)) - 1), 67436619));
    CC_SETONMOUSELEAVE(callback(script13762, (IF_GETNEXTSUBID(comp(1029, 75)) - 1), 67436619));
    CC_CREATE(comp(1029, 75), 4, IF_GETNEXTSUBID(comp(1029, 75)));
    CC_SETTEXT(`${inttostring(int5, 10)}%`);
    CC_SETSIZE(100, 70, 0, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETPOSITION(5, int0, 0, 0);
    CC_SETTEXTFONT(28 as fontmetrics);
    CC_SETCOLOUR(16777215);
    CC_CREATE(comp(1029, 74), 3, IF_GETNEXTSUBID(comp(1029, 74)));
    CC_SETGRAPHIC(18399 as graphic);
    CC_SETCOLOUR(2912010);
    CC_SETFILL(1);
    CC_SETSIZE((6 * int6), 15, 0, 0);
    CC_SETPOSITION(55, (int0 + 27), 0, 0);
    if (((STRING_INDEXOF_STRING(string0, "No", 0) != 0) && (int4 != 0))) {
        CC_CREATE(comp(1029, 74), 3, IF_GETNEXTSUBID(comp(1029, 74)));
        CC_SETCOLOUR(16777215);
        CC_SETSIZE(2, 15, 0, 0);
        CC_SETPOSITION((55 + (6 * int4)), (int0 + 27), 0, 0);
        CC_SETONMOUSEREPEAT(callback(script8799, string1, 67436618, IF_GETNEXTSUBID(comp(1029, 74))));
    };
    CC_CREATE(comp(1029, 74), 3, IF_GETNEXTSUBID(comp(1029, 74)));
    CC_SETCOLOUR(script10495(7));
    CC_SETSIZE(600, 15, 0, 0);
    CC_SETPOSITION(55, (int0 + 27), 0, 0);
    CC_SETONMOUSEREPEAT(callback(script13761, int3, 0, -1));
    CC_SETONMOUSELEAVE(callback(script13762, 0, -1));
    return;
}