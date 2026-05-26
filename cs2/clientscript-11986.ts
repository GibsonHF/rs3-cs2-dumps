//
function script11986(string0: string): void {
    var int0 = 0;
    var int1 = FRIEND_COUNT();
    if ((strcmp(string0, "") == 0)) {
        while ((int0 < int1)) {
            if ((CC_FIND(72613895, int0) == 1)) {
                CC_SETHIDE(0);
            };
            if ((CC_FIND(72613893, int0) == 1)) {
                CC_SETHIDE(0);
            };
            if ((CC_FIND(72613894, int0) == 1)) {
                CC_SETHIDE(0);
            };
            int0 = (int0 + 1);
        };
        return;
    };
    var int2 = 0;
    while ((int0 < int1)) {
        if ((CC_FIND(72613894, int0) == 1)) {
            if ((STRING_INDEXOF_STRING(LOWERCASE(CC_GETTEXT()), LOWERCASE(string0), 0) == -1)) {
                int2 = 1;
            } else {
                int2 = 0;
            };
            CC_SETHIDE(int2);
        };
        if ((CC_FIND(72613895, int0) == 1)) {
            CC_SETHIDE(int2);
        };
        if ((CC_FIND(72613893, int0) == 1)) {
            CC_SETHIDE(int2);
        };
        int0 = (int0 + 1);
    };
    return;
}