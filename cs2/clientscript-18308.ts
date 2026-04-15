//
function script18308(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(17158 as cs2enum);
    var int1 = 0;
    var int2 = 0;
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    while ((int1 < int0)) {
        int3 = enum_getvalue(0, 33, 17158 as cs2enum, int1);
        int2 = script18309(int3);
        if ((int2 > 0)) {
            int5 = script1497(int3, int2);
            if ((int5 > 0)) {
                script18310(int3, (int2 - int5));
                int4 = (int4 + 1);
            };
        };
        int1 = (int1 + 1);
    };
    if ((int4 > 0)) {
        script1498();
    };
    return;
}