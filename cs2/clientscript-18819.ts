//
function script18819(): void {
    IF_SETHIDE(false, comp(488, 64));
    IF_SETHIDE(true, comp(488, 0));
    var int0 = 0;
    script2994(comp(488, 64), int0++, 0, 0, 1, 1, 0, 0, 1, 1, 33674 as graphic);
    script2996(comp(488, 64), int0++, 0, 0, 1, 1, 0, 0, 1, 1, -1 as dbrow);
    CC_SETCOLOUR(0);
    CC_SETFILL(1);
    CC_SETTRANS(100);
    var int1 = 18371 as seq;
    var int2 = 18446;
    script2997(comp(488, 64), int0++, -160, 50, 1, 1, 32, 32, 0, 0);
    CC_SETNPCMODEL(30885 as npc);
    CC_SETMODELANGLE(0, 0, 100, 300, 0, 650);
    CC_SETONTIMER(callback(script18820, -2147483645, -2147483643, (SEQLENGTH(int1) + 1), int1, int2));
    script2997(31981632, int0++, -160, 10, 1, 1, 32, 32, 0, 0);
    CC_SETMODEL(132944);
    CC_SETMODELANGLE(0, 0, 100, 300, 0, 900);
    script18821(31981632, (int0 - 2), int1, int2);
    script2994(31981632, int0++, 370, -25, 1, 1, 580, 200, 0, 0, 33864);
    CC_SETHFLIP(1);
    script2994(31981632, int0++, 0, -25, 1, 1, 175, 175, 0, 0, -1);
    CC_SETOBJECT_HIGHRES(53207);
    script2994(31981632, int0++, 0, 10, 1, 0, 372, 38, 0, 0, script235(33675, 33676, 33677, 33678));
    script2994(31981632, int0++, 0, 30, 1, 2, 566, 90, 0, 0, 26159);
    script2995(31981632, int0++, 0, 50, 1, 2, 566, 55, 0, 0, -1, "");
    CC_SETTEXTFONT(207);
    CC_SETCOLOUR(16777215);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETTEXT("Featuring the return of the <col=F0BE79>Rainbow Dragonbreath ability override</col>, the <col=FF0000>R<col=FF7F00>a<col=FFFF00>i<col=FF00>n<col=1B69E7>b<col=943FEE>o<col=B929ED>w</col> title and<br>the <col=F0BE79>Rainbow Trail aura override</col>!<br>Win it by opening the <col=F0BE79>Rainbow Chest</col>, or from the <col=F0BE79>Rainbow Bonus</col>.");
    script7852(31981632, int0++, 0, 20, 1, 2, 200, 32, 0, 0, 17062, "Play Now");
    CC_SETONOP(callback(script16367, 3, 0));
    CC_SETOP(1, "Play Now");
    script16198(0, 31981632);
    return;
}