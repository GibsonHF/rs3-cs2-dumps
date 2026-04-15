//
function script10543(int0: int, int1: struct): void {
    var int2 = -1;
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = comp(-1, 65535);
    switch (int0) {
        case 0: {
            int2 = 126484529;
            int3 = comp(1930, 58);
            int4 = 126484537;
            int5 = 126484513;
            int6 = 126484531;
            int7 = 126484634;
            int8 = 126484636;
            int10 = comp(1930, 52);
            int9 = 126484630;
            IF_SETHIDE(false, comp(1930, 49));
            break;
        }
        case 1: {
            int2 = 126484530;
            int3 = comp(1930, 131);
            int4 = 126484610;
            int5 = 126484606;
            int6 = 126484603;
            int7 = 126484633;
            int8 = 126484637;
            int10 = comp(1930, 122);
            int9 = 126484629;
            IF_SETHIDE(false, comp(1930, 50));
            break;
        }
        case 2: {
            int2 = 126484576;
            int3 = comp(1930, 140);
            int4 = 126484619;
            int5 = 126484615;
            int6 = 126484612;
            int7 = 126484632;
            int8 = 126484638;
            int10 = comp(1930, 97);
            int9 = 126484628;
            IF_SETHIDE(false, comp(1930, 96));
            break;
        }
    };
    IF_SETTEXT(struct_getparam(int1, 6885), int3);
    stack(struct_getparam(int1, 6891));
    stack(int4);
    IF_SETGRAPHIC();
    stack(int1);
    stack(6884);
    struct_getparam();
    IF_SETTEXT(script10546(stack()), int5);
    stack(int1);
    stack(6888);
    struct_getparam();
    IF_SETTEXT(stack(), int6);
    stack(int1);
    stack(6886);
    struct_getparam();
    IF_SETTEXT(stack(), int7);
    stack(int1);
    stack(6884);
    struct_getparam();
    IF_SETTEXT(script10545(stack()), int8);
    stack(int1);
    stack(6885);
    struct_getparam();
    IF_SETTEXT(stack(), int9);
    stack(int1);
    stack(6890);
    struct_getparam();
    var int11 = ((stack() - varplayer_3079) + 1);
    if ((int11 == 1)) {
        IF_SETTEXT(`${inttostring(int11, 10)} day`, int10);
    } else {
        IF_SETTEXT(`${inttostring(int11, 10)} days`, int10);
    };
    return;
}