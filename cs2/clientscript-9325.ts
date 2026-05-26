//
function script9325(int0: number, string0: string): void {
    var string0 = ESCAPE(string0);
    script8808();
    varclient_1 = 0;
    IF_SETHIDE(1, 33882310);
    var int1 = 0;
    var int2 = 44;
    if ((script6431() == 1)) {
        int2 = 52;
    };
    if ((STRING_LENGTH(string0) == 0)) {
        if ((CC_FIND(33882423, 14) == 1)) {
            CC_SETTEXT("Bank of Gielinor (no search entered)");
            CC_SETMAXLINES(1);
        };
        IF_SETHIDE(0, 33882308);
        script10239();
        script9511(int0);
        IF_SETHIDE(1, 33882314);
        while ((int1 < 1820)) {
            if ((CC_FIND(33882313, int1) == 1)) {
                CC_SETHIDE(1);
            };
            int1 = (int1 + 1);
        };
        script13828(0);
        script9302(0);
        return;
    };
    if ((CC_FIND(33882423, 14) == 1)) {
        CC_SETTEXT(`Bank of Gielinor (search: '${string0}')`);
        CC_SETMAXLINES(1);
    };
    IF_SETHIDE(1, 33882308);
    var int3 = script14337();
    var int4 = 8;
    var int5 = (5 + 20);
    var int6 = IF_GETWIDTH(33882311);
    var int7 = 0;
    var string1 = "";
    string0 = LOWERCASE(string0);
    while ((int1 <= int3)) {
        if ((CC_FIND(33882313, int1) == 1)) {
            if ((int0 == 0)) {
                string1 = OC_NAME(INV_GETOBJ(95, int1));
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
    while ((int3 < 1820)) {
        if ((CC_FIND(33882313, int3) == 1)) {
            CC_SETHIDE(1);
        };
        int3 = (int3 + 1);
    };
    if ((int7 == 0)) {
        script10186(0, 0);
        int5 = 0;
    } else {
        script9328(0, 5, "Search Results: Bank");
    };
    IF_SETSCROLLPOS(0, 0, 33882311);
    if ((int4 > 8)) {
        int5 = (int5 + int2);
    };
    IF_SETPOSITION(0, int5, 0, 0, 33882314);
    script9302(int7);
    return;
}