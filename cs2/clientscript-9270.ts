//
function script9270(int0: component, int1: int, int2: int, int3: component, int4: int, int5: unknown_int): void {
    var int6 = script9272(int1);
    var int7 = 0;
    var int8 = INV_GETOBJ(int6, int2);
    if ((int8 == -1 as obj)) {
        if (((int2 == 1) && (INV_GETOBJ(int6, 2) != -1 as obj))) {
            var int2 = 2;
            int8 = INV_GETOBJ(int6, int2);
        } else {
            return;
        };
    };
    if (((int4 != -1) && (INV_GETOBJ(93 as inv, int4) != -1 as obj))) {
        var int4 = -1;
    };
    if ((int8 != OC_CERT(int8))) {
        if ((INV_GETNUM(int6, int2) > 1)) {
            if ((int5 == 1)) {
                int7 = 1;
            };
        } else if ((int5 == 2)) {
            int7 = 1;
        };
    };
    script9271(int0, int6, int2, int3, int4, int7);
    return;
}