//
function script18391(int0: unknown_int, int1: component): void {
    var int2 = -1 as obj;
    var int3 = 1;
    var int4 = 0;
    var int5 = 0;
    var string0 = "";
    switch (int0) {
        case 1: {
            [int2, int3] = script18375(1);
            int4 = (50 - varplayer_11560);
            int5 = varbitplayer_54790;
            break;
        }
        case 2: {
            [int2, int3] = script18375(2);
            int4 = (100 - varplayer_11560);
            int5 = varbitplayer_54791;
            break;
        }
        case 3: {
            [int2, int3] = script18375(3);
            int4 = (150 - varplayer_11560);
            int5 = varbitplayer_54792;
            break;
        }
        case 4: {
            [int2, int3] = script18375(4);
            int4 = (200 - varplayer_11560);
            int5 = varbitplayer_54793;
            break;
        }
        case 5: {
            [int2, int3] = script18375(5);
            int4 = (250 - varplayer_11560);
            int5 = varbitplayer_54941;
            break;
        }
        case 6: {
            [int2, int3] = script18375(6);
            int4 = (300 - varplayer_11560);
            int5 = varbitplayer_54942;
            break;
        }
        case 7: {
            [int2, int3] = script18375(7);
            int4 = (350 - varplayer_11560);
            int5 = varbitplayer_54943;
            break;
        }
        case 8: {
            [int2, int3] = script18375(8);
            int4 = (400 - varplayer_11560);
            int5 = varbitplayer_54944;
            break;
        }
    };
    if ((int5 == 1)) {
        string0 = "You have already claimed this reward. New rewards will be available when the meter has been filled.";
    } else if ((int4 <= 0)) {
        string0 = "You can claim this reward!";
    } else {
        string0 = `Receive <col=89CFF0>${TOSTRING_LOCALISED(int3, 1)}x ${OC_NAME(int2)}</col> in <col=FFFF00>${inttostring(int4, 10)} ${script4583(int4, "key", "keys")}</col>.`;
    };
    if ((script6431() == false)) {
        IF_SETONMOUSEREPEAT(callback(script8801, string0, -2147483645, -2147483643, 0, 1, 12), int1);
        IF_SETONMOUSELEAVE(callback(script8805), int1);
    };
    return;
}