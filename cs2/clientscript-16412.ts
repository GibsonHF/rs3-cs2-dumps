//
function script16412(): unknown_int {
    if ((varplayer_8745 == -1 as dbrow)) {
        IF_SETHIDE(true, comp(955, 8));
        IF_SETHIDE(true, comp(955, 23));
        IF_SETHIDE(true, comp(955, 21));
        IF_SETHIDE(true, comp(955, 27));
        IF_SETHIDE(true, comp(955, 25));
        IF_SETONTIMER(callback(), comp(955, 15));
        return 0;
    };
    return 1;
}