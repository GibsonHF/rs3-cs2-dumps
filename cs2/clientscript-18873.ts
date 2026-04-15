//
function script18873(int0: struct, int1: unknown_int): string {
    var string0 = "";
    var int2 = struct_getparam(int0, 4921);
    if ((int2 != -1 as dbrow)) {
        if ((int0 != script19968())) {
            string0 = "<col=FA3232>This promotion is not currently active.<br><br></col>";
        };
        string0 = strconcat(string0, dbrow_getfield(int2, 638992, 0));
        string0 = strconcat(string0, `<br><br>${dbrow_getfield(int2, 639056, 0)}`);
        return string0;
    };
    if ((STRING_LENGTH(struct_getparam(int0, 6136)) > 0)) {
        string0 = struct_getparam(int0, 6136);
        return string0;
    };
    if ((struct_getparam(int0, 1346) > 0)) {
        return struct_getparam(int0, 6411);
    };
    return "";
}