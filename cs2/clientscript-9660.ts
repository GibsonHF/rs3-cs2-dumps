//
function script9660(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var string0 = "";
    switch (int0) {
        case 85721202: {
            int1 = comp(1308, 131);
            int2 = comp(1308, 119);
            int3 = comp(1308, 120);
            int5 = comp(1308, 122);
            int4 = comp(1308, 130);
            if ((varbitplayer_21749 == 0)) {
                string0 = "100 points";
            } else {
                string0 = "10 points";
            };
            break;
        }
        case 85721237: {
            int1 = comp(1308, 166);
            int2 = comp(1308, 154);
            int3 = comp(1308, 155);
            int5 = comp(1308, 157);
            int4 = comp(1308, 165);
            if ((varbitplayer_21750 == 0)) {
                string0 = "400 points";
            } else {
                string0 = "40 points";
            };
            break;
        }
        case 85721272: {
            int1 = comp(1308, 201);
            int2 = comp(1308, 189);
            int3 = comp(1308, 190);
            int5 = comp(1308, 192);
            int4 = comp(1308, 200);
            if ((varbitplayer_21751 == 0)) {
                string0 = "600 points";
            } else {
                string0 = "60 points";
            };
            break;
        }
        case 85721290: {
            int1 = comp(1308, 219);
            int2 = comp(1308, 207);
            int3 = comp(1308, 208);
            int5 = comp(1308, 210);
            int4 = comp(1308, 218);
            if ((varbitplayer_36284 == 0)) {
                string0 = "1000 points";
            } else {
                string0 = "100 points";
            };
            break;
        }
        case 85721949: {
            int1 = comp(1308, 876);
            int2 = comp(1308, 864);
            int3 = comp(1308, 865);
            int4 = comp(1308, 875);
            int5 = comp(1308, 867);
            string0 = "125 points";
            break;
        }
        case 85721917: {
            int1 = comp(1308, 844);
            int2 = comp(1308, 832);
            int3 = comp(1308, 833);
            int4 = comp(1308, 843);
            string0 = "125 points";
            int5 = comp(1308, 835);
            break;
        }
        case 85721933: {
            int1 = comp(1308, 860);
            int2 = comp(1308, 848);
            int3 = comp(1308, 849);
            int4 = comp(1308, 859);
            string0 = "125 points";
            int5 = comp(1308, 851);
            break;
        }
        default: {
            return;
        }
    };
    if (((((int1 == comp(-1, 65535)) || (int2 == comp(-1, 65535))) || (int3 == comp(-1, 65535))) || (int4 == comp(-1, 65535)))) {
        return;
    };
    IF_SETCOLOUR(16512486, int2);
    IF_SETCOLOUR(14538955, int3);
    if ((int5 != comp(-1, 65535))) {
        IF_SETHIDE(false, int5);
    };
    IF_SETCOLOUR(16512486, int4);
    IF_SETHIDE(true, int1);
    IF_SETTEXT(string0, int3);
    return;
}