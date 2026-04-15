//
function script20444(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    if (((varbitplayer_60370 < 1) || (varbitplayer_60370 > int0))) {
        varbitplayer_60370 = 0;
        script20446(118096145);
    };
    if (((varbitplayer_60371 < 1) || (varbitplayer_60371 > int0))) {
        varbitplayer_60371 = 0;
        script20446(118096148);
    };
    if (((varbitplayer_60372 < 1) || (varbitplayer_60372 > int0))) {
        varbitplayer_60372 = 0;
        script20446(118096151);
    };
    if (((varbitplayer_60373 < 1) || (varbitplayer_60373 > int0))) {
        varbitplayer_60373 = 0;
        script20446(118096154);
    };
    var int1 = script20423(varbitplayer_60370);
    var int2 = script20423(varbitplayer_60371);
    var int3 = script20423(varbitplayer_60372);
    var int4 = script20423(varbitplayer_60373);
    if ((int1 != -1 as stat)) {
        script20445(int1, 118096145);
    };
    if ((int2 != -1 as stat)) {
        script20445(int2, 118096148);
    };
    if ((int3 != -1 as stat)) {
        script20445(int3, 118096151);
    };
    if ((int4 != -1 as stat)) {
        script20445(int4, 118096154);
    };
    return;
}