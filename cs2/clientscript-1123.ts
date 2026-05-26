//
function script1123(int0: number): void {
    switch (varbitplayer_13897) {
        case 1: {
            IF_SETOBJECT(6090, 300, int0);
            break;
        }
        case 2: {
            IF_SETOBJECT(6092, 300, int0);
            break;
        }
        case 3: {
            IF_SETOBJECT(6089, 300, int0);
            break;
        }
        case 4: {
            IF_SETOBJECT(6091, 300, int0);
            break;
        }
        default: {
            IF_SETOBJECT(-1, 300, int0);
            break;
        }
    };
    var int1 = IF_GETWIDTH(17301514);
    var int2 = IF_GETHEIGHT(17301514);
    IF_SETONTIMER(callback(script4156, int1, int2), 17301514);
    script15407();
    return;
}