//[proc,clanwars_resynch_ranged]
function script1776(): void {
    script1191(51839104, script42(script6430(varclient_251)), 0);
    if ((varclient_251 == false)) {
        IF_SETTRANS(0, comp(791, 127));  // clanwars_setup:ranged
    } else {
        IF_SETTRANS(225, comp(791, 127));  // clanwars_setup:ranged
    };
    script1784();
    return;
}