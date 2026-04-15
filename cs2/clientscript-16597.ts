//
function script16597(int0: int, int1: int): unknown_int {
    if ((((int0 * 1440) + int1) < ((varbitplayer_45757 * 1440) + varbitplayer_47418))) {
        if ((varbitplayer_37045 != 0)) {
            return 1;
        };
        script12478(`Player had trh179 modifier cache time-outs set but not the actual cache value. cached val:${inttostring(varbitplayer_37045, 10)},day:${inttostring(varbitplayer_45757, 10)},min:${inttostring(varbitplayer_47418, 10)}`);
    };
    return 0;
}