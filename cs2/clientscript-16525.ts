//
function script16525(): void {
    var int0 = 0;
    var int1 = 0;
    var int2 = 4;
    var int3 = 18647 as graphic;
    CC_DELETEALL(comp(970, 24));
    while ((int0 < 2)) {
        int2 = (3 + (int0 * 60));
        if ((int0 < varbitplayer_51243)) {
            int3 = 18648 as graphic;
            script2994(comp(970, 24), int1++, int2, 2, 0, 2, 55, 42, 0, 0, 18646 as graphic);
        } else {
            int3 = 18647 as graphic;
        };
        script2994(comp(970, 24), int1++, int2, 0, 0, 2, 54, 55, 0, 0, int3);
        int0 = (int0 + 1);
    };
    script3536(`For every 2 bonus eggs opened, you will receive a guaranteed reward.<br>You have currently opened ${inttostring(varbitplayer_51243, 10)}/${inttostring(2, 10)} bonus eggs for your next reward.`, comp(970, 27), -1);
    return;
}