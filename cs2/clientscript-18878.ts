//
function script18878(int0: dbrow, int1: int, int2: int, int3: unknown_int): string {
    var string0 = "";
    switch (MAP_LANG()) {
        case 0: {
            string0 = script18921(int0, 29);
            break;
        }
        case 1: {
            string0 = script18921(int0, 30);
            break;
        }
        case 2: {
            string0 = script18921(int0, 31);
            break;
        }
        case 3: {
            string0 = script18921(int0, 32);
            break;
        }
    };
    if ((((int1 == 0) || (int2 == 2)) && (int3 == 0))) {
        string0 = strconcat(string0, "&utm_source=rs3-cal&utm_medium=in-game-link&utm_term=newspost");
    };
    return string0;
}