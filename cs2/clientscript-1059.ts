//[clientscript,quickchat_onkey]
function script1059(int0: unknown_int, int1: unknown_int): void {
    if (((int0 == 13) && (script9666() == 1))) {
        return;
    };
    if (((script8854() != 9) || (varclient_2231 == -1))) {
        return;
    };
    var int2 = varclient_2231;
    if ((IF_FIND(script8586(int2)) == 1)) {
        switch (cc_getparam(3651)) {
            case 0: {
                script2433(int0, int1, int2);
                break;
            }
            case 1: {
                script2298(int0, int1, int2);
                break;
            }
            case 2: {
                script2302(int0, int1, int2);
                break;
            }
            case 3: {
                script2301(int0, int1, int2);
                break;
            }
            case 4: {
                script2223(int0, int1, int2);
                break;
            }
        };
    };
    return;
}