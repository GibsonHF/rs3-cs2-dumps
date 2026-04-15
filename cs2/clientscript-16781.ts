//
function script16781(): string {
    var int0 = 1;
    var int1 = -1 as obj;
    var string0 = "";
    while ((int0 < (ENUM_GETOUTPUTCOUNT(17376 as cs2enum) + 1))) {
        int1 = enum_getvalue(0, 33, 17376 as cs2enum, int0);
        string0 = `${string0}<br> - ${OC_NAME(int1)}`;
        int0 = (int0 + 1);
    };
    return string0;
}