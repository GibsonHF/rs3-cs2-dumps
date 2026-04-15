//
function script17729(int0: struct): string {
    var string0 = "A pact for increased support.";
    var int1 = 0;
    switch (int0) {
        case 48352: {
            int1 = 10;
            break;
        }
        case 48353: {
            int1 = 20;
            break;
        }
        case 48354: {
            int1 = 30;
            break;
        }
    };
    string0 = `${string0}<br>- Increase the duration of <col=ffffff>conjured spirits</col> by <col=ffffff>${script14945(int1, 1)}</col>.`;
    return string0;
}