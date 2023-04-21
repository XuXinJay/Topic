<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('join_activities', function (Blueprint $table) {
            $table->string('join_state')->default('審核中')->after('activity_id');
        });

        Schema::dropIfExists('preference_types');

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('member_preference');
        });

        Schema::table('activities', function (Blueprint $table) {
            $table->dropColumn('activity_type');
        });

        Schema::create('party_type', function (Blueprint $table) {
            $table->id('party_type_id');
            $table->boolean('movie')->default(false);
            $table->boolean('board_game')->default(false);
            $table->boolean('dine_together')->default(false);
            $table->boolean('read')->default(false);
            $table->boolean('sports')->default(false);
            $table->boolean('shopping')->default(false);
            $table->boolean('painting')->default(false);
            $table->boolean('baking')->default(false);
            $table->boolean('cooking')->default(false);
            $table->boolean('music')->default(false);
            $table->boolean('picnic')->default(false);
            $table->boolean('yoga')->default(false);
            $table->boolean('flower_arrangement')->default(false);
            $table->boolean('pet')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('party_type');

    }
};
