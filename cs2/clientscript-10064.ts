//
function script10064(): void {
    if ((varclient_4271 != 1)) {
        if ((WORLDLIST_FETCH() == 0)) {
            return;
        };
        varclient_4271 = 1;
    };
    var int0 = comp(1486, 14);
    var int1 = cc_getparam(4261);
    var int2 = 0;
    var string0 = "";
    var int3 = 0;
    var string1 = "";
    var int4 = 0;
    var int5 = 0;
    var string2 = "";
    stack(WORLDLIST_SPECIFIC(int1));
    [int2, string0, int3, string1, int4, int5, string2] = stack();
    var int6 = -1 as graphic;
    var string3 = "";
    var string4 = "";
    var int7 = -1;
    var int8 = -1 as graphic;
    var int9 = -1;
    var int10 = -1 as graphic;
    var string5 = "";
    var string6 = "";
    [int6, string3, string4, int7, int8, int9, int10, string5, string6] = script3117(int1, int2, 0, string0, string1, int4, int3);
    if ((STRING_LENGTH(string4) > 1)) {
        string3 = `${string4} - ${string3}`;
    };
    var int11 = 0;
    var int12 = 490;
    CC_CREATE(int0, 5, int11);
    CC_SETSIZE(24, 12, 0, 0);
    CC_SETPOSITION(0, 0, 0, 1);
    CC_SETGRAPHIC(int6);
    int11 = (int11 + 1);
    CC_CREATE[1](int0, 4, int11);
    CC_SETPOSITION[1]((CC_GETWIDTH() + 2), 0, 0, 1);
    CC_SETSIZE[1](PARAWIDTH(string3, int12, 27 as fontmetrics), script7593(string3, int12, 27 as fontmetrics, 0), 0, 0);
    CC_SETTEXT[1](string3);
    CC_SETTEXTFONT[1](27 as fontmetrics);
    CC_SETCOLOUR[1](int7);
    CC_SETTEXTALIGN[1](0, 0, 0);
    IF_SETSIZE((CC_GETX[1]() + CC_GETWIDTH[1]()), MAX(CC_GETHEIGHT(), CC_GETHEIGHT[1]()), 0, 0, int0);
    return;
}