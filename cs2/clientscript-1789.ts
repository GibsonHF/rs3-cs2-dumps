//[clientscript,clanwars_overlay_status_timecounter]
function script1789(int0: component, int1: int, int2: int): void {
    var int3 = (CLIENTCLOCK() - int1);
    varclient_265 = MAX((int2 - (int3 / 30)), 0);
    script1790(int0);
    return;
}