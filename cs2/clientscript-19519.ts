//
function script19519(int0: number, string0: string): void {
    var string0 = ESCAPE(string0);
    script8808();
    varclient_1 = 0;
    IF_SETHIDE(1, 86048841);
    var int1 = 0;
    var int2 = 44;
    if ((script6431() == 1)) {
        int2 = 52;
    };
    if ((STRING_LENGTH(string0) == 0)) {
        if ((CC_FIND(86048886, 14) == 1)) {
            CC_SETTEXT(`${varclient_8166} Storage (no search entered)`);
            CC_SETMAXLINES(1);
        };
        IF_SETHIDE(0, 86048839);
        while ((int1 < 200)) {
            if ((CC_FIND(86048843, int1) == 1)) {
                CC_SETHIDE(1);
            };
            int1 = (int1 + 1);
        };
        script19544(0);
        script19503(0);
        return;
    };
    if ((CC_FIND(86048886, 14) == 1)) {
        CC_SETTEXT(`${varclient_8166} Storage (search: '${string0}')`);
        CC_SETMAXLINES(1);
    };
    IF_SETHIDE(1, 86048839);
    var int3 = script19579();
    var int4 = 8;
    var int5 = (5 + 20);
    var int6 = IF_GETWIDTH(86048842);
    var int7 = 0;
    var string1 = "";
    string0 = LOWERCASE(string0);
    while ((int1 <= int3)) {
        if ((CC_FIND(86048843, int1) == 1)) {
            if ((int0 == 0)) {
                string1 = OC_NAME(INV_GETOBJ(963, int1));
            } else {
                string1 = OC_NAME(CC_GETINVOBJECT());
            };
            if ((STRING_INDEXOF_STRING(LOWERCASE(string1), string0, 0) != -1)) {
                CC_SETPOSITION(int4, int5, 0, 0);
                CC_SETHIDE(0);
                int7 = (int7 + 1);
                int4 = (int4 + int2);
                if (((int4 + 36) >= int6)) {
                    int4 = 8;
                    int5 = (int5 + int2);
                };
            } else {
                CC_SETHIDE(1);
            };
        };
        int1 = (int1 + 1);
    };
    while ((int3 < 200)) {
        if ((CC_FIND(86048843, int3) == 1)) {
            CC_SETHIDE(1);
        };
        int3 = (int3 + 1);
    };
    IF_SETSCROLLPOS(0, 0, 86048842);
    script19522(0, 0, `Search results '${string0}':`);
    script19503(int7);
    return;
}