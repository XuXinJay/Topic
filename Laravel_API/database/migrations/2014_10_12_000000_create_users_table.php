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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('member_phone')->unique()->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('member_sex')->nullable();;
            $table->date('member_birth')->nullable();;
            $table->string('member_county')->nullable();;
            $table->text('member_preference')->nullable();
            $table->text('member_introduction')->nullable();
            $table->binary('member_avatar')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });

        Schema::create('activities', function (Blueprint $table) {
            $table->id('activity_id');
            $table->string('activity_type');
            $table->binary('activity_image')->nullable();
            $table->string('activity_name');
            $table->string('activity_place');
            $table->integer('activity_number');
            $table->dateTime('activity_partyTime');
            $table->dateTime('activity_deadline');
            $table->integer('activity_payment');
            $table->integer('activity_budget');
            $table->text('activity_board');
            $table->timestamps();
        });

        Schema::create('organize_activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('activity_id');
            $table->foreign('member_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('activity_id')->references('activity_id')->on('activities')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('join_activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('activity_id');
            $table->foreign('member_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('activity_id')->references('activity_id')->on('activities')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('favorite_activities', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('activity_id');
            $table->foreign('member_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('activity_id')->references('activity_id')->on('activities')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('notification_contents', function (Blueprint $table) {
            $table->id('notify_id');
            $table->string('notify_state');
            $table->timestamps();
        });

        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('notify_id');
            $table->foreign('member_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('notify_id')->references('notify_id')->on('notification_contents')->onDelete('cascade');
            $table->timestamps();
        });

        Schema::create('preference_types', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('member_id');
            $table->foreign('member_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('activity_type1')->nullable();
            $table->string('activity_type2')->nullable();
            $table->string('activity_type3')->nullable();
            $table->string('activity_type4')->nullable();
            $table->timestamps();
        });

        Schema::create('comments', function (Blueprint $table) {
            $table->id('comment_id');
            $table->unsignedBigInteger('member_id');
            $table->unsignedBigInteger('activity_id');
            $table->text('comment_content');
            $table->timestamp('comment_time')->useCurrent();
            $table->foreign('member_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('activity_id')->references('activity_id')->on('activities')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comments');
        Schema::dropIfExists('organize_activities');
        Schema::dropIfExists('join_activities');
        Schema::dropIfExists('favorite_activities');
        Schema::dropIfExists('notifications');
        Schema::dropIfExists('preference_types');
        Schema::dropIfExists('table');    
        Schema::dropIfExists('notification_contents');
        Schema::dropIfExists('activities');
        Schema::dropIfExists('users');
    }
};
