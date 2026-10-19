//
function script21185(): void {
    if (((varclient_8502 + 250) > CLIENTCLOCK())) {
        return;
    };
    IF_SETONTIMER(callback(), comp(1586, 2));  // plugin_hub_parent_manage:main
    stack(callback());
    stack(103940098);
    unk11872();
    IF_SETHIDE(false, comp(1586, 5));  // plugin_hub_parent_manage:sort
    stack(int0);
    stack(int1);
    stack(int2);
    stack("Plugin details can not be loaded at this time. Please try again later.");
    script21189();
    return;
}