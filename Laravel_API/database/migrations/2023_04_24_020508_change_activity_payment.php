<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up()
    {
        // Change activity_payment column data type to string
        Schema::table('activities', function (Blueprint $table) {
            $table->string('activity_payment')->change();
        });
        
        // Add notification_type column to notification_contents table
        Schema::table('notification_contents', function (Blueprint $table) {
            $table->string('notification_type')->after('notify_state');
        });
    }

    public function down()
    {
        // Change activity_payment column data type back to integer
        Schema::table('activities', function (Blueprint $table) {
            $table->integer('activity_payment')->change();
        });

        // Remove notification_type column from notification_contents table
        Schema::table('notification_contents', function (Blueprint $table) {
            $table->dropColumn('notification_type');
        });
    }
};
