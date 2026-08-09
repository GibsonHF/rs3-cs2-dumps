//
function script14706(int0: number, int1: number): number {
    if ((int1 == -1)) {
        return 0;
    };
    var int2 = -1 as cs2enum;
    if ((int0 != -1)) {
        int2 = item_getparam(int0, 8345);
        if (((int2 != -1 as cs2enum) && (enum_hasoutput(74, int2, int1) == 0))) {
            return 0;
        };
        switch (dbrow_getfield(int1, 16496, 0)) {
            case 5: {
                if ((item_getparam(int0, 7208) != 1)) {
                    return 0;
                };
                break;
            }
        };
    };
    return 1;
}