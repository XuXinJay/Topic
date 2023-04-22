<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPartyTypeIdToActivitiesTable extends Migration
{
    public function up()
    {
        Schema::table('activities', function (Blueprint $table) {
            $table->unsignedBigInteger('party_type_id');
            $table->foreign('party_type_id')->references('party_type_id')->on('party_type')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('activities', function (Blueprint $table) {
            $table->dropForeign(['party_type_id']);
            $table->dropColumn('party_type_id');
        });
    }
}
