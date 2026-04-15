//
function script9325(int0: unknown_int, string0: string): void {
    var string0 = ESCAPE(string0);
    script8808();
    varclient_1 = 0;
    IF_SETHIDE(true, comp(517, 198));
    var int1 = 0;
    var int2 = 44;
    if ((script6431() == true)) {
        int2 = 52;
    };
    if ((STRING_LENGTH(string0) == 0)) {
        if ((CC_FIND(comp(517, 311), 14) == 1)) {
            CC_SETTEXT("Bank of Gielinor (no search entered)");
            CC_SETMAXLINES(1);
        };
        IF_SETHIDE(false, comp(517, 196));
        script10239();
        script9511(int0);
        IF_SETHIDE(true, comp(517, 202));
        while ((int1 < 1820)) {
            if ((CC_FIND(comp(517, 201), int1) == 1)) {
                CC_SETHIDE(true);
            };
            int1 = (int1 + 1);
        };
        script13828(0);
        script9302(0);
        return;
    };
    if ((CC_FIND(comp(517, 311), 14) == 1)) {
        CC_SETTEXT(`Bank of Gielinor (search: '${string0}')`);
        CC_SETMAXLINES(1);
    };
    IF_SETHIDE(true, comp(517, 196));
    var int3 = script14337();
    var int4 = 8;
    var int5 = (5 + 20);
    var int6 = IF_GETWIDTH(comp(517, 199));
    var int7 = 0;
    var string1 = "";
    string0 = LOWERCASE(string0);
    while ((int1 <= int3)) {
        if ((CC_FIND(comp(517, 201), int1) == 1)) {
            if ((int0 == 0)) {
                string1 = OC_NAME(INV_GETOBJ(95 as inv, int1));
            } else {
                string1 = OC_NAME(CC_GETINVOBJECT());
            };
            if ((STRING_INDEXOF_STRING(LOWERCASE(string1), string0, 0) != -1)) {
                CC_SETPOSITION(int4, int5, 0, 0);
                CC_SETHIDE(false);
                int7 = (int7 + 1);
                int4 = (int4 + int2);
                if (((int4 + 36) >= int6)) {
                    int4 = 8;
                    int5 = (int5 + int2);
                };
            } else {
                CC_SETHIDE(true);
            };
        };
        int1 = (int1 + 1);
    };
    while ((int3 < 1820)) {
        if ((CC_FIND(comp(517, 201), int3) == 1)) {
            CC_SETHIDE(true);
        };
        int3 = (int3 + 1);
    };
    if ((int7 == 0)) {
        script10186(0, 0);
        int5 = 0;
    } else {
        script9328(0, 5, "Search Results: Bank");
    };
    IF_SETSCROLLPOS(0, 0, comp(517, 199));
    if ((int4 > 8)) {
        int5 = (int5 + int2);
    };
    IF_SETPOSITION(0, int5, 0, 0, comp(517, 202));
    script9302(int7);
    return;
}