//
function script3648(int0: number): void {
    var int1 = script3609();
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = dbrow_getfield(int1, 299344, 0);
    var int3 = 0;
    if ((int0 >= int2)) {
        var int0 = (int2 - 1);
    };
    if ((int0 == (int2 - 1))) {
        int3 = 1;
    };
    varclient_6743 = int0;
    IF_SETONVARTRANSMIT(callback(script3640, int0, 0, 9083, 9084, 2), comp(634, 4));
    var int4 = 0;
    var int5 = DB_GETFIELDCOUNT(int1, 299312);
    var int6 = dbrow_getfield(int1, 299472, 0);
    var string0 = "A";
    if ((int6 == 1)) {
        if ((int3 == 1)) {
            IF_SETGRAPHIC(21199 as graphic, comp(634, 76));
            IF_SETTEXT("¶", comp(634, 113));
            IF_SETTEXT("Complete the task to get the rewards!<br>This task can be repeated until the event ends.", comp(634, 77));
            IF_SETHIDE(true, comp(634, 109));
            string0 = "";
        } else {
            IF_SETGRAPHIC(11423 as graphic, comp(634, 76));
            IF_SETTEXT(inttostring((int0 + 1), 10), comp(634, 113));
            IF_SETTEXT("Complete either task to get the rewards!", comp(634, 77));
            IF_SETHIDE(false, comp(634, 109));
        };
    } else {
        IF_SETGRAPHIC(11423 as graphic, comp(634, 76));
        IF_SETTEXT(inttostring((int0 + 1), 10), comp(634, 113));
        IF_SETTEXT("Complete either task to get the rewards!", comp(634, 77));
        IF_SETHIDE(false, comp(634, 109));
    };
    CC_DELETEALL(comp(634, 58));
    var int7 = 0;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = -1;
    var int12 = 0;
    var int13 = 0;
    var int14 = -1;
    var int15 = -1;
    var string1 = "";
    IF_SETHIDE(true, comp(634, 65));
    IF_SETHIDE(false, comp(634, 64));
    IF_SETHIDE(true, comp(634, 72));
    IF_SETHIDE(false, comp(634, 71));
    script3536("Premier reward", 41549915, -1);
    if (((varclient_6742 == -1) || (int0 != varplayer_9078))) {
        if ((varclient_6742 != -1)) {
            script3664();
        };
        script9033();
    } else {
        script3664();
        script9034();
    };
    script15071(int0);
    IF_SETONVARTRANSMIT(callback(script15070, int0, 6901, 6902, 1269, 8738, 8739, 5), comp(634, 3));
    script3780(41549930);
    if ((int0 == varplayer_9078)) {
        IF_SETHIDE(false, comp(634, 103));
        IF_SETHIDE(false, comp(634, 101));
        IF_SETCOLOUR(16777215, comp(634, 65));
        IF_SETCOLOUR(16777215, comp(634, 64));
        IF_SETCOLOUR(16777215, comp(634, 72));
        IF_SETCOLOUR(16777215, comp(634, 71));
        if ((varclient_6742 == 0)) {
            IF_SETHIDE(true, comp(634, 65));
            IF_SETHIDE(false, comp(634, 64));
        };
        if ((varclient_6742 == 1)) {
            IF_SETHIDE(true, comp(634, 72));
            IF_SETHIDE(false, comp(634, 71));
        };
        script3647(int0, varplayer_9064, string0, script3605(0), script3603(0), script3606(0, 0), script3606(0, 1), 41549887, 41549918, 41549886, 41549917, 41549920, 0);
        script3650(41549883, 41549882, varclient_6742);
        script3647(int0, varplayer_9071, "B", script3605(1), script3603(1), script3606(1, 0), script3606(1, 1), 41549893, 41549922, 41549894, 41549921, 41549924, 1);
    } else {
        IF_SETHIDE(true, comp(634, 103));
        IF_SETHIDE(true, comp(634, 101));
        IF_SETCOLOUR(6710886, comp(634, 65));
        IF_SETCOLOUR(6710886, comp(634, 64));
        IF_SETCOLOUR(6710886, comp(634, 72));
        IF_SETCOLOUR(6710886, comp(634, 71));
        varclient_6742 = -1;
        while ((int7 < 2)) {
            if ((int4 < int5)) {
                [int9, int10, int11, int12, int13] = script3656(int0, int4);
                if ((((int9 == int0) && (int11 != -1)) && (AND(int10, varplayer_9062) != 0))) {
                    switch (int7) {
                        case 0: {
                            script3647(int0, int11, string0, 1, 1, -1, -1, 41549887, 41549918, 41549886, 41549917, 41549920, 0);
                            break;
                        }
                        case 1: {
                            script3647(int0, int11, "B", 1, 1, -1, -1, 41549893, 41549922, 41549894, 41549921, 41549924, 1);
                            break;
                        }
                    };
                    int7 = (int7 + 1);
                };
                int4 = (int4 + 1);
            };
            script3645(int0, 0, 41549905, 41549906, 41549910, 41549912, 41549908, 41549909, 0, 41549911, 0);
            return;
        };
    };
    script3645(int0, 0, 41549905, 41549906, 41549910, 41549912, 41549908, 41549909, 0, 41549911, 0);
    return;
}