//
function script10802(int0: unknown_int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = false;
    var int4 = -1 as cs2enum;
    var int5 = 0;
    var string0 = "";
    switch (int0) {
        case 1: {
            int1 = comp(1647, 0);
            int2 = comp(1647, 1);
            int4 = 10177 as cs2enum;
            int5 = varbitplayer_28547;
            if ((varbitplayer_28510 == 0)) {
                int3 = true;
            };
            break;
        }
        case 2: {
            int1 = comp(1647, 36);
            int2 = comp(1647, 37);
            int4 = 10178 as cs2enum;
            int5 = varbitplayer_28548;
            if ((varbitplayer_28511 == 0)) {
                int3 = true;
            };
            break;
        }
        case 3: {
            int1 = comp(1647, 38);
            int2 = comp(1647, 39);
            int4 = 10179 as cs2enum;
            int5 = varbitplayer_28549;
            if ((varbitplayer_28512 == 0)) {
                int3 = true;
            };
            break;
        }
        case 4: {
            int1 = comp(1647, 40);
            int2 = comp(1647, 41);
            int4 = 10180 as cs2enum;
            int5 = varbitplayer_28550;
            if ((varbitplayer_28513 == 0)) {
                int3 = true;
            };
            break;
        }
        case 5: {
            int1 = comp(1647, 42);
            int2 = comp(1647, 43);
            int4 = 10181 as cs2enum;
            int5 = varbitplayer_28551;
            if ((varbitplayer_28514 == 0)) {
                int3 = true;
            };
            break;
        }
        case 6: {
            int1 = comp(1647, 44);
            int2 = comp(1647, 45);
            int4 = 10182 as cs2enum;
            int5 = varbitplayer_28552;
            if ((varbitplayer_28515 == 0)) {
                int3 = true;
            };
            break;
        }
        case 7: {
            int1 = comp(1647, 46);
            int2 = comp(1647, 47);
            int4 = 10183 as cs2enum;
            int5 = varbitplayer_28553;
            if ((varbitplayer_28516 == 0)) {
                int3 = true;
            };
            break;
        }
        default: {
            return;
        }
    };
    if ((int3 == true)) {
        string0 = "You do not yet know this answer.";
    };
    script14141(int1, int2, int4, -1, "Select an answer", int5, 0, int3, string0);
    return;
}