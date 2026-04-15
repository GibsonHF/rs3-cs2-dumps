//[clientscript,clanwars_setup_magic]
function script1827(int0: unknown_int): void {
    if ((script1820(int0) == 0)) {
        return;
    };
    if ((MAP_MEMBERS() == 0)) {
        if ((varclient_252 == 1)) {
            varclient_252 = 2;
        } else if ((varclient_252 == 2)) {
            varclient_252 = 3;
        } else {
            varclient_252 = 1;
        };
    } else {
        varclient_252 = MODULO((varclient_252 + 1), 4);
    };
    script1775();
    return;
}