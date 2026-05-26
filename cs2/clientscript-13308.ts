//
function script13308(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((((((int0 == -1) || (int1 == -1)) || (int2 == -1)) || (int3 == -1)) || (int4 == -1))) {
        return;
    };
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    var int9 = (2 * int6);
    var int10 = (2 * int9);
    IF_SETSIZE(int10, int10, 0, 0, int0);
    IF_SETSIZE(int9, int9, 0, 0, int1);
    IF_SETSIZE(int9, int9, 0, 0, int2);
    IF_SETSIZE(int9, int9, 0, 0, int3);
    IF_SETSIZE(int9, int9, 0, 0, int4);
    var int11 = -1;
    var int12 = -1;
    var int13 = 1;
    var int14 = 1;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    while ((++int11 < 4)) {
        switch (int11) {
            case 0: {
                int12 = int1;
                int15 = int6;
                int16 = (0 - int6);
                int17 = 0;
                break;
            }
            case 1: {
                int12 = int2;
                int15 = int6;
                int16 = int6;
                int17 = 49152;
                break;
            }
            case 2: {
                int12 = int3;
                int15 = (0 - int6);
                int16 = int6;
                int17 = 32768;
                break;
            }
            case 3: {
                int12 = int4;
                int15 = (0 - int6);
                int16 = (0 - int6);
                int17 = 16384;
                break;
            }
        };
        IF_SETPOSITION(int15, int16, int13, int14, int12);
        CC_CREATE(int12, 5, 0);
        CC_SETPOSITION((0 - int15), (0 - int16), int13, int14);
        CC_SETSIZE(int10, int10, 0, 0);
        CC_SETGRAPHIC(int5);
        CC_SET2DANGLE(int17);
    };
    script13311(int0, int7, int8, 0);
    IF_SETONTIMER(callback(script13314, int0, int1, int2, int3, int4), int0);
    return;
}