//[proc,clanwars_resynch_melee]
function script1774(): void {
    script1191(51839095, script42(script6430(varclient_250)), 0);
    if ((varclient_250 == false)) {
        IF_SETTRANS(0, comp(791, 118));  // clanwars_setup:melee
    } else {
        IF_SETTRANS(225, comp(791, 118));  // clanwars_setup:melee
    };
    script1784();
    return;
}