//
function script7543(): void {
    CC_DELETEALL(comp(906, 31));
    CC_DELETEALL(comp(906, 32));
    CC_DELETEALL(comp(906, 33));
    CC_DELETEALL(comp(906, 34));
    CC_DELETEALL(comp(906, 35));
    CC_DELETEALL(comp(906, 36));
    IF_CLEARSCRIPTHOOKS(comp(906, 31));
    IF_CLEARSCRIPTHOOKS(comp(906, 32));
    IF_CLEARSCRIPTHOOKS(comp(906, 33));
    IF_CLEARSCRIPTHOOKS(comp(906, 34));
    IF_CLEARSCRIPTHOOKS(comp(906, 35));
    IF_CLEARSCRIPTHOOKS(comp(906, 36));
    IF_SETONOP(callback(script3059, 0), comp(906, 31));
    IF_SETONOP(callback(script3059, 1), 59375648);
    IF_SETONOP(callback(script3059, 2), 59375649);
    IF_SETONOP(callback(script3059, 3), 59375650);
    IF_SETONOP(callback(script3059, 4), 59375651);
    IF_SETONOP(callback(script3059, 5), 59375652);
    return;
}