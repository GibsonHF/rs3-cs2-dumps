//
function script18101(int0: int): string {
    var string0 = "";
    switch (int0) {
        case 1: {
            string0 = "Purchase Premier<br>Hero Pass";
            break;
        }
        case 3: {
            string0 = "Purchase Premier Hero Pass Bundle";
            break;
        }
        case 13: {
            string0 = "625<br>Emblems";
            break;
        }
        case 15: {
            string0 = "1250<br>Emblems";
            break;
        }
        case 17: {
            string0 = "2500<br>Emblems";
            break;
        }
        case 5: {
            string0 = "5 Levels";
            break;
        }
        case 7: {
            string0 = "10 Levels";
            break;
        }
        case 9: {
            string0 = "20 Levels";
            break;
        }
        case 11: {
            string0 = "40 Levels";
            break;
        }
        case 20:
        case 2:
        case 4: {
            string0 = "Open Mobile Shop";
            break;
        }
        case 19: {
            string0 = "Open Bonds Shop";
            break;
        }
        default: {
            script12478(`Missed plugin here. ${inttostring(int0, 10)} not recognised`);
            break;
        }
    };
    return string0;
}