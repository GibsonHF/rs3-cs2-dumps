//
function script14808(int0: component): void {
    var int1 = 0;
    var string0 = "View";
    var string1 = "";
    switch (int0) {
        case 44892272: {
            int1 = 0;
            string0 = "View general notes";
            string1 = "General.";
            break;
        }
        case 44892273: {
            int1 = 1;
            string0 = "View Armadylean notes";
            string1 = "Armadylean culture.";
            break;
        }
        case 44892274: {
            int1 = 2;
            string0 = "View Bandosian notes";
            string1 = "Bandosian culture.";
            break;
        }
        case 44892275: {
            int1 = 3;
            string0 = "View Dragonkin notes";
            string1 = "Dragonkin culture.";
            break;
        }
        case 44892276: {
            int1 = 4;
            string0 = "View Saradominist notes";
            string1 = "Saradominist culture.";
            break;
        }
        case 44892277: {
            int1 = 5;
            string0 = "View Zamorakian notes";
            string1 = "Zamorakian culture.";
            break;
        }
        case 44892278: {
            int1 = 6;
            string0 = "View Zarosian notes";
            string1 = "Zarosian culture.";
            break;
        }
    };
    IF_SETOP(1, string0, int0);
    IF_SETOPCURSOR(1, 46 as cursor, int0);
    IF_SETONOP(callback(script14809, int1), int0);
    IF_SETONMOUSEREPEAT(callback(script3876, string1, int0, -1), int0);
    return;
}