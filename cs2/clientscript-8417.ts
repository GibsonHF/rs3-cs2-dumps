//
function script8417(): void {
    var string0 = "";
    switch (varbitplayer_20719) {
        case 1: {
            string0 = "Rubble";
            break;
        }
        case 2: {
            string0 = "Stone";
            break;
        }
        case 3: {
            string0 = "Mortar";
            break;
        }
        case 4: {
            string0 = "Straw";
            break;
        }
        case 5: {
            string0 = "Plank";
            break;
        }
        case 6: {
            string0 = "Beam";
            break;
        }
        case 7: {
            string0 = "Fabric";
            break;
        }
        default: {
            string0 = "None";
            break;
        }
    };
    if ((varbitplayer_20719 != 0)) {
        IF_SETTEXT(`<col=7592A0>${string0}: <col=FFFFFF>${inttostring(varbitplayer_20717, 10)}%`, comp(247, 11));
    } else {
        IF_SETTEXT(`<col=7592A0>${string0}`, comp(247, 11));
    };
    return;
}