//
function script18268(): void {
    if ((script18161(1) == 1)) {
        varplayer_3238 = CLEARBIT(varplayer_3238, 1);
        varplayer_3238 = CLEARBIT(varplayer_3238, 7);
        varplayer_3238 = CLEARBIT(varplayer_3238, 24);
    } else {
        varplayer_3238 = SETBIT(varplayer_3238, 1);
        varplayer_3238 = SETBIT(varplayer_3238, 7);
        varplayer_3238 = SETBIT(varplayer_3238, 24);
    };
    script18265(80609290, enum_getvalue(0, 17, 681 as cs2enum, 1));
    script18265(80609291, enum_getvalue(0, 17, 681 as cs2enum, 7));
    script18265(80609308, enum_getvalue(0, 17, 681 as cs2enum, 24));
    return;
}