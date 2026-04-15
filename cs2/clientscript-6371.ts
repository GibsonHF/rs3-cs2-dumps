//
function script6371(int0: int, int1: component): void {
    var int2 = enum_getvalue(0, 9, 13327 as cs2enum, int0);
    IF_SETONTIMER(callback(), int1);
    IF_SETSIZE(0, 0, 0, 0, int2);
    IF_SETHIDE(1, int2);
    CC_DELETEALL(enum_getvalue(0, 9, 13328, int0));
    CC_DELETEALL(enum_getvalue(0, 9, 13329, int0));
    switch (int0) {
        case 0: {
            varclient_1947 = comp(-1, 65535);
            varclient_1948 = -1;
            break;
        }
        case 1: {
            varclient_1949 = comp(-1, 65535);
            varclient_1950 = -1;
            break;
        }
        case 2: {
            varclient_1951 = comp(-1, 65535);
            varclient_1952 = -1;
            break;
        }
        case 3: {
            varclient_1953 = comp(-1, 65535);
            varclient_1954 = -1;
            break;
        }
        case 4: {
            varclient_1955 = comp(-1, 65535);
            varclient_1956 = -1;
            break;
        }
        case 5: {
            varclient_1957 = comp(-1, 65535);
            varclient_1958 = -1;
            break;
        }
        case 6: {
            varclient_1959 = comp(-1, 65535);
            varclient_1960 = -1;
            break;
        }
        case 7: {
            varclient_1961 = comp(-1, 65535);
            varclient_1962 = -1;
            break;
        }
        case 8: {
            varclient_3503 = comp(-1, 65535);
            varclient_3504 = -1;
            break;
        }
        case 9: {
            varclient_3505 = comp(-1, 65535);
            varclient_3506 = -1;
            break;
        }
        case 10: {
            varclient_3507 = comp(-1, 65535);
            varclient_3508 = -1;
            break;
        }
        case 11: {
            varclient_3509 = comp(-1, 65535);
            varclient_3510 = -1;
            break;
        }
        case 12: {
            varclient_3511 = comp(-1, 65535);
            varclient_3512 = -1;
            break;
        }
    };
    if ((CC_FIND(IF_GETPARENTLAYER(int1), 0) == 1)) {
        CC_DELETE();
    };
    return;
}