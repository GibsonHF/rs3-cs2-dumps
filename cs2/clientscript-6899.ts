//
function script6899(): void {
    if ((varclient_545 == true)) {
        IF_SETPOSITION(0, 30, 1, 0, 89456645);
        IF_SETHIDE(0, 89456650);
        CC_DELETEALL(89456650);
        script6902(89456653);
        IF_SETONINVTRANSMIT(callback(script6901, -2147483645, 136, 272, 2), 89456653);
    } else {
        IF_SETPOSITION(0, 0, 1, 1, 89456645);
        IF_SETHIDE(1, 89456650);
        CC_DELETEALL(89456650);
        CC_DELETEALL(89456653);
        IF_SETONINVTRANSMIT(callback(), 89456653);
    };
    var int0 = 89456657;
    var int1 = 89456660;
    var int2 = 89456658;
    var int3 = 89456658;
    script9554(int0, int1, int2, varclient_6522, 21218);
    if ((STRING_LENGTH(varclient_2440) > 0)) {
        IF_SETTEXT(varclient_2440, 89456647);
        IF_SETPAUSETEXT(`Offer rematch to ${REMOVETAGS(varclient_2440)}`, 89456654);
        IF_SETONTIMER(callback(script6900, -2147483645, (CLIENTCLOCK() + 50)), 89456640);
    } else {
        IF_SETTEXT("(Gone offline)", 89456647);
        IF_SETONTIMER(callback(), 89456640);
    };
    IF_SETHIDE(1, 89456654);
    return;
}