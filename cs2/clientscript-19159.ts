//
function script19159(): void {
    IF_SETHIDE(false, comp(1288, 0));  // trh_academy_shared_overlay:splash_screen
    IF_SETHIDE(true, comp(1288, 1));  // trh_academy_shared_overlay:universe
    IF_SETNPCMODEL(29797 as npc, comp(1288, 127));  // trh_academy_shared_overlay:npc_model_1
    IF_SETMODELANGLE(0, 0, 100, 1947, 0, 650, comp(1288, 127));  // trh_academy_shared_overlay:npc_model_1
    script12114(35079, 84410495, 128273, 35275, 84410496);
    IF_SETNPCMODEL(29798 as npc, comp(1288, 133));  // trh_academy_shared_overlay:npc_model_2
    IF_SETMODELANGLE(0, 0, 100, 300, 0, 650, comp(1288, 133));  // trh_academy_shared_overlay:npc_model_2
    IF_SETMODELANGLE(0, 0, 100, 300, 0, 650, comp(1288, 134));  // trh_academy_shared_overlay:npc_spotanim_model_2_1
    script12114(35842, 84410501, 133250, 35845, 84410502);
    IF_SETNPCMODEL(29799 as npc, comp(1288, 141));  // trh_academy_shared_overlay:npc_model_3
    IF_SETMODELANGLE(0, 0, 100, 100, 0, 650, comp(1288, 141));  // trh_academy_shared_overlay:npc_model_3
    script12114(18165, 84410509, 126258, 35078, 84410510);
    if ((script18534() == 1)) {
        script18548();
        return;
    };
    script15492(84410520, "Defeat Zamorak's Minions to gain Tokens of Heroes.<br>These can be exchanged for unique ability overrides!");
    script15492(84410497, "Ice Barricade");
    script15492(84410505, "Corrupted Combust");
    script15492(84410511, "Champion's Hurricane");
    return;
}