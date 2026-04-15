//
function script11804(int0: component, int1: component): void {
    var int2 = -1;
    switch (int1) {
        case 127467737: {
            int2 = varbitplayer_38830;
            break;
        }
        case 127467697: {
            int2 = varbitplayer_38831;
            break;
        }
        default: {
            return;
        }
    };
    if ((script11805(int2) == 1)) {
        int2 = 0;
    };
    script10428(int0, int1, 15426 as cs2enum, -1, "Select which bar to display", int2, 0);
    return;
}