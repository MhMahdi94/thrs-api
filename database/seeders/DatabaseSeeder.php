<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Attendence;
use App\Models\Company;
use App\Models\JobType;
use App\Models\Role;
use App\Models\Salary;
use Haruncpi\LaravelIdGenerator\IdGenerator;
use Illuminate\Database\Seeder;
use sirajcse\UniqueIdGenerator\UniqueIdGenerator;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(50)->create();
       // Company::factory(10)->create();
        Salary::factory(20)->create();
//        Attendence::factory(20)->create();
        Role::factory()->create([
            'role'=>'super'
        ]);
        \App\Models\User::factory()->count(2)->sequence([
            'name' => 'Super Admin',
            'email' => 'super@admin.com',
            'uid'=> UniqueIdGenerator::generate(['table' => 'users','length' => 16,'prefix' => date('ymd'), 'suffix' => '1',]),//IdGenerator::generate(['table' => 'users', 'field'=>'id','length' => 12, 'prefix' =>date('ymd')]),
            'role'=>'super',
            'status'=>true,
            'mobileNo'=>'0912345678'
        ],[
            'name' => 'Admin',
            'email' => 'admin@admin.com',
            'uid'=>UniqueIdGenerator::generate(['table' => 'users','length' => 16,'prefix' => date('ymd'), 'suffix' => '2',]),//IdGenerator::generate(['table' => 'users', 'length' => 12,'field'=>'id', 'prefix' =>date('ymd')]),
            'role'=>'admin',
            'status'=>false,
            'mobileNo'=>'0110102386'
        ],
        
        )->create();

        JobType::factory()
            ->count(4)
            ->sequence(
                ['name'=>'Full Time'],
                ['name'=>'Part Time'],
                ['name'=>'Hybrid'],
                ['name'=>'Remotly']
            )
            ->create();
    }
}
