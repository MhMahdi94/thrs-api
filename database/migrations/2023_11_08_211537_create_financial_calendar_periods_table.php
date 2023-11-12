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
        Schema::create('financial_calendar_periods', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('finance_calendar_id');
            $table->foreign('finance_calendar_id')
                ->references('id')
                ->on('financial_calendars')
                ->onDelete('cascade')
                ->onUpdate('cascade');
            $table->integer('number_of_days');
            $table->string('year_and_month');
            $table->integer('finance_year');
            $table->integer('month_id');
            $table->string('start_date');
            $table->string('end_date');
            $table->string('fingerprint _date');
            $table->integer('added_by');
            $table->integer('updated_by');
            $table->integer('company_id');
            $table->tinyInteger('status')->default(0);
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
        Schema::dropIfExists('financial_calendar_periods');
    }
};
