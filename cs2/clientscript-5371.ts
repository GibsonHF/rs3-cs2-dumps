//
function script5371(int0: number, int1: number, int2: number): void {
    if ((int0 < 1)) {
        IF_SETTEXT("-", comp(951, 53));  // agidad_overlay:num_2
    };
    if ((int0 < 2)) {
        IF_SETTEXT("-", comp(951, 55));  // agidad_overlay:num_3
    };
    if ((int0 < 3)) {
        IF_SETTEXT("-", comp(951, 57));  // agidad_overlay:num_4
    };
    if ((int0 < 4)) {
        IF_SETTEXT("-", comp(951, 59));  // agidad_overlay:num_5
    };
    if ((int0 < 5)) {
        IF_SETTEXT("-", comp(951, 61));  // agidad_overlay:num_6
    };
    if ((int0 < 6)) {
        IF_SETTEXT("-", comp(951, 63));  // agidad_overlay:num_7
    };
    switch (int0) {
        case 0: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 25));  // agidad_overlay:num_1
            break;
        }
        case 1: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 53));  // agidad_overlay:num_2
            break;
        }
        case 2: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 55));  // agidad_overlay:num_3
            break;
        }
        case 3: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 57));  // agidad_overlay:num_4
            break;
        }
        case 4: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 59));  // agidad_overlay:num_5
            break;
        }
        case 5: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 61));  // agidad_overlay:num_6
            break;
        }
        case 6: {
            IF_SETTEXT(inttostring(int1, 10), comp(951, 63));  // agidad_overlay:num_7
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
    IF_SETONTIMER(callback(script5372, 62324772, int3), comp(951, 36));  // agidad_overlay:marker_current
    IF_SETONTIMER(callback(script5372, 62324770, int4), comp(951, 34));  // agidad_overlay:marker_new
    var int5 = ((IF_GETX(comp(951, 36) /*agidad_overlay:marker_current*/) + (IF_GETWIDTH(comp(951, 36) /*agidad_overlay:marker_current*/) / 2)) - (IF_GETWIDTH(comp(951, 14) /*agidad_overlay:numbers*/) / 2));
    if ((int5 < int3)) {
        SOUND_VORBIS_VOLUME(7717 as vorbis, 1, 0, 180);
    };
    return;
}