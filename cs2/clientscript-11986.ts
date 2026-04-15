//
function script11986(string0: string): void {
    var int0 = 0;
    var int1 = FRIEND_COUNT();
    if ((strcmp(string0, "") == 0)) {
        while ((int0 < int1)) {
            if ((CC_FIND(comp(1108, 7), int0) == 1)) {
                CC_SETHIDE(false);
            };
            if ((CC_FIND(comp(1108, 5), int0) == 1)) {
                CC_SETHIDE(false);
            };
            if ((CC_FIND(comp(1108, 6), int0) == 1)) {
                CC_SETHIDE(false);
            };
            int0 = (int0 + 1);
        };
        return;
    };
    var int2 = false;
    while ((int0 < int1)) {
        if ((CC_FIND(comp(1108, 6), int0) == 1)) {
            if ((STRING_INDEXOF_STRING(LOWERCASE(CC_GETTEXT()), LOWERCASE(string0), 0) == -1)) {
                int2 = true;
            } else {
                int2 = false;
            };
            CC_SETHIDE(int2);
        };
        if ((CC_FIND(comp(1108, 7), int0) == 1)) {
            CC_SETHIDE(int2);
        };
        if ((CC_FIND(comp(1108, 5), int0) == 1)) {
            CC_SETHIDE(int2);
        };
        int0 = (int0 + 1);
    };
    return;
}