//
function script994(int0: struct, int1: component): void {
    var int2 = struct_getparam(int0, 7437);
    IF_SETOBJECT(int2, 1, int1);
    IF_SETMODELANGLE(struct_getparam(int0, 7441), struct_getparam(int0, 7442), struct_getparam(int0, 7443), struct_getparam(int0, 7444), struct_getparam(int0, 7445), struct_getparam(int0, 7446), int1);
    return;
}