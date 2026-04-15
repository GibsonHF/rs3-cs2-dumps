//
function script19957(): void {
    var int0 = 0;
    if ((IF_FIND(comp(970, 35)) == 1)) {
        CC_DELETEALL(comp(970, 35));
        script2994(comp(970, 35), int0++, 0, 10, 1, 0, 478, 38, 0, 0, script235(34943 as graphic, 34944 as graphic, 34945 as graphic, 34946 as graphic));
        script2995(comp(970, 35), int0++, 0, 70, 1, 2, 566, 55, 0, 0, -1 as dbrow, "");
        CC_SETTEXTFONT(207 as fontmetrics);
        CC_SETCOLOUR(16777215);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETTEXT("Every 6 keys, you will receive a <col=DE7FE1>Mystery Egg</col>. These can be opened for additional rewards such as the <col=FF6600>Carrot Outfit</col> & the rare <col=FFFF00>Solid Gold Easter Egg</col>!");
        script17949(comp(970, 35), int0++, -280, -40, 1, 1, 150, 150, 0, 0, 58755 as obj, 1);
        script17949(comp(970, 35), int0++, 320, -50, 1, 1, 50, 50, 0, 0, 58756 as obj, 1);
        script17949(comp(970, 35), int0++, 340, -5, 1, 1, 80, 80, 0, 0, 58756 as obj, 1);
        script17949(comp(970, 35), int0++, 280, -25, 1, 1, 100, 100, 0, 0, 58756 as obj, 1);
        script2997(comp(970, 35), int0++, 150, 55, 1, 1, 32, 32, 0, 0);
        CC_SETNPCMODEL(31806 as npc);
        CC_SETMODELANGLE(0, 0, 100, 300, 0, 650);
        CC_SETMODELANIM(35453 as seq);
        script2997(comp(970, 35), int0++, 0, 35, 1, 1, 32, 32, 0, 0);
        CC_SETNPCMODEL(31806 as npc);
        CC_SETMODELANGLE(0, 0, 100, 100, 0, 650);
        CC_SETMODELANIM(36340 as seq);
        script2997(comp(970, 35), int0++, -160, 50, 1, 1, 32, 32, 0, 0);
        CC_SETNPCMODEL(31806 as npc);
        CC_SETMODELANGLE(0, 0, 100, 100, 0, 650);
        CC_SETMODELANIM(36336 as seq);
        script7852(comp(970, 35), int0++, 0, 20, 1, 2, 200, 32, 0, 0, 17062 as dbrow, "Play Now");
        CC_SETONOP(callback(script16367, 8, 0));
        CC_SETOP(1, "Play Now");
    };
    return;
}