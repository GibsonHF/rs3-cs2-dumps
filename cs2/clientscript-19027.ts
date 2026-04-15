//
function script19027(): void {
    var int0 = script1626(1, varbitplayer_54973);
    var int1 = script1626(2, varbitplayer_54974);
    var int2 = script1611(0, int0);
    var int3 = script1611(0, int1);
    IF_SETMODELANIM(int2, comp(1082, 83));
    IF_SETMODELANIM(int3, comp(1082, 63));
    IF_SETONTIMER(callback(), comp(1082, 83));
    IF_SETONTIMER(callback(), 70910015);
    return;
}