//[proc,clanwars_resynch_summoning]
function script1778(): void {
    script1191(51839108, script42(script6430(varclient_253)), 0);
    if ((varclient_253 == false)) {
        IF_SETTRANS(0, comp(791, 131));  // clanwars_setup:summoning
    } else {
        IF_SETTRANS(225, comp(791, 131));  // clanwars_setup:summoning
    };
    script1784();
    return;
}