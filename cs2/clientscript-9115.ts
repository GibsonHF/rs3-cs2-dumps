//
function script9115(): void {
    IF_SETOBJECT_NONUM(varplayer_3906, 2147483647, 18022401);
    IF_SETTEXT(OC_NAME(varplayer_3906), 18022400);
    script9117();
    IF_SETONVARTRANSMIT(callback(script9116, 3908, 1), 18022402);
    if (((varplayer_3906 == 29492) || (varplayer_3906 == 29494 as obj))) {
        IF_SETTEXT(`Total Bonds : ${TOSTRING_LOCALISED(varplayer_3909, 1)}`, 18022423);
    } else if ((varplayer_3909 == 1)) {
        IF_SETTEXT(`Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coin`, 18022423);
    } else {
        IF_SETTEXT(`Value: ${TOSTRING_LOCALISED(varplayer_3909, 1)} coins`, 18022423);
    };
    script9119();
    IF_SETONVARTRANSMIT(callback(script9118, 3910, 3910, 2), 18022425);
    script10687();
    IF_SETONVARTRANSMIT(callback(script10685, 3911, 1), 18022413);
    return;
}