//
function script7502(): void {
    var int0 = 0;
    var int1 = -1;
    var int2 = -1;
    var int3 = 0;
    varclient_2706 = false;
    varclient_2707 = 0;
    while ((int0 < 28)) {
        switch (INV_GETOBJ(93, int0)) {
            case 27338:
            case 27339:
            case 27340:
            case 27341:
            case 27342:
            case 27343:
            case 27344:
            case 27345:
            case 27346:
            case 27347:
            case 27348: {
                int1 = INV_GETOBJ(93, int0);
                int3 = 1;
                break;
            }
            default: {
                int3 = 0;
                break;
            }
        };
        if ((int3 == 1)) {
            varclient_2705 = 3;
            int2 = script7503(int1);
            switch (varclient_2707) {
                case 0: {
                    IF_SETGRAPHIC(int2, 91029515);
                    IF_SETGRAPHIC(script7504(int2), 91029519);
                    IF_SETTEXT(script7505(int2), 91029511);
                    IF_SETTEXT(script7515(int2), 91029530);
                    break;
                }
                case 1: {
                    IF_SETGRAPHIC(int2, 91029514);
                    IF_SETHIDE(0, 91029514);
                    break;
                }
                case 2: {
                    IF_SETGRAPHIC(int2, 91029516);
                    IF_SETHIDE(0, 91029516);
                    break;
                }
                case 3: {
                    IF_SETGRAPHIC(int2, 91029513);
                    IF_SETHIDE(0, 91029513);
                    break;
                }
                case 4: {
                    IF_SETGRAPHIC(int2, 91029517);
                    IF_SETHIDE(0, 91029517);
                    break;
                }
            };
            varclient_2707 = (varclient_2707 + 1);
            int3 = 0;
        };
        int0 = (int0 + 1);
    };
    if ((varclient_2710 == 0)) {
        IF_SETONTIMER(callback(script7512, 15, 0), 91029527);
    } else {
        IF_SETONTIMER(callback(script7512, varclient_2710, 0), 91029527);
    };
    return;
}