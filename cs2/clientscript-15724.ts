//
function script15724(): void {
    CC_DELETEALL(comp(828, 3));
    IF_SETHIDE(true, comp(891, 3));
    SHOP_REQUESTDATA();
    script9525(54263811, 3, -1);
    IF_SETONTIMER(callback(script15725), 54263811);
    script20623(4);
    return;
}