//
function script18902(): void {
    var int0 = script18854();
    var int1 = script15113();
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var string0 = "";
    script18899(true, int6);
    while ((int6 < int0)) {
        int2 = (varclient_7418 + int6);
        if ((CC_FINDBYCATEGORY(comp(1284, 17), 0, int6) == 1)) {
            if ((int2 != int1)) {
                script10684(7571 as dbrow);
            } else {
                script10684(4366 as dbrow);
                script18899(false, int6);
            };
        };
        if ((CC_FINDBYCATEGORY(comp(1284, 17), 1, int6) == 1)) {
            [int3, int4, int5] = DATE_RUNEDAY_TODATE(int2);
            string0 = `${enum_getvalue(0, 36, 13931 as cs2enum, MODULO(int6, 7))}<br>${inttostring(int3, 10)}`;
            if ((STRINGWIDTH(string0, script20491(17514 as dbrow)) > CC_GETWIDTH())) {
                string0 = `${enum_getvalue(0, 36, 6250 as cs2enum, MODULO(int6, 7))}<br>${inttostring(int3, 10)}`;
            };
            CC_SETTEXT(string0);
            script10644(17514 as dbrow, 1, 0);
            CC_SETTEXTALIGN(1, 1, 0);
            if ((int2 == int1)) {
                CC_SETCOLOUR(script10495(4));
            };
        };
        int6 = (int6 + 1);
    };
    return;
}