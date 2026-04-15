//
function script699(int0: unknown_int, int1: component): void {
    var int2 = 0;
    var int3 = 0;
    if ((IF_FIND(int1) == 1)) {
        int2 = CC_GETX();
        if ((int0 < 5)) {
            int2 = CC_GETX();
            if ((script700(int0) == 0)) {
                int3 = -57;
            } else if ((script700(int0) == 1)) {
                int3 = -68;
            } else {
                int3 = -79;
            };
            CC_SETPOSITION(int2, int3, 0, 1);
        } else {
            int3 = CC_GETY();
            if ((script700(int0) == 0)) {
                int2 = -42;
            } else if ((script700(int0) == 1)) {
                int2 = -53;
            } else {
                int2 = -64;
            };
            CC_SETPOSITION(int2, int3, 1, 0);
        };
    };
    return;
}