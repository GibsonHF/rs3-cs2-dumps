//
function script10050(int0: component, int1: int, int2: unknown_int): void {
    var int3 = -1;
    switch (int2) {
        case 0: {
            int3 = varclient_4266;
            break;
        }
        case 1: {
            int3 = varclient_4267;
            break;
        }
        case 2: {
            int3 = varclient_4660;
            break;
        }
        case 3: {
            int3 = varclient_4659;
            break;
        }
        default: {
            return;
        }
    };
    if ((CC_FIND(int0, int1) == 1)) {
        CC_SETTEXT(inttostring(MAX(0, int3), 10));
    };
    return;
}