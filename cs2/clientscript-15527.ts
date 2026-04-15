//
function script15527(int0: struct, int1: int): string {
    var string0 = struct_getparam(int0, 8664);
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = enum_getvalue(0, 36, 10636 as cs2enum, int1);
    };
    string0 = script15691(int0, string0);
    if ((STRING_LENGTH(string0) == 0)) {
        return "";
    };
    return script14145(" ", "Restrictions:", string0);
}