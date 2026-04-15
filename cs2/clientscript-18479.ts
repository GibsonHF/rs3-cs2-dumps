//
function script18479(): void {
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 180);
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
    var int12 = -1 as npc;
    var int13 = -1 as npc;
    var int14 = -1 as seq;
    var int15 = -1 as seq;
    var int16 = script20102();
    var int17 = script20103();
    [int12, int13, int14, int15] = script10516();
    IF_SETNPCMODEL(-1 as npc, comp(1082, 144));
    IF_SETNPCMODEL(-1 as npc, comp(1082, 26));
    IF_SETNPCMODEL(-1 as npc, comp(1082, 137));
    IF_SETNPCMODEL(-1 as npc, comp(1082, 135));
    IF_SETNPCMODEL(int2, comp(1082, 144));
    IF_SETNPCMODEL(int3, comp(1082, 26));
    IF_SETMODELANGLE(0, -37, 0, 1800, 0, 550, comp(1082, 144));
    IF_SETMODELANGLE(0, -37, 0, -1800, 0, 550, comp(1082, 26));
    IF_SETMODELANIM(int4, comp(1082, 144));
    IF_SETMODELANIM(int5, comp(1082, 26));
    IF_SETMODELANIM(int14, comp(1082, 136));
    IF_SETMODELANIM(int15, comp(1082, 134));
    IF_SETNPCMODEL(int2, comp(1082, 137));
    IF_SETNPCMODEL(int3, comp(1082, 135));
    IF_SETMODELANIM(int4, comp(1082, 137));
    IF_SETMODELANIM(int5, comp(1082, 135));
    IF_SETMODELANGLE(0, -37, 0, 1800, 0, 575, comp(1082, 137));
    IF_SETMODELANGLE(0, -37, 0, -1800, 0, 575, comp(1082, 135));
    IF_SETNPCMODEL(int8, comp(1082, 17));
    IF_SETNPCMODEL(int9, comp(1082, 18));
    IF_SETMODELANGLE(0, 0, 0, -450, 0, int16, comp(1082, 17));
    IF_SETMODELANGLE(0, 0, 0, 500, 0, int17, comp(1082, 18));
    IF_SETMODELANIM(int10, comp(1082, 17));
    IF_SETMODELANIM(int11, comp(1082, 18));
    IF_SETNPCMODEL(28986 as npc, comp(1082, 174));
    IF_SETMODELANIM(35252 as seq, comp(1082, 174));
    IF_SETNPCMODEL(32240 as npc, comp(1082, 176));
    IF_SETMODELANIM(36132 as seq, comp(1082, 176));
    IF_SETNPCMODEL(31116 as npc, comp(1082, 178));
    IF_SETMODELANIM(18015 as seq, comp(1082, 178));
    IF_SETNPCMODEL(28983 as npc, comp(1082, 180));
    IF_SETMODELANIM(17970 as seq, comp(1082, 180));
    IF_SETNPCMODEL(29661 as npc, comp(1082, 182));
    IF_SETMODELANIM(17970 as seq, comp(1082, 182));
    IF_SETNPCMODEL(31119 as npc, comp(1082, 184));
    IF_SETMODELANIM(36061 as seq, comp(1082, 184));
    IF_SETMODEL(137989 as model, comp(1082, 186));
    IF_SETMODEL(137991 as model, comp(1082, 187));
    IF_SETTEXT(`Attack the <col=FFFF00>${string0}</col> for a <col=FFFF00>Rarity Bonus!</col>`, comp(1082, 146));
    IF_SETTEXT(`Attack the <col=FFFF00>${string1}</col> for a <col=FF00>Multiplier Bonus!</col>`, comp(1082, 31));
    IF_SETTEXT("Defeat the fighters to get <col=FFFF00>Sigils</col> which can be exchanged for <col=FFFF00>pirate themed cosmetics</col>!", comp(1082, 138));
    if ((script6953() == 13837 as dbrow)) {
        IF_SETTEXT("Unlock all Solite or Lunite pieces to unlock a <col=FFFF00>bonus weapon or shield for FREE!</col> Inquisitor armour is not required for bonus rewards.", comp(1082, 139));
    } else {
        IF_SETTEXT("Unlock all outfit pieces and weapons in a set to unlock a <col=FFFF00>bonus reward for FREE!</col>", comp(1082, 139));
    };
    IF_SETTEXT(`<col=FFFF00>${string2}</col> and <col=FFFF00>${string3}</col> have a chance to spawn which will provide <col=FFFF00>greater prize modifiers</col> while they are active!<br>Bosses give <col=FFFF00>2x Sigils</col> when defeated.`, comp(1082, 140));
    IF_SETTEXT("During Final Showdown, <col=FFFF00>all previous showdown cosmetics are available</col> via the Showdown Store!", comp(1082, 188));
    script11163(5);
    return;
}