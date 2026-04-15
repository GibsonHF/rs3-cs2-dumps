//
function script8416(): void {
    var string0 = "";
    switch (varbitplayer_20718) {
        case 1: {
            string0 = "Rubble";
            break;
        }
        case 2: {
            string0 = "Stone";
            break;
        }
        case 3: {
            string0 = "Plaster";
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
    if ((varbitplayer_20718 != 0)) {
        IF_SETTEXT(`<col=7592A0>${string0}: <col=FFFFFF>${inttostring(varbitplayer_20716, 10)}%`, comp(247, 10));
    } else {
        IF_SETTEXT(`<col=7592A0>${string0}`, comp(247, 10));
    };
    return;
}