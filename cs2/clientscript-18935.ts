//
function script18935(int0: int, int1: int, int2: int): void {
    var int3 = enum_getvalue(0, 74, 14569 as cs2enum, int0);
    if (((int3 == -1 as dbrow) || (int1 > DB_GETFIELDCOUNT(int3, 127008)))) {
        return;
    };
    var int4 = dbrow_getfield(int3, 127008, int1);
    switch (int4) {
        case 41734: {
            script13686(int2);
            break;
        }
        case 41663: {
            script3084(int2);
            break;
        }
    };
    return;
}