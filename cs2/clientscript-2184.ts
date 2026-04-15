//[proc,trade_pricechecker_setup]
function script2184(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    var int3 = ((IF_GETWIDTH(int0) - (5 * 36)) / 6);
    var int4 = 0;
    var int5 = -1 as obj;
    var int6 = 0;
    var long0 = 0n;
    var long1 = 0n;
    var long2 = 0n;
    var int7 = 0;
    var int8 = INV_SIZE(90 as inv);
    var string0 = "";
    var int9 = (STRINGWIDTH(TOSTRING_LOCALISED(2147483647, 1), 206 as fontmetrics) + 4);
    var int10 = script15891("0<br>0<br>0<br>", 1000, 206 as fontmetrics, 0);
    var int11 = 16;
    var int12 = 0;
    var int13 = 0;
    if ((INV_FREESPACE(90 as inv) < int8)) {
        while ((int4 < int8)) {
            int6 = INV_GETNUM(90 as inv, int4);
            CC_CREATE(int0, 5, (int4 * 2));
            CC_CREATE[1](int0, 4, ((int4 * 2) + 1));
            if ((int6 > 0)) {
                int5 = INV_GETOBJ(90 as inv, int4);
                long0 = MAX_LONG(1n, script2185(int4));
                if ((int6 > 1)) {
                    long2 = DIVIDE_LONG(9223372036854775807n, long0);
                    if ((branch_gt_long[102](long0, 0n) && (script17138(long2) < int6))) {
                        string0 = `${TOSTRING_LOCALISED(int6, 1)} x ${TOSTRING_LOCALISED_LONG(long0, 1)}<br>=<br>LOTS`;
                    } else {
                        string0 = `${TOSTRING_LOCALISED(int6, 1)} x ${TOSTRING_LOCALISED_LONG(long0, 1)}<br>=<br>${TOSTRING_LOCALISED_LONG(MULTIPLY_LONG(INT_TO_LONG(int6), long0), 1)}`;
                    };
                } else {
                    string0 = TOSTRING_LOCALISED_LONG(long0, 1);
                };
                int12 = MAX(int9, PARAWIDTH(string0, 10000, 206 as fontmetrics));
                if (((int11 + int12) > IF_GETWIDTH(int0))) {
                    int11 = 16;
                    int13 = (((int13 + 32) + int10) + 4);
                };
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETPOSITION(((int11 + (int12 / 2)) - (36 / 2)), int13, 0, 0);
                CC_SETHIDE(false);
                CC_SETOBJECT(int5, int6);
                CC_SETOUTLINE(1);
                CC_SETOP(1, "Remove-1");
                CC_SETOP(2, "Remove-5");
                CC_SETOP(3, "Remove-10");
                CC_SETOP(4, "Remove-All");
                CC_SETOP(5, "Remove-X");
                CC_SETOP(10, "Examine");
                CC_SETOPBASE(`<col=ff9040>${OC_NAME(int5)}`);
                CC_SETSIZE[1](int12, int10, 0, 0);
                CC_SETPOSITION[1](int11, ((int13 + 2) + 32), 0, 0);
                CC_SETHIDE[1](false);
                CC_SETTEXTALIGN[1](1, 0, 0);
                CC_SETTEXTFONT[1](206 as fontmetrics);
                script12108(3);
                CC_SETTEXTSHADOW[1](true);
                CC_SETTEXT[1](string0);
                int11 = ((int11 + int12) + (4 * 3));
            } else {
                CC_SETSIZE(0, 0, 0, 0);
                CC_SETPOSITION(0, 0, 0, 0);
                CC_SETHIDE(true);
                CC_SETSIZE[1](0, 0, 0, 0);
                CC_SETPOSITION[1](0, 0, 0, 0);
                CC_SETHIDE[1](true);
            };
            int4 = (int4 + 1);
        };
    } else {
        CC_CREATE(int0, 4, 0);
        CC_SETSIZE(0, IF_GETHEIGHT(int0), 1, 0);
        CC_SETPOSITION(0, 0, 1, 0);
        script11024(3);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXTFONT(206 as fontmetrics);
        CC_SETTEXT("Interact with items in your inventory to check their values.");
    };
    int13 = (((int13 + 32) + int10) + 4);
    if ((int13 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int13, int0);
        IF_SETPOSITION(-8, IF_GETY(int0), 1, 0, int0);
        script31(int1, int0, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
        if ((CC_FIND(int1, 1) == 1)) {
            script37(int1, int0, IF_GETSCROLLY(int0), 1);
        };
    } else {
        IF_SETSCROLLSIZE(0, 0, int0);
        IF_SETSCROLLPOS(0, 0, int0);
        CC_DELETEALL(int1);
        IF_SETPOSITION(0, IF_GETY(int0), 1, 0, int0);
    };
    if (branch_lt_long[372](varclient_7153, 0n)) {
        IF_SETTEXT("Total value:<br>---", int2);
    } else {
        IF_SETTEXT(`Total value:<br>${TOSTRING_LOCALISED_LONG(varclient_7153, 1)}`, int2);
    };
    return;
}