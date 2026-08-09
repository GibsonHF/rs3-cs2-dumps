//
function script4726(int0: number): string {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var string0 = "";
    var int2 = -1;
    var int3 = -1;
    var string1 = "";
    int2 = (int2 + 1);
    while ((int2 < int1)) {
        int3 = enum_getvalue(0, 73, int0, int2);
        string1 = struct_getparam(int3, 2533);
        if (((STRING_LENGTH(string1) == 0) && (STRING_LENGTH(struct_getparam(int3, 792)) > 0))) {
            string1 = struct_getparam(int3, 792);
        };
        string0 = strconcat(string0, `<br>- ${string1}`);
    };
    return string0;
}