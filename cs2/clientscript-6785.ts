//
function script6785(): void {
    if (((varplayer_3936 == 0) || (script7073(varplayer_3936) == 2))) {
        IF_SETHIDE(1, 98304017);
        IF_SETHIDE(1, 98304419);
        return;
    };
    IF_SETHIDE(0, 98304017);
    IF_SETHIDE(0, 98304419);
    var string0 = "Set Active";
    var int0 = 28554;
    if ((varbitplayer_3260 == varplayer_3936)) {
        string0 = "Active";
        int0 = 28553;
    };
    script13969(98304018, 98304019, int0, string0);
    script13969(98304420, 98304421, int0, string0);
    return;
}