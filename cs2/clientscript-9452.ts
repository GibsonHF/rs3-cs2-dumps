//
function script9452(int0: int): void {
    var int1 = comp(-1, 65535);
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = -1;
    var int7 = -1;
    var int8 = -1;
    var int9 = comp(-1, 65535);
    var int10 = 0;
    var int11 = 0;
    switch (int0) {
        case 2: {
            int1 = comp(747, 23);
            int2 = comp(747, 81);
            int3 = comp(747, 93);
            int4 = comp(747, 105);
            int5 = comp(747, 220);
            int6 = 48955611;
            int8 = 48955404;
            int10 = varbitplayer_21083;
            int11 = varclient_3868;
            int9 = comp(747, 74);
            break;
        }
        case 0: {
            int1 = comp(747, 21);
            int2 = comp(747, 123);
            int3 = comp(747, 135);
            int4 = comp(747, 147);
            int5 = comp(747, 216);
            int6 = 48955607;
            int8 = 48955406;
            int10 = varbitplayer_21084;
            int11 = varclient_3869;
            int9 = comp(747, 116);
            break;
        }
        case 1: {
            int1 = comp(747, 15);
            int2 = comp(747, 167);
            int3 = comp(747, 179);
            int4 = comp(747, 191);
            int5 = comp(747, 20);
            int6 = 48955411;
            int8 = 48955405;
            int10 = varbitplayer_21085;
            int11 = varclient_3870;
            int9 = comp(747, 160);
            break;
        }
        case 3: {
            int1 = comp(747, 25);
            int2 = comp(747, 39);
            int3 = comp(747, 51);
            int4 = comp(747, 63);
            int5 = comp(747, 224);
            int6 = 48955615;
            int8 = 48955403;
            int10 = varbitplayer_21086;
            int11 = varclient_3871;
            int9 = comp(747, 32);
            break;
        }
    };
    IF_SETHIDE(false, int1);
    IF_SETHIDE(true, int9);
    script9453(int8);
    script9463(int2, int4, int3, int10);
    script9462(int5, int6, int0, int11);
    return;
}