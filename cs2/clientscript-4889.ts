//
function script4889(): void {
    var string0 = "";
    IF_SETHIDE(1, 82444350);
    IF_SETHIDE(1, 82444355);
    IF_SETHIDE(1, 82444390);
    IF_SETHIDE(1, 82444345);
    IF_SETHIDE(1, 82444380);
    IF_SETHIDE(1, 82444365);
    IF_SETHIDE(1, 82444375);
    IF_SETHIDE(1, 82444360);
    IF_SETHIDE(1, 82444385);
    IF_SETHIDE(1, 82444340);
    IF_SETHIDE(1, 82444395);
    IF_SETHIDE(1, 82444400);
    IF_SETHIDE(1, 82444370);
    if ((varbitclan_6507 > 1)) {
        IF_SETHIDE(0, 82444340);
        IF_SETHIDE(0, 82444345);
        IF_SETHIDE(1, 82444341);
        IF_SETHIDE(1, 82444346);
    } else {
        IF_SETHIDE(0, 82444341);
        IF_SETHIDE(0, 82444346);
        string0 = "You need at least a tier 2 citadel to customise the keep fireplace.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444341);
        string0 = "You need at least a tier 2 citadel to customise the potted plants.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444346);
    };
    if ((varbitclan_6507 > 2)) {
        IF_SETHIDE(0, 82444350);
        IF_SETHIDE(0, 82444355);
        IF_SETHIDE(0, 82444380);
        IF_SETHIDE(0, 82444375);
        IF_SETHIDE(0, 82444360);
        IF_SETHIDE(0, 82444370);
        IF_SETHIDE(1, 82444351);
        IF_SETHIDE(1, 82444356);
        IF_SETHIDE(1, 82444381);
        IF_SETHIDE(1, 82444366);
        IF_SETHIDE(1, 82444376);
        IF_SETHIDE(1, 82444361);
        IF_SETHIDE(1, 82444371);
    } else {
        IF_SETHIDE(0, 82444351);
        IF_SETHIDE(0, 82444356);
        IF_SETHIDE(0, 82444381);
        IF_SETHIDE(0, 82444376);
        IF_SETHIDE(0, 82444361);
        IF_SETHIDE(0, 82444371);
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
        IF_SETHIDE(0, 82444395);
        IF_SETHIDE(0, 82444400);
        IF_SETHIDE(0, 82444390);
        IF_SETHIDE(0, 82444385);
        IF_SETHIDE(1, 82444396);
        IF_SETHIDE(1, 82444401);
        IF_SETHIDE(1, 82444391);
        IF_SETHIDE(1, 82444386);
    } else {
        IF_SETHIDE(0, 82444396);
        IF_SETHIDE(0, 82444401);
        IF_SETHIDE(0, 82444391);
        IF_SETHIDE(0, 82444386);
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
        IF_SETHIDE(0, 82444365);
    } else {
        IF_SETHIDE(0, 82444366);
        string0 = "You need at least a tier 5 citadel to customise the keep flag.";
        IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), 82444366);
    };
    return;
}