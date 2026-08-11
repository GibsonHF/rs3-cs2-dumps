//[proc,clanwars_resynch_prayer]
function script1777(): void {
    script1191(51839106, script42(script6430(varclient_256)), 0);
    if ((varclient_256 == false)) {
        IF_SETTRANS(0, comp(791, 129));  // clanwars_setup:prayer
    } else {
        IF_SETTRANS(225, comp(791, 129));  // clanwars_setup:prayer
    };
    script1784();
    return;
}