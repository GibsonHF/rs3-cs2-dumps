//
function script2469(int0: number, string0: string): void {
    if ((IF_GETHIDE(int0) == 1)) {
        return;
    };
    if ((strcmp(string0, "") == 0)) {
        IF_SETTEXT(`Friends List<br>RuneScape ${inttostring(MAP_WORLD(), 10)}`, script10587(int0));
    } else {
        IF_SETTEXT(`Friends List<br>Filter: ${string0}`, script10587(int0));
    };
    var int1 = FRIEND_COUNT();
    var int2 = 0;
    var int3 = script3099(int0);
    var int4 = script10588(int0);
    var int5 = script10589(int0);
    var int6 = script11297(int0);
    if ((strcmp(string0, "") == 0)) {
        while ((int2 < int1)) {
            if ((CC_FIND(int3, int2) == 1)) {
                CC_SETHIDE(0);
            };
            if ((CC_FIND(int4, int2) == 1)) {
                if ((cc_getparam(5438) == 1)) {
                    CC_SETHIDE(0);
                } else {
                    CC_SETHIDE(1);
                };
            };
            if ((CC_FIND(int5, int2) == 1)) {
                CC_SETHIDE(0);
            };
            if ((CC_FIND(int6, int2) == 1)) {
                CC_SETHIDE(0);
            };
            int2 = (int2 + 1);
        };
        script2470(int0, varbitplayer_30173, string0);
        return;
    };
    var int7 = 0;
    while ((int2 < int1)) {
        if ((CC_FIND(int3, int2) == 1)) {
            if ((STRING_INDEXOF_STRING(LOWERCASE(CC_GETTEXT()), LOWERCASE(string0), 0) == -1)) {
                int7 = 1;
            } else {
                int7 = 0;
            };
            CC_SETHIDE(int7);
        };
        if ((CC_FIND(int4, int2) == 1)) {
            if (((int7 == 0) && (cc_getparam(5438) == 1))) {
                CC_SETHIDE(0);
            } else {
                CC_SETHIDE(1);
            };
        };
        if ((CC_FIND(int5, int2) == 1)) {
            CC_SETHIDE(int7);
        };
        if ((CC_FIND(int6, int2) == 1)) {
            CC_SETHIDE(int7);
        };
        int2 = (int2 + 1);
    };
    script2470(int0, varbitplayer_30173, string0);
    return;
}