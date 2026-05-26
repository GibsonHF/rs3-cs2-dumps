//
function script4765(): void {
    var int0 = script15513();
    var string0 = struct_getparam(int0, 8742);
    var string1 = struct_getparam(int0, 8743);
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string2 = "";
    var int6 = -1;
    switch (int0) {
        case 4136: {
            string0 = "Bonus Active";
            int2 = 1;
            if ((varbitplayer_51271 > 0)) {
                int3 = 1;
            } else {
                int3 = 0;
            };
            [int4, int5] = [varbitplayer_51271, 5];
            break;
        }
        case 12006: {
            int3 = varbitplayer_28986;
            [int4, int5] = [varbitplayer_28987, varbitplayer_28988];
            break;
        }
        case 45877: {
            int2 = 1;
            int3 = varbitplayer_50389;
            [int4, int5] = [varbitplayer_50390, varbitplayer_50391];
            break;
        }
        case 38119: {
            int2 = 1;
            int3 = varbitplayer_29983;
            [int4, int5] = [varbitplayer_29989, varbitplayer_29990];
            break;
        }
    };
    if ((int3 == 1)) {
        IF_SETHIDE(int1, 82116688);
        IF_SETHIDE(int2, 82116683);
        IF_SETTEXT(string0, 82116691);
        IF_SETTEXT(`${string1}:`, 82116694);
        if (((int4 > 0) && (int5 > 0))) {
            IF_SETTEXT(`${inttostring(int4, 10)}/${inttostring(int5, 10)}`, 82116695);
        };
    } else {
        IF_SETHIDE(1, 82116688);
        IF_SETHIDE(1, 82116683);
    };
    return;
}