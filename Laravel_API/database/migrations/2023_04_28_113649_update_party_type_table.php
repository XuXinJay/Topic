<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdatePartyTypeTable extends Migration
{
    public function up()
    {
        Schema::table('party_type', function (Blueprint $table) {
            $table->dropColumn(['baking', 'yoga', 'flower_arrangement', 'pet']);
            $table->boolean('bodycraft')->default(false)->after('painting');
            $table->boolean('travel')->default(false)->after('painting');
            $table->boolean('bar')->default(false)->after('painting');
            $table->boolean('party')->default(false)->after('painting');
        });
    }

    public function down()
    {
        Schema::table('party_type', function (Blueprint $table) {
            $table->boolean('baking')->default(false);
            $table->boolean('yoga')->default(false);
            $table->boolean('flower_arrangement')->default(false);
            $table->boolean('pet')->default(false);
            $table->dropColumn(['bodycraft', 'travel', 'bar', 'party']);
        });
    }
}
