//
function script12556(): void {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(13250 as cs2enum);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = -1;
    var int8 = -1;
    while ((int0 < int1)) {
        int7 = enum_getvalue(0, 33, 13250 as cs2enum, int0);
        stack(int7);
        script21001();
        int8 = [];
        if ((int8 != -1)) {
            int2 = INV_GETNUM(1011 as inv, int8);
            if ((int2 > 0)) {
                int6 = 1;
                int3 = script14349(int7, int2);
                int4 = (int2 - int3);
                if ((script2294(1011, int7, int4, int8) == 1)) {
                    int5 = 1;
                };
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