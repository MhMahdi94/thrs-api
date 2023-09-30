<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('owner');
            $table->string('email');
            $table->string('description');
            $table->integer('noOfDept');
            $table->integer('noOfEmployee');
            $table->boolean('isActive')->default(false);
            $table->dateTime('subscriptionStart');
            $table->dateTime('subscriptionEnd');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
};
