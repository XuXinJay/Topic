<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTimestampsToCommentsTable extends Migration
{
    public function up()
    {
        // Drop the comment_time column
        Schema::table('comments', function (Blueprint $table) {
            $table->dropColumn('comment_time');
        });
        
        // Add timestamps columns
        Schema::table('comments', function (Blueprint $table) {
            $table->timestamps();
        });
    }

    public function down()
    {
        // Reverse the migration by dropping the timestamps columns and recreating the comment_time column
        Schema::table('comments', function (Blueprint $table) {
            $table->dropTimestamps();
            $table->timestamp('comment_time')->useCurrent();
        });
    }
}
