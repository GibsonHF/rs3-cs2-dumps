//
function script2532(): unknown_int {
    var int0 = 0;
    var int1 = 0;
    var int2 = -1 as obj;
    int1 = ENUM_GETOUTPUTCOUNT(17159 as cs2enum);
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 33, 17159 as cs2enum, int0);
        if ((script18309(int2) > 0)) {
            return 1;
        };
        int0 = (int0 + 1);
    };
    return 0;
}