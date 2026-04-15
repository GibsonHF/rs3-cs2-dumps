//
function script1091(int0: component, int1: obj): void {
    IF_SETTEXT(inttostring(INV_TOTAL(93 as inv, int1), 10), int0);
    var string0 = "";
    switch (int1) {
        case 11238: {
            string0 = "Baby impling (level 17)";
            break;
        }
        case 11240: {
            string0 = "Young impling (level 22)";
            break;
        }
        case 11242: {
            string0 = "Gourmet impling (level 28)";
            break;
        }
        case 11244: {
            string0 = "Earth impling (level 36)";
            break;
        }
        case 11246: {
            string0 = "Essence impling (level 42)";
            break;
        }
        case 11248: {
            string0 = "Eclectic impling (level 50)";
            break;
        }
        case 15513: {
            string0 = "Spirit impling (level 54)";
            break;
        }
        case 11250: {
            string0 = "Nature impling (level 58)";
            break;
        }
        case 11252: {
            string0 = "Magpie impling (level 65)";
            break;
        }
        case 11254: {
            string0 = "Ninja impling (level 74)";
            break;
        }
        case 13337: {
            string0 = "Pirate impling (level 76)";
            break;
        }
        case 31335: {
            string0 = "Divine impling (level 79)";
            break;
        }
        case 11256: {
            string0 = "Dragon impling (level 83)";
            break;
        }
        case 15515: {
            string0 = "Zombie impling (level 87)";
            break;
        }
        case 15517: {
            string0 = "Kingly impling (level 91)";
            break;
        }
        case 32272: {
            string0 = "Crystal impling (level 95)";
            break;
        }
        default: {
            return;
        }
    };
    IF_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643), int0);
    return;
}