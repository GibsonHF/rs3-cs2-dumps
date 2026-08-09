//
function script17044(int0: number): void {
    CC_DELETEALL(int0);
    DB_LISTALL(100);
    var int1 = dbrow_findnext();
    while ((int1 != -1)) {
        if ((((dbrow_getfield(int1, 409632, 0) != -1) && (dbrow_getfield(int1, 409744, 0) == int0)) && (script5759(int1) == 1))) {
            script17045(int1);
        };
        int1 = dbrow_findnext();
    };
    if ((int0 != comp(-1, 65535))) {
        IF_SETONVARTRANSMIT(callback(script17043, int0, 9433, 9434, 11334, 3), int0);
    };
    return;
}