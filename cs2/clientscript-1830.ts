//[clientscript,clanwars_setup_summoning]
function script1830(int0: unknown_int): void {
    if ((MAP_MEMBERS() == 0)) {
        return;
    };
    if ((script1820(int0) == 0)) {
        return;
    };
    if ((varclient_253 == false)) {
        varclient_253 = true;
    } else {
        varclient_253 = false;
    };
    script1778();
    return;
}