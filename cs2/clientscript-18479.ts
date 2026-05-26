//
function script18479(): void {
    SOUND_VORBIS_VOLUME(36961, 1, 0, 180);
    switch (MAP_LANG()) {
        case 0: {
            stack(35446);
            stack(70909966);
            IF_SETGRAPHIC();
            break;
        }
        case 1: {
            stack(35449);
            stack(70909966);
            IF_SETGRAPHIC();
            break;
        }
        case 2: {
            stack(35447);
            stack(70909966);
            IF_SETGRAPHIC();
            break;
        }
        case 3: {
            stack(35448);
            stack(70909966);
            IF_SETGRAPHIC();
            break;
        }
    };
    var int0 = script1626(1, 0);
    var int1 = script1626(2, 0);
    var int2 = dbrow_getfield(int0, 983136, 0);
    var int3 = dbrow_getfield(int1, 983136, 0);
    var int4 = dbrow_getfield(int0, 983168, 0);
    var int5 = dbrow_getfield(int1, 983168, 0);
    var string0 = dbrow_getfield(int0, 983040, 0);
    var string1 = dbrow_getfield(int1, 983040, 0);
    var int6 = script1626(1, 1);
    var int7 = script1626(2, 1);
    var int8 = dbrow_getfield(int6, 983136, 0);
    var int9 = dbrow_getfield(int7, 983136, 0);
    var int10 = dbrow_getfield(int6, 983168, 0);
    var int11 = dbrow_getfield(int7, 983168, 0);
    var string2 = dbrow_getfield(int6, 983040, 0);
    var string3 = dbrow_getfield(int7, 983040, 0);
    var int12 = -1;
    var int13 = -1;
    var int14 = -1 as seq;
    var int15 = -1 as seq;
    var int16 = script20102();
    var int17 = script20103();
    [int12, int13, int14, int15] = script10516();
    IF_SETNPCMODEL(-1 as npc, 70910096);
    IF_SETNPCMODEL(-1 as npc, 70909978);
    IF_SETNPCMODEL(-1 as npc, 70910089);
    IF_SETNPCMODEL(-1 as npc, 70910087);
    IF_SETNPCMODEL(int2, 70910096);
    IF_SETNPCMODEL(int3, 70909978);
    IF_SETMODELANGLE(0, -37, 0, 1800, 0, 550, 70910096);
    IF_SETMODELANGLE(0, -37, 0, -1800, 0, 550, 70909978);
    IF_SETMODELANIM(int4, 70910096);
    IF_SETMODELANIM(int5, 70909978);
    IF_SETMODELANIM(int14, 70910088);
    IF_SETMODELANIM(int15, 70910086);
    IF_SETNPCMODEL(int2, 70910089);
    IF_SETNPCMODEL(int3, 70910087);
    IF_SETMODELANIM(int4, 70910089);
    IF_SETMODELANIM(int5, 70910087);
    IF_SETMODELANGLE(0, -37, 0, 1800, 0, 575, 70910089);
    IF_SETMODELANGLE(0, -37, 0, -1800, 0, 575, 70910087);
    IF_SETNPCMODEL(int8, 70909969);
    IF_SETNPCMODEL(int9, 70909970);
    IF_SETMODELANGLE(0, 0, 0, -450, 0, int16, 70909969);
    IF_SETMODELANGLE(0, 0, 0, 500, 0, int17, 70909970);
    IF_SETMODELANIM(int10, 70909969);
    IF_SETMODELANIM(int11, 70909970);
    IF_SETNPCMODEL(28986 as npc, 70910126);
    IF_SETMODELANIM(35252 as seq, 70910126);
    IF_SETNPCMODEL(32240 as npc, 70910128);
    IF_SETMODELANIM(36132 as seq, 70910128);
    IF_SETNPCMODEL(31116 as npc, 70910130);
    IF_SETMODELANIM(18015 as seq, 70910130);
    IF_SETNPCMODEL(28983 as npc, 70910132);
    IF_SETMODELANIM(17970 as seq, 70910132);
    IF_SETNPCMODEL(29661 as npc, 70910134);
    IF_SETMODELANIM(17970 as seq, 70910134);
    IF_SETNPCMODEL(31119 as npc, 70910136);
    IF_SETMODELANIM(36061 as seq, 70910136);
    IF_SETMODEL(137989, 70910138);
    IF_SETMODEL(137991, 70910139);
    IF_SETTEXT(`Attack the <col=FFFF00>${string0}</col> for a <col=FFFF00>Rarity Bonus!</col>`, 70910098);
    IF_SETTEXT(`Attack the <col=FFFF00>${string1}</col> for a <col=FF00>Multiplier Bonus!</col>`, 70909983);
    IF_SETTEXT("Defeat the fighters to get <col=FFFF00>Sigils</col> which can be exchanged for <col=FFFF00>pirate themed cosmetics</col>!", 70910090);
    if ((script6953() == 13837)) {
        IF_SETTEXT("Unlock all Solite or Lunite pieces to unlock a <col=FFFF00>bonus weapon or shield for FREE!</col> Inquisitor armour is not required for bonus rewards.", 70910091);
    } else {
        IF_SETTEXT("Unlock all outfit pieces and weapons in a set to unlock a <col=FFFF00>bonus reward for FREE!</col>", 70910091);
    };
    IF_SETTEXT(`<col=FFFF00>${string2}</col> and <col=FFFF00>${string3}</col> have a chance to spawn which will provide <col=FFFF00>greater prize modifiers</col> while they are active!<br>Bosses give <col=FFFF00>2x Sigils</col> when defeated.`, 70910092);
    IF_SETTEXT("During Final Showdown, <col=FFFF00>all previous showdown cosmetics are available</col> via the Showdown Store!", 70910140);
    script11163(5);
    return;
}