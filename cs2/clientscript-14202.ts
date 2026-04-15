//
function script14202(int0: int): void {
    switch (int0) {
        case 1: {
            varbitclient_23080 = 50;
            break;
        }
        case 2: {
            varbitclient_23080 = 60;
            break;
        }
        case 3: {
            varbitclient_23080 = 70;
            break;
        }
        case 4: {
            varbitclient_23080 = 80;
            break;
        }
        case 5: {
            varbitclient_23080 = 90;
            break;
        }
        case 6: {
            varbitclient_23080 = 100;
            break;
        }
        default: {
            varbitclient_23080 = 0;
            break;
        }
    };
    printmessage(`Bandwidth usage set to: ${TOSTRING_LOCALISED(varbitclient_23072, 1)}%`);
    return;
}