//
function script1295(): void {
    IF_SETCOLOUR(16711680, comp(144, 134));  // hauntedmine_controls:hauntedmine_cart_start
    IF_SETONMOUSELEAVE(callback(script45, -2147483645, 16711680), comp(144, 134));  // hauntedmine_controls:hauntedmine_cart_start
    IF_SETHIDE(true, comp(144, 173));  // hauntedmine_controls:hauntedmine_cart0
    IF_SETMODEL(4910 as model, comp(144, 174));  // hauntedmine_controls:hauntedmine_cart1
    IF_SETMODELANIM(1453 as seq, comp(144, 174));  // hauntedmine_controls:hauntedmine_cart1
    return;
}