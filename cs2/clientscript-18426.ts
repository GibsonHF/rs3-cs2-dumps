//
function script18426(int0: struct): dbrow {
    if ((int0 == -1 as struct)) {
        var int0 = script18417();
    };
    if ((int0 != -1 as struct)) {
        return struct_getparam(int0, 9062);
    };
    return -1 as dbrow;
}