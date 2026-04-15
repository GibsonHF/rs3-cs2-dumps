//
function script16787(int0: component, int1: dbrow): void {
    IF_SETOPBASE(`<col=FFFF00>${dbrow_getfield(int1, 503824, 0)}</col>`, int0);
    IF_SETOPCURSOR(1, 201 as cursor, int0);
    return;
}