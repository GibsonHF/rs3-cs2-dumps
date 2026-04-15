//
function script5371(int0: int, int1: int, int2: int): void {
    if ((int0 < 1)) {
        IF_SETTEXT("-", comp(951, 53));
    };
    if ((int0 < 2)) {
        IF_SETTEXT("-", comp(951, 55));
    };
    if ((int0 < 3)) {
        IF_SETTEXT("-", comp(951, 57));
    };
    if ((int0 < 4)) {
        IF_SETTEXT("-", comp(951, 59));
    };
    if ((int0 < 5)) {
        IF_SETTEXT("-", comp(951, 61));
    };
    if ((int0 < 6)) {
        IF_SETTEXT("-", comp(951, 63));
    };
    switch (int0) {
        case 0: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 25));
            break;
        }
        case 1: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 53));
            break;
        }
        case 2: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 55));
            break;
        }
        case 3: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 57));
            break;
        }
        case 4: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 59));
            break;
        }
        case 5: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 61));
            break;
        }
        case 6: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 63));
            break;
        }
    };
    switch (int0) {
        case 0: {
            script5373(comp(951, 53), int2);
            break;
        }
        case 1: {
            script5373(comp(951, 55), int2);
            break;
        }
        case 2: {
            script5373(comp(951, 57), int2);
            break;
        }
        case 3: {
            script5373(comp(951, 59), int2);
            break;
        }
        case 4: {
            script5373(comp(951, 61), int2);
            break;
        }
        case 5: {
            script5373(comp(951, 63), int2);
            break;
        }
    };
    var int3 = ((63 * int0) - 189);
    var int4 = (int3 + 63);
    IF_SETONTIMER(callback(script5372, 62324772, int3), comp(951, 36));
    IF_SETONTIMER(callback(script5372, 62324770, int4), 62324770);
    var int5 = ((IF_GETX(62324772) + (IF_GETWIDTH(62324772) / 2)) - (IF_GETWIDTH(62324750) / 2));
    if ((int5 < int3)) {
        SOUND_VORBIS_VOLUME(7717 as vorbis, 1, 0, 180);
    };
    return;
}