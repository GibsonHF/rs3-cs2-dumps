//
function script6899(): void {
    if ((varclient_545 == true)) {
        IF_SETPOSITION(0, 30, 1, 0, comp(1365, 5));
        IF_SETHIDE(false, comp(1365, 10));
        CC_DELETEALL(comp(1365, 10));
        script6902(comp(1365, 13));
        IF_SETONINVTRANSMIT(callback(script6901, -2147483645, 136, 272, 2), comp(1365, 13));
    } else {
        IF_SETPOSITION(0, 0, 1, 1, comp(1365, 5));
        IF_SETHIDE(true, comp(1365, 10));
        CC_DELETEALL(comp(1365, 10));
        CC_DELETEALL(comp(1365, 13));
        IF_SETONINVTRANSMIT(callback(), comp(1365, 13));
    };
    var int0 = comp(1365, 17);
    var int1 = comp(1365, 20);
    var int2 = comp(1365, 18);
    var int3 = 89456658;
    script9554(int0, int1, int2, varclient_6522, 21218 as struct);
    if ((STRING_LENGTH(varclient_2440) > 0)) {
        IF_SETTEXT(varclient_2440, comp(1365, 7));
        IF_SETPAUSETEXT(`Offer rematch to ${REMOVETAGS(varclient_2440)}`, comp(1365, 14));
        IF_SETONTIMER(callback(script6900, -2147483645, (CLIENTCLOCK() + 50)), comp(1365, 0));
    } else {
        IF_SETTEXT("(Gone offline)", comp(1365, 7));
        IF_SETONTIMER(callback(), comp(1365, 0));
    };
    IF_SETHIDE(true, comp(1365, 14));
    return;
}