//
function script19159(): void {
    IF_SETHIDE(false, comp(1288, 0));
    IF_SETHIDE(true, comp(1288, 1));
    IF_SETNPCMODEL(29797 as npc, comp(1288, 127));
    IF_SETMODELANGLE(0, 0, 100, 1947, 0, 650, comp(1288, 127));
    script12114(35079 as seq, comp(1288, 127), 128273 as model, 35275 as seq, comp(1288, 128));
    IF_SETNPCMODEL(29798 as npc, comp(1288, 133));
    IF_SETMODELANGLE(0, 0, 100, 300, 0, 650, comp(1288, 133));
    IF_SETMODELANGLE(0, 0, 100, 300, 0, 650, comp(1288, 134));
    script12114(35842 as seq, comp(1288, 133), 133250 as model, 35845 as seq, comp(1288, 134));
    IF_SETNPCMODEL(29799 as npc, comp(1288, 141));
    IF_SETMODELANGLE(0, 0, 100, 100, 0, 650, comp(1288, 141));
    script12114(18165 as seq, comp(1288, 141), 126258 as model, 35078 as seq, comp(1288, 142));
    if ((script18534() == 1)) {
        script18548();
        return;
    };
    script15492(comp(1288, 152), "Defeat Zamorak's Minions to gain Tokens of Heroes.<br>These can be exchanged for unique ability overrides!");
    script15492(comp(1288, 129), "Ice Barricade");
    script15492(comp(1288, 137), "Corrupted Combust");
    script15492(comp(1288, 143), "Champion's Hurricane");
    return;
}