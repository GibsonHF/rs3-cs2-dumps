//
function script10099(int0: unknown_int, int1: unknown_int, int2: unknown_int): void {
    var int3 = comp(1515, 10);
    var int4 = IF_GETWIDTH(comp(1515, 13));
    var int5 = IF_GETHEIGHT(comp(1515, 13));
    var int6 = 50;
    var int7 = -50;
    var int8 = -50;
    var int9 = 1500;
    if ((int2 == 1)) {
        int3 = comp(1515, 11);
        int6 = 0;
        int9 = 1000;
    };
    var int10 = IF_GETWIDTH(int3);
    var int11 = IF_GETHEIGHT(int3);
    var int12 = 0;
    switch (int0) {
        case 0: {
            if ((int1 == 1)) {
                int7 = int4;
                int8 = int6;
                int12 = 0;
                IF_SETMODELANGLE(0, 0, 512, 512, 0, int9, int3);
            } else {
                int7 = (int10 * -1);
                int8 = int6;
                int12 = 1;
                IF_SETMODELANGLE(0, 0, 512, 1536, 0, int9, int3);
            };
            break;
        }
        case 1: {
            if ((int1 == 1)) {
                int7 = int4;
                int8 = ((int5 - int11) - int6);
                int12 = 0;
                IF_SETMODELANGLE(0, 0, 512, 512, 0, int9, int3);
            } else {
                int7 = (int10 * -1);
                int8 = ((int5 - int11) - int6);
                int12 = 1;
                IF_SETMODELANGLE(0, 0, 512, 1536, 0, int9, int3);
            };
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                int7 = int6;
                int8 = int5;
                int12 = 2;
                IF_SETMODELANGLE(0, 0, 512, 1024, 0, int9, int3);
            } else {
                int7 = int6;
                int8 = (int11 * -1);
                int12 = 3;
                IF_SETMODELANGLE(0, 0, 512, 0, 0, int9, int3);
            };
            break;
        }
        case 3: {
            if ((int1 == 1)) {
                int7 = ((int4 - int10) - int6);
                int8 = int5;
                int12 = 2;
                IF_SETMODELANGLE(0, 0, 512, 1024, 0, int9, int3);
            } else {
                int7 = ((int4 - int10) - int6);
                int8 = (int11 * -1);
                int12 = 3;
                IF_SETMODELANGLE(0, 0, 512, 0, 0, int9, int3);
            };
            break;
        }
    };
    IF_SETPOSITION(int7, int8, 0, 0, int3);
    IF_SETONTIMER(callback(script10100, int12, int3, int4, int5), 99287055);
    return;
}