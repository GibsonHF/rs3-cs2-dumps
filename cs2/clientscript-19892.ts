//
function script19892(int0: number, int1: number, int2: number, int3: number, int4: number, string0: string, string1: string, string2: string): void {
    if ((struct_getparam(int0, 9050) == 1)) {
        IF_SETHIDE(1, 104464482);
        IF_SETPOSITION(0, 8, 1, 2, 104464483);
        return;
    };
    IF_SETHIDE(0, 104464482);
    IF_SETPOSITION(-68, 8, 1, 2, 104464483);
    IF_SETHIDE(1, 104464503);
    if ((STRING_LENGTH(string0) > 0)) {
        IF_SETTEXT(string0, 104464505);
    };
    var int5 = struct_getparam(int1, 1446);
    if ((int2 == 0)) {
        IF_CLEAROPS(104464502);
        IF_SETONOP(callback(), 104464502);
        IF_SETOP(1, script12793(int1, struct_getparam(int1, 4854), int5), 104464502);
        if ((((struct_getparam(int1, 4855) != -1) || (struct_getparam(int1, 4856) != -1)) || (struct_getparam(int1, 4857) != -1))) {
            if ((script6431() == 1)) {
                var string1 = "There are more buy options if you tap and hold.";
            } else {
                string1 = "There are more buy options if you right-click.";
            };
            if ((struct_getparam(int1, 4855) != -1)) {
                IF_SETOP(2, script12793(int1, struct_getparam(int1, 4855), 0), 104464502);
            };
            if ((struct_getparam(int1, 4856) != -1)) {
                IF_SETOP(3, script12793(int1, struct_getparam(int1, 4856), 0), 104464502);
                if ((int5 == false)) {
                    IF_SETOP(4, script12793(int1, -1, 1), 104464502);
                };
            };
            if ((struct_getparam(int1, 4857) != -1)) {
                IF_SETOP(4, script12793(int1, struct_getparam(int1, 4857), 0), 104464502);
                if ((int5 == false)) {
                    IF_SETOP(5, script12793(int1, -1, 1), 104464502);
                };
            };
        };
    } else {
        IF_SETHIDE(0, 104464503);
        IF_CLEAROPS(104464502);
        IF_SETONMOUSEREPEAT(callback(script8799, string1, 104464482, -1), 104464503);
    };
    if ((script6431() == 1)) {
        if (((int2 == 1) && (STRING_LENGTH(string1) > 0))) {
            IF_SETONCLICK(callback(script7774, string1, 104464482, -1, int4), 104464482);
        } else {
            IF_SETONCLICK(callback(), 104464482);
        };
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string1, 104464482, -1), 104464482);
    return;
}