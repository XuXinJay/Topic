<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // $this->app->bind(\Fruitcake\Cors\CorsService::class, function ($app) {
        //     return new \Fruitcake\Cors\CorsService([
        //         'allowedOrigins' => ['*'],
        //         'allowedMethods' => ['*'],
        //         'allowedHeaders' => ['*'],
        //     ]);
        // });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
