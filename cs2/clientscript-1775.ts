//[proc,clanwars_resynch_magic]
function script1775(): void {
    switch (varclient_252) {
        case 0: {
            script1191(comp(791, 126), 1, false);
            stack(699);
            stack(51839102);
            IF_SETGRAPHIC();
            IF_SETHIDE(0, 51839101);
            IF_SETHIDE(0, 51839099);
            IF_SETHIDE(0, 51839100);
            IF_SETHIDE(0, 51839098);
            IF_SETHIDE(0, 51839097);
            IF_SETTRANS(0, 51839096);
            break;
        }
        case 1: {
            script1191(comp(791, 126), 1, false);
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
            script1191(comp(791, 126), 1, false);
            IF_SETHIDE(true, comp(791, 125));
            IF_SETHIDE(true, comp(791, 123));
            IF_SETHIDE(true, comp(791, 124));
            IF_SETHIDE(true, comp(791, 122));
            IF_SETHIDE(false, comp(791, 121));
            IF_SETTRANS(225, comp(791, 120));
            break;
        }
        case 3: {
            script1191(comp(791, 126), 0, false);
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