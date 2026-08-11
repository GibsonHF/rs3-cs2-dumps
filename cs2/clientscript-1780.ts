//[proc,clanwars_resynch_potions]
function script1780(): void {
    script1191(51839112, script42(script6430(varclient_255)), 0);
    if ((varclient_255 == false)) {
        IF_SETTRANS(0, comp(791, 135));  // clanwars_setup:potions
    } else {
        IF_SETTRANS(225, comp(791, 135));  // clanwars_setup:potions
    };
    script1784();
    return;
}