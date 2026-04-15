//[clientscript,clanwars_setup_accept_button]
function script1834(int0: unknown_int): void {
    if ((int0 != 1)) {
        return;
    };
    if (((((varclient_250 == true) && (varclient_252 >= 2)) && (varclient_251 == true)) && ((MAP_MEMBERS() == 0) || (varclient_253 == true)))) {
        return;
    };
    if ((varclient_258 == false)) {
        varclient_258 = true;
        script1782();
    };
    return;
}