//
function script2290(int0: struct, int1: unknown_int): string {
    if (((int1 == 1) && (STRING_LENGTH(struct_getparam(int0, 1260)) > 0))) {
        return struct_getparam(int0, 1260);
    };
    if ((STRING_LENGTH(struct_getparam(int0, 1259)) > 0)) {
        return struct_getparam(int0, 1259);
    };
    var string0 = script17935(int0);
    if ((STRING_LENGTH(string0) > 0)) {
        return string0;
    };
    return "???";
}