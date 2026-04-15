//
function script16523(): void {
    var int0 = -1;
    CC_DELETEALL(comp(1253, 556));
    while ((++int0 <= 30)) {
        CC_CREATE(comp(1253, 556), 5, int0);
    };
    IF_SETOPCURSOR(1, 46 as cursor, comp(970, 15));
    IF_SETOPBASE("Bonus Easter egg", comp(970, 15));
    script9525(comp(970, 90), 3, -1);
    script16527();
    script16663(7271 as dbrow, struct_getparam(22606, 5409), 1);
    IF_SETONVARTRANSMIT(callback(script16526, 10423, 10423, 10423, 10423, 10423, 10423, 10423, 10423, 8), comp(970, 0));
    script16525();
    IF_SETONVARTRANSMIT(callback(script16524, 10425, 10423, 2), 63569944);
    script3536(`For every 2 bonus eggs opened, you will receive a guaranteed reward.<br>You have currently opened ${inttostring(varbitplayer_51243, 10)}/${inttostring(2, 10)} bonus eggs for your next reward.`, 63569947, -1);
    script7160();
    script17283();
    script9525(67043409, 3, -1);
    script16663(6489, struct_getparam(39853, 5409), 1);
    if ((varbitplayer_51238 == 1)) {
        script16536();
    };
    return;
}