//[proc,clanwars_resynch_magic]
function script1775(): void {
    switch (varclient_252) {
        case 0: {
            script1191(51839102, 1, 0);
            IF_SETGRAPHIC(699 as graphic, comp(791, 126));
            IF_SETHIDE(false, comp(791, 125));
            IF_SETHIDE(false, comp(791, 123));
            IF_SETHIDE(false, comp(791, 124));
            IF_SETHIDE(false, comp(791, 122));
            IF_SETHIDE(false, comp(791, 121));
            IF_SETTRANS(0, comp(791, 120));
            break;
        }
        case 1: {
            script1191(51839102, 1, 0);
            IF_SETHIDE(true, comp(791, 125));
            IF_SETHIDE(true, comp(791, 123));
            IF_SETHIDE(true, comp(791, 124));
            IF_SETHIDE(false, comp(791, 122));
            IF_SETHIDE(false, comp(791, 121));
            if ((MAP_MEMBERS() == 1)) {
                IF_SETTRANS(225, comp(791, 120));
            } else {
                IF_SETTRANS(0, comp(791, 120));
            };
            break;
        }
        case 2: {
            script1191(51839102, 1, 0);
            IF_SETHIDE(true, comp(791, 125));
            IF_SETHIDE(true, comp(791, 123));
            IF_SETHIDE(true, comp(791, 124));
            IF_SETHIDE(true, comp(791, 122));
            IF_SETHIDE(false, comp(791, 121));
            IF_SETTRANS(225, comp(791, 120));
            break;
        }
        case 3: {
            script1191(51839102, 0, 0);
            IF_SETHIDE(true, comp(791, 125));
            IF_SETHIDE(true, comp(791, 123));
            IF_SETHIDE(true, comp(791, 124));
            IF_SETHIDE(true, comp(791, 122));
            IF_SETHIDE(true, comp(791, 121));
            IF_SETTRANS(225, comp(791, 120));
            break;
        }
    };
    script13529();
    return;
}