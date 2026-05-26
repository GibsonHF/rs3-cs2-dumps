//
function script2785(int0: number): number {
    switch (int0) {
        case 32:
        case 33:
        case 34: {
            if ((varplayer_1295 < 93)) {
                return 32;
            };
            if ((varplayer_1295 < 120)) {
                return 33;
            };
            return 34;
        }
        case 44: {
            varclient_622 = MOVECOORD(29366464, 24, 0, 8);
            return 0;
        }
        case 720:
        case 721: {
            if ((varbitplayer_47185 < 2)) {
                return 721;
            };
            return 720;
        }
        case 724:
        case 725:
        case 726: {
            if ((varbitplayer_47082 < 6)) {
                return 725;
            };
            if ((varbitplayer_47083 < 3)) {
                return 726;
            };
            return 724;
        }
        case 728:
        case 727: {
            if ((COORDY(varclient_622) >= 3)) {
                return 727;
            };
            return 728;
        }
        case 729:
        case 730: {
            if ((varbitplayer_47271 < 7)) {
                return 730;
            };
            return 729;
        }
        case 731:
        case 732:
        case 733: {
            if ((varbitplayer_48162 < 12)) {
                return 732;
            };
            if ((varbitplayer_48164 < 3)) {
                return 733;
            };
            return 731;
        }
    };
    return int0;
}