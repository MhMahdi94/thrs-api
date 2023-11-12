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
        Schema::create('financial_calendars', function (Blueprint $table) {
            $table->id();
            $table->integer('finance_year');
            $table->integer('company_id');
            $table->string('start_date');
            $table->string('end_date');
            $table->tinyInteger('status')->default(0);
            $table->integer('added_by');
            $table->integer('updated_by');
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
        Schema::dropIfExists('financial_calendars');
    }
};
