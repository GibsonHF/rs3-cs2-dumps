//
function script5040(): void {
    CC_DELETEALL(72810511);
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as struct;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = 200;
    if ((CLANPROFILE_FIND() == 1)) {
        while ((int0 < 200)) {
            CC_CREATE(72810511, 5, int0);
            [int1, int3, int4, int5] = script5019(int0);
            if ((int1 != 0)) {
                int2 = enum_getvalue(0, 73, 3943 as cs2enum, int1);
                if ((int2 != -1 as struct)) {
                    CC_SETGRAPHIC(struct_getparam(int2, 1465));
                    if ((struct_getparam(int2, 1466) == 1)) {
                        CC_SETTILING(1);
                    } else {
                        CC_SETTILING(0);
                    };
                    script5041(int2, int3, int4, int5);
                    int6 = (int6 - 1);
                } else {
                    CC_SETHIDE(1);
                };
            } else {
                CC_SETHIDE(1);
            };
            int0 = (int0 + 1);
        };
        IF_SETTEXT(inttostring(int6, 10), 72810580);
    } else {
        IF_SETTEXT("...", 72810580);
    };
    return;
}