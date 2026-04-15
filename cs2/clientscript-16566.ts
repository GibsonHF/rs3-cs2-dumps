//
function script16566(int0: component): void {
    var int1 = 0;
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(5133 as cs2enum);
    var int4 = comp(-1, 65535);
    while ((int1 < int3)) {
        int2 = enum_getvalue(0, 0, 5133 as cs2enum, int1);
        int4 = enum_getvalue(0, 9, 5135 as cs2enum, int2);
        if ((int4 != comp(-1, 65535))) {
            IF_SETHIDE(true, int4);
            CC_DELETEALL(int4);
        };
        int1 = (int1 + 1);
    };
    IF_SETHIDE(false, int0);
    return;
}