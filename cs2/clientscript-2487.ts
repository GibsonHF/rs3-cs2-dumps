//[clientscript,mob_locator_switch_tab]
function script2487(int0: number): void {
    script13972(55312439, 55312440, 28595, "Ores", script9670(int0, 1));
    script13972(55312442, 55312443, 28595, "Logs", script9670(int0, 2));
    IF_SETHIDE(script9464(int0, 1), comp(844, 1));  // mob_locator:ore_layer
    IF_SETHIDE(script9464(int0, 2), comp(844, 2));  // mob_locator:wood_layer
    return;
}