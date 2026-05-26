//
function script15613(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, string0: string): void {
    var int6 = 23872;
    var int7 = 23873;
    var int8 = 23874;
    var int9 = script10495(25);
    var int10 = 0;
    var int11 = varclient_4270;
    var int12 = int5;
    if ((int3 == 0)) {
        if ((varclient_4270 == int2)) {
            int6 = 23869;
            int7 = 23870;
            int8 = 23871;
            int9 = 16777215;
        };
        CC_CREATE(59375646, 5, 0);
        CC_SETSIZE(0, 60, 1, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETGRAPHIC(23858);
        CC_SETTILING(1);
        CC_CREATE(int0, 5, 0);
        CC_SETSIZE(60, 60, 0, 0);
        CC_SETPOSITION(0, 0, 0, 0);
        CC_SETGRAPHIC(int6);
        CC_CREATE(int0, 5, 1);
        CC_SETSIZE(90, 60, 1, 0);
        CC_SETPOSITION(15, 0, 1, 0);
        CC_SETGRAPHIC(int7);
        CC_CREATE(int0, 5, 2);
        CC_SETSIZE(30, 60, 0, 0);
        CC_SETPOSITION(0, 0, 2, 0);
        CC_SETGRAPHIC(int8);
        CC_CREATE(int0, 4, 3);
        CC_SETSIZE(40, 20, 1, 0);
        CC_SETPOSITION(0, 14, 1, 0);
        CC_SETTEXTFONT(28);
        CC_SETTEXTALIGN(1, 0, 0);
        CC_SETTEXT(string0);
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, -2147483643, 16777215));
        CC_SETONMOUSELEAVE(callback(script8807, -2147483645, -2147483643, int9));
        CC_SETCOLOUR(int9);
    } else if ((int1 != -1)) {
        if (((varclient_4270 == 3) || (varclient_4270 == 4))) {
            int11 = 2;
        };
        IF_SETSIZE(72, 118, 0, 0, int1);
        if ((int11 == int2)) {
            IF_SENDTOFRONT(int1);
            int7 = 12744;
            int12 = int4;
        } else {
            int7 = 12743;
        };
        CC_CREATE(int1, 5, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 0, 1);
        CC_SETGRAPHIC(int7);
        CC_CREATE(int1, 5, 1);
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETPOSITION(0, -10, 1, 1);
        CC_SETGRAPHIC(int12);
    };
    return;
}