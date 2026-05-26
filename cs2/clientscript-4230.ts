//
function script4230(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if ((int4 != 10)) {
        IF_SETHIDE(0, 32440335);
        IF_SETHIDE(1, 32440336);
    } else if ((varplayer_4688 == 0)) {
        IF_SETHIDE(1, 32440335);
        IF_SETHIDE(0, 32440336);
    } else {
        IF_SETHIDE(0, 32440335);
        IF_SETHIDE(1, 32440336);
    };
    IF_SETTEXT(inttostring(int1, 10), 32440632);
    IF_SETTEXT(inttostring(int2, 10), 32440621);
    IF_SETTEXT(inttostring(int0, 10), 32440610);
    IF_SETTEXT(inttostring(int3, 10), 32440376);
    if ((int5 == 1)) {
        IF_SETHIDE(0, 32440340);
    } else {
        IF_SETHIDE(1, 32440340);
    };
    if ((int6 == 1)) {
        IF_SETHIDE(0, 32440352);
    } else {
        IF_SETHIDE(1, 32440352);
    };
    if ((int7 == 1)) {
        IF_SETHIDE(0, 32440348);
    } else {
        IF_SETHIDE(1, 32440348);
    };
    if ((int8 == 1)) {
        IF_SETHIDE(0, 32440344);
    } else {
        IF_SETHIDE(1, 32440344);
    };
    return;
}