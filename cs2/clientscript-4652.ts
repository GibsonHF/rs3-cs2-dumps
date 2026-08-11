//
function script4652(): void {
    IF_SETHIDE(true, comp(173, 1));  // fremsaga_map:signature_map
    IF_SETHIDE(true, comp(173, 2));  // fremsaga_map:vengeance
    IF_SETHIDE(false, comp(173, 3));  // fremsaga_map:thok_maps
    IF_SETHIDE(true, comp(173, 4));  // fremsaga_map:thok_icefiend
    IF_SETHIDE(true, comp(173, 8));  // fremsaga_map:stomp_map
    IF_SETHIDE(false, comp(173, 9));  // fremsaga_map:thok_main
    IF_SETHIDE(false, comp(173, 10));  // fremsaga_map:thok_shadowforger
    IF_SETHIDE(false, comp(173, 33));  // fremsaga_map:thok_shadowforgericon
    if ((TESTBIT(varplayer_1554, 0) == 1)) {
        IF_SETHIDE(false, comp(173, 11));  // fremsaga_map:thok_scl
    } else {
        IF_SETHIDE(true, comp(173, 11));  // fremsaga_map:thok_scl
    };
    if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 12));  // fremsaga_map:thok_monolith
    } else {
        IF_SETHIDE(true, comp(173, 12));  // fremsaga_map:thok_monolith
    };
    if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 15));  // fremsaga_map:thok_west_ferret
    } else {
        IF_SETHIDE(true, comp(173, 15));  // fremsaga_map:thok_west_ferret
    };
    if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 16));  // fremsaga_map:thok_ferret
    } else {
        IF_SETHIDE(true, comp(173, 16));  // fremsaga_map:thok_ferret
    };
    if ((TESTBIT(varplayer_1554, 4) == 1)) {
        IF_SETHIDE(false, comp(173, 17));  // fremsaga_map:thok_pillar
    } else {
        IF_SETHIDE(true, comp(173, 17));  // fremsaga_map:thok_pillar
    };
    if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 18));  // fremsaga_map:thok_rsl
    } else {
        IF_SETHIDE(true, comp(173, 18));  // fremsaga_map:thok_rsl
    };
    if ((TESTBIT(varplayer_1554, 6) == 1)) {
        IF_SETHIDE(false, comp(173, 19));  // fremsaga_map:thok_lightsout
    } else {
        IF_SETHIDE(true, comp(173, 19));  // fremsaga_map:thok_lightsout
    };
    if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 20));  // fremsaga_map:thok_rammernaut
        IF_SETHIDE(false, comp(173, 34));  // fremsaga_map:thok_rammernauticon
    } else {
        IF_SETHIDE(true, comp(173, 20));  // fremsaga_map:thok_rammernaut
        IF_SETHIDE(true, comp(173, 34));  // fremsaga_map:thok_rammernauticon
    };
    if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 21));  // fremsaga_map:thok_btl
    } else {
        IF_SETHIDE(true, comp(173, 21));  // fremsaga_map:thok_btl
    };
    if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 22));  // fremsaga_map:thok_bulwalk
        IF_SETHIDE(false, comp(173, 35));  // fremsaga_map:thok_bulkwalkicon
    } else {
        IF_SETHIDE(true, comp(173, 22));  // fremsaga_map:thok_bulwalk
        IF_SETHIDE(true, comp(173, 35));  // fremsaga_map:thok_bulkwalkicon
    };
    if ((TESTBIT(varplayer_1554, 10) == 1)) {
        IF_SETHIDE(false, comp(173, 23));  // fremsaga_map:thok_eastofbtl
    } else {
        IF_SETHIDE(true, comp(173, 23));  // fremsaga_map:thok_eastofbtl
    };
    if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 24));  // fremsaga_map:thok_eastofferret
    } else {
        IF_SETHIDE(true, comp(173, 24));  // fremsaga_map:thok_eastofferret
    };
    if ((TESTBIT(varplayer_1554, 12) == 1)) {
        IF_SETHIDE(false, comp(173, 25));  // fremsaga_map:thok_startroom
        IF_SETHIDE(false, comp(173, 26));  // fremsaga_map:thok_starticon
    } else {
        IF_SETHIDE(true, comp(173, 25));  // fremsaga_map:thok_startroom
        IF_SETHIDE(true, comp(173, 26));  // fremsaga_map:thok_starticon
    };
    if ((TESTBIT(varplayer_1554, 13) == 1)) {
        IF_SETHIDE(false, comp(173, 27));  // fremsaga_map:thok_ramokee
    } else {
        IF_SETHIDE(true, comp(173, 27));  // fremsaga_map:thok_ramokee
    };
    if ((TESTBIT(varplayer_1554, 14) == 1)) {
        IF_SETHIDE(false, comp(173, 28));  // fremsaga_map:thok_ocl
    } else {
        IF_SETHIDE(true, comp(173, 28));  // fremsaga_map:thok_ocl
    };
    if ((TESTBIT(varplayer_1554, 15) == 1)) {
        IF_SETHIDE(false, comp(173, 31));  // fremsaga_map:thok_demon
        IF_SETHIDE(false, comp(173, 36));  // fremsaga_map:thok_demonicon
    } else {
        IF_SETHIDE(true, comp(173, 31));  // fremsaga_map:thok_demon
        IF_SETHIDE(true, comp(173, 36));  // fremsaga_map:thok_demonicon
    };
    if ((TESTBIT(varplayer_1554, 16) == 1)) {
        IF_SETHIDE(false, comp(173, 29));  // fremsaga_map:thok_ock
    } else {
        IF_SETHIDE(true, comp(173, 29));  // fremsaga_map:thok_ock
    };
    if ((TESTBIT(varplayer_1554, 17) == 1)) {
        IF_SETHIDE(false, comp(173, 30));  // fremsaga_map:thok_gulega
        IF_SETHIDE(false, comp(173, 37));  // fremsaga_map:thok_gulegaicon
    } else {
        IF_SETHIDE(true, comp(173, 30));  // fremsaga_map:thok_gulega
        IF_SETHIDE(true, comp(173, 37));  // fremsaga_map:thok_gulegaicon
    };
    if ((TESTBIT(varplayer_1554, 18) == 1)) {
        IF_SETHIDE(false, comp(173, 13));  // fremsaga_map:thok_empty_north_monolith
    } else {
        IF_SETHIDE(true, comp(173, 13));  // fremsaga_map:thok_empty_north_monolith
    };
    if ((TESTBIT(varplayer_1554, 19) == 1)) {
        IF_SETHIDE(false, comp(173, 14));  // fremsaga_map:thok_toughguy
        IF_SETHIDE(false, comp(173, 32));  // fremsaga_map:thok_toughguyicon
    } else {
        IF_SETHIDE(true, comp(173, 14));  // fremsaga_map:thok_toughguy
        IF_SETHIDE(true, comp(173, 32));  // fremsaga_map:thok_toughguyicon
    };
    script4653();
    return;
}