//
function script20604(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = 97976339;
    var int7 = 97976338;
    var int8 = 97976335;
    var int9 = 97976333;
    var int10 = 97976336;
    var int11 = 97976337;
    var int12 = 97976334;
    var int13 = 97976345;
    var int14 = 97976348;
    var int15 = 97976344;
    IF_SETONTIMER(callback(), int9);
    IF_SETHIDE(0, int6);
    IF_SETHIDE(1, int8);
    IF_SETHIDE(1, int10);
    IF_SETHIDE(1, int11);
    IF_SETHIDE(1, int12);
    if ((int5 == 1)) {
        IF_SETHIDE(1, int13);
        IF_SETHIDE(1, int14);
    };
    IF_SETHIDE(1, int15);
    IF_SETONTIMER(callback(), 97976335);
    var int16 = -1;
    var int17 = -1;
    if ((int0 != -1)) {
        int17 = struct_getparam(int0, 9254);
        if (((struct_getparam(int0, 1331) == true) && (int5 == 1))) {
            IF_SETHIDE(0, int13);
            script18910(11063, 97976351, 97976350, 28, 30, 5);
        };
    };
    switch (int1) {
        case 2: {
            script17960(int0, -1, -1, int6, int7, int8, int9, int6, int17);
            break;
        }
        case 5: {
            int16 = script17962(int0);
            script17958(int0, int16, script17961(int16, int0), int6, int7, int10, int9, int6, 50, int17);
            if (((int0 != -1) && (struct_getparam(int0, 1331) == true))) {
                script19031(int4, int10);
            };
            break;
        }
        case 4: {
            script18695(int0, int6, int7, int11, int9, int6, 0, int17, 0);
            if (((int0 != -1) && (struct_getparam(int0, 5166) != -1 as cs2enum))) {
                script19714(4, int0, int17, struct_getparam(int0, 5166));
            };
            break;
        }
        default: {
            IF_SETHIDE(1, int6);
            if ((int2 != -1)) {
                stack(int2);
                stack(int12);
                IF_SETGRAPHIC();
                IF_SETHIDE(0, int12);
            } else {
                IF_SETHIDE(1, int9);
                IF_SETSIZE(0, 0, 1, 1, 97976356);
            };
            break;
        }
    };
    var string0 = "";
    if ((int0 != -1)) {
        string0 = struct_getparam(int0, 2533);
    };
    if (((int3 == 1) && (STRING_LENGTH(string0) > 0))) {
        IF_SETTEXT(string0, 97976352);
        IF_SETHIDE(0, 97976352);
    } else {
        IF_SETHIDE(1, 97976352);
    };
    return;
}