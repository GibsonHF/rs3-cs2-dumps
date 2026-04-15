//
function script12514(int0: component): void {
    var string0 = "";
    switch (varbitplayer_30930) {
        case 1: {
            string0 = "Active: <col=00FF00>Seren</col>";
            break;
        }
        case 2: {
            string0 = "Active: <col=00FF00>Sliske</col>";
            break;
        }
        case 3: {
            string0 = "Active: <col=00FF00>Zamorak</col>";
            break;
        }
        case 4: {
            string0 = "Active: <col=00FF00>Zaros</col>";
            break;
        }
    };
    switch (varbitplayer_30931) {
        case 1: {
            string0 = strconcat(string0, "<br>Target: <col=FF0000>Seren</col>");
            break;
        }
        case 2: {
            string0 = strconcat(string0, "<br>Target: <col=FF0000>Sliske</col>");
            break;
        }
        case 3: {
            string0 = strconcat(string0, "<br>Target: <col=FF0000>Zamorak</col>");
            break;
        }
        case 4: {
            string0 = strconcat(string0, "<br>Target: <col=FF0000>Zaros</col>");
            break;
        }
    };
    script8800(string0, int0, -1);
    return;
}