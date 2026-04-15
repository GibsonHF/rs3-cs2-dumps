//
function script9663(): string {
    var int0 = STAT_BASE(18 as stat);
    var int1 = 0;
    var int2 = 0;
    if ((int0 >= 35)) {
        return "Runes for 250 casts of Slayer Dart.";
    };
    if ((int0 < 5)) {
        int1 = 50;
        int2 = 450;
    } else if ((int0 < 15)) {
        int1 = 100;
        int2 = 525;
    } else if ((int0 < 25)) {
        int1 = 150;
        int2 = 600;
    } else if ((int0 < 35)) {
        int1 = 200;
        int2 = 675;
    };
    return `${inttostring(int1, 10)} death runes and ${inttostring(int2, 10)} air runes.`;
}