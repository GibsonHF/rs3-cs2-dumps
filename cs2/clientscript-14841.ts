//
function script14841(int0: int): void {
    var string0 = "Research";
    var int1 = enum_getvalue(0, 26, 14082 as cs2enum, int0);
    switch (int0) {
        case 0: {
            string0 = "Special research";
            break;
        }
        case 1: {
            string0 = "Armadylean research";
            break;
        }
        case 2: {
            string0 = "Bandosian research";
            break;
        }
        case 3: {
            string0 = "Dragonkin research";
            break;
        }
        case 4: {
            string0 = "Saradominist research";
            break;
        }
        case 5: {
            string0 = "Zamorakian research";
            break;
        }
        case 6: {
            string0 = "Zarosian research";
            break;
        }
    };
    IF_SETTEXT(string0, comp(685, 26));
    script14842(int1);
    return;
}