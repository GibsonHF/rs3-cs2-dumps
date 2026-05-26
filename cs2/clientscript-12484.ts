//
function script12484(): void {
    CC_DELETEALL(115146783);
    CC_DELETEALL(115146786);
    CC_DELETEALL(115146789);
    CC_DELETEALL(115146792);
    CC_DELETEALL(115146782);
    CC_DELETEALL(115146785);
    CC_DELETEALL(115146788);
    CC_DELETEALL(115146791);
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(11211);
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as dbrow;
    var int9 = -1;
    var int10 = -1;
    var int11 = -1 as graphic;
    var int12 = -1 as graphic;
    var string0 = "";
    var string1 = "";
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 0, 11211 as cs2enum, int0);
        stack(36864);
        stack(int2);
        DB_FIND(0);
        dbrow_findnext();
        int8 = stack();
        if ((int8 != -1)) {
            int6 = dbrow_getfield(int8, 36880, 0);
            int7 = dbrow_getfield(int8, 37008, 0);
            string1 = dbrow_getfield(int8, 36896, 0);
            switch (int6) {
                case 1: {
                    [int9, int10] = [115146783, 115146782];
                    break;
                }
                case 2: {
                    [int9, int10] = [115146786, 115146785];
                    break;
                }
                case 3: {
                    [int9, int10] = [115146789, 115146788];
                    break;
                }
                case 4: {
                    [int9, int10] = [115146792, 115146791];
                    break;
                }
                default: {
                    return;
                }
            };
            if ((script12477() < int7)) {
                int11 = dbrow_getfield(int8, 36960, 0);
                if ((int11 == -1 as graphic)) {
                    int11 = 16608 as graphic;
                };
                int12 = 26605 as graphic;
                string0 = "You have not yet received enough details on this case.";
            } else if ((script12473(int2) == 0)) {
                int11 = dbrow_getfield(int8, 36960, 0);
                if ((int11 == -1 as graphic)) {
                    int11 = 16608 as graphic;
                };
                int12 = 26605 as graphic;
                string0 = `${string1}<br><br>${script12474(int2)}`;
            } else if ((script12475(int2) == 1)) {
                int11 = dbrow_getfield(int8, 36992, 0);
                if ((int11 == -1 as graphic)) {
                    int11 = 21712 as graphic;
                };
                int12 = 26606 as graphic;
                string0 = `${string1}<br><br>You have completed this case!`;
            } else if ((int2 == varbitplayer_31220)) {
                int11 = dbrow_getfield(int8, 36976, 0);
                if ((int11 == -1 as graphic)) {
                    int11 = 16609 as graphic;
                };
                int12 = -1 as graphic;
                string0 = `${string1}<br><br>You are currently investigating this case.`;
            } else {
                int11 = dbrow_getfield(int8, 36992, 0);
                if ((int11 == -1 as graphic)) {
                    int11 = 21712 as graphic;
                };
                int12 = -1 as graphic;
                string0 = `${string1}<br><br>This case is available to be investigated.`;
            };
            int5 = IF_GETNEXTSUBID(int10);
            int4 = ((int5 / 6) * 60);
            int3 = (MODULO(int5, 6) * 60);
            CC_CREATE(int9, 5, IF_GETNEXTSUBID(int9));
            CC_SETSIZE(50, 50, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            CC_SETGRAPHIC(int11);
            CC_CREATE(int10, 4, int5);
            CC_SETSIZE(50, 50, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script12485, int8, int2));
            CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
            CC_CREATE(int9, 5, IF_GETNEXTSUBID(int9));
            CC_SETSIZE(50, 50, 0, 0);
            CC_SETPOSITION(int3, int4, 0, 0);
            if ((int2 == varbitplayer_31220)) {
                IF_SETHIDE(0, 115146776);
                IF_SETPOSITION(((script3365(int10) + int3) - 2), ((script3366(int10) + int4) - 2), 0, 0, 115146776);
            };
            CC_SETGRAPHIC(int12);
        };
        int0 = (int0 + 1);
    };
    if ((varbitplayer_31220 == 0)) {
        IF_SETHIDE(1, 115146776);
    };
    return;
}