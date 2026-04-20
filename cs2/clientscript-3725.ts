//
function script3725(int0: component): unknown_int {
    if ((IF_HASSUBMODAL(script8074(), 1253 as interface) == 1)) {
        if ((varplayer_8745 == 5606 as dbrow)) {
            return 0;
        };
        if ((varplayer_8745 != -1 as dbrow)) {
            stack(varplayer_8745);
            stack(291008);
            stack(0);
            dbrow_getfield();
            if ((stack() != -1)) {
                return 0;
            };
        };
    };
    var int1 = comp(-1, 65535);
    var int2 = -1;
    var int3 = -1;
    switch (varclient_6403) {
        case 5: {
            int1 = script3724(int0);
            stack(1474576);
            stack(int1);
            DB_FIND(0);
            dbrow_findnext();
            int2 = stack();
            if ((int2 == -1)) {
                return 1;
            };
            break;
        }
        case 2: {
            int3 = script441(varbitplayer_18994);
            if (((dbrow_getfield(varplayer_8745, 290976, 0) != varbitplayer_18994) || (dbrow_getfield(varplayer_8745, 290992, 0) != int3))) {
                return 1;
            };
            break;
        }
    };
    return 0;
}