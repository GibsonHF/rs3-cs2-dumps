//
function script4648(): void {
    IF_SETHIDE(true, comp(173, 1));  // fremsaga_map:signature_map
    IF_SETHIDE(true, comp(173, 3));  // fremsaga_map:thok_maps
    IF_SETHIDE(false, comp(173, 2));  // fremsaga_map:vengeance
    IF_SETHIDE(false, comp(173, 42));  // fremsaga_map:veng_start
    IF_SETHIDE(false, comp(173, 58));  // fremsaga_map:veng_startstairs
    if ((TESTBIT(varplayer_1554, 1) == 1)) {
        IF_SETHIDE(false, comp(173, 43));  // fremsaga_map:veng_1
    } else {
        IF_SETHIDE(true, comp(173, 43));  // fremsaga_map:veng_1
    };
    if ((TESTBIT(varplayer_1554, 2) == 1)) {
        IF_SETHIDE(false, comp(173, 44));  // fremsaga_map:veng_lotheria
    } else {
        IF_SETHIDE(true, comp(173, 44));  // fremsaga_map:veng_lotheria
    };
    if ((TESTBIT(varplayer_1554, 3) == 1)) {
        IF_SETHIDE(false, comp(173, 45));  // fremsaga_map:veng_2
    } else {
        IF_SETHIDE(true, comp(173, 45));  // fremsaga_map:veng_2
    };
    if ((TESTBIT(varplayer_1554, 4) == 1)) {
        IF_SETHIDE(false, comp(173, 46));  // fremsaga_map:veng_ican
    } else {
        IF_SETHIDE(true, comp(173, 46));  // fremsaga_map:veng_ican
    };
    if ((TESTBIT(varplayer_1554, 5) == 1)) {
        IF_SETHIDE(false, comp(173, 47));  // fremsaga_map:veng_hellhounds
    } else {
        IF_SETHIDE(true, comp(173, 47));  // fremsaga_map:veng_hellhounds
    };
    if ((TESTBIT(varplayer_1554, 6) == 1)) {
        IF_SETHIDE(false, comp(173, 48));  // fremsaga_map:veng_argax
    } else {
        IF_SETHIDE(true, comp(173, 48));  // fremsaga_map:veng_argax
    };
    if ((TESTBIT(varplayer_1554, 7) == 1)) {
        IF_SETHIDE(false, comp(173, 49));  // fremsaga_map:veng_empty
    } else {
        IF_SETHIDE(true, comp(173, 49));  // fremsaga_map:veng_empty
    };
    if ((TESTBIT(varplayer_1554, 8) == 1)) {
        IF_SETHIDE(false, comp(173, 51));  // fremsaga_map:veng_spidersandhellhound
    } else {
        IF_SETHIDE(true, comp(173, 51));  // fremsaga_map:veng_spidersandhellhound
    };
    if ((TESTBIT(varplayer_1554, 9) == 1)) {
        IF_SETHIDE(false, comp(173, 50));  // fremsaga_map:veng_levers
    } else {
        IF_SETHIDE(true, comp(173, 50));  // fremsaga_map:veng_levers
    };
    if ((TESTBIT(varplayer_1554, 10) == 1)) {
        IF_SETHIDE(false, comp(173, 52));  // fremsaga_map:veng_korel
    } else {
        IF_SETHIDE(true, comp(173, 52));  // fremsaga_map:veng_korel
    };
    if ((TESTBIT(varplayer_1554, 11) == 1)) {
        IF_SETHIDE(false, comp(173, 56));  // fremsaga_map:veng_lola_1
    } else {
        IF_SETHIDE(true, comp(173, 56));  // fremsaga_map:veng_lola_1
    };
    if ((TESTBIT(varplayer_1554, 12) == 1)) {
        IF_SETHIDE(false, comp(173, 55));  // fremsaga_map:veng_lola_2
    } else {
        IF_SETHIDE(true, comp(173, 55));  // fremsaga_map:veng_lola_2
    };
    if ((TESTBIT(varplayer_1554, 13) == 1)) {
        IF_SETHIDE(false, comp(173, 54));  // fremsaga_map:veng_lola_3
    } else {
        IF_SETHIDE(true, comp(173, 54));  // fremsaga_map:veng_lola_3
    };
    if ((TESTBIT(varplayer_1554, 14) == 1)) {
        IF_SETHIDE(false, comp(173, 53));  // fremsaga_map:veng_lola_4
    } else {
        IF_SETHIDE(true, comp(173, 53));  // fremsaga_map:veng_lola_4
    };
    if ((TESTBIT(varplayer_1554, 15) == 1)) {
        IF_SETHIDE(false, comp(173, 60));  // fremsaga_map:veng_corpse
    } else {
        IF_SETHIDE(true, comp(173, 60));  // fremsaga_map:veng_corpse
    };
    if ((TESTBIT(varplayer_1554, 16) == 1)) {
        IF_SETHIDE(false, comp(173, 57));  // fremsaga_map:veng_boss
        IF_SETHIDE(false, comp(173, 59));  // fremsaga_map:veng_bossmark
    } else {
        IF_SETHIDE(true, comp(173, 57));  // fremsaga_map:veng_boss
        IF_SETHIDE(true, comp(173, 59));  // fremsaga_map:veng_bossmark
    };
    script4653();
    return;
}