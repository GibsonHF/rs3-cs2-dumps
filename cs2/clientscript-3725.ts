//
function script3725(int0: number): number {
    if (((IF_HASSUBMODAL(script8074(), 1253) == 1) && (varplayer_8745 == 5606 as dbrow))) {
        return 0;
    };
    var int1 = -1;
    var int2 = -1;
    var int3 = -1;
    switch (varclient_6403) {
        case 5: {
            int1 = script3724(int0);
            stack(1474576);
            stack(int1);
            DB_FIND(0);
            int2 = dbrow_findnext();
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