//
function script18059(int0: int): void {
    var int1 = script17896();
    var int2 = 0;
    var int3 = -1;
    var int4 = 0;
    var int5 = -1 as dbrow;
    var int6 = 0;
    if ((int0 != 0)) {
        int5 = script17905(int0);
        int6 = script17898(dbrow_getfield(int5, 1020128, 0));
        if ((CC_FINDBYCATEGORY(comp(1226, 34), (int6 + 40), 0) == 1)) {
            CC_SETPARAM_INT(8193, 0);
            script17899(int6, 0);
        };
    };
    while ((++int2 <= int1)) {
        if ((CC_FINDBYCATEGORY(comp(1226, 34), (int2 + 40), 0) == 1)) {
            int4 = cc_getparam(4255);
            if ((int4 == 58)) {
                cc_setparam(4255, (int4 + 60));
                CC_SETPARAM_INT(8193, 1);
                script17899(int2, 1);
                script7862(0, (int2 + 100), 4, 0, 0, 0, (IF_GETWIDTH(comp(1226, 34)) - 8), 58, 0, 0, 7969 as dbrow, "", true, 1, true, true);
                CC_SETOP(1, "Select");
                CC_SETONOP(callback(script18063, int2));
                script15937((120 + int2), 20, 0, 60, 0, 0, 0, 0, 1, 1);
                script10485((120 + int2), 21, 0, 20, 0, 0, IF_GETWIDTH(80347170), 20, 0, 0, 7983, "You currently have no missions of this type. Check back soon.");
                script7862(0, (120 + int2), 2, 0, 0, 0, (IF_GETWIDTH(80347170) - 4), 60, 0, 0, script17989(2), "", 0, 0, 0, 0);
            };
        };
    };
    return;
}