//
function script17230(int0: struct, int1: int): string {
    var int2 = 0;
    var string0 = "";
    if ((int0 != -1 as struct)) {
        string0 = struct_getparam(int0, 1273);
        int2 = struct_getparam(int0, 2235);
        if ((int1 == 1)) {
            int2 = (int2 * 2);
            if ((STRING_LENGTH(struct_getparam(int0, 4258)) > 0)) {
                string0 = struct_getparam(int0, 4258);
            };
        };
        string0 = strconcat(string0, `: ${inttostring(int2, 10)}`);
    };
    return string0;
}