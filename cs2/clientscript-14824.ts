//
function script14824(int0: int): void {
    var string0 = "Mysteries";
    var int1 = enum_getvalue(0, 26, 14074 as cs2enum, int0);
    switch (int0) {
        case 0: {
            string0 = "General mysteries";
            break;
        }
        case 1: {
            string0 = "Armadylean mysteries";
            break;
        }
        case 2: {
            string0 = "Bandosian mysteries";
            break;
        }
        case 3: {
            string0 = "Dragonkin mysteries";
            break;
        }
        case 4: {
            string0 = "Saradominist mysteries";
            break;
        }
        case 5: {
            string0 = "Zamorakian mysteries";
            break;
        }
        case 6: {
            string0 = "Zarosian mysteries";
            break;
        }
    };
    IF_SETTEXT(string0, comp(685, 20));
    script14825(int1);
    return;
}