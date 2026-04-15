//
function script20467(int0: dbrow): string {
    var string0 = "";
    var string1 = "";
    var string2 = "";
    [string0, string1, string2] = dbrow_getfield(int0, 1413120, 0);
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
            return string1;
        }
        case 77: {
            return string0;
        }
        case 225: {
            return string2;
        }
    };
    return "";
}