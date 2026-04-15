//
function script4528(): void {
    IF_SETHIDE(false, comp(959, 0));
    IF_SETHIDE(true, comp(959, 3));
    IF_SETHIDE(true, comp(1253, 8));
    var int0 = 32498 as graphic;
    switch (MAP_LANG()) {
        case 0: {
            int0 = 32498 as graphic;
            break;
        }
        case 1: {
            int0 = 32499 as graphic;
            break;
        }
        case 2: {
            int0 = 32500 as graphic;
            break;
        }
        case 3: {
            int0 = 32501 as graphic;
            break;
        }
    };
    script2994(comp(959, 0), 0, 0, 15, 1, 0, 478, 38, 0, 0, int0);
    script2995(comp(959, 0), 1, 0, 62, 1, 0, 692, 33, 0, 0, 8000 as dbrow, "The vault is open and there's a wealth of rewards on offer!");
    script2997(comp(959, 0), 2, -170, 130, 1, 1, 32, 32, 0, 0);
    CC_SETNPCMODEL(31879 as npc);
    CC_SETMODELANIM(36334 as seq);
    CC_SETMODELANGLE(0, -5, 0, 0, 0, 650);
    script2997(comp(959, 0), 3, -310, 130, 1, 1, 32, 32, 0, 0);
    CC_SETNPCMODEL(31880 as npc);
    CC_SETMODELANIM(35453 as seq);
    CC_SETMODELANGLE(0, -5, 0, 0, 0, 650);
    script2997(comp(959, 0), 4, -240, 125, 1, 1, 32, 32, 0, 0);
    CC_SETNPCMODEL(31882 as npc);
    CC_SETMODELANIM(34697 as seq);
    CC_SETMODELANGLE(0, -5, 0, 0, 0, 650);
    script2995(comp(959, 0), 5, -240, 145, 1, 1, 225, 33, 0, 0, 8000 as dbrow, "Win the new Gala Attire from Gem Chests.");
    script2997(comp(959, 0), 6, 0, 83, 1, 1, 32, 32, 0, 0);
    CC_SETNPCMODEL(31881 as npc);
    CC_SETMODELANIM(27114 as seq);
    CC_SETMODELANGLE(0, 10, 0, 0, 0, 600);
    script2995(comp(959, 0), 7, 0, 115, 1, 1, 225, 33, 0, 0, 8000 as dbrow, "Win all 3 Outfits to unlock the Moonstone Gala Attire.");
    script2994(comp(959, 0), 8, 240, 63, 1, 1, 128, 128, 0, 0, 33702 as graphic);
    script2995(comp(959, 0), 9, 240, 145, 1, 1, 225, 33, 0, 0, 8000 as dbrow, "Hydrix chests have a chance to contain<col=FF00> 1 Billion coins</col>.");
    return;
}