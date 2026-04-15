//
function script18576(int0: unknown_int, int1: unknown_int, int2: unknown_int): string {
    var string0 = "";
    switch (int0) {
        case 3: {
            if ((int1 == 1)) {
                string0 = "<sprite=203><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Constitution</col>`;
            break;
        }
        case 1: {
            if ((int1 == 1)) {
                string0 = "<sprite=199><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Defence</col>`;
            break;
        }
        case 0: {
            if ((int1 == 1)) {
                string0 = "<sprite=197><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Attack</col>`;
            break;
        }
        case 2: {
            if ((int1 == 1)) {
                string0 = "<sprite=198><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Strength</col>`;
            break;
        }
        case 6: {
            if ((int1 == 1)) {
                string0 = "<sprite=202><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Magic</col>`;
            break;
        }
        case 4: {
            if ((int1 == 1)) {
                string0 = "<sprite=200><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Ranged</col>`;
            break;
        }
        case 28: {
            if ((int1 == 1)) {
                string0 = "<sprite=30510><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Necromancy</col>`;
            break;
        }
        case 5: {
            if ((int1 == 1)) {
                string0 = "<sprite=201><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Prayer</col>`;
            break;
        }
        case 18: {
            if ((int1 == 1)) {
                string0 = "<sprite=198><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Slayer</col>`;
            break;
        }
        case 10: {
            if ((int1 == 1)) {
                string0 = "<sprite=211><nbsp>";
            };
            string0 = `${string0}<col=ffffff>Fishing</col>`;
            break;
        }
    };
    if ((int2 == 1)) {
        string0 = `${string0} stat`;
    };
    return string0;
}