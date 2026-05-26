//
function script11003(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    if ((int0 == 22)) {
        var int0 = struct_getparam(int1, 2532);
    };
    IF_SETHIDE(0, 85918214);
    IF_SETHIDE(0, 85918284);
    IF_SETHIDE(0, 85918289);
    IF_SETHIDE(0, 85918076);
    IF_SETHIDE(1, 85918256);
    IF_SETHIDE(1, 85918253);
    IF_SETHIDE(1, 85918237);
    IF_SETHIDE(1, 85918229);
    if ((int0 != 1)) {
        IF_SETHIDE(1, 85918082);
        IF_SETHIDE(1, 85918079);
        IF_SETHIDE(1, 85918080);
        IF_SETPOSITION(0, 0, 1, 1, 85918081);
        IF_SETHIDE(0, 85918299);
    } else {
        IF_SETHIDE(0, 85918079);
        IF_SETHIDE(0, 85918080);
        IF_SETHIDE(0, 85918082);
        IF_SETPOSITION(((IF_GETX(85918080) + IF_GETWIDTH(85918080)) + 5), 0, 0, 0, 85918081);
        IF_SETHIDE(1, 85918299);
    };
    if (((int0 != 3) && ((struct_getparam(int1, 477) == 0) || (struct_getparam(int1, 477) == -1)))) {
        IF_SETHIDE(0, 85918059);
    } else {
        IF_SETHIDE(1, 85918059);
    };
    IF_SETHIDE(0, 85918276);
    if (((struct_getparam(int1, 4420) == 0) || (script6488(int1) == 0))) {
        IF_SETHIDE(0, 85918278);
    } else {
        IF_SETHIDE(1, 85918278);
    };
    var int6 = 0;
    var int7 = -1;
    var int8 = 0;
    var int9 = 1;
    var int10 = 0;
    var int11 = -1 as cs2enum;
    var int12 = -1 as cs2enum;
    if (((int1 == 6865) && (int5 == 0))) {
        IF_SETHIDE(0, 85918216);
    } else {
        IF_SETHIDE(1, 85918216);
    };
    if ((struct_getparam(int1, 3847) == 1)) {
        IF_SETHIDE(0, 85918226);
        IF_SETHIDE(0, 85918250);
    } else {
        IF_SETHIDE(1, 85918226);
        IF_SETHIDE(1, 85918250);
    };
    if (((((int0 == 2) || (int0 == 3)) || (int0 == 5)) || (int0 == 4))) {
        IF_SETHIDE(1, 85918256);
        IF_SETHIDE(0, 85918277);
        if ((struct_getparam(int1, 7494) == 1)) {
            int11 = struct_getparam(int1, 8212);
            int12 = struct_getparam(int1, 8213);
            if ((int12 == -1 as cs2enum)) {
                return;
            };
            IF_SETHIDE(0, 85918253);
            CC_DELETEALL(85918254);
            CC_DELETEALL(85918255);
            int10 = ENUM_GETOUTPUTCOUNT(struct_getparam(int1, 8210));
            while ((++int7 < int10)) {
                script11605(85918254, 85918255, 28749, 0, ((24 + 5) * int7), int7, 1, "Select", "Unselect", enum_getvalue(0, 36, int12, int7));
                if ((CC_FIND(85918255, int7) == 1)) {
                    CC_SETOPCURSOR(1, 46);
                };
                if ((int11 != -1 as cs2enum)) {
                    script4512(85918254, 24, 24, 0, ((24 + 5) * int7), enum_getvalue(0, 23, int11, int7));
                } else {
                    script152(85918254, 24, 24, 0, ((24 + 5) * int7), 26, inttostring((int7 + 1), 10), 16777215);
                    CC_SETTEXTALIGN(1, 1, 0);
                };
            };
        } else if ((struct_getparam(int1, 3847) == 1)) {
            script3836(int1, int2, int3, int4);
        };
    } else if ((int0 == 1)) {
        if ((struct_getparam(int1, 8705) == false)) {
            IF_SETHIDE(0, 85918256);
        };
        if (((script6488(int1) == 0) || (script11005(int1) == 24000))) {
            IF_SETHIDE(0, 85918277);
        } else {
            IF_SETHIDE(1, 85918277);
        };
        if ((script6488(int1) == 1)) {
            IF_SETHIDE(0, 85918082);
        } else {
            IF_SETHIDE(1, 85918082);
        };
    };
    return;
}