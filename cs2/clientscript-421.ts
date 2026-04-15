//
function script421(int0: int, int1: int, int2: unknown_int, int3: int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 5;
    var int7 = 5;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int3 = (int3 + 1);
    IF_SETONTIMER(callback(script421, int0, int1, int2, int3), 66387968);
    if ((CAM_GETANGLE_XA() < int0)) {
        int10 = (int0 - CAM_GETANGLE_XA());
    } else if ((CAM_GETANGLE_XA() > int0)) {
        int10 = (CAM_GETANGLE_XA() - int0);
    };
    if ((CAM_GETANGLE_YA() < int1)) {
        int9 = (int1 - CAM_GETANGLE_YA());
        int8 = ((2047 - int1) + CAM_GETANGLE_YA());
        if ((int8 > int9)) {
            int11 = int9;
            [int6, int7] = script422(int10, int11);
            CAM_FORCEANGLE(CAM_GETANGLE_XA(), MIN((CAM_GETANGLE_YA() + int7), int1));
        } else {
            int11 = int8;
            [int6, int7] = script422(int10, int11);
            if ((int2 == 0)) {
                CAM_FORCEANGLE(CAM_GETANGLE_XA(), MAX((CAM_GETANGLE_YA() - int7), 0));
            } else {
                CAM_FORCEANGLE(CAM_GETANGLE_XA(), MAX((CAM_GETANGLE_YA() - int7), int1));
            };
            if (((CAM_GETANGLE_YA() == 0) && (int2 == 0))) {
                CAM_FORCEANGLE(CAM_GETANGLE_XA(), 2047);
                IF_SETONTIMER(callback(script421, int0, int1, 1, int3), 66387968);
            };
        };
    } else if ((CAM_GETANGLE_YA() > int1)) {
        int9 = ((2047 - CAM_GETANGLE_YA()) + int1);
        int8 = (CAM_GETANGLE_YA() - int1);
        if ((int8 > int9)) {
            int11 = int9;
            [int6, int7] = script422(int10, int11);
            if ((int2 == 0)) {
                CAM_FORCEANGLE(CAM_GETANGLE_XA(), MIN((CAM_GETANGLE_YA() + int7), 2047));
            } else {
                CAM_FORCEANGLE(CAM_GETANGLE_XA(), MIN((CAM_GETANGLE_YA() + int7), int1));
            };
            if (((CAM_GETANGLE_YA() == 2047) && (int2 == 0))) {
                CAM_FORCEANGLE(CAM_GETANGLE_XA(), 0);
                IF_SETONTIMER(callback(script421, int0, int1, 1, int3), 66387968);
            };
        } else {
            int11 = int8;
            [int6, int7] = script422(int10, int11);
            CAM_FORCEANGLE(CAM_GETANGLE_XA(), MAX((CAM_GETANGLE_YA() - int7), int1));
        };
    } else {
        int5 = 1;
    };
    if ((CAM_GETANGLE_XA() < int0)) {
        CAM_FORCEANGLE(MIN((CAM_GETANGLE_XA() + int6), int0), CAM_GETANGLE_YA());
    } else if ((CAM_GETANGLE_XA() > int0)) {
        CAM_FORCEANGLE(MAX((CAM_GETANGLE_XA() - int6), int0), CAM_GETANGLE_YA());
    } else {
        int4 = 1;
    };
    if ((((int4 == 1) && (int5 == 1)) || (int3 > 50))) {
        IF_SETONTIMER(callback(), comp(1013, 0));
    };
    return;
}