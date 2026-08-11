//[proc,clanwars_resynch_magic]
function script1775(): void {
    switch (varclient_252) {
        case 0: {
            script1191(51839102, 1, 0);
            IF_SETGRAPHIC(699 as graphic, comp(791, 126));  // clanwars_setup:magic_indicator
            IF_SETHIDE(false, comp(791, 125));  // clanwars_setup:magic_seren
            IF_SETHIDE(false, comp(791, 123));  // clanwars_setup:magic_zaros
            IF_SETHIDE(false, comp(791, 124));  // clanwars_setup:magic_lunar
            IF_SETHIDE(false, comp(791, 122));  // clanwars_setup:magic_normal
            IF_SETHIDE(false, comp(791, 121));  // clanwars_setup:magic_bse
            IF_SETTRANS(0, comp(791, 120));  // clanwars_setup:magic
            break;
        }
        case 1: {
            script1191(51839102, 1, 0);
            IF_SETHIDE(true, comp(791, 125));  // clanwars_setup:magic_seren
            IF_SETHIDE(true, comp(791, 123));  // clanwars_setup:magic_zaros
            IF_SETHIDE(true, comp(791, 124));  // clanwars_setup:magic_lunar
            IF_SETHIDE(false, comp(791, 122));  // clanwars_setup:magic_normal
            IF_SETHIDE(false, comp(791, 121));  // clanwars_setup:magic_bse
            if ((MAP_MEMBERS() == 1)) {
                IF_SETTRANS(225, comp(791, 120));  // clanwars_setup:magic
            } else {
                IF_SETTRANS(0, comp(791, 120));  // clanwars_setup:magic
            };
            break;
        }
        case 2: {
            script1191(51839102, 1, 0);
            IF_SETHIDE(true, comp(791, 125));  // clanwars_setup:magic_seren
            IF_SETHIDE(true, comp(791, 123));  // clanwars_setup:magic_zaros
            IF_SETHIDE(true, comp(791, 124));  // clanwars_setup:magic_lunar
            IF_SETHIDE(true, comp(791, 122));  // clanwars_setup:magic_normal
            IF_SETHIDE(false, comp(791, 121));  // clanwars_setup:magic_bse
            IF_SETTRANS(225, comp(791, 120));  // clanwars_setup:magic
            break;
        }
        case 3: {
            script1191(51839102, 0, 0);
            IF_SETHIDE(true, comp(791, 125));  // clanwars_setup:magic_seren
            IF_SETHIDE(true, comp(791, 123));  // clanwars_setup:magic_zaros
            IF_SETHIDE(true, comp(791, 124));  // clanwars_setup:magic_lunar
            IF_SETHIDE(true, comp(791, 122));  // clanwars_setup:magic_normal
            IF_SETHIDE(true, comp(791, 121));  // clanwars_setup:magic_bse
            IF_SETTRANS(225, comp(791, 120));  // clanwars_setup:magic
            break;
        }
    };
    script13529();
    return;
}