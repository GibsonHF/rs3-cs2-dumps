//
function script17096(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = IF_GETWIDTH(comp(1626, 74));  // death:info_scrolling
    var string0 = `${inttostring(PUSH_CONSTANT_INT[16]("<col=", script10495(4)))}>`;
    if ((varbitplayer_1675 == 2)) {
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17099(int1, int2, "Safe Area");
        if ((STRING_LENGTH(varclient_2368) > 0)) {
            stack(int0);
            int0 = (int0 + 1);
            int1 = script17100(int1, int2, varclient_2368);
        } else {
            stack(int0);
            int0 = (int0 + 1);
            int1 = script17100(int1, int2, "You are currently in a safe area. Upon death, you will keep all of your items.");
        };
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17100(int1, int2, "<br>If you leave the safe area, the normal rules below will apply.");
    };
    if ((script10628() == 1)) {
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17099(int1, int2, "Hardcore Ironman");
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17100(int1, int2, "As a Hardcore Ironman, special rules apply.");
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17098(int1, int2, 0, `You have used ${inttostring(varbitplayer_25402, 10)} lives.`);
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17098(int1, int2, 0, `You have unlocked ${inttostring(varbitplayer_25403, 10)} lives.`);
        if ((varbitplayer_25403 < 2)) {
            stack(int0);
            int0 = (int0 + 1);
            int1 = script17100(int1, int2, "Additional lives can be purchased from Mr Ex:");
            if ((varbitplayer_25403 <= 0)) {
                stack(int0);
                int0 = (int0 + 1);
                int1 = script17098(int1, int2, 0, "100,000 coins after skill total 1,000.");
            };
            if ((varbitplayer_25403 <= 1)) {
                stack(int0);
                int0 = (int0 + 1);
                int1 = script17098(int1, int2, 0, "10,000,000 coins after skill total 1,600.");
            };
        };
        stack(int0);
        int0 = (int0 + 1);
        int1 = script17100(int1, int2, "Once your last life is used up you will convert to a regular Ironman.");
    };
    var int3 = script12796();
    var int4 = int3;
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17099(int1, int2, "Reclaim Fee");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, `Each item costs ${string0}0.1%</col> of its price to reclaim, with a minimum of ${string0}${inttostring(100, 10)}</col> coins per stack. The ${string0}base reclaim cost</col> is the total of all ${string0}saved items</col>. This can be reduced via:`);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, `Gravestones: Father Aereck in Lumbridge can upgrade your gravestone after ${string0}The Restless Ghost</col> quest.`);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, "Death's Deal: Purchased at Death's store to reduce the cost of one death by 50%.");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, "You may also attempt to return to the location of your death to reclaim your items from your gravestone.");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17099(int1, int2, "Overflow Storage");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, `If Death is holding your items when you die and lose items, Death will move them into overflow storage.<br>They will cost ${string0}${inttostring(10, 10)} times</col> the normal cost to reclaim.`);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, `If the overflow storage also becomes full, expensive items Death is holding will replace cheaper items in storage. Replaced items are ${string0}lost forever</col>.`);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17099(int1, int2, "Item Protection");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, `Normally you will protect ${string0}three</col> items on death.`);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, "Normal death: Protected items are free to reclaim.");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, "Dangerous PvP: Protected items are kept and all others are dropped.");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17099((int1 + 5), int2, "Boosting Protection");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, "Protection can be boosted to a maximum of five items. Each effect can boost protection by one.<br>");
    [int0, int1, int3] = script17097(int0, int1, int2, string0, int3, 0, 16771, "These effects are available on all worlds:");
    [int0, int1, int3] = script17097(int0, int1, int2, string0, int3, 0, 16772, "These effects are available only in members' worlds:");
    [int0, int1, int3] = script17097(int0, int1, int2, string0, int3, 0, 16773, "These effects are available only in members' worlds, and do not work in dangerous situations:");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17101(int1, int2, 16, 36, 16776, 16777, 16778);
    if ((int3 != int4)) {
        if ((script12795() == 2)) {
            stack(int0);
            int0 = (int0 + 1);
            int1 = script17100(int1, int2, "<col=00ff00>[ACTIVE]</col> effects would be used if they are still active upon death.<br><col=EED202>[BACKUP]</col> effects would be used if a previous effect was deactivated.");
        } else {
            stack(int0);
            int0 = (int0 + 1);
            int1 = script17100(int1, int2, "<col=00ff00>[ACTIVE]</col> effects were active when you died.");
        };
    };
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17099((int1 + 5), int2, "Dangerous Situations");
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17100(int1, int2, `In dangerous areas, you protect ${string0}zero</col> items before boosts are applied, and your items will not be saved.<br>Dangerous areas include:`);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, script17104(1));
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17101(int1, int2, 16, 25, 16774, 16775, -1);
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, script17104(2));
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, script17104(3));
    stack(int0);
    int0 = (int0 + 1);
    int1 = script17098(int1, int2, 0, script17104(4));
    IF_SETSCROLLSIZE(0, int1, comp(1626, 74));  // death:info_scrolling
    script7791(106561611, 106561610);
    return;
}