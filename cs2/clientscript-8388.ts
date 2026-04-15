//
function script8388(int0: int): void {
    var int1 = script10405(int0);
    IF_SENDTOFRONT(struct_getparam(int1, 3503));
    if ((struct_getparam(int1, 3498) == -1 as struct)) {
        return;
    };
    IF_SENDTOBACK(struct_getparam(int1, 3503));
    return;
}