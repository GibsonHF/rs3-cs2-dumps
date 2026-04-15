//
function script18400(int0: unknown_int): unknown_int {
    if ((script4148() == true)) {
        return 0;
    };
    if ((varbitplayer_54816 == 1)) {
        return 0;
    };
    if (((script12477() < 7950) || (script12477() > 7980))) {
        return 0;
    };
    switch (int0) {
        case 5038: {
            switch (script11975()) {
                case 1:
                case 2:
                case 3: {
                    return 1;
                }
                case 4:
                case 5:
                case 6: {
                    return 0;
                }
            };
            break;
        }
        case 12990: {
            switch (script11975()) {
                case 4:
                case 5: {
                    return 1;
                }
                case 1:
                case 2:
                case 3:
                case 6: {
                    return 0;
                }
            };
            break;
        }
    };
    return 0;
}