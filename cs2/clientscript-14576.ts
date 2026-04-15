//
function script14576(): int {
    var int0 = ENUM_GETOUTPUTCOUNT(varplayer_9215);
    var int1 = -1 as dbrow;
    var int2 = -1;
    while ((++int2 < int0)) {
        int1 = enum_getvalue(0, 74, varplayer_9215, int2);
        if ((script14575(int1) == 1)) {
            return int2;
        };
    };
    return -1;
}