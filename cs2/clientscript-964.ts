//[clientscript,fairyrings_vartransmit]
function script964(): void {
    switch (varbitplayer_12072) {
        case 1: {
            varclient_6873 = 270;
            break;
        }
        case 2: {
            varclient_6873 = 180;
            break;
        }
        case 3: {
            varclient_6873 = 90;
            break;
        }
        default: {
            varclient_6873 = 0;
            break;
        }
    };
    switch (varbitplayer_12073) {
        case 1: {
            varclient_6874 = 270;
            break;
        }
        case 2: {
            varclient_6874 = 180;
            break;
        }
        case 3: {
            varclient_6874 = 90;
            break;
        }
        default: {
            varclient_6874 = 0;
            break;
        }
    };
    switch (varbitplayer_12074) {
        case 1: {
            varclient_6875 = 270;
            break;
        }
        case 2: {
            varclient_6875 = 180;
            break;
        }
        case 3: {
            varclient_6875 = 90;
            break;
        }
        default: {
            varclient_6875 = 0;
            break;
        }
    };
    var int0 = 0;
    var int1 = 0;
    if ((IF_FIND(comp(784, 61)) == 1)) {
        [int0, int1] = script15524(varclient_6873);
        if ((int0 <= int1)) {
            varclient_6876 = 1;
        } else {
            varclient_6876 = -1;
        };
    };
    if ((IF_FIND(comp(784, 64)) == 1)) {
        [int0, int1] = script15524(varclient_6874);
        if ((int0 <= int1)) {
            varclient_6877 = 1;
        } else {
            varclient_6877 = -1;
        };
    };
    if ((IF_FIND(comp(784, 67)) == 1)) {
        [int0, int1] = script15524(varclient_6875);
        if ((int0 <= int1)) {
            varclient_6878 = 1;
        } else {
            varclient_6878 = -1;
        };
    };
    return;
}