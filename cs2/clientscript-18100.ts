//
function script18100(int0: int): string {
    var string0 = "";
    switch (int0) {
        case 13: {
            string0 = "Purchase 625 Emblems";
            break;
        }
        case 15: {
            string0 = "Purchase 1250 Emblems";
            break;
        }
        case 17: {
            string0 = "Purchase 2500 Emblems";
            break;
        }
        case 5: {
            string0 = "Purchase 5 Levels";
            break;
        }
        case 7: {
            string0 = "Purchase 10 Levels";
            break;
        }
        case 9: {
            string0 = "Purchase 20 Levels";
            break;
        }
        case 11: {
            string0 = "Purchase 40 Levels";
            break;
        }
        default: {
            string0 = script18101(int0);
            break;
        }
    };
    return string0;
}