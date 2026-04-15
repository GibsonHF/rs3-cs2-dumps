//
function script3882(int0: int, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component, int7: component, int8: component, int9: component, int10: component, int11: component, string0: string, string1: string, string2: string, string3: string, string4: string): void {
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    if ((int11 != comp(-1, 65535))) {
        int12 = ((IF_GETHEIGHT(int11) - 16) - 32);
        int13 = MIN(10, ((int12 - (18 * int0)) / (int0 + 1)));
        int14 = (int13 + 18);
        int15 = (int13 + ((int12 - ((int14 * int0) + int13)) / 2));
    };
    IF_SETHIDE(false, int1);
    IF_SETHIDE(false, int2);
    IF_SETHIDE(false, int3);
    IF_SETHIDE(false, int4);
    IF_SETHIDE(false, int5);
    switch (int0) {
        case 2: {
            IF_SETTEXT(string0, int6);
            IF_SETTEXT(string1, int7);
            IF_SETHIDE(true, int3);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            if ((int11 != comp(-1, 65535))) {
                IF_SETPOSITION(0, int15, 1, 0, int1);
                IF_SETPOSITION(0, (int15 + int14), 1, 0, int2);
            } else {
                IF_SETPOSITION(0, 25, 1, 0, int1);
                IF_SETPOSITION(0, 50, 1, 0, int2);
            };
            break;
        }
        case 3: {
            IF_SETTEXT(string0, int6);
            IF_SETTEXT(string1, int7);
            IF_SETTEXT(string2, int8);
            IF_SETHIDE(true, int4);
            IF_SETHIDE(true, int5);
            if ((int11 != comp(-1, 65535))) {
                IF_SETPOSITION(0, int15, 1, 0, int1);
                IF_SETPOSITION(0, (int15 + int14), 1, 0, int2);
                IF_SETPOSITION(0, (int15 + (int14 * 2)), 1, 0, int3);
            } else {
                IF_SETPOSITION(0, 15, 1, 0, int1);
                IF_SETPOSITION(0, 40, 1, 0, int2);
                IF_SETPOSITION(0, 65, 1, 0, int3);
            };
            break;
        }
        case 4: {
            IF_SETTEXT(string0, int6);
            IF_SETTEXT(string1, int7);
            IF_SETTEXT(string2, int8);
            IF_SETTEXT(string3, int9);
            IF_SETHIDE(true, int5);
            if ((int11 != comp(-1, 65535))) {
                IF_SETPOSITION(0, int15, 1, 0, int1);
                IF_SETPOSITION(0, (int15 + int14), 1, 0, int2);
                IF_SETPOSITION(0, (int15 + (int14 * 2)), 1, 0, int3);
                IF_SETPOSITION(0, (int15 + (int14 * 3)), 1, 0, int4);
            } else {
                IF_SETPOSITION(0, 10, 1, 0, int1);
                IF_SETPOSITION(0, 30, 1, 0, int2);
                IF_SETPOSITION(0, 50, 1, 0, int3);
                IF_SETPOSITION(0, 70, 1, 0, int4);
            };
            break;
        }
        default: {
            IF_SETTEXT(string0, int6);
            IF_SETTEXT(string1, int7);
            IF_SETTEXT(string2, int8);
            IF_SETTEXT(string3, int9);
            IF_SETTEXT(string4, int10);
            if ((int11 != comp(-1, 65535))) {
                IF_SETPOSITION(0, int15, 1, 0, int1);
                IF_SETPOSITION(0, (int15 + int14), 1, 0, int2);
                IF_SETPOSITION(0, (int15 + (int14 * 2)), 1, 0, int3);
                IF_SETPOSITION(0, (int15 + (int14 * 3)), 1, 0, int4);
                IF_SETPOSITION(0, (int15 + (int14 * 4)), 1, 0, int5);
            } else {
                IF_SETPOSITION(0, 2, 1, 0, int1);
                IF_SETPOSITION(0, 21, 1, 0, int2);
                IF_SETPOSITION(0, 40, 1, 0, int3);
                IF_SETPOSITION(0, 59, 1, 0, int4);
                IF_SETPOSITION(0, 78, 1, 0, int5);
            };
            break;
        }
    };
    return;
}