//
function script9391(int0: component, int1: int, int2: int, int3: int, int4: achievement): int {
    var string0 = "";
    var int5 = -1 as struct;
    var int6 = -1 as quest;
    switch (int2) {
        case 2: {
            string0 = script19862(int4);
            break;
        }
        case 3: {
            int5 = enum_getvalue(0, 73, 12251 as cs2enum, int3);
            if ((int5 != -1 as struct)) {
                if ((struct_getparam(int5, 1345) > 0)) {
                    int6 = enum_getvalue(0, 3, 2252 as cs2enum, int3);
                    if ((int6 != -1 as quest)) {
                        string0 = script2134(int6, "", "");
                    };
                } else {
                    string0 = struct_getparam(int5, 6414);
                };
            };
            break;
        }
        case 1: {
            int6 = enum_getvalue(0, 3, 2252 as cs2enum, int3);
            if ((int6 != -1 as quest)) {
                string0 = script2134(int6, "", "");
            };
            break;
        }
    };
    if ((strcmp(string0, "") != 0)) {
        CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(0, int1, 0, 0);
        CC_SETSIZE(0, 16, 1, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        script2731(int0, CC_GETID(), 2);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETTEXT("Rewards");
        var int1 = (int1 + (CC_GETHEIGHT() + 5));
        int1 = script9392(int0, string0, int1);
    };
    return int1;
}