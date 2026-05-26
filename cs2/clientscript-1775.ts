//[proc,clanwars_resynch_magic]
function script1775(): void {
    switch (varclient_252) {
        case 0: {
            script1191(51839102, 1, 0);
            IF_SETGRAPHIC(699, 51839102);
            IF_SETHIDE(0, 51839101);
            IF_SETHIDE(0, 51839099);
            IF_SETHIDE(0, 51839100);
            IF_SETHIDE(0, 51839098);
            IF_SETHIDE(0, 51839097);
            IF_SETTRANS(0, 51839096);
            break;
        }
        case 1: {
            script1191(51839102, 1, 0);
            IF_SETHIDE(1, 51839101);
            IF_SETHIDE(1, 51839099);
            IF_SETHIDE(1, 51839100);
            IF_SETHIDE(0, 51839098);
            IF_SETHIDE(0, 51839097);
            if ((MAP_MEMBERS() == 1)) {
                IF_SETTRANS(225, 51839096);
            } else {
                IF_SETTRANS(0, 51839096);
            };
            break;
        }
        case 2: {
            script1191(51839102, 1, 0);
            IF_SETHIDE(1, 51839101);
            IF_SETHIDE(1, 51839099);
            IF_SETHIDE(1, 51839100);
            IF_SETHIDE(1, 51839098);
            IF_SETHIDE(0, 51839097);
            IF_SETTRANS(225, 51839096);
            break;
        }
        case 3: {
            script1191(51839102, 0, 0);
            IF_SETHIDE(1, 51839101);
            IF_SETHIDE(1, 51839099);
            IF_SETHIDE(1, 51839100);
            IF_SETHIDE(1, 51839098);
            IF_SETHIDE(1, 51839097);
            IF_SETTRANS(225, 51839096);
            break;
        }
    };
    script13529();
    return;
}