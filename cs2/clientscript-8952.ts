//
function script8952(int0: int): int {
    var int1 = 0;
    var int2 = 3;
    var int3 = 0;
    var int4 = -1 as struct;
    var string0 = "";
    var int0 = (int0 - 10);
    while ((int2 > 0)) {
        switch (int2) {
            case 3: {
                int3 = varplayer_7125;
                break;
            }
            case 2: {
                int3 = varplayer_7126;
                break;
            }
            case 1: {
                int3 = varplayer_7127;
                break;
            }
        };
        if ((int3 > 0)) {
            int4 = enum_getvalue(0, 73, script8221(), int3);
            int1 = (++int1 + 16);
            string0 = struct_getparam(int4, 6969);
            int1 = (int1 + script7593(string0, (int0 - 45), 26 as fontmetrics, 0));
            int1 = (++int1 + 5);
            int1 = (int1 + 2);
        };
        int2 = (int2 - 1);
    };
    return int1;
}