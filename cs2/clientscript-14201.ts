//
function script14201(int0: int): void {
    switch (int0) {
        case 1: {
            varbitclient_23072 = 50;
            break;
        }
        case 2: {
            varbitclient_23072 = 60;
            break;
        }
        case 3: {
            varbitclient_23072 = 70;
            break;
        }
        case 4: {
            varbitclient_23072 = 80;
            break;
        }
        case 5: {
            varbitclient_23072 = 90;
            break;
        }
        case 6: {
            varbitclient_23072 = 100;
            break;
        }
        default: {
            varbitclient_23072 = 0;
            break;
        }
    };
    printmessage(`Bandwidth usage set to: ${TOSTRING_LOCALISED(varbitclient_23072, 1)}%`);
    return;
}