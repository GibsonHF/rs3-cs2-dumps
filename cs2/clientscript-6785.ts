//
function script6785(): void {
    if (((varplayer_3936 == 0) || (script7073(varplayer_3936) == 2))) {
        IF_SETHIDE(true, comp(1500, 17));
        IF_SETHIDE(true, comp(1500, 419));
        return;
    };
    IF_SETHIDE(false, comp(1500, 17));
    IF_SETHIDE(false, comp(1500, 419));
    var string0 = "Set Active";
    var int0 = 28554 as struct;
    if ((varbitplayer_3260 == varplayer_3936)) {
        string0 = "Active";
        int0 = 28553 as struct;
    };
    script13969(comp(1500, 18), comp(1500, 19), int0, string0);
    script13969(comp(1500, 420), comp(1500, 421), int0, string0);
    return;
}