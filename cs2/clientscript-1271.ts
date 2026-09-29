//[proc,bankpin_shuffle]
function script1271(int0: number): void {
    switch (varbitplayer_446) {
        case 0: {
            IF_SETTEXT("First click the FIRST digit.", comp(13, 11));  // bankpin_main:next_digit_instruction
            IF_SETTEXT("?", comp(13, 12));  // bankpin_main:digit_1
            IF_SETTEXT("?", comp(13, 13));  // bankpin_main:digit_2
            IF_SETTEXT("?", comp(13, 14));  // bankpin_main:digit_3
            IF_SETTEXT("?", comp(13, 15));  // bankpin_main:digit_4
            break;
        }
        case 1: {
            IF_SETTEXT("Now click the SECOND digit.", comp(13, 11));  // bankpin_main:next_digit_instruction
            IF_SETTEXT("*", comp(13, 12));  // bankpin_main:digit_1
            IF_SETTEXT("?", comp(13, 13));  // bankpin_main:digit_2
            IF_SETTEXT("?", comp(13, 14));  // bankpin_main:digit_3
            IF_SETTEXT("?", comp(13, 15));  // bankpin_main:digit_4
            break;
        }
        case 2: {
            IF_SETTEXT("Time for the THIRD digit.", comp(13, 11));  // bankpin_main:next_digit_instruction
            IF_SETTEXT("*", comp(13, 12));  // bankpin_main:digit_1
            IF_SETTEXT("*", comp(13, 13));  // bankpin_main:digit_2
            IF_SETTEXT("?", comp(13, 14));  // bankpin_main:digit_3
            IF_SETTEXT("?", comp(13, 15));  // bankpin_main:digit_4
            break;
        }
        case 3: {
            IF_SETTEXT("Finally, the FOURTH digit.", comp(13, 11));  // bankpin_main:next_digit_instruction
            IF_SETTEXT("*", comp(13, 12));  // bankpin_main:digit_1
            IF_SETTEXT("*", comp(13, 13));  // bankpin_main:digit_2
            IF_SETTEXT("*", comp(13, 14));  // bankpin_main:digit_3
            IF_SETTEXT("?", comp(13, 15));  // bankpin_main:digit_4
            break;
        }
        case 4: {
            IF_SETTEXT("Please wait...", comp(13, 11));  // bankpin_main:next_digit_instruction
            IF_SETTEXT("*", comp(13, 12));  // bankpin_main:digit_1
            IF_SETTEXT("*", comp(13, 13));  // bankpin_main:digit_2
            IF_SETTEXT("*", comp(13, 14));  // bankpin_main:digit_3
            IF_SETTEXT("*", comp(13, 15));  // bankpin_main:digit_4
            IF_RESUME_PAUSEBUTTON(851972);
            return;
        }
        case 5: {
            if ((int0 == 0)) {
                return;
            };
            break;
        }
        default: {
            IF_SETTEXT("Please wait...", comp(13, 11));  // bankpin_main:next_digit_instruction
            IF_SETTEXT("*", comp(13, 12));  // bankpin_main:digit_1
            IF_SETTEXT("*", comp(13, 13));  // bankpin_main:digit_2
            IF_SETTEXT("*", comp(13, 14));  // bankpin_main:digit_3
            IF_SETTEXT("*", comp(13, 15));  // bankpin_main:digit_4
            break;
        }
    };
    var int1 = 0;
    if ((int0 == 0)) {
        return;
    };
    var int2 = RANDOM(10);
    define_array(10);
    pop_array(0, int2);
    pop_array(1, MODULO((int2 + 1), 10));
    pop_array(2, MODULO((int2 + 2), 10));
    pop_array(3, MODULO((int2 + 3), 10));
    pop_array(4, MODULO((int2 + 4), 10));
    pop_array(5, MODULO((int2 + 5), 10));
    pop_array(6, MODULO((int2 + 6), 10));
    pop_array(7, MODULO((int2 + 7), 10));
    pop_array(8, MODULO((int2 + 8), 10));
    pop_array(9, MODULO((int2 + 9), 10));
    var int3 = 0;
    while ((int1 < 10)) {
        int3 = RANDOM(9);
        int2 = push_array(9);
        pop_array(9, push_array(int3));
        pop_array(int3, int2);
        IF_SETPOSITION((25 - RANDOMINC(50)), (20 - RANDOMINC(40)), 1, 1, enum_getvalue(0, 9, 3557 as cs2enum, int1));
        int1 = (int1 + 1);
    };
    var int4 = 64;
    var int5 = 64;
    var int6 = ((IF_GETWIDTH(comp(13, 5)) - int4) / 3);  // bankpin_main:numberbuttons
    var int7 = ((IF_GETHEIGHT(comp(13, 5)) - int5) / 2);  // bankpin_main:numberbuttons
    var int8 = (int6 * 2);
    var int9 = (int7 * 2);
    var int10 = (int6 * 3);
    IF_SETPOSITION(0, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(0)));
    IF_SETPOSITION(int6, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(1)));
    IF_SETPOSITION(int8, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(2)));
    IF_SETPOSITION(int10, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(3)));
    IF_SETPOSITION(0, int7, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(4)));
    IF_SETPOSITION(int6, int7, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(5)));
    IF_SETPOSITION(int8, int7, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(6)));
    IF_SETPOSITION(0, int9, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(7)));
    IF_SETPOSITION(int6, int9, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(8)));
    IF_SETPOSITION(int8, int9, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(9)));
    return;
}