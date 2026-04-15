//[proc,meslayer_setupinput]
function script1564(string0: string): void {
    var int0 = 80;
    script1364();
    IF_SETTEXT(ESCAPE(string0), comp(1469, 4));
    varclient_2506 = string0;
    varclient_1029 = STRING_LENGTH(string0);
    IF_SETONCLICK(callback(script1556, -2147483647, -2147483645, -2147483643), 96272388);
    IF_SETONDIALOGABORT(callback(script138), 96272388);
    script1557();
    var int1 = 0;
    if (((varclient_5 == 7) || (varclient_5 == 17))) {
        int1 = 1;
    };
    switch (varclient_5) {
        case 2:
        case 3:
        case 4:
        case 5: {
            int0 = 30;
            break;
        }
        case 6: {
            int0 = 255;
            break;
        }
        case 7: {
            int0 = 10;
            break;
        }
        case 17: {
            int0 = 19;
            break;
        }
        case 8:
        case 10:
        case 15:
        case 16:
        case 12: {
            int0 = 12;
            break;
        }
        case 13: {
            int0 = 50;
            break;
        }
    };
    script1566(int1, varclient_2506, int0);
    script8841(10, 1);
    return;
}