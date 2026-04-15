//
function script20509(int0: int): void {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(10780 as cs2enum);
    var string0 = enum_getvalue(0, 36, 10780 as cs2enum, int0);
    var string1 = "";
    var int3 = 0;
    var int4 = 0;
    if ((IF_FIND(comp(1475, 42)) == 1)) {
        unk11058();
        while ((int1 < int2)) {
            int3 = enum_getvalue(0, 0, 10781 as cs2enum, int1);
            string1 = enum_getvalue(0, 36, 6629 as cs2enum, script19718(int3));
            if ((STRING_LENGTH(string1) == 0)) {
                string1 = enum_getvalue(0, 36, 10780 as cs2enum, int1);
            };
            if ((STRING_LENGTH(string1) > 0)) {
                CC_LIST_ADDENTRY(int3, `To: ${string1}`, -1);
                if ((int0 == int3)) {
                    CC_LIST_SETISSELECTED(int4, 1, 0);
                };
                int4 = (int4 + 1);
            };
            int1 = (int1 + 1);
        };
    };
    return;
}