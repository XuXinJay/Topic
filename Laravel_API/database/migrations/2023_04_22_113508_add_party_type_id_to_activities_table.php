<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPartyTypeIdToActivitiesTable extends Migration
{
    public function up()
    {
        Schema::table('party_type', function (Blueprint $table) {
            $table->unsignedBigInteger('activity_id');
            $table->foreign('activity_id')->references('activity_id')->on('activities')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('party_type', function (Blueprint $table) {
            $table->dropForeign(['activity_id']);
            $table->dropColumn('activity_id');
        });
    }
}
