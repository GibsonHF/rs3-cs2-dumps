//
function script6247(int0: number, int1: number): void {
    var int2 = ((int0 / 2) + MODULO(int0, 2));
    var int3 = ((int1 / 2) + MODULO(int1, 2));
    IF_SETSIZE(int2, 0, 0, 1, comp(1477, 33));  // toplevel_v2:fov_blocking_left
    IF_SETSIZE(int2, 0, 0, 1, comp(1477, 34));  // toplevel_v2:fov_blocking_right
    IF_SETSIZE(0, int3, 1, 0, comp(1477, 35));  // toplevel_v2:fov_blocking_top
    IF_SETSIZE(0, int3, 1, 0, comp(1477, 36));  // toplevel_v2:fov_blocking_bottom
    return;
}