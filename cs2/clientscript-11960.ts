//
function script11960(int0: component): void {
    var int1 = 0;
    var int2 = comp(-1, 65535);
    switch (int0) {
        case 111738888: {
            int1 = varbitplayer_30103;
            int2 = comp(1705, 40);
            break;
        }
        case 111738907: {
            int1 = varbitplayer_30104;
            int2 = comp(1705, 44);
            break;
        }
        case 111738908: {
            int1 = varbitplayer_30105;
            int2 = comp(1705, 47);
            break;
        }
    };
    switch (int1) {
        case 0: {
            IF_SETMODEL(-1 as model, int0);
            IF_SETTEXT("None", int2);
            break;
        }
        case 1: {
            IF_SETMODEL(85742 as model, int0);
            IF_SETTEXT("Sweet", int2);
            break;
        }
        case 2: {
            IF_SETMODEL(100217 as model, int0);
            IF_SETTEXT("Sour", int2);
            break;
        }
        case 3: {
            IF_SETMODEL(85729 as model, int0);
            IF_SETTEXT("Spicy", int2);
            break;
        }
        case 4: {
            IF_SETMODEL(85745 as model, int0);
            IF_SETTEXT("Bitter", int2);
            break;
        }
        case 5: {
            IF_SETMODEL(85755 as model, int0);
            IF_SETTEXT("Mellow", int2);
            break;
        }
        case 6: {
            IF_SETMODEL(85721 as model, int0);
            IF_SETTEXT("Salty", int2);
            break;
        }
    };
    return;
}