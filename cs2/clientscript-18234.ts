//
function script18234(int0: int): void {
    var int1 = comp(1343, 209);
    var string0 = "";
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int3, int4] = script3985(int0, 0);
    if ((((int2 > 0) || (int3 > 0)) || (int4 > 0))) {
        if ((int2 == 0)) {
            int2 = -1;
            if ((int3 == 0)) {
                int3 = -1;
            };
        } else {
            int4 = -1;
        };
        string0 = script3382(int2, int3, int4, -1, 4, 0);
    } else {
        string0 = "Logout to Refresh";
    };
    IF_SETTEXT(string0, int1);
    IF_SETTEXT(string0, comp(1343, 203));
    IF_SETTEXT(script17229(), comp(1343, 14));
    var int5 = 0;
    var int6 = script16317();
    var string1 = script17177(script17176());
    while ((++int5 <= int6)) {
        if (((script16319(int5) == -1 as struct) && (CC_FINDBYCATEGORY(comp(1343, 19), (int5 - 1), 0) == 1))) {
            CC_SETTEXT(string1);
        };
    };
    return;
}