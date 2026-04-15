//
function script8863(int0: int, int1: unknown_int, string0: string): void {
    var int2 = script10405(int0);
    var int3 = struct_getparam(int2, 3513);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int3);
    CC_CREATE(int3, 3, 0);
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(0, 0, 1, 1);
    CC_SETCOLOUR(1);
    CC_SETFILL(1);
    CC_SETTRANS(75);
    if ((((int1 == 1) && (script19633(int0) == true)) && ((struct_getparam(int2, 3505) == comp(-1, 65535)) || (IF_HASSUB(struct_getparam(int2, 3505)) == 1)))) {
        IF_SETHIDE(true, int3);
        return;
    };
    IF_SETHIDE(false, int3);
    if ((strcmp(string0, "") == 0)) {
        var string0 = struct_getparam(int2, 3493);
        if (((int0 == 32) && (varplayer_12314 > 0))) {
            string0 = "Leagues: CATALYST";
        };
    };
    string0 = strconcat(string0, " currently unavailable.");
    CC_CREATE(int3, 4, 1);
    CC_SETSIZE(10, 10, 1, 1);
    CC_SETPOSITION(5, 5, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(1, 0, 10);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTFONT(27 as fontmetrics);
    CC_CREATE[1](int3, 5, 2);
    CC_SETSIZE[1](64, 64, 0, 0);
    CC_SETGRAPHIC[1](18690 as graphic);
    script8392(int0);
    return;
}