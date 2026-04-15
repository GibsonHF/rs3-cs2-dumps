//
function script11308(int0: component): void {
    var string0 = "";
    var int1 = comp(-1, 65535);
    var int2 = -1 as obj;
    var string1 = "<col=00CC00>";
    var string2 = "<col=00CC00>";
    var int3 = true;
    switch (int0) {
        case 26345547: {
            int2 = 8395 as obj;
            int1 = comp(402, 73);
            break;
        }
        case 26345556: {
            int2 = 8415 as obj;
            int1 = comp(402, 82);
            break;
        }
        case 26345565: {
            int2 = 8396 as obj;
            int1 = comp(402, 91);
            break;
        }
        case 26345573: {
            int2 = 8397 as obj;
            int1 = comp(402, 99);
            break;
        }
        case 26345589: {
            int2 = 8398 as obj;
            int1 = comp(402, 115);
            break;
        }
        case 26345605: {
            int2 = 8399 as obj;
            int1 = comp(402, 131);
            break;
        }
        case 26345597: {
            int2 = 8401 as obj;
            int1 = comp(402, 123);
            break;
        }
        case 26345621: {
            int2 = 8403 as obj;
            int1 = comp(402, 147);
            break;
        }
        case 26345653: {
            int2 = 8405 as obj;
            int1 = comp(402, 179);
            break;
        }
        case 26345581: {
            int2 = 8406 as obj;
            int1 = comp(402, 107);
            break;
        }
        case 26345637: {
            int2 = 8407 as obj;
            int1 = comp(402, 163);
            break;
        }
        case 26345661: {
            int2 = 8408 as obj;
            int1 = comp(402, 187);
            break;
        }
        case 26345677: {
            int2 = 8409 as obj;
            int1 = comp(402, 203);
            break;
        }
        case 26345685: {
            int2 = 8410 as obj;
            int1 = comp(402, 211);
            break;
        }
        case 26345693: {
            int2 = 8411 as obj;
            int1 = comp(402, 219);
            break;
        }
        case 26345710: {
            int2 = 8412 as obj;
            int1 = comp(402, 236);
            break;
        }
        case 26345718: {
            int2 = 8413 as obj;
            int1 = comp(402, 244);
            break;
        }
        case 26345734: {
            int2 = 8414 as obj;
            int1 = comp(402, 260);
            break;
        }
        case 26345669: {
            int2 = 8416 as obj;
            int1 = comp(402, 195);
            break;
        }
        case 26345613: {
            int2 = 8400 as obj;
            int1 = comp(402, 139);
            break;
        }
        case 26345645: {
            int2 = 9842 as obj;
            int1 = comp(402, 171);
            break;
        }
        case 26345629: {
            int2 = 15221 as obj;
            int1 = comp(402, 155);
            break;
        }
        case 26345726: {
            int2 = 18800 as obj;
            int1 = comp(402, 252);
            break;
        }
        case 26345702: {
            int2 = 34685 as obj;
            int1 = comp(402, 227);
            break;
        }
    };
    if ((script17401() < script17369(int2))) {
        int3 = false;
        string2 = "<col=CC0000>";
    };
    if ((STAT(22 as stat) < item_getparam(int2, 23))) {
        int3 = false;
        string1 = "<col=CC0000>";
    };
    string0 = `${string1}Level: ${inttostring(item_getparam(int2, 23), 10)}</col><br>${string2}Cost: ${TOSTRING_LOCALISED(script17369(int2), 1)} coins</col>`;
    IF_SETTEXT(string0, int0);
    IF_SETHIDE(int3, int1);
    return;
}