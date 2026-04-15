//
function script16764(int0: int): string {
    var string0 = TOSTRING_LOCALISED(int0, 1);
    switch (script16763()) {
        case 161:
        case 15:
        case 22:
        case 97:
        case 54:
        case 63:
        case 69:
        case 74:
        case 56:
        case 88:
        case 101:
        case 108:
        case 132:
        case 130:
        case 131:
        case 148:
        case 179:
        case 196:
        case 194:
        case 67: {
            string0 = strconcat(string0, ` ${script16760(0, int0)}`);
            break;
        }
        case 77: {
            string0 = strconcat(string0, ` ${script16760(1, int0)}`);
            break;
        }
        case 225: {
            string0 = strconcat(string0, ` ${script16760(2, int0)}`);
            break;
        }
    };
    return string0;
}