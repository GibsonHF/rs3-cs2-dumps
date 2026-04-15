//
function script20472(): unknown_int {
    var int0 = WORLDMAP_LISTELEMENT_START(1425408, 0, 4, 0);
    var int1 = CC_SETPARAM_STRING(int0, 1425408, 0, 1, 0);
    dbrow_findnext();
    stack(1425408);
    stack(0);
    dbrow_getfield();
    return stack();
}