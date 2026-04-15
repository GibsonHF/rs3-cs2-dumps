//
function script12035(int0: component, string0: string): void {
    if ((IF_GETHIDE(int0) == true)) {
        return;
    };
    if ((strcmp(string0, "") == 0)) {
        IF_SETTEXT("Ignore List", script12029(int0));
    } else {
        IF_SETTEXT(`Ignore List<br>Filter: ${string0}`, script12029(int0));
    };
    var int1 = script12023(int0);
    var int2 = script12024(int0);
    var int3 = 0;
    var int4 = IGNORE_COUNT();
    if ((strcmp(string0, "") == 0)) {
        while ((int3 < int4)) {
            if ((CC_FIND(int1, int3) == 1)) {
                CC_SETHIDE(false);
            };
            if ((CC_FIND(int2, int3) == 1)) {
                if ((cc_getparam(5438) == 1)) {
                    CC_SETHIDE(false);
                } else {
                    CC_SETHIDE(true);
                };
            };
            int3 = (int3 + 1);
        };
        script12036(int0, varbitplayer_47452, string0);
        return;
    };
    var int5 = false;
    while ((int3 < int4)) {
        if ((CC_FIND(int1, int3) == 1)) {
            if ((STRING_INDEXOF_STRING(LOWERCASE(CC_GETTEXT()), LOWERCASE(string0), 0) == -1)) {
                int5 = true;
            } else {
                int5 = false;
            };
            CC_SETHIDE(int5);
        };
        if ((CC_FIND(int2, int3) == 1)) {
            if (((int5 == false) && (cc_getparam(5438) == 1))) {
                CC_SETHIDE(false);
            } else {
                CC_SETHIDE(true);
            };
        };
        int3 = (int3 + 1);
    };
    script12036(int0, varbitplayer_47452, string0);
    return;
}