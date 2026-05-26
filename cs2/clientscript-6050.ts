//
function script6050(int0: number, int1: number, int2: number, int3: number): void {
    var int4 = 425;
    var int5 = SCALE(varplayer_679, 1000, 100);
    var int6 = SCALE(IF_GETWIDTH(int0), int4, 100);
    var int7 = SCALE(IF_GETWIDTH(int1), int4, 100);
    var int8 = (int6 + int7);
    var int9 = 1;
    var int10 = 0;
    var int11 = 41943053;
    var int12 = 41943055;
    var int13 = 41943054;
    var int14 = 41943047;
    var int15 = 41943051;
    if ((IF_GETLAYER(int0) == 105906177)) {
        int11 = 105906187;
        int12 = 105906189;
        int13 = 105906188;
        int14 = 105906181;
        int15 = 105906176;
    };
    if (((varplayer_679 >= 500) && (int8 >= 50))) {
        IF_SETHIDE(0, int11);
    } else {
        IF_SETHIDE(1, int11);
    };
    if (((varplayer_679 >= 1000) && (int8 >= 100))) {
        IF_SETHIDE(0, int12);
        IF_SETHIDE(0, int13);
        stack(14515);
        stack(int15);
        IF_SETGRAPHIC();
    } else if (((varplayer_679 >= 500) && (int8 >= 50))) {
        IF_SETHIDE(1, int12);
        IF_SETHIDE(1, int13);
        stack(14514);
        stack(int15);
        IF_SETGRAPHIC();
    } else {
        IF_SETHIDE(1, int12);
        IF_SETHIDE(1, int13);
        stack(14513);
        stack(int15);
        IF_SETGRAPHIC();
    };
    if ((int8 != int5)) {
        if ((int8 < int5)) {
            if (((int2 != 1) && (int2 != int3))) {
                IF_SETONTIMER(callback(), int0);
                IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int14), 0, 0, int14);
                return;
            };
            IF_SETSIZE(MIN((IF_GETWIDTH(int0) + int9), int4), IF_GETHEIGHT(int0), 0, 0, int0);
            if (((IF_GETWIDTH(int0) == int4) && (int7 < MAX(0, (int5 - 100))))) {
                IF_SETSIZE(MIN((IF_GETWIDTH(int1) + int9), int4), IF_GETHEIGHT(int1), 0, 0, int1);
            };
            var int3 = int2;
            var int2 = 1;
        } else {
            if (((int2 != 3) && (int2 != int3))) {
                IF_SETONTIMER(callback(), int0);
                IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int14), 0, 0, int14);
                return;
            };
            int9 = 10;
            if ((int7 > MAX((int5 - 100), 0))) {
                IF_SETSIZE(MAX((IF_GETWIDTH(int1) - int9), 1), IF_GETHEIGHT(int1), 0, 0, int1);
            } else {
                IF_SETSIZE(MAX((IF_GETWIDTH(int0) - int9), 1), IF_GETHEIGHT(int0), 0, 0, int0);
            };
            int3 = int2;
            int2 = 3;
        };
        int6 = SCALE(IF_GETWIDTH(int0), int4, 100);
        int7 = SCALE(IF_GETWIDTH(int1), int4, 100);
        int8 = (int6 + int7);
        if (((varplayer_679 >= 500) && (int8 >= 50))) {
            IF_SETHIDE(0, int11);
        } else {
            IF_SETHIDE(1, int11);
        };
        if (((varplayer_679 >= 1000) && (int8 >= 100))) {
            IF_SETHIDE(0, int12);
            IF_SETHIDE(0, int13);
            stack(14515);
            stack(int15);
            IF_SETGRAPHIC();
        } else if (((varplayer_679 >= 500) && (int8 >= 50))) {
            IF_SETHIDE(1, int12);
            IF_SETHIDE(1, int13);
            stack(14514);
            stack(int15);
            IF_SETGRAPHIC();
        } else {
            IF_SETHIDE(1, int12);
            IF_SETHIDE(1, int13);
            stack(14513);
            stack(int15);
            IF_SETGRAPHIC();
        };
        if ((int8 != int5)) {
            IF_SETONTIMER(callback(script6050, int0, int1, int2, int3), int0);
            return;
        };
    };
    if ((varplayer_679 < 1)) {
        IF_SETSIZE(1, IF_GETHEIGHT(int0), 0, 0, int0);
    };
    IF_SETSIZE(IF_GETWIDTH(int0), IF_GETHEIGHT(int14), 0, 0, int14);
    IF_SETONTIMER(callback(), int0);
    return;
}