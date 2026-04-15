//
function script19129(int0: dbrow): void {
    stack(dbrow_getfield(int0, 1196080, 0));
    stack(82313230);
    IF_SETGRAPHIC();
    stack(int0);
    stack(1196096);
    stack(0);
    dbrow_getfield();
    stack(int0);
    stack(1196112);
    stack(0);
    dbrow_getfield();
    IF_SETSIZE(stack(), 0, 0, 82313230);
    stack(int0);
    stack(1196048);
    stack(0);
    dbrow_getfield();
    IF_SETTEXT(stack(), 82313232);
    stack(int0);
    stack(1196064);
    stack(0);
    dbrow_getfield();
    IF_SETTEXT(stack(), 82313231);
    script19130(82313229);
    return;
}