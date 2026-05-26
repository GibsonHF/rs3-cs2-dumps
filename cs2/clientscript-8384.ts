//
function script8384(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number, int10: number, int11: number): [number, number, number, number] {
    var int12 = int0;
    var int13 = int2;
    var int14 = int1;
    var int15 = int3;
    var int16 = 0;
    var int17 = 0;
    if ((int4 == 1)) {
        if ((int5 == 0)) {
            int13 = (int2 - (16 * 2));
        } else if ((int8 != -1)) {
            int13 = (int2 - (16 * 2));
            int16 = (int10 - (int0 + (int13 / 2)));
            int17 = (int10 - (((int0 + int2) - int8) + (int2 / 2)));
            if ((MAX(int16, (0 - int16)) > MAX(int17, (0 - int17)))) {
                int12 = ((int0 + int2) - int8);
            };
        };
    } else {
        int13 = (int2 - (16 * 2));
        if ((int5 == 1)) {
            int12 = (int0 + (16 * 2));
        } else {
            int12 = (int0 + 16);
        };
    };
    if ((int6 == 1)) {
        if ((int7 == 0)) {
            int15 = (int3 - (16 * 2));
        } else if ((int9 != -1)) {
            int15 = (int3 - (16 * 2));
            int16 = (int11 - (int1 + (int15 / 2)));
            int17 = (int11 - (((int1 + int3) - int9) + (int3 / 2)));
            if ((MAX(int16, (0 - int16)) > MAX(int17, (0 - int17)))) {
                int14 = ((int1 + int3) - int9);
            };
        };
    } else {
        int15 = (int3 - (16 * 2));
        if ((int7 == 1)) {
            int14 = (int1 + (16 * 2));
        } else {
            int14 = (int1 + 16);
        };
    };
    return [int12, int14, int13, int15];
}