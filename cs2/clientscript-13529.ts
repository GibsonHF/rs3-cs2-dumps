//
function script13529(): void {
    if (((varbitclient_37000 == 1) || (varclient_252 > 0))) {
        IF_SETHIDE(false, comp(791, 158));  // clanwars_setup:intercept_disabled
    } else {
        IF_SETHIDE(true, comp(791, 158));  // clanwars_setup:intercept_disabled
    };
    script1191(51839129, script9670(0, script42(varclient_6259)), 0);
    script1191(51839132, script9670(1, script42(varclient_6259)), 0);
    script1784();
    return;
}