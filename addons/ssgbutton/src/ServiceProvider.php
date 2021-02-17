<?php

namespace uscreen\ssgbutton;

use Statamic\Providers\AddonServiceProvider;

class ServiceProvider extends AddonServiceProvider
{
     public $events = [
        'cp.nav.created' => 'addNavItems'
    ];

    public function addNavItems($nav)
    {
        // Create the first level navigation item
        // Note: by using route('store'), it assumes you've set up a route named 'store'.
        $store = Nav::item('Store')->route('store')->icon('shopping-cart');

        // Add second level navigation items to it
        $store->add(function ($item) {
            $item->add(Nav::item('Products')->route('store.products'));
            $item->add(Nav::item('Orders')->route('store.orders'));
        });

        // Finally, add our first level navigation item
        // to the navigation under the 'tools' section.
        $nav->addTo('tools', $store);
    }
}
