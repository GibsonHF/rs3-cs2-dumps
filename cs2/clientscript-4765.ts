//
function script4765(): void {
    var int0 = script15513();
    var string0 = struct_getparam(int0, 8742);
    var string1 = struct_getparam(int0, 8743);
    var int1 = false;
    var int2 = false;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var string2 = "";
    var int6 = -1;
    switch (int0) {
        case 4136: {
            string0 = "Bonus Active";
            int2 = true;
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
            int2 = true;
            int3 = varbitplayer_50389;
            [int4, int5] = [varbitplayer_50390, varbitplayer_50391];
            break;
        }
        case 38119: {
            int2 = true;
            int3 = varbitplayer_29983;
            [int4, int5] = [varbitplayer_29989, varbitplayer_29990];
            break;
        }
    };
    if ((int3 == 1)) {
        IF_SETHIDE(int1, comp(1253, 80));
        IF_SETHIDE(int2, comp(1253, 75));
        IF_SETTEXT(string0, comp(1253, 83));
        IF_SETTEXT(`${string1}:`, comp(1253, 86));
        if (((int4 > 0) && (int5 > 0))) {
            IF_SETTEXT(`${inttostring(int4, 10)}/${inttostring(int5, 10)}`, comp(1253, 87));
        };
    } else {
        IF_SETHIDE(true, comp(1253, 80));
        IF_SETHIDE(true, comp(1253, 75));
    };
    return;
}