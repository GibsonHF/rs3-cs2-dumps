//
function script7049(int0: component, int1: int): void {
    var int2 = -1 as cs2enum;
    switch (int0) {
        case 95682561:
        case 95027203: {
            int2 = 10147 as cs2enum;
            break;
        }
        case 95158273:
        case 95420417: {
            int2 = 6738 as cs2enum;
            break;
        }
        case 95748097:
        case 95617025:
        case 123469825:
        case 123535361:
        case 123666433:
        case 123600897:
        case 25952257:
        case 27525121:
        case 31653889:
        case 31588353: {
            int2 = 6740 as cs2enum;
            break;
        }
        case 79888385:
        case 79101953:
        case 79953921:
        case 79364097:
        case 80019457:
        case 79560705: {
            int2 = 16973 as cs2enum;
            break;
        }
        case 123404289:
        case 123207681: {
            if ((varbitplayer_36454 == 0)) {
                int2 = 6736 as cs2enum;
            } else {
                int2 = 6737 as cs2enum;
            };
            break;
        }
        case 94961665:
        case 23789569: {
            int2 = 6736 as cs2enum;
            break;
        }
        case 123338753:
        case 19464193: {
            int2 = 6737 as cs2enum;
            break;
        }
    };
    var int3 = enum_getvalue(0, 73, int2, int1);
    if ((int3 == -1 as struct)) {
        return;
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETOUTLINE(2);
    };
    if (((struct_getparam(int3, 2876) == 1) || ((int3 == 14874 as struct) && (((varplayer_3170 == 14770 as struct) || (varplayer_3170 == 32942 as struct)) || (varplayer_3170 == 32943 as struct))))) {
        script8311(2);
    };
    script8808();
    return;
}