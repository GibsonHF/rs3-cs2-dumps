//[proc,bankpin_shuffle]
function script1271(int0: number): void {
    var int1 = 1;
    var int2 = 0;
    switch (varbitplayer_446) {
        case 0: {
            IF_SETTEXT("First click the FIRST digit.", 851988);
            IF_SETTEXT("?", 851989);
            IF_SETTEXT("?", 851990);
            IF_SETTEXT("?", 851991);
            IF_SETTEXT("?", 851992);
            break;
        }
        case 1: {
            IF_SETTEXT("Now click the SECOND digit.", 851988);
            IF_SETTEXT("*", 851989);
            IF_SETTEXT("?", 851990);
            IF_SETTEXT("?", 851991);
            IF_SETTEXT("?", 851992);
            break;
        }
        case 2: {
            IF_SETTEXT("Time for the THIRD digit.", 851988);
            IF_SETTEXT("*", 851989);
            IF_SETTEXT("*", 851990);
            IF_SETTEXT("?", 851991);
            IF_SETTEXT("?", 851992);
            break;
        }
        case 3: {
            IF_SETTEXT("Finally, the FOURTH digit.", 851988);
            IF_SETTEXT("*", 851989);
            IF_SETTEXT("*", 851990);
            IF_SETTEXT("*", 851991);
            IF_SETTEXT("?", 851992);
            [int1, int2] = [0, 1];
            break;
        }
        default: {
            IF_SETTEXT("Please wait...", 851988);
            IF_SETTEXT("*", 851989);
            IF_SETTEXT("*", 851990);
            IF_SETTEXT("*", 851991);
            IF_SETTEXT("*", 851992);
            [int1, int2] = [1, 1];
            break;
        }
    };
    var int3 = 0;
    if ((int0 == 0)) {
        while ((int3 < 10)) {
            IF_SETHIDE(int1, enum_getvalue(0, 9, 3555 as cs2enum, int3));
            IF_SETHIDE(int2, enum_getvalue(0, 9, 3554 as cs2enum, int3));
            int3 = (int3 + 1);
        };
        return;
    };
    var int4 = RANDOM(10);
    define_array(10);
    pop_array(0, int4);
    pop_array(1, MODULO((int4 + 1), 10));
    pop_array(2, MODULO((int4 + 2), 10));
    pop_array(3, MODULO((int4 + 3), 10));
    pop_array(4, MODULO((int4 + 4), 10));
    pop_array(5, MODULO((int4 + 5), 10));
    pop_array(6, MODULO((int4 + 6), 10));
    pop_array(7, MODULO((int4 + 7), 10));
    pop_array(8, MODULO((int4 + 8), 10));
    pop_array(9, MODULO((int4 + 9), 10));
    var int5 = 0;
    while ((int3 < 10)) {
        int5 = RANDOM(9);
        int4 = push_array(9);
        pop_array(9, push_array(int5));
        pop_array(int5, int4);
        IF_SETPOSITION((25 - RANDOMINC(50)), (20 - RANDOMINC(40)), 1, 1, enum_getvalue(0, 9, 3557 as cs2enum, int3));
        IF_SETHIDE(int1, enum_getvalue(0, 9, 3555 as cs2enum, int3));
        IF_SETHIDE(int2, enum_getvalue(0, 9, 3554 as cs2enum, int3));
        int3 = (int3 + 1);
    };
    var int6 = IF_GETWIDTH(851973);
    var int7 = IF_GETHEIGHT(851973);
    var int8 = ((IF_GETWIDTH(851972) - int6) / 3);
    var int9 = ((IF_GETHEIGHT(851972) - int7) / 2);
    var int10 = (int8 * 2);
    var int11 = (int9 * 2);
    var int12 = (int8 * 3);
    IF_SETPOSITION(0, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(0)));
    IF_SETPOSITION(0, 0, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(0)));
    IF_SETPOSITION(int8, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(1)));
    IF_SETPOSITION(int8, 0, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(1)));
    IF_SETPOSITION(int10, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(2)));
    IF_SETPOSITION(int10, 0, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(2)));
    IF_SETPOSITION(int12, 0, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(3)));
    IF_SETPOSITION(int12, 0, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(3)));
    IF_SETPOSITION(0, int9, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(4)));
    IF_SETPOSITION(0, int9, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(4)));
    IF_SETPOSITION(int8, int9, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(5)));
    IF_SETPOSITION(int8, int9, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(5)));
    IF_SETPOSITION(int10, int9, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(6)));
    IF_SETPOSITION(int10, int9, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(6)));
    IF_SETPOSITION(0, int11, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(7)));
    IF_SETPOSITION(0, int11, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(7)));
    IF_SETPOSITION(int8, int11, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(8)));
    IF_SETPOSITION(int8, int11, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(8)));
    IF_SETPOSITION(int10, int11, 0, 0, enum_getvalue(0, 9, 3556 as cs2enum, push_array(9)));
    IF_SETPOSITION(int10, int11, 0, 0, enum_getvalue(0, 9, 3555 as cs2enum, push_array(9)));
    return;
}