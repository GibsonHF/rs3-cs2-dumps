//
function script4230(int0: int, int1: int, int2: int, int3: int, int4: unknown_int, int5: unknown_int, int6: unknown_int, int7: unknown_int, int8: unknown_int): void {
    if ((int4 != 10)) {
        IF_SETHIDE(false, comp(495, 15));
        IF_SETHIDE(true, comp(495, 16));
    } else if ((varplayer_4688 == 0)) {
        IF_SETHIDE(true, comp(495, 15));
        IF_SETHIDE(false, comp(495, 16));
    } else {
        IF_SETHIDE(false, comp(495, 15));
        IF_SETHIDE(true, comp(495, 16));
    };
    IF_SETTEXT(inttostring(int1, 10), comp(495, 312));
    IF_SETTEXT(inttostring(int2, 10), comp(495, 301));
    IF_SETTEXT(inttostring(int0, 10), comp(495, 290));
    IF_SETTEXT(inttostring(int3, 10), comp(495, 56));
    if ((int5 == 1)) {
        IF_SETHIDE(false, comp(495, 20));
    } else {
        IF_SETHIDE(true, comp(495, 20));
    };
    if ((int6 == 1)) {
        IF_SETHIDE(false, comp(495, 32));
    } else {
        IF_SETHIDE(true, comp(495, 32));
    };
    if ((int7 == 1)) {
        IF_SETHIDE(false, comp(495, 28));
    } else {
        IF_SETHIDE(true, comp(495, 28));
    };
    if ((int8 == 1)) {
        IF_SETHIDE(false, comp(495, 24));
    } else {
        IF_SETHIDE(true, comp(495, 24));
    };
    return;
}