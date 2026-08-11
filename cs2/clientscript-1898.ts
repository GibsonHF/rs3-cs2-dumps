//
function script1898(): void {
    IF_CLEARSCRIPTHOOKS(comp(1477, 37));  // toplevel_v2:worldmap_pinch_controls
    script14182(96796709);
    script8808();
    script675();
    script1306(0, 0);
    script7998();
    WORLDMAP_CLOSEMAP();
    IF_SETNOCLICKTHROUGH(1, struct_getparam(enum_getvalue(0, 73, 7716 as cs2enum, 1000), 3503));
    return;
}