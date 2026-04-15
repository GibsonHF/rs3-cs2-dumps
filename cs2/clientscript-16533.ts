//
function script16533(int0: obj, int1: int): void {
    var string0 = `Open ${inttostring(2, 10)} bonus eggs to receive:<br>`;
    if ((IF_FIND(comp(970, 28)) == 1)) {
        if ((int1 > 1)) {
            string0 = strconcat(string0, `${TOSTRING_LOCALISED(int1, 1)} x ${OC_NAME(int0)}`);
        } else {
            string0 = strconcat(string0, OC_NAME(int0));
        };
        script3537(string0);
    };
    return;
}