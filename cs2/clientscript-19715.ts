//
function script19715(int0: int, int1: int): void {
    var int2 = 1;
    var string0 = "Custom";
    var string1 = "";
    if ((enum_hasoutput(0, 10781 as cs2enum, int0) == 1)) {
        var int0 = enum_getreverseindex(0, 0, 10781 as cs2enum, int0, 0);
        string0 = enum_getvalue(0, 36, 10780 as cs2enum, int0);
    } else {
        string1 = enum_getvalue(0, 36, 6629 as cs2enum, int1);
    };
    var int3 = 1;
    if ((IF_FIND(comp(1475, 43)) == 1)) {
        unk11058();
        if ((int1 == 0)) {
            CC_LIST_ADDENTRY(0, `As: ${string0}`, -1);
            CC_LIST_SETISSELECTED(0, 1, 0);
        } else {
            CC_LIST_ADDENTRY(0, string1, -1);
        };
        while ((int2 <= 255)) {
            string1 = enum_getvalue(0, 36, 6629 as cs2enum, int2);
            if ((STRING_LENGTH(string1) > 0)) {
                CC_LIST_ADDENTRY(int2, `As: ${string1}`, -1);
                if ((int2 == int1)) {
                    CC_LIST_SETISSELECTED(int3, 1, 0);
                };
                int3 = (int3 + 1);
            };
            int2 = (int2 + 1);
        };
    };
    return;
}