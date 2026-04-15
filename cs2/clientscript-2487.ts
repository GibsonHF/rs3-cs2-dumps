//[clientscript,mob_locator_switch_tab]
function script2487(int0: int): void {
    script13972(comp(844, 55), comp(844, 56), 28595 as struct, "Ores", script9670(int0, 1));
    script13972(comp(844, 58), comp(844, 59), 28595 as struct, "Logs", script9670(int0, 2));
    IF_SETHIDE(script9464(int0, 1), comp(844, 1));
    IF_SETHIDE(script9464(int0, 2), comp(844, 2));
    return;
}