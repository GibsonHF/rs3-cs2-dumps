//
function script10993(int0: number): void {
    if ((varclient_2699 == int0)) {
        return;
    };
    var int1 = enum_getvalue(0, 9, 5960 as cs2enum, int0);
    var int2 = -1;
    if ((varclient_2699 != -1)) {
        int2 = enum_getvalue(0, 9, 5960, varclient_2699);
    };
    var int3 = enum_getvalue(0, 9, 5961, int0);
    var int4 = 0;
    while ((int4 < ENUM_GETOUTPUTCOUNT(5960 as cs2enum))) {
        if ((int4 == int0)) {
            script6465(varbitplayer_673, int4, 1);
        } else {
            script6465(varbitplayer_673, int4, 0);
        };
        int4 = (int4 + 1);
    };
    var int5 = 1;
    if ((int3 != comp(-1, 65535))) {
        SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 100);
        IF_SETHIDE(true, int3);
        script7494();
        script7491(int0, varbitplayer_678, 0, varclient_6786);
        int5 = 0;
        IF_SETHIDE(false, int3);
        if (((int2 != -1) && (CC_FIND(int2, 0) == 1))) {
            CC_SETGRAPHIC(19305 as graphic);
        };
        script6470(int3);
        varclient_2699 = int0;
        IF_SETSCROLLPOS(0, 0, comp(1311, 170));  // mtxmgt:list_contents
    };
    if ((varbitplayer_673 == 1)) {
        script6876(1);
    };
    if ((varbitplayer_673 == 2)) {
        script10653(0, int5);
        IF_SETHIDE(true, comp(1311, 27));  // mtxmgt:head_slot_active
        IF_SETHIDE(true, comp(1311, 31));  // mtxmgt:back_slot_active
        IF_SETHIDE(true, comp(1311, 35));  // mtxmgt:neck_slot_active
        IF_SETHIDE(true, comp(1311, 39));  // mtxmgt:mainhand_slot_active
        IF_SETHIDE(true, comp(1311, 43));  // mtxmgt:torso_slot_active
        IF_SETHIDE(true, comp(1311, 47));  // mtxmgt:offhand_slot_active
        IF_SETHIDE(true, comp(1311, 51));  // mtxmgt:legs_slot_active
        IF_SETHIDE(true, comp(1311, 55));  // mtxmgt:hands_slot_active
        IF_SETHIDE(true, comp(1311, 59));  // mtxmgt:feet_slot_active
        IF_SETHIDE(true, comp(1311, 67));  // mtxmgt:effects_slot_active
        IF_SETHIDE(true, comp(1311, 71));  // mtxmgt:wings_slot_active
        IF_SETHIDE(true, comp(1311, 86));  // mtxmgt:all_items_active
        IF_SETHIDE(true, comp(1311, 90));  // mtxmgt:keepsake_items_active
        IF_SETHIDE(true, comp(1311, 94));  // mtxmgt:clear_items_active
        IF_SETGRAPHIC(24451 as graphic, comp(1311, 28));  // mtxmgt:head_slot_icon
        IF_SETGRAPHIC(24453 as graphic, comp(1311, 32));  // mtxmgt:back_slot_icon
        IF_SETGRAPHIC(24455 as graphic, comp(1311, 36));  // mtxmgt:neck_slot_icon
        IF_SETGRAPHIC(24457 as graphic, comp(1311, 40));  // mtxmgt:mainhand_slot_icon
        IF_SETGRAPHIC(24459 as graphic, comp(1311, 44));  // mtxmgt:torso_slot_icon
        IF_SETGRAPHIC(24461 as graphic, comp(1311, 48));  // mtxmgt:offhand_slot_icon
        IF_SETGRAPHIC(24463 as graphic, comp(1311, 52));  // mtxmgt:legs_slot_icon
        IF_SETGRAPHIC(24465 as graphic, comp(1311, 56));  // mtxmgt:hands_slot_icon
        IF_SETGRAPHIC(24467 as graphic, comp(1311, 60));  // mtxmgt:feet_slot_icon
        IF_SETGRAPHIC(24469 as graphic, comp(1311, 68));  // mtxmgt:effects_slot_icon
        IF_SETGRAPHIC(24471 as graphic, comp(1311, 72));  // mtxmgt:wings_slot_icon
        IF_SETGRAPHIC(24473 as graphic, comp(1311, 87));  // mtxmgt:all_items_icon
        IF_SETGRAPHIC(24475 as graphic, comp(1311, 91));  // mtxmgt:keepsake_items_icon
        IF_SETGRAPHIC(24477 as graphic, comp(1311, 95));  // mtxmgt:clear_items_icon
        switch (varclient_2699) {
            case 0: {
                IF_SETGRAPHIC(24452 as graphic, comp(1311, 28));  // mtxmgt:head_slot_icon
                IF_SETHIDE(false, comp(1311, 27));  // mtxmgt:head_slot_active
                break;
            }
            case 1: {
                IF_SETGRAPHIC(24454 as graphic, comp(1311, 32));  // mtxmgt:back_slot_icon
                IF_SETHIDE(false, comp(1311, 31));  // mtxmgt:back_slot_active
                break;
            }
            case 2: {
                IF_SETGRAPHIC(24456 as graphic, comp(1311, 36));  // mtxmgt:neck_slot_icon
                IF_SETHIDE(false, comp(1311, 35));  // mtxmgt:neck_slot_active
                break;
            }
            case 3: {
                IF_SETGRAPHIC(24458 as graphic, comp(1311, 40));  // mtxmgt:mainhand_slot_icon
                IF_SETHIDE(false, comp(1311, 39));  // mtxmgt:mainhand_slot_active
                break;
            }
            case 4: {
                IF_SETGRAPHIC(24460 as graphic, comp(1311, 44));  // mtxmgt:torso_slot_icon
                IF_SETHIDE(false, comp(1311, 43));  // mtxmgt:torso_slot_active
                break;
            }
            case 5: {
                IF_SETGRAPHIC(24462 as graphic, comp(1311, 48));  // mtxmgt:offhand_slot_icon
                IF_SETHIDE(false, comp(1311, 47));  // mtxmgt:offhand_slot_active
                break;
            }
            case 7: {
                IF_SETGRAPHIC(24464 as graphic, comp(1311, 52));  // mtxmgt:legs_slot_icon
                IF_SETHIDE(false, comp(1311, 51));  // mtxmgt:legs_slot_active
                break;
            }
            case 9: {
                IF_SETGRAPHIC(24466 as graphic, comp(1311, 56));  // mtxmgt:hands_slot_icon
                IF_SETHIDE(false, comp(1311, 55));  // mtxmgt:hands_slot_active
                break;
            }
            case 10: {
                IF_SETGRAPHIC(24468 as graphic, comp(1311, 60));  // mtxmgt:feet_slot_icon
                IF_SETHIDE(false, comp(1311, 59));  // mtxmgt:feet_slot_active
                break;
            }
            case 14: {
                IF_SETGRAPHIC(24470 as graphic, comp(1311, 68));  // mtxmgt:effects_slot_icon
                IF_SETHIDE(false, comp(1311, 67));  // mtxmgt:effects_slot_active
                break;
            }
            case 18: {
                IF_SETGRAPHIC(24472 as graphic, comp(1311, 72));  // mtxmgt:wings_slot_icon
                IF_SETHIDE(false, comp(1311, 71));  // mtxmgt:wings_slot_active
                break;
            }
            case 20: {
                IF_SETGRAPHIC(24474 as graphic, comp(1311, 87));  // mtxmgt:all_items_icon
                IF_SETHIDE(false, comp(1311, 86));  // mtxmgt:all_items_active
                break;
            }
            case 19: {
                IF_SETGRAPHIC(24476 as graphic, comp(1311, 91));  // mtxmgt:keepsake_items_icon
                IF_SETHIDE(false, comp(1311, 90));  // mtxmgt:keepsake_items_active
                break;
            }
            case 21: {
                IF_SETGRAPHIC(24478 as graphic, comp(1311, 95));  // mtxmgt:clear_items_icon
                IF_SETHIDE(false, comp(1311, 94));  // mtxmgt:clear_items_active
                break;
            }
        };
        script6876(2);
    };
    return;
}