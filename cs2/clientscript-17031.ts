//
function script17031(int0: dbrow): [int, unknown_int] {
    if ((script5759(int0) == 0)) {
        return [0, 0];
    };
    var int1 = 0;
    switch (int0) {
        case 13573: {
            return [varbitplayer_16573, 0];
        }
        case 3467: {
            if ((varbitplayer_52284 > 0)) {
                int1 = MAX(0, (varbitplayer_52284 - varbitplayer_52285));
            };
            return [((int1 + varbitplayer_52285) + varbitplayer_50444), 0];
        }
        case 9646: {
            return [varbitplayer_52285, 0];
        }
        case 9647: {
            return [varbitplayer_50444, 0];
        }
        case 5347: {
            return [varbitplayer_60430, 0];
        }
        case 7881: {
            if (((PLATFORMTYPE() == 3) || (PLATFORMTYPE() == 2))) {
                int1 = 0;
            } else {
                int1 = (int1 + BITCOUNT(varplayer_11334));
            };
            return [int1, 0];
        }
        case 7882: {
            if (((PLATFORMTYPE() == 3) || (PLATFORMTYPE() == 2))) {
                int1 = (int1 + BITCOUNT(varplayer_11334));
            } else {
                int1 = 0;
            };
            return [int1, 0];
        }
        case 13574: {
            return [varbitplayer_16573, 0];
        }
        case 7367: {
            return [varbitplayer_52957, 0];
        }
        case 8358: {
            return [BITCOUNT(varbitplayer_40570), 0];
        }
    };
    return [0, 0];
}