//
function script16874(int0: component, int1: unknown_int): void {
    script2731(int0, -1, 21);
    var string0 = "";
    switch (int1) {
        case 1: {
            string0 = `Collect 1 Season Token for every ${TOSTRING_LOCALISED(500, 1)} Levels gained.`;
            break;
        }
        case 2: {
            string0 = `Collect 1 Season Token for every ${TOSTRING_LOCALISED(50, 1)} Quest Points gained.`;
            break;
        }
        case 3: {
            string0 = `Collect 1 Season Token for every ${TOSTRING_LOCALISED(2000, 1)} RuneScore gained.`;
            break;
        }
    };
    IF_SETTEXT(string0, int0);
    return;
}