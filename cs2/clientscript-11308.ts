//
function script11308(int0: number): void {
    var string0 = "";
    var int1 = -1;
    var int2 = -1;
    var string1 = "<col=00CC00>";
    var string2 = "<col=00CC00>";
    var int3 = 1;
    switch (int0) {
        case 26345547: {
            int2 = 8395;
            int1 = 26345545;
            break;
        }
        case 26345556: {
            int2 = 8415;
            int1 = 26345554;
            break;
        }
        case 26345565: {
            int2 = 8396;
            int1 = 26345563;
            break;
        }
        case 26345573: {
            int2 = 8397;
            int1 = 26345571;
            break;
        }
        case 26345589: {
            int2 = 8398;
            int1 = 26345587;
            break;
        }
        case 26345605: {
            int2 = 8399;
            int1 = 26345603;
            break;
        }
        case 26345597: {
            int2 = 8401;
            int1 = 26345595;
            break;
        }
        case 26345621: {
            int2 = 8403;
            int1 = 26345619;
            break;
        }
        case 26345653: {
            int2 = 8405;
            int1 = 26345651;
            break;
        }
        case 26345581: {
            int2 = 8406;
            int1 = 26345579;
            break;
        }
        case 26345637: {
            int2 = 8407;
            int1 = 26345635;
            break;
        }
        case 26345661: {
            int2 = 8408;
            int1 = 26345659;
            break;
        }
        case 26345677: {
            int2 = 8409;
            int1 = 26345675;
            break;
        }
        case 26345685: {
            int2 = 8410;
            int1 = 26345683;
            break;
        }
        case 26345693: {
            int2 = 8411;
            int1 = 26345691;
            break;
        }
        case 26345710: {
            int2 = 8412;
            int1 = 26345708;
            break;
        }
        case 26345718: {
            int2 = 8413;
            int1 = 26345716;
            break;
        }
        case 26345734: {
            int2 = 8414;
            int1 = 26345732;
            break;
        }
        case 26345669: {
            int2 = 8416;
            int1 = 26345667;
            break;
        }
        case 26345613: {
            int2 = 8400;
            int1 = 26345611;
            break;
        }
        case 26345645: {
            int2 = 9842;
            int1 = 26345643;
            break;
        }
        case 26345629: {
            int2 = 15221;
            int1 = 26345627;
            break;
        }
        case 26345726: {
            int2 = 18800;
            int1 = 26345724;
            break;
        }
        case 26345702: {
            int2 = 34685;
            int1 = 26345699;
            break;
        }
    };
    if ((script17401() < script17369(int2))) {
        int3 = 0;
        string2 = "<col=CC0000>";
    };
    if ((STAT(22) < item_getparam(int2, 23))) {
        int3 = 0;
        string1 = "<col=CC0000>";
    };
    string0 = `${string1}Level: ${inttostring(item_getparam(int2, 23), 10)}</col><br>${string2}Cost: ${TOSTRING_LOCALISED(script17369(int2), 1)} coins</col>`;
    IF_SETTEXT(string0, int0);
    IF_SETHIDE(int3, int1);
    return;
}