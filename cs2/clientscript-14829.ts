//
function script14829(string0: string): void {
    CC_DELETEALL(44892240);
    CC_DELETEALL(44892241);
    var int0 = db_find_with_count(364688, 1, 0);
    var int1 = -1 as dbrow;
    var int2 = -1 as obj;
    var int3 = 11952;
    var int4 = 40;
    var int5 = 36;
    var int6 = 36;
    var int7 = 32;
    if ((script6431() == 1)) {
        int3 = 11954;
        int4 = 44;
        int5 = 44;
        int6 = 44;
        int7 = 39;
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    [int8, int9, int10] = script12087(IF_GETWIDTH(44892240), int4, 1, 2);
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    var int14 = 0;
    while ((++int13 < int0)) {
        dbrow_findnext();
        int1 = stack();
        if ((int1 != -1)) {
            int2 = dbrow_getfield(int1, 364640, 0);
            if ((STRING_INDEXOF_STRING(LOWERCASE(OC_NAME(int2)), LOWERCASE(string0), 0) != -1)) {
                int11 = (int10 + (MODULO(int14, int8) * int9));
                int12 = ((int14 / int8) * (int5 + 2));
                script14764(44892240, 44892241, int2, script14500(int2), int11, int12, int3, int4, int5, int6, int7, int14);
                if ((CC_FIND(44892241, int14) == 1)) {
                    CC_SETOPCURSOR(1, 172);
                    CC_SETOP(1, "Info");
                    CC_SETONOP(callback(script14830, int1));
                };
                int14 = (int14 + 1);
            };
        };
    };
    if ((int14 == 0)) {
        CC_CREATE(44892240, 4, 0);
        CC_SETSIZE(0, 0, 1, 1);
        CC_SETPOSITION(0, 0, 1, 1);
        CC_SETTEXTFONT(26);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT("No match found, try refining your search.");
        CC_SETCOLOUR(0);
        CC_SETTRANS(50);
    };
    IF_SETSCROLLSIZE(0, MAX(IF_GETHEIGHT(44892238), (int12 + 36)), 44892238);
    IF_SETSCROLLPOS(0, 0, 44892238);
    script7791(44892239, 44892238);
    return;
}