<?php

namespace App\Livewire\Settings;

use Livewire\Component;
use Livewire\Attributes\Layout;

class Profile extends Component
{
    #[Layout('layouts.app')]
    public function render()
    {
        return view('livewire.settings.profile');
    }
}
