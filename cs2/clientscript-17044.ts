//
function script17044(int0: component): void {
    CC_DELETEALL(int0);
    DB_LISTALL(100);
    dbrow_findnext();
    var int1 = stack();
    while ((int1 != -1 as dbrow)) {
        if ((((dbrow_getfield(int1, 409632, 0) != -1) && (dbrow_getfield(int1, 409744, 0) == int0)) && (script5759(int1) == 1))) {
            script17045(int1);
        };
        dbrow_findnext();
        int1 = stack();
    };
    if ((int0 != comp(-1, 65535))) {
        IF_SETONVARTRANSMIT(callback(script17043, int0, 9433, 9434, 11334, 3), int0);
    };
    return;
}