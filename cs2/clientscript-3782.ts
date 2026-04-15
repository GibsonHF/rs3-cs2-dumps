//
function script3782(int0: component): void {
    var int1 = script3609();
    if ((int1 == -1 as dbrow)) {
        return;
    };
    var int2 = 0;
    var int3 = 0;
    [int2, int3] = dbrow_getfield(int1, 299040, 0);
    IF_SETTEXT(`${inttostring(((int3 - varplayer_3079) + 1), 10)} days`, int0);
    return;
}