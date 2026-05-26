//
function script19266(): void {
    script6574(1);
    script19267();
    script19272();
    if ((varplayer_11901 == -1 as dbrow)) {
        script19274();
        script19275();
        return;
    };
    script19273();
    script19278();
    IF_SETHIDE(1, 84541450);
    IF_SETHIDE(1, 84541467);
    IF_SETHIDE(1, 84541470);
    IF_SETHIDE(1, 84541466);
    if ((((varplayer_11876 != -1 as obj) || (varplayer_11878 != -1 as obj)) || (varplayer_11880 != -1 as obj))) {
        script19298();
        IF_SETHIDE(0, 84541466);
        return;
    };
    switch (DB_GETROWTABLE(varplayer_11902)) {
        case 298: {
            script19279();
            IF_SETHIDE(0, 84541450);
            break;
        }
        case 299: {
            script19284();
            IF_SETHIDE(0, 84541467);
            break;
        }
        case 300: {
            script19287();
            IF_SETHIDE(0, 84541470);
            break;
        }
    };
    return;
}