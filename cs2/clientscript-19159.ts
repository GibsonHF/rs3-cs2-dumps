//
function script19159(): void {
    IF_SETHIDE(0, 84410368);
    IF_SETHIDE(1, 84410369);
    IF_SETNPCMODEL(29797, 84410495);
    IF_SETMODELANGLE(0, 0, 100, 1947, 0, 650, 84410495);
    script12114(35079, 84410495, 128273, 35275, 84410496);
    IF_SETNPCMODEL(29798, 84410501);
    IF_SETMODELANGLE(0, 0, 100, 300, 0, 650, 84410501);
    IF_SETMODELANGLE(0, 0, 100, 300, 0, 650, 84410502);
    script12114(35842, 84410501, 133250, 35845, 84410502);
    IF_SETNPCMODEL(29799, 84410509);
    IF_SETMODELANGLE(0, 0, 100, 100, 0, 650, 84410509);
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