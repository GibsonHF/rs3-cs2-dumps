//[proc,updatemodel]
function script1675(int0: int): void {
    if ((int0 == 0)) {
        IF_SETMODEL(enum_getvalue(0, 31, 839 as cs2enum, varbitplayer_5530), comp(84, 4));
    } else {
        IF_SETMODEL(enum_getvalue(0, 31, 838 as cs2enum, int0), comp(84, 4));
    };
    return;
}