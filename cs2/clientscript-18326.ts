//
function script18326(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): void {
    var int7 = IF_GETWIDTH(script18321(int0, 76742668));
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = comp(1171, 0);  // activity_progress_bar:marker1
    while ((int10 != -1)) {
        int8 = (int8 + 1);
        switch (int8) {
            case 1: {
                int10 = int1;
                int11 = script18321(int0, 76742656);
                break;
            }
            case 2: {
                int10 = int2;
                int11 = script18321(int0, 76742657);
                break;
            }
            case 3: {
                int10 = int3;
                int11 = script18321(int0, 76742658);
                break;
            }
            case 4: {
                int10 = int4;
                int11 = script18321(int0, 76742659);
                break;
            }
            case 5: {
                int10 = int5;
                int11 = script18321(int0, 76742660);
                break;
            }
            default: {
                int11 = comp(-1, 65535);
                int10 = -1;
                break;
            }
        };
        if ((int10 > 0)) {
            int9 = (SCALE(int7, int6, int10) - 7);
            IF_SETPOSITION(int9, 20, 0, 0, int11);
            IF_SETONMOUSEREPEAT(callback(script17561, int0, int11, int10, int6), int11);
            IF_SETHIDE(false, int11);
        } else if ((int11 != comp(-1, 65535))) {
            IF_SETHIDE(true, int11);
        };
    };
    return;
}