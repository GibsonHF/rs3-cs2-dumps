//
function script10543(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = comp(-1, 65535);
    var int9 = comp(-1, 65535);
    var int10 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int2 = 126484529;
            int3 = comp(1930, 58);
            int4 = comp(1930, 57);
            int5 = comp(1930, 33);
            int6 = comp(1930, 51);
            int7 = comp(1930, 154);
            int8 = comp(1930, 156);
            int10 = comp(1930, 52);
            int9 = comp(1930, 150);
            IF_SETHIDE(false, comp(1930, 49));
            break;
        }
        case 1: {
            int2 = 126484530;
            int3 = comp(1930, 131);
            int4 = comp(1930, 130);
            int5 = comp(1930, 126);
            int6 = comp(1930, 123);
            int7 = comp(1930, 153);
            int8 = comp(1930, 157);
            int10 = comp(1930, 122);
            int9 = comp(1930, 149);
            IF_SETHIDE(false, comp(1930, 50));
            break;
        }
        case 2: {
            int2 = 126484576;
            int3 = comp(1930, 140);
            int4 = comp(1930, 139);
            int5 = comp(1930, 135);
            int6 = comp(1930, 132);
            int7 = comp(1930, 152);
            int8 = comp(1930, 158);
            int10 = comp(1930, 97);
            int9 = comp(1930, 148);
            IF_SETHIDE(false, comp(1930, 96));
            break;
        }
    };
    IF_SETTEXT(struct_getparam(int1, 6885), int3);
    IF_SETGRAPHIC(struct_getparam(int1, 6891), int4);
    IF_SETTEXT(script10546(struct_getparam(int1, 6884)), int5);
    IF_SETTEXT(struct_getparam(int1, 6888), int6);
    IF_SETTEXT(struct_getparam(int1, 6886), int7);
    IF_SETTEXT(script10545(struct_getparam(int1, 6884)), int8);
    IF_SETTEXT(struct_getparam(int1, 6885), int9);
    var int11 = ((struct_getparam(int1, 6890) - varplayer_3079) + 1);
    if ((int11 == 1)) {
        IF_SETTEXT(`${inttostring(int11, 10)} day`, int10);
    } else {
        IF_SETTEXT(`${inttostring(int11, 10)} days`, int10);
    };
    return;
}