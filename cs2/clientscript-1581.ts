//[clientscript,barbassault_name_transmit]
function script1581(int0: component): void {
    var string0 = "";
    var int1 = 66;
    var int2 = 32243761;
    switch (int0) {
        case 32243736:
        case 32309291:
        case 99418182: {
            string0 = varclient_2435;
            break;
        }
        case 32243737:
        case 32309292:
        case 99418188: {
            string0 = varclient_2436;
            break;
        }
        case 32243738:
        case 32309293:
        case 99418194: {
            string0 = varclient_2437;
            break;
        }
        case 32243739:
        case 32309294:
        case 99418200: {
            string0 = varclient_2438;
            break;
        }
        case 32243740:
        case 32309295: {
            string0 = varclient_2439;
            break;
        }
    };
    if ((STRING_LENGTH(string0) == 0)) {
        string0 = "---";
    };
    IF_SETMAXLINES(1, int0);
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    IF_SETTEXT(string0, int0);
    return;
}