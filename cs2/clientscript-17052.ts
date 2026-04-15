//
function script17052(): void {
    var int0 = script1626(1, varbitplayer_54973);
    var int1 = script1626(2, varbitplayer_54974);
    var int2 = script1611(1, int1);
    var int3 = script1611(2, int0);
    var int4 = script1611(0, int0);
    var int5 = script1611(0, int1);
    IF_SETMODELANIM(int2, comp(1082, 63));
    IF_SETONTIMER(callback(script17059, SEQLENGTH(int2), int5, 70910015), 70910015);
    IF_SETONTIMER(callback(script17060, 20, int3, int4, 70910035), 70910035);
    return;
}