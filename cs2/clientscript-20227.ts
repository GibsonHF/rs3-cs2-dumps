//
function script20227(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number): void {
    var int6 = 4;
    var int7 = 0;
    [int7, int6] = script19613(0, int7, int6, int2, "Nominate <col=FFFFFF>ANOTHER</col> account to receive your League rewards.");
    CC_SETTEXTALIGN(1, 1, 0);
    [int7, int6] = script19615(0, int7, int6, int2, "Play Leagues on this account, but transfer any rewards to your nominated account instead.");
    if ((int3 == 1)) {
        [int7, int6] = script19617(0, int7, int6, int2, 0, "Enables playing Leagues and RuneScape at the same time.");
        [int7, int6] = script19617(0, int7, int6, int2, 0, "A nominated account will <col=FFFFFF>ONLY</col> import the <col=FFFFFF>highest</col> points total if <col=FFFFFF>nominated by multiple accounts</col>.");
        [int7, int6] = script19617(0, int7, int6, int2, 1, "If accounts A, B, and C earn 10k, 20k, and 30k points respectively, you may import the maximum of 30k, rather than the total of 60k.");
        [int7, int6] = script19617(0, int7, int6, int2, 1, "Rewards may <col=FFFFFF>ONLY</col> be imported by the nominated account.");
    };
    script19620(int0, int1, int6, -1, -1, 0, int4, int5);
    return;
}