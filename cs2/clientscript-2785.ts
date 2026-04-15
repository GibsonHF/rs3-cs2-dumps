//
function script2785(int0: maparea): maparea {
    switch (int0) {
        case 32:
        case 33:
        case 34: {
            if ((varplayer_1295 < 93)) {
                return 32 as maparea;
            };
            if ((varplayer_1295 < 120)) {
                return 33 as maparea;
            };
            return 34 as maparea;
        }
        case 44: {
            varclient_622 = MOVECOORD(pos(0,28,99,1,0), 24, 0, 8);
            return 0 as maparea;
        }
        case 720:
        case 721: {
            if ((varbitplayer_47185 < 2)) {
                return 721 as maparea;
            };
            return 720 as maparea;
        }
        case 724:
        case 725:
        case 726: {
            if ((varbitplayer_47082 < 6)) {
                return 725 as maparea;
            };
            if ((varbitplayer_47083 < 3)) {
                return 726 as maparea;
            };
            return 724 as maparea;
        }
        case 728:
        case 727: {
            if ((COORDY(varclient_622) >= 3)) {
                return 727 as maparea;
            };
            return 728 as maparea;
        }
        case 729:
        case 730: {
            if ((varbitplayer_47271 < 7)) {
                return 730 as maparea;
            };
            return 729 as maparea;
        }
        case 731:
        case 732:
        case 733: {
            if ((varbitplayer_48162 < 12)) {
                return 732 as maparea;
            };
            if ((varbitplayer_48164 < 3)) {
                return 733 as maparea;
            };
            return 731 as maparea;
        }
    };
    return int0;
}