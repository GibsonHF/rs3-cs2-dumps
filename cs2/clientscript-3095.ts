//
function script3095(int0: component, int1: component, int2: int): void {
    IF_SETONOP(callback(script3096), int1);
    switch (int2) {
        case 4:
        case 11: {
            IF_SETONOP(callback(script3088, 2508), int0);
            break;
        }
        case 18: {
            IF_SETONOP(callback(script3088, 2506), int0);
            break;
        }
        case 157: {
            IF_SETONOP(callback(script3088, 1013), int0);
            break;
        }
        case 31: {
            IF_SETONOP(callback(script3088, 2515), int0);
            break;
        }
        case 32:
        case 12:
        case 19:
        case 40:
        case 30:
        case -2000:
        case -3000: {
            IF_SETONOP(callback(script3088, 2517), int0);
            break;
        }
        case 21: {
            IF_SETONCLICK(callback(script1872), int0);
            IF_SETONCLICK(callback(), int1);
            return;
        }
        case 50:
        case 52:
        case 49: {
            IF_SETONCLICK(callback(script6714), int0);
            IF_SETONCLICK(callback(), int1);
            break;
        }
        case 29: {
            IF_SETONCLICK(callback(script15228, 19), int0);
            IF_SETONCLICK(callback(), int1);
            break;
        }
        case 58:
        case 59: {
            IF_SETONOP(callback(script3088, 2509), int0);
            break;
        }
        case 55: {
            IF_SETONCLICK(callback(script3088, 4), int0);
            IF_SETONCLICK(callback(script3096), int1);
            break;
        }
        case 43:
        case 42: {
            IF_SETONCLICK(callback(script15099), int0);
            IF_SETONCLICK(callback(script3096), int1);
            break;
        }
        case 1407:
        case 10005:
        case 10007: {
            IF_SETONCLICK(callback(script15610), int0);
            IF_SETONCLICK(callback(script15609), int1);
            break;
        }
        case 10006:
        case 10008: {
            IF_SETONCLICK(callback(script15609), int0);
            IF_SETONCLICK(callback(script15609), int1);
            break;
        }
        case 10000: {
            IF_SETONOP(callback(script3096), int1);
            break;
        }
        case 10002:
        case 10001:
        case 10003:
        case 10004:
        case 10010: {
            IF_SETONOP(callback(), int1);
            IF_SETONOP(callback(), int0);
            break;
        }
        default: {
            IF_SETONOP(callback(), int0);
            break;
        }
    };
    return;
}