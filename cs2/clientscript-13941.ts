//
function script13941(int0: int, int1: unknown_int): void {
    var int2 = script15861(int0);
    if ((int2 == -1)) {
        return;
    };
    switch (int1) {
        case 2: {
            varbitplayer_22179 = int2;
            break;
        }
        case 3: {
            varbitplayer_39433 = 1;
            varbitplayer_22179 = int2;
            break;
        }
        default: {
            if ((int2 <= 0)) {
                varbitplayer_39433 = (1 - varbitplayer_39433);
                if ((varbitplayer_22179 == 0)) {
                    varbitplayer_22179 = 1;
                };
            } else if ((int2 >= 100)) {
                script15977();
            } else {
                return;
            };
            break;
        }
    };
    varbitclient_45226 = varbitplayer_39433;
    script13943();
    return;
}