//
function script11825(int0: unknown_int, int1: int, int2: int, int3: int, int4: component, int5: component, int6: component, int7: component, int8: component, int9: int, int10: int): void {
    var int11 = 33;
    if (((int0 == 1) && (varbitclient_32703 == 1))) {
        int11 = 0;
        IF_SETHIDE(true, int8);
    } else {
        IF_SETHIDE(false, int8);
    };
    IF_SETSIZE(0, int11, 1, 0, int8);
    IF_SETSIZE(0, int11, 1, 1, int7);
    IF_SETPOSITION(0, int11, 0, 2, int5);
    var int12 = (((int2 * 27) + (int3 * 18)) + (MAX(0, (int3 - 1)) * 4));
    var int13 = IF_GETWIDTH(int7);
    var int14 = IF_GETHEIGHT(int7);
    var int15 = 0;
    var int16 = 0;
    if ((int0 == 2)) {
    } else if ((((script6431() == true) && (int0 == 1)) && (int1 > int13))) {
        int16 = 1;
        int14 = (int14 - 16);
    };
    if ((int12 > int14)) {
        int15 = 1;
        int13 = (int13 - 16);
        if ((((int0 == 2) && (int16 == 0)) && (int1 > int13))) {
            int16 = 1;
            int14 = (int14 - 16);
        };
    };
    IF_SETSCROLLSIZE(MAX(int1, int13), MAX(int12, int14), int6);
    if (((int0 == 1) && (script6431() == false))) {
        var int10 = 0;
    };
    IF_SETSIZE(int13, int14, 0, 0, int7);
    IF_SETSCROLLPOS(int10, int9, int6);
    if (((int15 == 1) && (int16 == 1))) {
        IF_SETSIZE(16, int14, 0, 0, int4);
        IF_SETSIZE(int13, 16, 0, 0, int5);
    } else {
        IF_SETSIZE(16, int11, 0, 1, int4);
        IF_SETSIZE(0, 16, 1, 0, int5);
    };
    var int17 = 0;
    if ((int16 == 1)) {
        script11147(int5, int6);
        IF_SETHIDE(false, int5);
        int17 = 3;
    } else {
        IF_SETHIDE(true, int5);
    };
    if ((int15 == 1)) {
        script7791(int4, int6);
        IF_SETHIDE(false, int4);
        int17 = 12;
    } else {
        IF_SETHIDE(true, int4);
    };
    if ((int17 > 0)) {
        if (((int16 == 1) && (int15 == 1))) {
            int17 = 15;
        };
        script371(int4, int5, int6, int17);
    };
    return;
}