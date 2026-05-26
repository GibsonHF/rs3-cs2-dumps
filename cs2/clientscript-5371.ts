//
function script5371(int0: number, int1: number, int2: number): void {
    if ((int0 < 1)) {
        IF_SETTEXT("-", 62324789);
    };
    if ((int0 < 2)) {
        IF_SETTEXT("-", 62324791);
    };
    if ((int0 < 3)) {
        IF_SETTEXT("-", 62324793);
    };
    if ((int0 < 4)) {
        IF_SETTEXT("-", 62324795);
    };
    if ((int0 < 5)) {
        IF_SETTEXT("-", 62324797);
    };
    if ((int0 < 6)) {
        IF_SETTEXT("-", 62324799);
    };
    switch (int0) {
        case 0: {
            IF_SETTEXT(inttostring(int1, 10), 62324761);
            break;
        }
        case 1: {
            IF_SETTEXT(inttostring(int1, 10), 62324789);
            break;
        }
        case 2: {
            IF_SETTEXT(inttostring(int1, 10), 62324791);
            break;
        }
        case 3: {
            IF_SETTEXT(inttostring(int1, 10), 62324793);
            break;
        }
        case 4: {
            IF_SETTEXT(inttostring(int1, 10), 62324795);
            break;
        }
        case 5: {
            IF_SETTEXT(inttostring(int1, 10), 62324797);
            break;
        }
        case 6: {
            IF_SETTEXT(inttostring(int1, 10), 62324799);
            break;
        }
    };
    switch (int0) {
        case 0: {
            script5373(62324789, int2);
            break;
        }
        case 1: {
            script5373(62324791, int2);
            break;
        }
        case 2: {
            script5373(62324793, int2);
            break;
        }
        case 3: {
            script5373(62324795, int2);
            break;
        }
        case 4: {
            script5373(62324797, int2);
            break;
        }
        case 5: {
            script5373(62324799, int2);
            break;
        }
    };
    var int3 = ((63 * int0) - 189);
    var int4 = (int3 + 63);
    IF_SETONTIMER(callback(script5372, 62324772, int3), 62324772);
    IF_SETONTIMER(callback(script5372, 62324770, int4), 62324770);
    var int5 = ((IF_GETX(62324772) + (IF_GETWIDTH(62324772) / 2)) - (IF_GETWIDTH(62324750) / 2));
    if ((int5 < int3)) {
        SOUND_VORBIS_VOLUME(7717, 1, 0, 180);
    };
    return;
}