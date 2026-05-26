//
function script4889(): void {
    var string0 = "";
    IF_SETHIDE(true, comp(1258, 62));
    IF_SETHIDE(true, comp(1258, 67));
    IF_SETHIDE(true, comp(1258, 102));
    IF_SETHIDE(true, comp(1258, 57));
    IF_SETHIDE(true, comp(1258, 92));
    IF_SETHIDE(true, comp(1258, 77));
    IF_SETHIDE(true, comp(1258, 87));
    IF_SETHIDE(true, comp(1258, 72));
    IF_SETHIDE(true, comp(1258, 97));
    IF_SETHIDE(true, comp(1258, 52));
    IF_SETHIDE(true, comp(1258, 107));
    IF_SETHIDE(true, comp(1258, 112));
    IF_SETHIDE(true, comp(1258, 82));
    if ((varbitclan_6507 > 1)) {
        IF_SETHIDE(false, comp(1258, 52));
        IF_SETHIDE(false, comp(1258, 57));
        IF_SETHIDE(true, comp(1258, 53));
        IF_SETHIDE(true, comp(1258, 58));
    } else {
        IF_SETHIDE(false, comp(1258, 53));
        IF_SETHIDE(false, comp(1258, 58));
        string0 = "You need at least a tier 2 citadel to customise the keep fireplace.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444341);
        string0 = "You need at least a tier 2 citadel to customise the potted plants.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444346);
    };
    if ((varbitclan_6507 > 2)) {
        IF_SETHIDE(false, comp(1258, 62));
        IF_SETHIDE(false, comp(1258, 67));
        IF_SETHIDE(false, comp(1258, 92));
        IF_SETHIDE(false, comp(1258, 87));
        IF_SETHIDE(false, comp(1258, 72));
        IF_SETHIDE(false, comp(1258, 82));
        IF_SETHIDE(true, comp(1258, 63));
        IF_SETHIDE(true, comp(1258, 68));
        IF_SETHIDE(true, comp(1258, 93));
        IF_SETHIDE(true, comp(1258, 78));
        IF_SETHIDE(true, comp(1258, 88));
        IF_SETHIDE(true, comp(1258, 73));
        IF_SETHIDE(true, comp(1258, 83));
    } else {
        IF_SETHIDE(false, comp(1258, 63));
        IF_SETHIDE(false, comp(1258, 68));
        IF_SETHIDE(false, comp(1258, 93));
        IF_SETHIDE(false, comp(1258, 88));
        IF_SETHIDE(false, comp(1258, 73));
        IF_SETHIDE(false, comp(1258, 83));
        string0 = "You need at least a tier 3 citadel to customise the party room chairs.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444351);
        string0 = "You need at least a tier 3 citadel to customise the party room tables.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444356);
        string0 = "You need at least a tier 3 citadel to customise the sundials.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444381);
        string0 = "You need at least a tier 3 citadel to customise the keep tapestry.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444376);
        string0 = "You need at least a tier 3 citadel to customise the keep banners.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444361);
        string0 = "You need at least a tier 3 citadel to customise the keep door.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444371);
    };
    if ((varbitclan_6507 > 3)) {
        IF_SETHIDE(false, comp(1258, 107));
        IF_SETHIDE(false, comp(1258, 112));
        IF_SETHIDE(false, comp(1258, 102));
        IF_SETHIDE(false, comp(1258, 97));
        IF_SETHIDE(true, comp(1258, 108));
        IF_SETHIDE(true, comp(1258, 113));
        IF_SETHIDE(true, comp(1258, 103));
        IF_SETHIDE(true, comp(1258, 98));
    } else {
        IF_SETHIDE(false, comp(1258, 108));
        IF_SETHIDE(false, comp(1258, 113));
        IF_SETHIDE(false, comp(1258, 103));
        IF_SETHIDE(false, comp(1258, 98));
        string0 = "You need at least a tier 4 citadel to customise the keep lower windows.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444396);
        string0 = "You need at least a tier 4 citadel to customise the keep upper windows.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444401);
        string0 = "You need at least a tier 4 citadel to customise the citadel flags.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444391);
        string0 = "You need at least a tier 4 citadel to customise the keep shields.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444386);
    };
    if ((varbitclan_6507 > 4)) {
        IF_SETHIDE(false, comp(1258, 77));
    } else {
        IF_SETHIDE(false, comp(1258, 78));
        string0 = "You need at least a tier 5 citadel to customise the keep flag.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444366);
    };
    return;
}