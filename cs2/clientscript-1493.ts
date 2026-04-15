//
function script1493(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(15289 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1 as obj;
    var int8 = -1;
    while ((int0 < int1)) {
        int7 = enum_getvalue(0, 33, 15289 as cs2enum, int0);
        int8 = script1491(int7);
        if ((int8 != -1)) {
            int2 = INV_GETNUM(866 as inv, int8);
            if ((int2 > 0)) {
                int6 = 1;
                int3 = script14349(int7, int2);
                int4 = (int2 - int3);
                if ((script2294(866 as inv, int7, int4, int8) == 1)) {
                    int5 = 1;
                };
                script1492();
            };
        };
        int0 = (int0 + 1);
    };
    if ((int6 == 0)) {
        script14152("The herb bag is already empty.");
    } else if ((int5 == 0)) {
        script14152("You don't have enough space in your bank to do that.");
    } else {
        script14153("You empty the herbs to your bank.");
    };
    return;
}