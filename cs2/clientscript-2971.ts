//
function script2971(int0: number, int1: number, int2: number, int3: number, int4: number): number {
    var int5 = enum_getreverseindex(74, 0, 14569 as cs2enum, int0, 0);
    if ((script18934(int0) == 0)) {
        CC_CREATE(comp(365, 13), 4, int5);  // settings:cat_click
        CC_SETHIDE(true);
        return int2;
    };
    var string0 = dbrow_getfield(int0, 126976, 0);
    var string1 = dbrow_getfield(int0, 126992, 0);
    var int6 = 13572;
    var int7 = 1;
    var int8 = 20;
    switch (int4) {
        case -1: {
            var int4 = 0;
            break;
        }
        case -2: {
            int4 = 1;
            break;
        }
        case -3: {
            int4 = 0;
            int7 = 0;
            break;
        }
        default: {
            int4 = script9670(int5, int4);
            int6 = 4476;
            int8 = 24;
            break;
        }
    };
    script7853(23920653, int5, int1, int2, 0, 0, int3, int8, 0, 0, int6, string0, int7, 1, 1, script734(int4));
    CC_SETOP(1, "Select");
    CC_SETONOP(callback(script2930, int5));
    return ((int2 + int8) + 4);
}