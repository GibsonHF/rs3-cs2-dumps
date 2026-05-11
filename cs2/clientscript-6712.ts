//
function script6712(int0: int): unknown_int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as obj;
    if ((int0 < 22)) {
        int2 = 16;
    } else if ((int0 < 28)) {
        int2 = 22;
    } else if ((int0 < 34)) {
        int2 = 28;
    } else {
        int2 = 34;
    };
    int3 = ((int2 + 6) - 1);
    while ((int2 < int3)) {
        int4 = INV_GETOBJ(573 as inv, int2);
        if ((((int4 != -1 as obj) && (OC_WEARPOS(int4) == 3)) && (OC_WEARPOS2(int4) != 5))) {
            int1 = (int1 + 1);
        };
        int2 = (int2 + 1);
    };
    if ((int1 == 0)) {
        return 0;
    };
    return 1;
}