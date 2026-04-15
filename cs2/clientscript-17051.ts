//
function script17051(): void {
    var int0 = script1626(1, varbitplayer_54973);
    var int1 = script1626(2, varbitplayer_54974);
    var int2 = script1611(1, int0);
    var int3 = script1611(2, int1);
    var int4 = script1611(0, int0);
    var int5 = script1611(0, int1);
    IF_SETMODELANIM(int2, comp(1082, 83));
    IF_SETONTIMER(callback(script17059, SEQLENGTH(int2), int4, 70910035), 70910035);
    IF_SETONTIMER(callback(script17060, 20, int3, int5, 70910015), 70910015);
    return;
}