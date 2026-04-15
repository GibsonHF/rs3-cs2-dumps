//
function script1123(int0: component): void {
    switch (varbitplayer_13897) {
        case 1: {
            IF_SETOBJECT(6090 as obj, 300, int0);
            break;
        }
        case 2: {
            IF_SETOBJECT(6092 as obj, 300, int0);
            break;
        }
        case 3: {
            IF_SETOBJECT(6089 as obj, 300, int0);
            break;
        }
        case 4: {
            IF_SETOBJECT(6091 as obj, 300, int0);
            break;
        }
        default: {
            IF_SETOBJECT(-1 as obj, 300, int0);
            break;
        }
    };
    var int1 = IF_GETWIDTH(comp(264, 10));
    var int2 = IF_GETHEIGHT(comp(264, 10));
    IF_SETONTIMER(callback(script4156, int1, int2), comp(264, 10));
    script15407();
    return;
}