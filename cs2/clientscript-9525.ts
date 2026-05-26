//
function script9525(int0: number, int1: number, int2: number): void {
    if ((IF_FIND(int0) == 0)) {
        return;
    };
    CC_DELETEALL(int0);
    CC_CREATE(int0, 5, 0);
    CC_CREATE[1](int0, 5, 1);
    var int3 = 72;
    switch (int1) {
        case 1: {
            CC_SETGRAPHIC(18965);
            CC_SETGRAPHIC[1](18966);
            break;
        }
        case 3: {
            CC_SETGRAPHIC(18967);
            CC_SETGRAPHIC[1](18968);
            int3 = 64;
            var int2 = -1;
            break;
        }
        case 2: {
            CC_SETGRAPHIC(18967);
            CC_SETGRAPHIC[1](18968);
            int3 = 32;
            int2 = -1;
            break;
        }
        case 4: {
            CC_SETGRAPHIC(18967);
            CC_SETGRAPHIC[1](18968);
            int3 = 24;
            int2 = -1;
            break;
        }
        default: {
            CC_SETGRAPHIC(18967);
            CC_SETGRAPHIC[1](18968);
            break;
        }
    };
    CC_SETSIZE(int3, int3, 0, 0);
    CC_SETSIZE[1](int3, int3, 0, 0);
    CC_SETPOSITION(0, 0, 1, 1);
    CC_SETPOSITION[1](0, 0, 1, 1);
    CC_SETTRANS(255);
    CC_SETTRANS[1](255);
    cc_setparam(3994, 0);
    CC_SET2DANGLE(((0 - 1872) * MODULO(CLIENTCLOCK(), (65536 / 1872))));
    CC_SETONTIMER(callback(script9526, -2147483645));
    CC_SENDTOBACK[1]();
    var string0 = strconcat(inttostring(int2, 10), " %");
    if (((int2 >= 0) && (int2 <= 100))) {
        cc_setparam(3995, 0);
        cc_setparam(3996, int2);
        CC_CREATE(int0, 4, 2);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(31);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETPOSITION(-1, -1, 1, 1);
        CC_SETTRANS(255);
        CC_SETCOLOUR(0);
        CC_CREATE(int0, 4, 3);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(31);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETPOSITION(-1, 1, 1, 1);
        CC_SETTRANS(255);
        CC_SETCOLOUR(0);
        CC_CREATE(int0, 4, 4);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(31);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETPOSITION(1, -1, 1, 1);
        CC_SETTRANS(255);
        CC_SETCOLOUR(0);
        CC_CREATE(int0, 4, 5);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(31);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETPOSITION(1, 1, 1, 1);
        CC_SETTRANS(255);
        CC_SETCOLOUR(0);
        CC_CREATE(int0, 4, 6);
        CC_SETTEXT(string0);
        CC_SETTEXTFONT(31);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE(64, 64, 0, 0);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTRANS(255);
        CC_SETCOLOUR(16777215);
    };
    return;
}