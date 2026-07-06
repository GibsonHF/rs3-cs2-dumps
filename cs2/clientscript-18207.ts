//
function script18207(int0: number): string {
    var string0 = "";
    switch (int0) {
        case 12281: {
            string0 = varclient_5940;
            break;
        }
        case 12282: {
            string0 = varclient_5941;
            break;
        }
        case 12283: {
            string0 = varclient_5942;
            break;
        }
        case 12284: {
            string0 = varclient_5943;
            break;
        }
        case 18386: {
            string0 = varclient_8417;
            break;
        }
        case 18387: {
            string0 = varclient_8418;
            break;
        }
        case 18388: {
            string0 = varclient_8419;
            break;
        }
        case 18389: {
            string0 = varclient_8420;
            break;
        }
        default: {
            script12478(`Unexpected dbrow, expected a preset - got: ${dbrow_getfield(int0, 667680, 0)}`);
            break;
        }
    };
    string0 = REMOVETAGS(string0);
    return string0;
}