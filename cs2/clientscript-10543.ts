//
function script10543(int0: number, int1: number): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = -1;
    var int10 = -1;
    switch (int0) {
        case 0: {
            int2 = 126484529;
            int3 = 126484538;
            int4 = 126484537;
            int5 = 126484513;
            int6 = 126484531;
            int7 = 126484634;
            int8 = 126484636;
            int10 = 126484532;
            int9 = 126484630;
            IF_SETHIDE(0, 126484529);
            break;
        }
        case 1: {
            int2 = 126484530;
            int3 = 126484611;
            int4 = 126484610;
            int5 = 126484606;
            int6 = 126484603;
            int7 = 126484633;
            int8 = 126484637;
            int10 = 126484602;
            int9 = 126484629;
            IF_SETHIDE(0, 126484530);
            break;
        }
        case 2: {
            int2 = 126484576;
            int3 = 126484620;
            int4 = 126484619;
            int5 = 126484615;
            int6 = 126484612;
            int7 = 126484632;
            int8 = 126484638;
            int10 = 126484577;
            int9 = 126484628;
            IF_SETHIDE(0, 126484576);
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