//
function script2274(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, string0: string, string1: string): void {
    CC_DELETEALL(int1);
    var int11 = (2 + (13 * PARAHEIGHT(`Level ${inttostring(int2, 10)}: ${string0}`, 177, 67)));
    var int12 = (2 + (13 * PARAHEIGHT(string1, 177, 66)));
    var int13 = (((((2 + int11) + int12) + 32) + 14) + 2);
    if ((int3 == -1)) {
        int13 = ((int13 - 32) - 14);
    };
    var int14 = 5;
    if ((IF_GETY(int0) < 130)) {
        int14 = ((261 - int13) - 5);
    };
    CC_CREATE(int1, 3, 0);
    CC_SETPOSITION(5, int14, 0, 0);
    CC_SETSIZE(180, int13, 0, 0);
    CC_SETFILL(1);
    CC_SETCOLOUR(0);
    CC_SETTRANS(42);
    CC_CREATE(int1, 3, 1);
    CC_SETPOSITION(6, (int14 + 1), 0, 0);
    CC_SETSIZE(179, (int13 - 1), 0, 0);
    CC_SETFILL(0);
    CC_SETCOLOUR(3025699);
    CC_CREATE(int1, 3, 2);
    CC_SETPOSITION(5, int14, 0, 0);
    CC_SETSIZE(179, (int13 - 1), 0, 0);
    CC_SETFILL(0);
    CC_SETCOLOUR(7496785);
    CC_CREATE(int1, 4, 3);
    CC_SETPOSITION(7, (int14 + 2), 0, 0);
    CC_SETSIZE(177, int11, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(67);
    CC_SETCOLOUR(16750623);
    CC_SETTEXTSHADOW(0);
    CC_SETTEXT(`Level ${inttostring(int2, 10)}: ${string0}`);
    CC_CREATE(int1, 4, 4);
    CC_SETPOSITION(7, ((int14 + 2) + int11), 0, 0);
    CC_SETSIZE(177, int12, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(66);
    CC_SETCOLOUR(11495962);
    CC_SETTEXTSHADOW(0);
    CC_SETTEXT(string1);
    var int15 = 1;
    var int16 = ((190 - (int15 * 35)) / (int15 + 1));
    CC_CREATE(int1, 5, 5);
    CC_SETPOSITION(int16, (((int14 + 2) + int11) + int12), 0, 0);
    CC_SETSIZE(35, 32, 0, 0);
    CC_SETOBJECT(17489, -1);
    CC_CREATE(int1, 4, 6);
    CC_SETPOSITION(int16, ((((int14 + 2) + int11) + int12) + 32), 0, 0);
    CC_SETSIZE(35, 14, 0, 0);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXTFONT(66);
    if ((varplayer_1101 != -1 as coordgrid)) {
        CC_SETCOLOUR(65280);
    } else {
        CC_SETCOLOUR(16711680);
    };
    CC_SETTEXTSHADOW(0);
    if ((varplayer_1101 != -1 as coordgrid)) {
        CC_SETTEXT("1/1");
    } else {
        CC_SETTEXT("0/1");
    };
    return;
}